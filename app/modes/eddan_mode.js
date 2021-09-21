settings.primaryColor = "#FFE7D2";
settings.primaryLight = "#FFF4EB";
settings.autocomplete = false;
settings.wordpicture = false;

settings.corpora = {};
settings.corporafolders = {};
settings.corpora["eddan"] = {
    id: "eddan",
    title: "Sæmundaredda",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_part: {
            label: "part"
        }
    },
};

settings.corpusListing = new CorpusListing(settings.corpora);
