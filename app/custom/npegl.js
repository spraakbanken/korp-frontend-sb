function filterDuplicates(array) {
    return array.reduce((agg, val) => {
        if(agg[agg.length-1] == val) return agg
        agg.push(val)
    return agg
    }, [])
}

export function catToString (array) {
    return filterDuplicates(array).map((item) => item.split(":")[0]).join(" ")
}