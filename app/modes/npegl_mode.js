settings.autocomplete = false;
settings.wordpicture = false;
settings.newMapEnabled = false;
settings.enableMap = false;

settings.corpora = {};
settings.corporafolders = {};

var textContext = {
    "1 text": "1 text"
};
var textWithin = {
    "text": "text",
    "np": "np"
};

npegl = {};
npegl.e_cat = {
    label: "e_cat", 
    isStructAttr: false, 
    order: 10, 
    stats_stringify(values) {
        return catToString(values)
    }, 
    stats_cqp(tokens) {

        // return `e_cat="${tokens.join(" | ")}"`
        return "(" + tokens.map(item => `_.e_cat="${item}"`).join(" | ") + ")"

    }
};

npegl.e_features_adjsem = {label: "e_features_adjsem", isStructAttr: true, order: 10};
npegl.e_features_decl = {label: "e_features_decl", isStructAttr: true, order: 10};
npegl.e_features_degr = {label: "e_features_degr", isStructAttr: true, order: 10};
npegl.e_features_genprole = {label: "e_features_genprole", isStructAttr: true, order: 10};
npegl.e_features_nounsem = {label: "e_features_nounsem", isStructAttr: true, order: 10};
npegl.e_indices_ismoddedidx = {label: "e_indices_ismoddedidx", isStructAttr: true, order: 10};
npegl.e_indices_modsidx = {label: "e_indices_modsidx", isStructAttr: true, order: 10};
npegl.e_tags_anim = {label: "e_tags_anim", isStructAttr: true, order: 10};
npegl.e_tags_def = {label: "e_tags_def", isStructAttr: true, order: 10};
npegl.e_tags_noundrv = {label: "e_tags_noundrv", isStructAttr: true, order: 10};
npegl.e_tags_nounless = {label: "e_tags_nounless", isStructAttr: true, order: 10};
npegl.e_tags_nounsuff = {label: "e_tags_nounsuff", isStructAttr: true, order: 10};
npegl.e_tags_relnoun = {label: "e_tags_relnoun", isStructAttr: true, order: 10};
npegl.np_annotation_time = {label: "np_annotation_time", isStructAttr: true, order: 10};
npegl.np_annotator = {label: "np_annotator", isStructAttr: true, order: 10};
npegl.np_case = {label: "np_case", isStructAttr: true, order: 10};
npegl.np_comments = {label: "np_comments", isStructAttr: true, order: 10};
npegl.np_corpus_unit_id = {label: "np_corpus_unit_id", isStructAttr: true, order: 10};
npegl.np_db_item_id = {label: "np_db_item_id", isStructAttr: true, order: 10};
npegl.np_degree_of_interest = {label: "np_degree_of_interest", isStructAttr: true, order: 10, extendedComponent: "structServiceSelect"};
npegl.np_gender = {label: "np_gender", isStructAttr: true, order: 10, extendedComponent: "structServiceSelect"};
npegl.np_grammatical_function = {label: "np_grammatical_function", isStructAttr: true, order: 10};
npegl.np_language = {label: "np_language", isStructAttr: true, order: 10};
npegl.np_lastmodified = {label: "np_lastmodified", isStructAttr: true, order: 10};
npegl.np_lastmodifiedby = {label: "np_lastmodifiedby", isStructAttr: true, order: 10};
npegl.np_lexiconname = {label: "np_lexiconname", isStructAttr: true, order: 10};
npegl.np_lexiconorder = {label: "np_lexiconorder", isStructAttr: true, order: 10};
npegl.np_number = {label: "np_number", isStructAttr: true, order: 10};
npegl.np_verified = {label: "np_verified", isStructAttr: true, order: 10};

