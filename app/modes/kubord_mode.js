settings.primaryColor = "#E0F4F4";
settings.primaryLight = "#F2FFFF";
settings.wordpicture = false;

settings.corpora = {};
settings.corporafolders = {};

settings.preselectedCorpora = ["dn", "gp", "svd"];

kubord_settings = {
    context: {"0 word": "0 word"},
    within: {"word": "word"},
    description: "",
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
// Aftonbladet
////////////////////////////////////////////////////////////////////////////////
settings.corporafolders.afb = {
    title: "Aftonbladet",
    contents: ["kubord-afb-2010", "kubord-afb-2011", "kubord-afb-2012", "kubord-afb-2013", "kubord-afb-2014",
               "kubord-afb-2015", "kubord-afb-2016", "kubord-afb-2017", "kubord-afb-2018", "kubord-afb-2019",
               "kubord-afb-2020", "kubord-afb-2021"]
};

settings.corpora["kubord-afb-2010"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Aftonbladet 2010",
    id: "kubord-afb-2010"
});

settings.corpora["kubord-afb-2011"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Aftonbladet 2011",
    id: "kubord-afb-2011"
});

settings.corpora["kubord-afb-2012"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Aftonbladet 2012",
    id: "kubord-afb-2012"
});

settings.corpora["kubord-afb-2013"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Aftonbladet 2013",
    id: "kubord-afb-2013"
});

settings.corpora["kubord-afb-2014"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Aftonbladet 2014",
    id: "kubord-afb-2014"
});

settings.corpora["kubord-afb-2015"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Aftonbladet 2015",
    id: "kubord-afb-2015"
});

settings.corpora["kubord-afb-2016"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Aftonbladet 2016",
    id: "kubord-afb-2016"
});

settings.corpora["kubord-afb-2017"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Aftonbladet 2017",
    id: "kubord-afb-2017"
});

settings.corpora["kubord-afb-2018"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Aftonbladet 2018",
    id: "kubord-afb-2018"
});

settings.corpora["kubord-afb-2019"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Aftonbladet 2019",
    id: "kubord-afb-2019"
});

settings.corpora["kubord-afb-2020"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Aftonbladet 2020",
    id: "kubord-afb-2020"
});

settings.corpora["kubord-afb-2021"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Aftonbladet 2021",
    id: "kubord-afb-2021"
});

////////////////////////////////////////////////////////////////////////////////
// DN
////////////////////////////////////////////////////////////////////////////////

settings.corporafolders.dn = {
    title: "Dagens Nyheter",
    contents: ["kubord-dn-2010", "kubord-dn-2011", "kubord-dn-2012", "kubord-dn-2013", "kubord-dn-2014", "kubord-dn-2015",
               "kubord-dn-2016", "kubord-dn-2017", "kubord-dn-2018", "kubord-dn-2019", "kubord-dn-2020", "kubord-dn-2021"]
};

settings.corpora["kubord-dn-2010"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2010",
    id: "kubord-dn-2010"
});

settings.corpora["kubord-dn-2011"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2011",
    id: "kubord-dn-2011"
});

settings.corpora["kubord-dn-2012"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2012",
    id: "kubord-dn-2012"
});

settings.corpora["kubord-dn-2013"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2013",
    id: "kubord-dn-2013"
});

settings.corpora["kubord-dn-2014"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2014",
    id: "kubord-dn-2014"
});

settings.corpora["kubord-dn-2015"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2015",
    id: "kubord-dn-2015"
});

settings.corpora["kubord-dn-2016"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2016",
    id: "kubord-dn-2016"
});

settings.corpora["kubord-dn-2017"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2017",
    id: "kubord-dn-2017"
});

settings.corpora["kubord-dn-2018"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2018",
    id: "kubord-dn-2018"
});

settings.corpora["kubord-dn-2019"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2019",
    id: "kubord-dn-2019"
});

settings.corpora["kubord-dn-2020"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2020",
    id: "kubord-dn-2020"
});

settings.corpora["kubord-dn-2021"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Dagens Nyheter 2021",
    id: "kubord-dn-2021"
});

////////////////////////////////////////////////////////////////////////////////
// Expressen
////////////////////////////////////////////////////////////////////////////////
settings.corporafolders.exp = {
    title: "Expressen",
    contents: ["kubord-exp-2010", "kubord-exp-2011", "kubord-exp-2012", "kubord-exp-2013", "kubord-exp-2014",
               "kubord-exp-2015", "kubord-exp-2016", "kubord-exp-2017", "kubord-exp-2018", "kubord-exp-2019",
               "kubord-exp-2020", "kubord-exp-2021"]
};

settings.corpora["kubord-exp-2010"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Expressen 2010",
    id: "kubord-exp-2010"
});

settings.corpora["kubord-exp-2011"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Expressen 2011",
    id: "kubord-exp-2011"
});

settings.corpora["kubord-exp-2012"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Expressen 2012",
    id: "kubord-exp-2012"
});

settings.corpora["kubord-exp-2013"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Expressen 2013",
    id: "kubord-exp-2013"
});

settings.corpora["kubord-exp-2014"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Expressen 2014",
    id: "kubord-exp-2014"
});

settings.corpora["kubord-exp-2015"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Expressen 2015",
    id: "kubord-exp-2015"
});

settings.corpora["kubord-exp-2016"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Expressen 2016",
    id: "kubord-exp-2016"
});

