settings.autocomplete = false;
settings.wordpicture = false;

settings.corpora = {};
settings.corporafolders = {};
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
    structAttributes: {
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
    }
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
    structAttributes: {
        "doc_author": {label: "doc_author"},
        "doc_title": {label: "doc_title"},
        "doc_glottolog_ref_id": {label: "doc_glottolog_ref_id"},
        "doc_hhtype": {label: "doc_hhtype"},
        "doc_inlg": {label: "doc_inlg"},
        "doc_lgcode": {label: "doc_lgcode"},
        "doc_macro_area": {label: "doc_macro_area"},
        "doc_year": {label: "doc_year"}
    }
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
    structAttributes: {
        "doc_author": {label: "doc_author"},
        "doc_title": {label: "doc_title"},
        "doc_glottolog_ref_id": {label: "doc_glottolog_ref_id"},
        "doc_hhtype": {label: "doc_hhtype"},
        "doc_inlg": {label: "doc_inlg"},
        "doc_lgcode": {label: "doc_lgcode"},
        "doc_macro_area": {label: "doc_macro_area"},
        "doc_year": {label: "doc_year"}
    }
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
    structAttributes: {
        "doc_author": {label: "doc_author"},
        "doc_title": {label: "doc_title"},
        "doc_glottolog_ref_id": {label: "doc_glottolog_ref_id"},
        "doc_hhtype": {label: "doc_hhtype"},
        "doc_inlg": {label: "doc_inlg"},
        "doc_lgcode": {label: "doc_lgcode"},
        "doc_macro_area": {label: "doc_macro_area"},
        "doc_year": {label: "doc_year"}
    }
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
    structAttributes: {
        "doc_author": {label: "doc_author"},
        "doc_title": {label: "doc_title"},
        "doc_glottolog_ref_id": {label: "doc_glottolog_ref_id"},
        "doc_hhtype": {label: "doc_hhtype"},
        "doc_inlg": {label: "doc_inlg"},
        "doc_lgcode": {label: "doc_lgcode"},
        "doc_macro_area": {label: "doc_macro_area"},
        "doc_year": {label: "doc_year"}
    }
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
    structAttributes: {
        "doc_author": {label: "doc_author"},
        "doc_title": {label: "doc_title"},
        "doc_glottolog_ref_id": {label: "doc_glottolog_ref_id"},
        "doc_hhtype": {label: "doc_hhtype"},
        "doc_inlg": {label: "doc_inlg"},
        "doc_lgcode": {label: "doc_lgcode"},
        "doc_macro_area": {label: "doc_macro_area"},
        "doc_year": {label: "doc_year"}
    }
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
    structAttributes: {
        "doc_author": {label: "doc_author"},
        "doc_title": {label: "doc_title"},
        "doc_glottolog_ref_id": {label: "doc_glottolog_ref_id"},
        "doc_hhtype": {label: "doc_hhtype"},
        "doc_inlg": {label: "doc_inlg"},
        "doc_lgcode": {label: "doc_lgcode"},
        "doc_macro_area": {label: "doc_macro_area"},
        "doc_year": {label: "doc_year"}
    }
};

settings.corpusListing = new CorpusListing(settings.corpora);
