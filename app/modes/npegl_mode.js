import { catToString } from 'custom/npegl.js'

// We've got to extend the stats data postprocessing with some custom merging of stats table rows. 
settings.stats_rewrite = (result) => {
    let [data, columns, searchParams] = result
    let groups = _.groupBy(data.slice(1), (row) => {
        let str = ""
        for (const attr of searchParams.reduceVals) {
            if (attr === "e_cat") {
                str += catToString(row.e_cat)
            } else {
                str += row[attr].join('')
            }
        }
        return str
    })
    let add = (arr1, arr2) => [arr1[0] + arr2[0], arr1[1] + arr2[1]]
    let output = [data[0]]
    for(let [cat, group] of Object.entries(groups)) {
        output.push(group.reduce((agg, row) => {
            let corporaKeys = settings.corpusListing.getSelectedCorpora().map((key) => key.toUpperCase() + "_value")
            agg.total_value = add(agg.total_value || [0,0], row.total_value)
            for(let key of corporaKeys) {
                agg[key] = add(agg[key] || [0,0], row[key] || [0,0])
            }
            agg.statsValues.push(row.statsValues)

            // we have to let Korp know that the cqp expression we need to create
            // is like [] | [] | [], which Korp doesn't have a natural way to handle. 
            agg.isPhraseLevelDisjunction = true
            for(let [k, v] of Object.entries(row)) {
                if(!agg[k]) agg[k] = v
            }
            return agg
        }, {statsValues: []}))

    }

    result[0] = output
    return result
}