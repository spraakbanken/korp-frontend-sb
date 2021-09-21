
settings.primaryColor = "#E0F4F4";
settings.primaryLight = "#F2FFFF";
settings.wordpicture = false;

settings.corpora = {};
settings.corporafolders = {};

settings.runebergattributes = {
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
            "footnote",
            "small",
            "headline",
            "italic"
            ],
        opts: liteOptions
    }
};
settings.runebergstruct_attributes = {
    text_title: {
        label: "title",
        
         opts: liteOptions
    },
    "chapter_name": {label: "chapter"},
    text_date: {label: "date"}
};


settings.corpora["runeberg-diverse"] = {
    morphology: "swedbergm|dalinm|saldom",
    id: "runeberg-diverse",
    title: "Diverse tidningar",
    description: "Brand, De ungas tidning, Det nya Sverige, Elegant, Hvar 8 dag, Nyare Conversations-Bladet, Sundsvalls tidning, Varia",
    within: spWithin,
    context: spContext,
    attributes: settings.runebergattributes,
    structAttributes: settings.runebergstruct_attributes,
};

settings.corpora["runeberg-rost"] = {
    morphology: "swedbergm|dalinm|saldom",
    id: "runeberg-rost",
    title: "Rösträtt för kvinnor",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: settings.runebergattributes,
    structAttributes: settings.runebergstruct_attributes,
};

settings.corpora["runeberg-svtidskr"] = {
    morphology: "swedbergm|dalinm|saldom",
    id: "runeberg-svtidskr",
    title: "Svensk Tidskrift",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: settings.runebergattributes,
    structAttributes: settings.runebergstruct_attributes,
};

settings.corpora["runeberg-tiden"] = {
    morphology: "swedbergm|dalinm|saldom",
    id: "runeberg-tiden",
    title: "Tiden",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: settings.runebergattributes,
    structAttributes: settings.runebergstruct_attributes,

};

settings.corpora["runeberg-urdagkron"] = {
    morphology: "swedbergm|dalinm|saldom",
    id: "runeberg-urdagkron",
    title: "Ur Dagens Krönika",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: settings.runebergattributes,
    structAttributes: settings.runebergstruct_attributes,
};




settings.corpusListing = new CorpusListing(settings.corpora);
