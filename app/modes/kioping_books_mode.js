settings.primaryColor = "#E0F4F4";
settings.primaryLight = "#F2FFFF";
settings.wordpicture = false;

settings.corpora = {};
settings.corporafolders = {};

settings.corpora["kioping"] = {
    morphology: "swedbergm|dalinm|saldom",
    id: "kioping",
    title: "Nils Matsson Kiöpings resor",
    description: "Reseskildringar från 1674 och 1743",
    within: spWithin,
    context: spContext,
    attributes: {
        pos: attrs.pos,
        msd: attrs.msd,
        lemma: attrs.baseform,
        lex: attrs.lemgram,
        saldo: attrs.saldo,
        prefix: attrs.prefix,
        suffix: attrs.suffix,
        dephead: attrs.dephead,
        deprel: attrs.deprel,
        ref: attrs.ref,
        typograph: {
            label: "typography",
            type: "set",
            translation: fabTranslation,
            extendedComponent: "datasetSelect",
            dataset: [
                "antikva",
                "smallcaps",
                "headline",
                "italic",
                "unclear",
                "gap"
                //"kustod"
            ],
            opts: liteOptions

            }
    },

    structAttributes: {
        text_date: {label: "date"},
        text_title: {
            label: "title",
            extendedComponent: "datasetSelect",
            dataset: [
                "Een kort Beskriffning Uppå Trenne Reesor och Peregrinationer, sampt Konungarijket Japan",
                "BESKRIFNING Om En RESA GENOM ASIA, AFRICA Och många andra HEDNA LÄNDER "
            ],
            opts: liteOptions
        },
        "chapter_name": {
            label: "chapter"
        },
    }
};

settings.corpusListing = new CorpusListing(settings.corpora);
