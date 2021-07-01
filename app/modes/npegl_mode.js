settings.autocomplete = false;
settings.wordpicture = false;
settings.newMapEnabled = false;

settings.corpora = {};
settings.corporafolders = {};

var textContext = {
    "1 text": "1 text"
};
var textWithin = {
    "text": "text",
    "np": "np",
    "e": "e",
};

npegl = {};

npegl.np_language = {label: "language", isStructAttr: true, order: 10};
npegl.np_db_item_id = {label: "db item id", isStructAttr: true, order: 20};
npegl.np_corpus_unit_id = {label: "corpus unit id", isStructAttr: true, order: 30};

npegl.np_gender = {label: "gender", isStructAttr: true, order: 40, extendedComponent: "structServiceSelect"};
npegl.np_number = {label: "number", isStructAttr: true, order: 50, extendedComponent: "structServiceSelect"};
npegl.np_case = {label: "case", isStructAttr: true, order: 60, extendedComponent: "structServiceSelect"};
npegl.np_grammatical_function = {label: "grammatical function", isStructAttr: true, order: 70, extendedComponent: "structServiceSelect"};

npegl.e_cat = {
    label: "category",
    isStructAttr: true,
    groupBy: "group_by",
    order: 80,
    stats_stringify(values) {
        return catToString(values)
    }, 
    stats_cqp(tokens) {

        // return `e_cat="${tokens.join(" | ")}"`
        return "(" + tokens.map(item => `_.e_cat="${item}"`).join(" | ") + ")"
    },
    extendedController: [
        "$scope", function($scope) {
            const labels = [
                "Noun (N)",
                "Common noun (N.C)",
                "Proper noun (N.P)",
                "Nordic \"hinn\" (H)",
                "Personal pronoun (Per)",
                "Demonstrative pronoun (Dem)",
                "Possesive pronoun (Poss)",
                "(Strong) Quantifier (Q)",
                "Modifier (Md)",
                "Positional predicate (Md.Pos)",
                "Numeral or weak quantifier (Md.Nu/WQ)",
                "Cardinal numeral (Md.Nu/WQ.Nu)",
                "Weak quantifier (Md.Nu/WQ.WQ)",
                "Adjective (Md.Aj)",
                "Functional adjective (Md.Aj.Fn)",
                "Ordinal numeral (Md.Aj.Fn.Ord)",
                "Defective adjective (Md.Aj.Fn.Df)",
                "Determiner-like adjective (Md.Aj.Fn.Dt)",
                "Lexical adjective (Md.Aj.Lx)",
                "Past participle (Md.Aj.Lx.Pst)",
                "Present participle (Md.Aj.Lx.Pre)",
                "Other derived adjective (Md.Aj.Lx.Der)",
                "Prototypical adjective (Md.Aj.Lx.Pro)",
                "IXP (IXP)",
                "Adjectival associate (Assoc)",
                "Genitival phrase (GenP)",
                "Prepositional phrase (PP)",
                "Apposition (App)",
                "Relative clause (RC)",
                "Complement clause (CC)",
                "Finite complement clause (CC.Fi)",
                "Non-finite complement clause (CC.Nf)",
                "Adverbial (Adv)",
                "Modifier of modifier (Mdmd)",
                "Complement of modifier (Mdcm)",
                "Nominal complement of modifier (Mdcm.N)",
                "Prepositional complement of modifier (Mdcm.P)",
                "Complement of degree element (Dgcm)",
                "Bare complement of degree element (Dgcm.Br)",
                "Marked complement of degree element (Dgcm.Mk)",
                "Coordinator (&)",
                "Coordinator of IXPs (&.IXP)",
                "Coordinator of Nouns (&.N)",
                "Coordinator of Possessives (&.Poss)",
                "Coordinator of Adjectives (&.Aj)",
                "Coordinator of Numericals (&.Nu)",
                "Initial part of a discontinuous coordinator (&.Init)",
                "Other or uncertain coordinator (&.Other)"
            ];

            const exactMatching = _.fromPairs([
                "N:[0-9]+",
                "N[.]C:[0-9]+",
                "N[.]P:[0-9]+",
                "H:[0-9]+",
                "Per:[0-9]+",
                "Dem:[0-9]+",
                "Poss:[0-9]+",
                "Q:[0-9]+",
                "Md:[0-9]+",
                "Md[.]Pos:[0-9]+",
                "Md[.]Nu/WQ:[0-9]+",
                "Md[.]Nu/WQ[.]Nu:[0-9]+",
                "Md[.]Nu/WQ[.]WQ:[0-9]+",
                "Md[.]Aj:[0-9]+",
                "Md[.]Aj[.]Fn:[0-9]+",
                "Md[.]Aj[.]Fn[.]Ord:[0-9]+",
                "Md[.]Aj[.]Fn[.]Df:[0-9]+",
                "Md[.]Aj[.]Fn[.]Dt:[0-9]+",
                "Md[.]Aj[.]Lx:[0-9]+",
                "Md[.]Aj[.]Lx[.]Pst:[0-9]+",
                "Md[.]Aj[.]Lx[.]Pre:[0-9]+",
                "Md[.]Aj[.]Lx[.]Der:[0-9]+",
                "Md[.]Aj[.]Lx[.]Pro:[0-9]+",
                "IXP:[0-9]+",
                "Assoc:[0-9]+",
                "GenP:[0-9]+",
                "PP:[0-9]+",
                "App:[0-9]+",
                "RC:[0-9]+",
                "CC:[0-9]+",
                "CC[.]Fi:[0-9]+",
                "CC[.]Nf:[0-9]+",
                "Adv:[0-9]+",
                "Mdmd:[0-9]+",
                "Mdcm:[0-9]+",
                "Mdcm[.]N:[0-9]+",
                "Mdcm[.]P:[0-9]+",
                "Dgcm:[0-9]+",
                "Dgcm[.]Br:[0-9]+",
                "Dgcm[.]Mk:[0-9]+",
                "&:[0-9]+",
                "&[.]IXP:[0-9]+",
                "&[.]N:[0-9]+",
                "&[.]Poss:[0-9]+",
                "&[.]Aj:[0-9]+",
                "&[.]Nu:[0-9]+",
                "&[.]Init:[0-9]+",
                "&[.]Other:[0-9]+"
            ].map((elem, idx) => [elem, idx]));

            const matching = _.fromPairs([
                "N([.][^:]+)?:[0-9]+",
                "N[.]C:[0-9]+",
                "N[.]P:[0-9]+",
                "H:[0-9]+",
                "Per:[0-9]+",
                "Dem:[0-9]+",
                "Poss:[0-9]+",
                "Q:[0-9]+",
                "Md([.][^:]+)?:[0-9]+",
                "Md[.]Pos:[0-9]+",
                "Md[.]Nu/WQ([.][^:]+)?:[0-9]+",
                "Md[.]Nu/WQ[.]Nu:[0-9]+",
                "Md[.]Nu/WQ[.]WQ:[0-9]+",
                "Md[.]Aj([.][^:]+)?:[0-9]+",
                "Md[.]Aj[.]Fn([.][^:]+)?:[0-9]+",
                "Md[.]Aj[.]Fn[.]Ord:[0-9]+",
                "Md[.]Aj[.]Fn[.]Df:[0-9]+",
                "Md[.]Aj[.]Fn[.]Dt:[0-9]+",
                "Md[.]Aj[.]Lx([.][^:]+)?:[0-9]+",
                "Md[.]Aj[.]Lx[.]Pst:[0-9]+",
                "Md[.]Aj[.]Lx[.]Pre:[0-9]+",
                "Md[.]Aj[.]Lx[.]Der:[0-9]+",
                "Md[.]Aj[.]Lx[.]Pro:[0-9]+",
                "IXP:[0-9]+",
                "Assoc:[0-9]+",
                "GenP:[0-9]+",
                "PP:[0-9]+",
                "App:[0-9]+",
                "RC:[0-9]+",
                "CC([.][^:]+)?:[0-9]+",
                "CC[.]Fi:[0-9]+",
                "CC[.]Nf:[0-9]+",
                "Adv:[0-9]+",
                "Mdmd:[0-9]+",
                "Mdcm([.][^:]+)?:[0-9]+",
                "Mdcm[.]N:[0-9]+",
                "Mdcm[.]P:[0-9]+",
                "Dgcm([.][^:]+)?:[0-9]+",
                "Dgcm[.]Br:[0-9]+",
                "Dgcm[.]Mk:[0-9]+",
                "&([.][^:]+)?:[0-9]+",
                "&[.]IXP:[0-9]+",
                "&[.]N:[0-9]+",
                "&[.]Poss:[0-9]+",
                "&[.]Aj:[0-9]+",
                "&[.]Nu:[0-9]+",
                "&[.]Init:[0-9]+",
                "&[.]Other:[0-9]+"
            ].map((elem, idx) => [elem, idx]));

            const data = {"=": exactMatching, "*=": matching}

            $scope.$watch("input", () => {
                $scope.model = Object.keys(data[$scope.orObj.op])[$scope.input]
            })

            $scope.$watch("orObj.op", (op, prevOp) => {
                if (op != prevOp) {
                    // translate value from previous operator to new
                    $scope.model = Object.keys(data[op])[$scope.input]
                }  
            })

            if ($scope.model) {
                $scope.input = data[$scope.orObj.op][$scope.model]
            } else {
                $scope.input = 0
            }

            $scope.dataset = labels.map((value, idx) => [idx, value])
    }],
    extendedTemplate: `<select ng-model="input" ng-options="tuple[0] as tuple[1] for tuple in dataset"></select>`,
    opts: {
        "is": "=",
        "starts_with": "*=", // needed to disambiguate expression when parsing, will be translated to '='
    }
};

