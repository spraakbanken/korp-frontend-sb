settings.primaryColor = "#E0F4F4";
settings.primaryLight = "#F2FFFF";
settings.wordpicture = false;

settings.corpora = {};
settings.corporafolders = {};

settings.preselectedCorpora = ["gp"];


settings.corporafolders.gp = {
    title: "Göteborgsposten",
    contents: ["kubfreq-gp-2018", "kubord-gp-2018"]
};

kubord_settings = {
    context: {"0 word": "0 word"},
    within: {"word": "word"},
    attributes: {
        pos: attrs.pos,
        msd: attrs.msd,
        lemma: attrs.baseform,
        sense: modernAttrs.sense,
        complemgram: modernAttrs.complemgram,
        wordbreak: {
            label: "wordbreak"
        },
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

// Version 1, to be removed
settings.corpora["kubfreq-gp-2018"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2018 v1",
    id: "kubfreq-gp-2018",
    description: ""
});

settings.corpora["kubord-gp-2018"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2018 v2",
    id: "kubord-gp-2018",
    description: ""
});


settings.corpusListing = new CorpusListing(settings.corpora);
