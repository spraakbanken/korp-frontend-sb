settings.autocomplete = false;
settings.wordpicture = false;

settings.corpora = {};
settings.corporafolders = {};
settings.corpora["dream"] = {
    id: "dream",
    title: "DReaM",
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
        "doc_year": {label: "doc_year"}
    }
};

settings.corpusListing = new CorpusListing(settings.corpora);