npegl.e_name = {label: "baseform", isStructAttr: true, order: 85};

npegl.e_features_adjsem = {label: "adjectival semantics", isStructAttr: true, order: 90, extendedComponent: "structServiceSelect"};
npegl.e_features_decl = {label: "declension", isStructAttr: true, order: 100, extendedComponent: "structServiceSelect"};
npegl.e_features_degr = {label: "degree", isStructAttr: true, order: 110, extendedComponent: "structServiceSelect"};
npegl.e_features_genprole = {label: "genitive role", isStructAttr: true, order: 120, extendedComponent: "structServiceSelect"};
npegl.e_features_nounsem = {label: "noun semantics", isStructAttr: true, order: 130, extendedComponent: "structServiceSelect"};
npegl.e_indices_ismoddedidx = {label: "identifier", isStructAttr: true, order: 140, hideExtended: true};
npegl.e_indices_modsidx = {label: "modifies", isStructAttr: true, order: 150, hideExtended: true};
npegl.e_tags_anim = {label: "animate", isStructAttr: true, order: 160};

npegl.e_tags_def = {label: "definite", isStructAttr: true, order: 170, extendedComponent: "datasetSelect", escape: false, dataset: {"": "undefined", ".+": "defined"}, opts: {"is": "="}};
npegl.e_tags_noundrv = {label: "derived noun", isStructAttr: true, order: 180, extendedComponent: "datasetSelect", escape: false, dataset: {"": "undefined", ".+": "defined"}, opts: {"is": "="}};
npegl.e_tags_nounless = {label: "nounless apposition", isStructAttr: true, order: 190, extendedComponent: "datasetSelect", escape: false, dataset: {"": "undefined", ".+": "defined"}, opts: {"is": "="}};
npegl.e_tags_nounsuff = {label: "suffixed article", isStructAttr: true, order: 200, extendedComponent: "datasetSelect", escape: false, dataset: {"": "undefined", ".+": "defined"}, opts: {"is": "="}};
npegl.e_tags_relnoun = {label: "relational noun", isStructAttr: true, order: 210, extendedComponent: "datasetSelect", escape: false, dataset: {"": "undefined", ".+": "defined"}, opts: {"is": "="}};

