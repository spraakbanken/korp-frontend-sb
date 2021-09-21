
settings.primaryColor = "#EDFCD5";
settings.primaryLight = "#f7fceb";
settings.autocomplete = false;
settings.wordpicture = false;

settings.corpora = {};
settings.corporafolders = {};
settings.corpora["fts"] = {
    id: "fts",
    title: "FTS - Färöisk textsamling",
    description: "Färöisk textsamling, i samarbete med Färöarnas universitet, Fróðskaparsetur Føroya.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {
        pos: {label: "pos"},
        msd: {label: "msd"},
        lemma: attrs.baseform,
        dephead: attrs.dephead,
        deprel: {label: "deprel"},
        ref: attrs.ref
    },
    structAttributes: {
        text_date: {
            label: "date"
        },
        text_page: {
            label: "page"
        },
        text_authortype: {
            label: "author_type",
            extendedComponent: "datasetSelect",
            dataset: {
                journalist: "journalist",
                reader: "reader"
            }
        },
        text_gender: {
            label: "gender",
            extendedComponent: "datasetSelect",
            dataset: {
                unknown: "unknown",
                male: "male",
                female: "female",
                "male/female": "male_female"
            }
        }
    }
};

settings.corpusListing = new CorpusListing(settings.corpora);
