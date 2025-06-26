/** ABBA => ABA */
const filterDuplicates = (array) => array.reduce((agg, val) => (agg[agg.length - 1] == val ? agg : [...agg, val]), []);

/** [a:1 a:1 b a:1 a:2] => "a b a a" */
export const catToString = (array) =>
    filterDuplicates(array)
        .map((item) => item.split(":")[0])
        .join(" ");
