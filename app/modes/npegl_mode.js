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
npegl.e_features_degrval = {label: "e_features_degrval", isStructAttr: false, order: 20};
npegl.e_features_declval = {label: "e_features_declval", isStructAttr: false, order: 20};
npegl.e_features_nounsem = {label: "e_features_nounsem", isStructAttr: false, order: 20};
npegl.e_features_genprole = {label: "e_features_genprole", isStructAttr: false, order: 20};
npegl.e_features_decl = {label: "e_features_decl", isStructAttr: false, order: 20};
npegl.e_features_degr = {label: "e_features_degr", isStructAttr: false, order: 20};
npegl.e_features_adjsem = {label: "e_features_adjsem", isStructAttr: false, order: 20};
npegl.e_tags_nounsuffval = {label: "e_tags_nounsuffval", isStructAttr: false, order: 20};
npegl.e_tags_nounlessval = {label: "e_tags_nounlessval", isStructAttr: false, order: 20};
npegl.e_tags_noundrvval = {label: "e_tags_noundrvval", isStructAttr: false, order: 20};
npegl.e_indices_ismoddedidx = {label: "e_indices_ismoddedidx", isStructAttr: false, order: 30};
npegl.e_indices_modsidx = {label: "e_indices_modsidx", isStructAttr: false, order: 40};
npegl.e_lemma = {label: "lemma", isStructAttr: false, order: 50};
npegl.e_n = {label: "e_n", isStructAttr: false, order: 50};
npegl.e_tags_defval = {label: "e_tags_defval", isStructAttr: false, order: 60};

npegl.np_order = {label: "np_order", isStructAttr: false, order: 110};
npegl.np_language = {label: "np_language", isStructAttr: false, order: 110};
npegl.np_number = {label: "np_number", isStructAttr: false, order: 110};
npegl.np_case = {label: "np_case", isStructAttr: false, order: 110};
npegl.np_grammatical_function = {label: "np_grammatical_function", isStructAttr: false, order: 120};
npegl.np_gender = {label: "gender", isStructAttr: false, order: 130, extendedComponent: "structServiceSelect"};
npegl.np_referential_status = {label: "np_referential_status", isStructAttr: false, order: 140};
npegl.np_comments = {label: "commentaries", isStructAttr: false, order: 150};
npegl.np_annotation_time = {label: "np_annotation_time", isStructAttr: false, order: 160};
npegl.np_annotator = {label: "np_annotator", isStructAttr: false, order: 170};
npegl.np_degree_of_interest = {label: "np_degree_of_interest", isStructAttr: false, order: 180, extendedComponent: "structServiceSelect"};
npegl.np_corpus_unit_id = {label: "np_corpus_unit_id", isStructAttr: false, order: 190};
npegl.np_db_item_id = {label: "id", isStructAttr: false, order: 200};
npegl.np_verified = {label: "np_verified", isStructAttr: false, order: 110};

