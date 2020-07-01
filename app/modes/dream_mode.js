settings.autocomplete = false;
settings.wordpicture = false;

var structs = {
    "doc_author": {label: "doc_author"},
    "doc_title": {label: "doc_title"},
    "doc_glottolog_ref_id": {label: "doc_glottolog_ref_id"},
    "doc_hhtype": {label: "doc_hhtype"},
    "doc_inlg": {label: "doc_inlg"},
    "doc_lgcode": {label: "doc_lgcode"},
    "doc_macro_area": {label: "doc_macro_area"},
    "doc_year": {label: "doc_year"},
    "page_page_url": {label: "url", type: "url"},
    "page_page_number": {label: "page_num"}
};

settings.corpora = {};
settings.corporafolders = {};

settings.corporafolders.protected = {
    title: "Restricted",
    contents: ["dream-en-restricted", "dream-de-restricted", "dream-es-restricted", "dream-fr-restricted", "dream-it-restricted", "dream-nl-restricted"/*, "dream-ru-restricted"*/]
};

settings.corpora["dream-en-open"] = {
    id: "dream-en-open",
    title: "DReaM-en-open",
    description: "",
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence",
        "7 sentence": "7 sentence"
    },
    attributes: {
        norm: {label: "normalized_wordform"},
        pos: {
          label: "pos"
        },
        msd: attrs.msd,
        lemma: {label: "baseform"},
        dephead: attrs.dephead,
        deprel: {label: "deprel"},
        ref: attrs.ref
    },
    structAttributes: structs
};

settings.corpora["dream-en-restricted"] = {
    id: "dream-en-restricted",
    title: "DReaM-en-restricted",
    description: "",
    limitedAccess: true,
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence",
        "7 sentence": "7 sentence"
    },
    attributes: {
        norm: {label: "normalized_wordform"},
        pos: {
          label: "pos"
        },
        msd: attrs.msd,
        lemma: {label: "baseform"},
        dephead: attrs.dephead,
        deprel: {label: "deprel"},
        ref: attrs.ref
    },
    structAttributes: structs
};

settings.corpora["dream-de-open"] = {
    id: "dream-de-open",
    title: "DReaM-de-open",
    description: "",
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence",
        "7 sentence": "7 sentence"
    },
    attributes: {

    },
    structAttributes: structs
};

settings.corpora["dream-de-restricted"] = {
    id: "dream-de-restricted",
    title: "DReaM-de-restricted",
    description: "",
    limitedAccess: true,
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence",
        "7 sentence": "7 sentence"
    },
    attributes: {

    },
    structAttributes: structs
};

settings.corpora["dream-es-open"] = {
    id: "dream-es-open",
    title: "DReaM-es-open",
    description: "",
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence",
        "7 sentence": "7 sentence"
    },
    attributes: {

    },
    structAttributes: structs
};

settings.corpora["dream-es-restricted"] = {
    id: "dream-es-restricted",
    title: "DReaM-es-restricted",
    description: "",
    limitedAccess: true,
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence",
        "7 sentence": "7 sentence"
    },
    attributes: {

    },
    structAttributes: structs
};

settings.corpora["dream-fr-open"] = {
    id: "dream-fr-open",
    title: "DReaM-fr-open",
    description: "",
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence",
        "7 sentence": "7 sentence"
    },
    attributes: {

    },
    structAttributes: structs
};

settings.corpora["dream-fr-restricted"] = {
    id: "dream-fr-restricted",
    title: "DReaM-fr-restricted",
    description: "",
    limitedAccess: true,
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence",
        "7 sentence": "7 sentence"
    },
    attributes: {

    },
    structAttributes: structs
};

settings.corpora["dream-it-open"] = {
    id: "dream-it-open",
    title: "DReaM-it-open",
    description: "",
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence",
        "7 sentence": "7 sentence"
    },
    attributes: {

    },
    structAttributes: structs
};

settings.corpora["dream-it-restricted"] = {
    id: "dream-it-restricted",
    title: "DReaM-it-restricted",
    description: "",
    limitedAccess: true,
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence",
        "7 sentence": "7 sentence"
    },
    attributes: {

    },
    structAttributes: structs
};

settings.corpora["dream-nl-open"] = {
    id: "dream-nl-open",
    title: "DReaM-nl-open",
    description: "",
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence",
        "7 sentence": "7 sentence"
    },
    attributes: {

    },
    structAttributes: structs
};

settings.corpora["dream-nl-restricted"] = {
    id: "dream-nl-restricted",
    title: "DReaM-nl-restricted",
    description: "",
    limitedAccess: true,
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence",
        "7 sentence": "7 sentence"
    },
    attributes: {

    },
    structAttributes: structs
};

settings.corpora["dream-ru-open"] = {
    id: "dream-ru-open",
    title: "DReaM-ru-open",
    description: "",
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence",
        "7 sentence": "7 sentence"
    },
    attributes: {

    },
    structAttributes: structs
};

/*settings.corpora["dream-ru-restricted"] = {
    id: "dream-ru-restricted",
    title: "DReaM-ru-restricted",
    description: "",
    limitedAccess: true,
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence",
        "7 sentence": "7 sentence"
    },
    attributes: {

    },
    structAttributes: structs
};*/

settings.corpusListing = new CorpusListing(settings.corpora);