settings.corpora["kubord-exp-2017"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Expressen 2017",
    id: "kubord-exp-2017"
});

settings.corpora["kubord-exp-2018"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Expressen 2018",
    id: "kubord-exp-2018"
});

settings.corpora["kubord-exp-2019"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Expressen 2019",
    id: "kubord-exp-2019"
});

settings.corpora["kubord-exp-2020"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Expressen 2020",
    id: "kubord-exp-2020"
});

settings.corpora["kubord-exp-2021"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Expressen 2021",
    id: "kubord-exp-2021"
});

////////////////////////////////////////////////////////////////////////////////
// GP
////////////////////////////////////////////////////////////////////////////////

settings.corporafolders.gp = {
    title: "Göteborgsposten",
    contents: ["kubord-gp-2013", "kubord-gp-2014", "kubord-gp-2015", "kubord-gp-2016", "kubord-gp-2017",
               "kubord-gp-2018", "kubord-gp-2019", "kubord-gp-2020", "kubord-gp-2021"]
};

settings.corpora["kubord-gp-2013"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2013",
    id: "kubord-gp-2013"
});

settings.corpora["kubord-gp-2014"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2014",
    id: "kubord-gp-2014"
});

settings.corpora["kubord-gp-2015"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2015",
    id: "kubord-gp-2015"
});

settings.corpora["kubord-gp-2016"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2016",
    id: "kubord-gp-2016"
});

settings.corpora["kubord-gp-2017"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2017",
    id: "kubord-gp-2017"
});

settings.corpora["kubord-gp-2018"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2018",
    id: "kubord-gp-2018"
});

settings.corpora["kubord-gp-2019"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2019",
    id: "kubord-gp-2019"
});

settings.corpora["kubord-gp-2020"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2020",
    id: "kubord-gp-2020"
});

settings.corpora["kubord-gp-2021"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Göteborgsposten 2021",
    id: "kubord-gp-2021"
});

////////////////////////////////////////////////////////////////////////////////
// Sydsvenskan
////////////////////////////////////////////////////////////////////////////////

settings.corporafolders.ss = {
    title: "Sydsvenskan",
    contents: ["kubord-ss-2013", "kubord-ss-2014", "kubord-ss-2016", "kubord-ss-2017", //"kubord-svd-2015", 
               "kubord-ss-2018", "kubord-ss-2019", "kubord-ss-2020", "kubord-ss-2021"]
};

settings.corpora["kubord-ss-2013"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Sydsvenskan 2013",
    id: "kubord-ss-2013"
});

settings.corpora["kubord-ss-2014"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Sydsvenskan 2014",
    id: "kubord-ss-2014"
});

// settings.corpora["kubord-ss-2015"] = _.extend({}, kubord_settings, {
//     title: "Ordfrekvenser Sydsvenskan 2015",
//     id: "kubord-ss-2015"
// });

settings.corpora["kubord-ss-2016"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Sydsvenskan 2016",
    id: "kubord-ss-2016"
});

settings.corpora["kubord-ss-2017"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Sydsvenskan 2017",
    id: "kubord-ss-2017"
});

settings.corpora["kubord-ss-2018"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Sydsvenskan 2018",
    id: "kubord-ss-2018"
});

settings.corpora["kubord-ss-2019"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Sydsvenskan 2019",
    id: "kubord-ss-2019"
});

settings.corpora["kubord-ss-2020"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Sydsvenskan 2020",
    id: "kubord-ss-2020"
});

settings.corpora["kubord-ss-2021"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Sydsvenskan 2021",
    id: "kubord-ss-2021"
});

////////////////////////////////////////////////////////////////////////////////
// SvD
////////////////////////////////////////////////////////////////////////////////

settings.corporafolders.svd = {
    title: "Svenska Dagbladet",
    contents: ["kubord-svd-2010", "kubord-svd-2011", "kubord-svd-2012", "kubord-svd-2013", "kubord-svd-2014",
               "kubord-svd-2015", "kubord-svd-2016", "kubord-svd-2017", "kubord-svd-2018", "kubord-svd-2019",
               "kubord-svd-2020", "kubord-svd-2021"]
};

settings.corpora["kubord-svd-2010"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2010",
    id: "kubord-svd-2010"
});

settings.corpora["kubord-svd-2011"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2011",
    id: "kubord-svd-2011"
});

settings.corpora["kubord-svd-2012"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2012",
    id: "kubord-svd-2012"
});

settings.corpora["kubord-svd-2013"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2013",
    id: "kubord-svd-2013"
});

settings.corpora["kubord-svd-2014"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2014",
    id: "kubord-svd-2014"
});

settings.corpora["kubord-svd-2015"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2015",
    id: "kubord-svd-2015"
});

settings.corpora["kubord-svd-2016"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2016",
    id: "kubord-svd-2016"
});

settings.corpora["kubord-svd-2017"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2017",
    id: "kubord-svd-2017"
});

settings.corpora["kubord-svd-2018"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2018",
    id: "kubord-svd-2018"
});

settings.corpora["kubord-svd-2019"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2019",
    id: "kubord-svd-2019"
});

settings.corpora["kubord-svd-2020"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2020",
    id: "kubord-svd-2020"
});

settings.corpora["kubord-svd-2021"] = _.extend({}, kubord_settings, {
    title: "Ordfrekvenser Svenska Dagbladet 2021",
    id: "kubord-svd-2021"
});

settings.corpusListing = new CorpusListing(settings.corpora);