settings.corpora["npegl-eng"] = {
    id: "npegl-eng",
    title: "NPEGL: Old English",
    description: "",
    limitedAccess: true,
    within: textWithin,
    context: textContext,
    attributes: {
        e_cat: npegl.e_cat,
        e_n: npegl.e_n,
        e_tags_defval: npegl.e_tags_defval,
        e_features_degrval: npegl.e_features_degrval,
        e_indices_ismoddedidx: npegl.e_indices_ismoddedidx,
        e_indices_modsidx: npegl.e_indices_modsidx,
        e_lemma: npegl.e_lemma,
        np_annotation_time: npegl.np_annotation_time,
        np_annotator: npegl.np_annotator,
        np_case: npegl.np_case,
        np_corpus_unit_id: npegl.np_corpus_unit_id,
        np_db_item_id: npegl.np_db_item_id,
        np_degree_of_interest: npegl.np_degree_of_interest,
        np_gender: npegl.np_gender,
        np_grammatical_function: npegl.np_grammatical_function,
        np_language: npegl.np_language,
        np_number: npegl.np_number,
        np_referential_status: npegl.np_referential_status,
        np_verified: npegl.np_verified,
        np_comments: npegl.np_comments,
        np_order: npegl.np_order
    },
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
    attributes: {
        e_cat: npegl.e_cat,
        e_n: npegl.e_n,
        e_tags_defval: npegl.e_tags_defval,
        e_features_adjsem: npegl.e_features_adjsem,
        e_features_decl: npegl.e_features_decl,
        e_features_degr: npegl.e_features_degr,
        e_features_nounsem: npegl.e_features_nounsem,
        np_annotation_time: npegl.np_annotation_time,
        np_annotator: npegl.np_annotator,
        np_case: npegl.np_case,
        np_corpus_unit_id: npegl.np_corpus_unit_id,
        np_db_item_id: npegl.np_db_item_id,
        np_degree_of_interest: npegl.np_degree_of_interest,
        np_gender: npegl.np_gender,
        np_grammatical_function: npegl.np_grammatical_function,
        np_language: npegl.np_language,
        np_number: npegl.np_number,
        np_referential_status: npegl.np_referential_status,
        np_verified: npegl.np_verified,
        np_comments: npegl.np_comments,
        np_order: npegl.np_order
    },
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
    attributes: {
        e_cat: npegl.e_cat,
        e_n: npegl.e_n,
        e_tags_defval: npegl.e_tags_defval,
        e_features_adjsem: npegl.e_features_adjsem,
        e_features_decl: npegl.e_features_decl,
        e_features_degr: npegl.e_features_degr,
        e_features_nounsem: npegl.e_features_nounsem,
        e_features_declval: npegl.e_features_declval,
        e_features_degrval: npegl.e_features_degrval,
        e_indices_ismoddedidx: npegl.e_indices_ismoddedidx,
        e_indices_modsidx: npegl.e_indices_modsidx,
        e_lemma: npegl.e_lemma,
        e_tags_nounlessval: npegl.e_tags_nounlessval,
        np_annotation_time: npegl.np_annotation_time,
        np_annotator: npegl.np_annotator,
        np_case: npegl.np_case,
        np_corpus_unit_id: npegl.np_corpus_unit_id,
        np_db_item_id: npegl.np_db_item_id,
        np_degree_of_interest: npegl.np_degree_of_interest,
        np_gender: npegl.np_gender,
        np_grammatical_function: npegl.np_grammatical_function,
        np_language: npegl.np_language,
        np_number: npegl.np_number,
        np_referential_status: npegl.np_referential_status,
        np_verified: npegl.np_verified,
        np_comments: npegl.np_comments,
        np_order: npegl.np_order
    },
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
    attributes: {
        e_cat: npegl.e_cat,
        e_n: npegl.e_n,
        e_tags_defval: npegl.e_tags_defval,
        np_annotation_time: npegl.np_annotation_time,
        np_annotator: npegl.np_annotator,
        np_case: npegl.np_case,
        np_corpus_unit_id: npegl.np_corpus_unit_id,
        np_db_item_id: npegl.np_db_item_id,
        np_degree_of_interest: npegl.np_degree_of_interest,
        np_gender: npegl.np_gender,
        np_grammatical_function: npegl.np_grammatical_function,
        np_language: npegl.np_language,
        np_number: npegl.np_number,
        np_referential_status: npegl.np_referential_status,
        np_verified: npegl.np_verified,
        np_comments: npegl.np_comments,
        np_order: npegl.np_order,
        e_features_adjsem: npegl.e_features_adjsem,
        e_features_decl: npegl.e_features_decl,
        e_features_degr: npegl.e_features_degr,
        e_features_nounsem: npegl.e_features_nounsem,
        e_features_degrval: npegl.e_features_degrval,
        e_indices_ismoddedidx: npegl.e_indices_ismoddedidx,
        e_indices_modsidx: npegl.e_indices_modsidx,
        e_lemma: npegl.e_lemma,
        e_tags_nounlessval: npegl.e_tags_nounlessval,
        e_features_genprole: npegl.e_features_genprole,
        e_tags_noundrvval: npegl.e_tags_noundrvval,
        e_tags_nounsuffval: npegl.e_tags_nounsuffval
    },
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
    attributes: {
        e_cat: npegl.e_cat,
        e_n: npegl.e_n,
        e_tags_defval: npegl.e_tags_defval,
        e_features_adjsem: npegl.e_features_adjsem,
        e_features_decl: npegl.e_features_decl,
        e_features_degr: npegl.e_features_degr,
        e_features_nounsem: npegl.e_features_nounsem,
        e_features_degrval: npegl.e_features_degrval,
        e_indices_ismoddedidx: npegl.e_indices_ismoddedidx,
        e_indices_modsidx: npegl.e_indices_modsidx,
        e_lemma: npegl.e_lemma,
        e_features_genprole: npegl.e_features_genprole,
        np_annotation_time: npegl.np_annotation_time,
        np_annotator: npegl.np_annotator,
        np_case: npegl.np_case,
        np_corpus_unit_id: npegl.np_corpus_unit_id,
        np_db_item_id: npegl.np_db_item_id,
        np_degree_of_interest: npegl.np_degree_of_interest,
        np_gender: npegl.np_gender,
        np_grammatical_function: npegl.np_grammatical_function,
        np_language: npegl.np_language,
        np_number: npegl.np_number,
        np_referential_status: npegl.np_referential_status,
        np_verified: npegl.np_verified,
        np_comments: npegl.np_comments,
        np_order: npegl.np_order
    },
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
    attributes: {
        e_cat: npegl.e_cat,
        e_n: npegl.e_n,
        e_tags_defval: npegl.e_tags_defval,
        e_features_adjsem: npegl.e_features_adjsem,
        e_features_decl: npegl.e_features_decl,
        e_features_degr: npegl.e_features_degr,
        e_features_nounsem: npegl.e_features_nounsem,
        e_features_degrval: npegl.e_features_degrval,
        e_indices_ismoddedidx: npegl.e_indices_ismoddedidx,
        e_indices_modsidx: npegl.e_indices_modsidx,
        e_features_genprole: npegl.e_features_genprole,
        e_features_declval: npegl.e_features_declval,
        e_tags_noundrvval: npegl.e_tags_noundrvval,
        e_tags_nounlessval: npegl.e_tags_nounlessval,
        e_tags_nounsuffval: npegl.e_tags_nounsuffval,
        np_annotation_time: npegl.np_annotation_time,
        np_annotator: npegl.np_annotator,
        np_case: npegl.np_case,
        np_corpus_unit_id: npegl.np_corpus_unit_id,
        np_db_item_id: npegl.np_db_item_id,
        np_degree_of_interest: npegl.np_degree_of_interest,
        np_gender: npegl.np_gender,
        np_grammatical_function: npegl.np_grammatical_function,
        np_language: npegl.np_language,
        np_number: npegl.np_number,
        np_referential_status: npegl.np_referential_status,
        np_verified: npegl.np_verified,
        np_comments: npegl.np_comments,
        np_order: npegl.np_order
    },
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
    // values = values.reverse()
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
        // if(group.length == 1) {
        //     groups.push(group[0].split(":")[0])
        // } else {
        //     groups.push(group.map((item) => item.split(":")[0]).join(" ") )
        // }
    }
    return groups
}


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
                    // console.log("agg, row", agg, row)
                    // if(!agg) return row
                    // let added = {}
                    let corporaKeys = settings.corpusListing.getSelectedCorpora().map((key) => key.toUpperCase() + "_value")
                    agg.total_value = add(agg.total_value || [0,0], row.total_value)
                    for(let key of corporaKeys) {
                        agg[key] = add(agg[key] || [0,0], row[key] || [0,0])
                    }
                    // added.statsValues = cat.split(" ").map(item => ({e_cat: [item + ":.*"]}))
                    // console.log("agg.statsValues", agg.statsValues)
                    agg.statsValues.push(row.statsValues)

                    // added.statsValues = {e_cat: [...agg.statsValues.map(item => item.e_cat), ...row.statsValues.map(item => item.e_cat)]}
                    // for(let i in agg.statsValues) {
                        // added.statsValues.e_cat.push()
                        // added.statsValues[i] = {e_cat: [...agg.statsValues[i].e_cat, ...row.statsValues[i].e_cat]}
                    // }
                    agg.isPhraseLevelDisjunction = true
                    for(let [k, v] of Object.entries(row)) {
                        if(!agg[k]) agg[k] = v
                    }
                    return agg
                }, {statsValues: []}))

                if(group.length > 1 && cat == "Md.Aj") {
                    console.log("group", cat, group, output[output.length - 1])
                }
            }

            result[0] = output
            console.log("output", output)
            return result
        })
        return def
    }
}