var npegl_attributes = {
    e_cat: npegl.e_cat,
    e_features_adjsem: npegl.e_features_adjsem,
    e_features_decl: npegl.e_features_decl,
    e_features_degr: npegl.e_features_degr,
    e_features_genprole: npegl.e_features_genprole,
    e_features_nounsem: npegl.e_features_nounsem,
    e_indices_ismoddedidx: npegl.e_indices_ismoddedidx,
    e_indices_modsidx: npegl.e_indices_modsidx,
    e_tags_anim: npegl.e_tags_anim,
    e_tags_def: npegl.e_tags_def,
    e_tags_noundrv: npegl.e_tags_noundrv,
    e_tags_nounless: npegl.e_tags_nounless,
    e_tags_nounsuff: npegl.e_tags_nounsuff,
    e_tags_relnoun: npegl.e_tags_relnoun,
    np_annotation_time: npegl.np_annotation_time,
    np_annotator: npegl.np_annotator,
    np_case: npegl.np_case,
    np_comments: npegl.np_comments,
    np_corpus_unit_id: npegl.np_corpus_unit_id,
    np_db_item_id: npegl.np_db_item_id,
    np_degree_of_interest: npegl.np_degree_of_interest,
    np_gender: npegl.np_gender,
    np_grammatical_function: npegl.np_grammatical_function,
    np_language: npegl.np_language,
    np_lastmodified: npegl.np_lastmodified,
    np_lastmodifiedby: npegl.np_lastmodifiedby,
    np_lexiconname: npegl.np_lexiconname,
    np_lexiconorder: npegl.np_lexiconorder,
    np_number: npegl.np_number,
    np_verified: npegl.np_verified
};


settings.corpora["npegl-eng"] = {
    id: "npegl-eng",
    title: "NPEGL: Old English",
    description: "",
    limitedAccess: true,
    within: textWithin,
    context: textContext,
    attributes: npegl_attributes,
    structAttributes: {
    }
};

settings.corpora["npegl-ger"] = {
    id: "npegl-ger",
    title: "NPEGL: Old High German",
    description: "",
    limitedAccess: true,
    within: textWithin,
    context: textContext,
    attributes: npegl_attributes,
    structAttributes: {
    }
};

settings.corpora["npegl-got"] = {
    id: "npegl-got",
    title: "NPEGL: Gothic",
    description: "",
    limitedAccess: true,
    within: textWithin,
    context: textContext,
    attributes: npegl_attributes,
    structAttributes: {
    }
};

settings.corpora["npegl-ice"] = {
    id: "npegl-ice",
    title: "NPEGL: Old Icelandic",
    description: "",
    limitedAccess: true,
    within: textWithin,
    context: textContext,
    attributes: npegl_attributes,
    structAttributes: {
    }
};

settings.corpora["npegl-sax"] = {
    id: "npegl-sax",
    title: "NPEGL: Old Saxon",
    description: "",
    limitedAccess: true,
    within: textWithin,
    context: textContext,
    attributes: npegl_attributes,
    structAttributes: {
    }
};

settings.corpora["npegl-swe"] = {
    id: "npegl-swe",
    title: "NPEGL: Old Swedish",
    description: "",
    limitedAccess: true,
    within: textWithin,
    context: textContext,
    attributes: npegl_attributes,
    structAttributes: {
    }
};

settings.corpusListing = new CorpusListing(settings.corpora);



function filterDuplicates(array) {
    return array.reduce((agg, val) => {
        if(agg[agg.length-1] == val) return agg
        agg.push(val)
    return agg
    }, [])
}

function catToString(array) {
    return filterDuplicates(array).map((item) => item.split(":")[0]).join(" ")
}

function collapseCat(values) {
    values = Array.from(values)
    let groups = []
    let take = (allOfVal, fromArray) => {
        let output = []
        while(fromArray.length && fromArray[0] === allOfVal) {
            output = output.concat(fromArray.splice(0, 1))
        }
        return output
    }

    while(values.length) {
        let group = take(values[0], values)
        groups.push(group[0].split(":")[0])
    }
    return groups
}


// We've got to extend the stats data postprocessing with some custom merging of stats table rows. 
model.StatsProxy = class NpeglStatsProxy extends model.StatsProxy {
    makeRequest(cqp, callback) {
        let def = super.makeRequest(cqp, callback)
        def.then( (result) => {
            let [data, columns, searchParams] = result
            if(searchParams.reduceVals.length < 1 || searchParams.reduceVals[0] != "e_cat") return result
            let groups = _.groupBy(data.slice(1), (row) => catToString(row.e_cat))
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
        })
        return def
    }
}

