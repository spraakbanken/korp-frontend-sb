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

settings.corpora["npegl-eng"] = {
    id: "npegl-eng",
    title: "NPEGL: English",
    description: "",
    within: textWithin,
    context: textContext,
    attributes: {
        e_cat: {label: "e_cat", isStructAttr: true, order: 10},
        e_features_degrval: {label: "e_features_degrval", isStructAttr: true, order: 20},
        e_indices_ismoddedidx: {label: "e_indices_ismoddedidx", isStructAttr: true, order: 30},
        e_indices_modsidx: {label: "e_indices_modsidx", isStructAttr: true, order: 40},
        e_lemma: {label: "lemma", isStructAttr: true, order: 50},
        e_tags_defval: {label: "e_tags_defval", isStructAttr: true, order: 60},
        np_case: {label: "np_case", isStructAttr: true}, order: 110,
        np_grammatical_function: {label: "np_grammatical_function", isStructAttr: true, order: 120},
        np_gender: {label: "gender", isStructAttr: true, order: 130},
        np_referential_status: {label: "np_referential_status", isStructAttr: true, order: 140},
        np_comments: {label: "commentaries", isStructAttr: true, order: 150},
        np_annotation_time: {label: "np_annotation_time", isStructAttr: true, order: 160},
        np_annotator: {label: "np_annotator", isStructAttr: true, order: 170},
        np_degree_of_interest: {label: "np_degree_of_interest", isStructAttr: true, order: 180},
        np_corpus_unit_id: {label: "np_corpus_unit_id", isStructAttr: true, order: 190},
        np_db_item_id: {label: "id", isStructAttr: true, order: 200},
        //np_number: {label: "number", isStructAttr: true, order: 300},
    },
    structAttributes: {
    }
};

settings.corpusListing = new CorpusListing(settings.corpora);

