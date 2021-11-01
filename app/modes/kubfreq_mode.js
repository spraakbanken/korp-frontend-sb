settings.primaryColor = "#E0F4F4";
settings.primaryLight = "#F2FFFF";
settings.wordpicture = false;

settings.corpora = {};
settings.corporafolders = {};

settings.preselectedCorpora = ["gp"];


settings.corporafolders.gp = {
    title: "Göteborgsposten",
    contents: ["kubfreq-gp-2018"]
};

kubfreq_settings = {
    context: {"0 word": "0 word"},
    within: {"word": "word"},
    attributes: {
        pos: attrs.pos,
        msd: attrs.msd,
        lemma: attrs.baseform,
        lex: attrs.lemgram,
        sense: modernAttrs.saldo,
        complemgram: modernAttrs.complemgram,
        freq: {
            label: "freq"
            // opts: settings.defaultOptions
        }
    },
    structAttributes: {
        edition_name: {label: "name"},
        edition_date: {label: "date"},
        page_nr: {label: "page"}
    }
};


settings.corpora["kubfreq-gp-2018"] = _.extend({}, kubfreq_settings, {
    title: "Ordfrekvenser Göteborgsposten 2018",
    id: "kubfreq-gp-2018",
    description: ""
});


settings.corpusListing = new CorpusListing(settings.corpora);
