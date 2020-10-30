settings.autocomplete = false;
settings.wordpicture = false;

settings.corpora = {};
settings.corporafolders = {};
settings.corpora["lawfn"] = {
    id: "lawfn",
    title: "Law corpus",
    description: "",
    limitedAccess: true,
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {
        norm: {label: "normalized_wordform"},
        pos: {label: "pos"},
        msd: attrs.msd,
        lemma: {label: "baseform"},
        dephead: attrs.dephead,
        deprel: {label: "deprel"},
        ref: attrs.ref
    },
    structAttributes: {
        "doc_author": {label: "author"},
        "doc_title": {label: "title"},
        "doc_country": {label: "country"},
        "doc_topics": {label: "topic"},
        "doc_publisher": {label: "publisher"}
    }
};

settings.corpusListing = new CorpusListing(settings.corpora);
