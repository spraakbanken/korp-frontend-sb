settings.primaryColor = "#E0F4F4";
settings.primaryLight = "#F2FFFF";
settings.wordpicture = false;

settings.corpora = {};
settings.corporafolders = {};

settings.preselectedCorpora = ["dn", "gp", "svd"];

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
    contents: ["kubord-dn-2011", "kubord-dn-2012", "kubord-dn-2013", "kubord-dn-2014", "kubord-dn-2015",
               "kubord-dn-2016", "kubord-dn-2017", "kubord-dn-2018", "kubord-dn-2019", "kubord-dn-2020"]
};

settings.corpora["kubord-dn-2011"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2011",
    id: "kubord-dn-2011",
    description: ""
});

settings.corpora["kubord-dn-2012"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2012",
    id: "kubord-dn-2012",
    description: ""
});

settings.corpora["kubord-dn-2013"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2013",
    id: "kubord-dn-2013",
    description: ""
});

settings.corpora["kubord-dn-2014"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2014",
    id: "kubord-dn-2014",
    description: ""
});

settings.corpora["kubord-dn-2015"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2015",
    id: "kubord-dn-2015",
    description: ""
});

settings.corpora["kubord-dn-2016"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2016",
    id: "kubord-dn-2016",
    description: ""
});

settings.corpora["kubord-dn-2017"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2017",
    id: "kubord-dn-2017",
    description: ""
});

settings.corpora["kubord-dn-2018"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2018",
    id: "kubord-dn-2018",
    description: ""
});

settings.corpora["kubord-dn-2019"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2019",
    id: "kubord-dn-2019",
    description: ""
});

settings.corpora["kubord-dn-2020"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2020",
    id: "kubord-dn-2020",
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

////////////////////////////////////////////////////////////////////////////////
// SvD
////////////////////////////////////////////////////////////////////////////////

settings.corporafolders.svd = {
    title: "Svenska Dagbladet",
    contents: ["kubord-svd-2011", "kubord-svd-2012", "kubord-svd-2013", "kubord-svd-2014", "kubord-svd-2015",
               "kubord-svd-2016", "kubord-svd-2017", "kubord-svd-2019", "kubord-svd-2020"]
};

settings.corpora["kubord-svd-2011"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2011",
    id: "kubord-svd-2011",
    description: ""
});

settings.corpora["kubord-svd-2012"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2012",
    id: "kubord-svd-2012",
    description: ""
});

settings.corpora["kubord-svd-2013"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2013",
    id: "kubord-svd-2013",
    description: ""
});

settings.corpora["kubord-svd-2014"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2014",
    id: "kubord-svd-2014",
    description: ""
});

settings.corpora["kubord-svd-2015"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2015",
    id: "kubord-svd-2015",
    description: ""
});

settings.corpora["kubord-svd-2016"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2016",
    id: "kubord-svd-2016",
    description: ""
});

settings.corpora["kubord-svd-2017"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2017",
    id: "kubord-svd-2017",
    description: ""
});

settings.corpora["kubord-svd-2019"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2019",
    id: "kubord-svd-2019",
    description: ""
});

settings.corpora["kubord-svd-2020"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2020",
    id: "kubord-svd-2020",
    description: ""
});


settings.corpusListing = new CorpusListing(settings.corpora);
