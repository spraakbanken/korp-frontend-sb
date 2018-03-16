settings.newMapEnabled = true;
settings.enableMap = false;

settings.primaryColor = "#eecccc";
settings.primaryLight = "#eee2e2";
settings.autocomplete = true;
settings.wordpicture = true;

settings.corpora = {};
settings.corporafolders = {};
settings.corpora["lb"] = {
    id: "lb",
    title: "Litteraturbanken",
    description: 'Samtliga etexter och sökbara faksimiler från <a href="http://litteraturbanken.se/">Litteraturbanken.se</a>.',
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        "text_title": {
            label: "title",
            extendedComponent: "structServiceAutocomplete"
        },
        "text_author": {
            label: "author",
            extendedComponent: "structServiceAutocomplete"
        },
        "text_url": {label: "verk", type: "url"},
        "text_source": {label: "source"},
        "text_date": {label: "imprintyear"},
        "page_n": {label: "page"},
        "page_url": {label: "pagelink", type: "url"}
    }
};

settings.corpusListing = new CorpusListing(settings.corpora);
