settings.primaryColor = "#E0F4F4";
settings.primaryLight = "#F2FFFF";
settings.wordpicture = false;

settings.corpora = {};
settings.corporafolders = {};

settings.preselectedCorpora = ["dn", "gp"];

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
        original: {
            label: "original"
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

////////////////////////////////////////////////////////////////////////////////
// DN
////////////////////////////////////////////////////////////////////////////////

settings.corporafolders.dn = {
    title: "Dagens Nyheter",
    contents: ["kubord-dn-2011",]
};

settings.corpora["kubord-dn-2011"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2011",
    id: "kubord-dn-2011",
    description: ""
});

////////////////////////////////////////////////////////////////////////////////
// GP
////////////////////////////////////////////////////////////////////////////////

settings.corporafolders.gp = {
    title: "Göteborgsposten",
    contents: ["kubord-gp-2014", "kubord-gp-2015", "kubord-gp-2016", "kubord-gp-2017", "kubord-gp-2018",
               "kubord-gp-2019", "kubord-gp-2020"]
};

settings.corpora["kubord-gp-2014"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2014",
    id: "kubord-gp-2014",
    description: ""
});

settings.corpora["kubord-gp-2015"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2015",
    id: "kubord-gp-2015",
    description: ""
});

settings.corpora["kubord-gp-2016"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2016",
    id: "kubord-gp-2016",
    description: ""
});

settings.corpora["kubord-gp-2017"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2017",
    id: "kubord-gp-2017",
    description: ""
});

settings.corpora["kubord-gp-2018"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2018",
    id: "kubord-gp-2018",
    description: ""
});

settings.corpora["kubord-gp-2019"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2019",
    id: "kubord-gp-2019",
    description: ""
});

settings.corpora["kubord-gp-2020"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2020",
    id: "kubord-gp-2020",
    description: ""
});

settings.corpusListing = new CorpusListing(settings.corpora);
