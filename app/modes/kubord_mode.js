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

kubord_settings = {
    context: {"0 word": "0 word"},
    within: {"word": "word"},
    attributes: {
        pos: attrs.pos,
        msd: attrs.msd,
        lemma: attrs.baseform,
        lex: attrs.lemgram,
        sense: modernAttrs.sense,
        complemgram: modernAttrs.complemgram,
        freq: {
            label: "freqency",
            opts: liteOptions
        }
    },
    structAttributes: {
        edition_name: {
            label: "name",
            extendedComponent: "structServiceSelect"
        },
        edition_date: {label: "date"},
        edition_year: {
            label: "year",
            hideSidebar: true,
            opts: liteOptions,
            extendedComponent: "structServiceSelect"
        },
        page_nr: {
            label: "page",
            opts: liteOptions
        }
    }
};


settings.corpora["kubfreq-gp-2018"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2018",
    id: "kubfreq-gp-2018",
    description: ""
});


settings.corpusListing = new CorpusListing(settings.corpora);