npegl.np_degree_of_interest = {label: "degree of interest", isStructAttr: true, order: 220, extendedComponent: "structServiceSelect"};
npegl.np_verified = {label: "verified", isStructAttr: true, order: 230};
npegl.np_comments = {label: "comments", isStructAttr: true, order: 240};
npegl.np_annotation_time = {label: "annotation time", isStructAttr: true, order: 250};
npegl.np_annotator = {label: "annotator", isStructAttr: true, order: 260};

/*npegl.np_lastmodified = {label: "np_lastmodified", isStructAttr: true, order: 10};
npegl.np_lastmodifiedby = {label: "np_lastmodifiedby", isStructAttr: true, order: 10};
npegl.np_lexiconname = {label: "np_lexiconname", isStructAttr: true, order: 10};
npegl.np_lexiconorder = {label: "np_lexiconorder", isStructAttr: true, order: 10};*/

var npegl_attributes = {
    e_cat: npegl.e_cat,
    e_name: npegl.e_name,
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
    /*np_lastmodified: npegl.np_lastmodified,
    np_lastmodifiedby: npegl.np_lastmodifiedby,
    np_lexiconname: npegl.np_lexiconname,
    np_lexiconorder: npegl.np_lexiconorder,*/
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
    customAttributes: {
        karp_link: {
            label: "Karp",
            pattern: "<a href='http://spraakbanken.gu.se/karp/#?mode=npegl_eng&searchTab=extended&extended=and|DB_item_id|equals|<%= pos_attrs.np_db_item_id %>&search=extended||and|DB_item_id|equals|<%= pos_attrs.np_db_item_id %>' target='_blank'>go to entry</a>",
            customType: "pos"
        }
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
    attributes: npegl_attributes,
    customAttributes: {
        karp_link: {
            label: "Karp",
            pattern: "<a href='http://spraakbanken.gu.se/karp/#?mode=npegl_ger&searchTab=extended&extended=and|DB_item_id|equals|<%= pos_attrs.np_db_item_id %>&search=extended||and|DB_item_id|equals|<%= pos_attrs.np_db_item_id %>' target='_blank'>go to entry</a>",
            customType: "pos"
        }
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
    attributes: npegl_attributes,
    customAttributes: {
        karp_link: {
            label: "Karp",
            pattern: "<a href='http://spraakbanken.gu.se/karp/#?mode=npegl_got&searchTab=extended&extended=and|DB_item_id|equals|<%= pos_attrs.np_db_item_id %>&search=extended||and|DB_item_id|equals|<%= pos_attrs.np_db_item_id %>' target='_blank'>go to entry</a>",
            customType: "pos"
        }
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
    attributes: npegl_attributes,
    customAttributes: {
        karp_link: {
            label: "Karp",
            pattern: "<a href='http://spraakbanken.gu.se/karp/#?mode=npegl_ice&searchTab=extended&extended=and|DB_item_id|equals|<%= pos_attrs.np_db_item_id %>&search=extended||and|DB_item_id|equals|<%= pos_attrs.np_db_item_id %>' target='_blank'>go to entry</a>",
            customType: "pos"
        }
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
    attributes: npegl_attributes,
    customAttributes: {
        karp_link: {
            label: "Karp",
            pattern: "<a href='http://spraakbanken.gu.se/karp/#?mode=npegl_sax&searchTab=extended&extended=and|DB_item_id|equals|<%= pos_attrs.np_db_item_id %>&search=extended||and|DB_item_id|equals|<%= pos_attrs.np_db_item_id %>' target='_blank'>go to entry</a>",
            customType: "pos"
        }
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
    attributes: npegl_attributes,
    customAttributes: {
        karp_link: {
            label: "Karp",
            pattern: "<a href='http://spraakbanken.gu.se/karp/#?mode=npegl_swe&searchTab=extended&extended=and|DB_item_id|equals|<%= pos_attrs.np_db_item_id %>&search=extended||and|DB_item_id|equals|<%= pos_attrs.np_db_item_id %>' target='_blank'>go to entry</a>",
            customType: "pos"
        }
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
        })
        return def
    }
}

