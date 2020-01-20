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
npegl.e_cat = {label: "e_cat", isStructAttr: true, order: 10};
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

