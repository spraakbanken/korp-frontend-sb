// gerlof experiment 2017

settings.autocomplete = false;
settings.wordpicture = false;
settings.newMapEnabled = false;

settings.structAttributeSelector = "intersection"
settings.wordAttributeSelector   = "intersection"
settings.reduceWordAttributeSelector = "intersection"

settings.corpora = {};
settings.corporafolders = {};

settings.corpora["gerlof_minikorpus"] = {
    id: "gerlof_minikorpus",
    title: "Gerlof Minikorpus",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: {
        wcat: {label: "gerlof_cat"}
    },
    structAttributes: {
        d_did: {label: "gerlof_did"},
        np_npfunct: {label: "gerlof_s_npfunct"},
        np_refstat: {label: "gerlof_s_refstat"},
        np_phiagr: {label: "gerlof_s_phiagr"},
        sentence_npid: {label: "gerlof_s_npid"},
        sentence_sid: {label: "gerlof_s_sid"},
        sentence_annotator: {label: "gerlof_s_annotator"},
        text_source: {label: "gerlof_text_source"},
        text_time: {label: "gerlof_text_time"},
        text_lang: {label: "gerlof_text_lang"}
    }
};

settings.corpusListing = new CorpusListing(settings.corpora);
