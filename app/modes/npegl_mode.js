import statsProxyFactory, { StatsProxy } from "@/backend/stats-proxy";
import { catToString } from "custom/npegl.js";

class NpeglStatsProxy extends StatsProxy {
    async makeRequest(cqp, callback) {
        const { rows, columns, params } = await super.makeRequest(cqp, callback);

        // Group rows that have the same representation of the e_cat attribute (e.g. [a:1 a:1] == [a:1])
        // Skip the totals row
        const groups = _.groupBy(rows.slice(1), (row) => {
            const values = swapLevels(row.statsValues);
            const repr = (attr) => (attr == "e_cat" ? catToString(values[attr].flat()) : values[attr].flat().join(" "));
            return params.reduceVals.map(repr).join("/");
        });

        // Merge the rows in each group
        const output = Object.values(groups).map((group) =>
            group.reduce(
                (agg, row) => {
                    // Sum up frequencies
                    agg.total = add(agg.total, row.total);
                    for (const corpusId in row.count) {
                        agg.count[corpusId] = add(agg.count[corpusId] || [0, 0], row.count[corpusId]);
                    }

                    // we have to let Korp know that the cqp expression we need to create
                    // is like [] | [] | [], which Korp doesn't have a natural way to handle.
                    agg.isPhraseLevelDisjunction = true;
                    // Usually a Record[], but for NPEGL a Record[][] to enable phrase-level disjunction.
                    agg.statsValues.push(row.statsValues);

                    // Include other things from row that are not yet in agg (rowId, formattedValue?)
                    return { ...row, ...agg };
                },
                { total: [0, 0], count: {}, statsValues: [] }
            )
        );

        // Add total row on top.
        output.unshift(rows[0]);

        return { rows: output, columns, params };
    }
}

statsProxyFactory.setClass(NpeglStatsProxy);

/** Sum the abs/rel frequencies of two cells */
const add = (arr1, arr2) => [arr1[0] + arr2[0], arr1[1] + arr2[1]];

/** Swap the levels of a record/list of records/lists (r[a][b] is now in r[b][a]). */
function swapLevels(obj) {
    var newObj;
    for (const key1 in obj) {
        for (const key2 in obj[key1]) {
            newObj ??= Array.isArray(obj[key1]) ? [] : {};
            newObj[key2] ??= Array.isArray(obj) ? [] : {};
            newObj[key2][key1] = obj[key1][key2];
        }
    }
    return newObj;
}
