settings.primaryColor = "#FFE7D2";
settings.primaryLight = "#FFF4EB";
settings.autocomplete = false;
settings.wordpicture = false;

settings.inputCaseInsensitiveDefault = true;
settings.statisticsCaseInsensitiveDefault = true;

settings.corpora = {};
settings.corporafolders = {};

// Skolböcker
settings.corporafolders.buugaag = {
    title: "Buugaag Dugsiyeed",
    contents: ["somali-1971-79", "somali-1993-94", "somali-as-2001", "somali-2001", "somali-itoobiya",
        "somali-hargeysa-2010",
        "somali-as-2013", "somali-as-2016", "somali-as-2018",
        "somali-caafimaad-1983", "somali-caafimaad-1994", "somali-cb", "somali-cb-1980-89", "somali-hargeysa",
        "somali-cb-2001-03-soomaaliya",
        "somali-cb-2010", "somali-cb-2011", "somali-cb-2016", "somali-cb-2018",
        "somali-cd-2012-itoobiya", "somali-saynis-1972-77", "somali-saynis-1994-96",
        "somali-saynis", "somali-saynis-2001", "somali-saynis-2010", "somali-saynis-2011-soomaaliya",
        "somali-saynis-2016", "somali-saynis-2018", "somali-xisaab-1971-79",
        "somali-xisaab-1994-97", "somali-xisaab-2001-hargeysa", "somali-xisaab-2001-nayroobi",
        "somali-xisaab-2011-itoobiya", "somali-xisaab-2016-somaliland", "somali-xisaab-2018-soomaaliya"
    ]
};

settings.corporafolders.warar = {
    title: "Warar",
    contents: ["somali-bbc", "somali-haatuf-news-2002", "somali-haatuf-news-2003", "somali-haatuf-news-2004",
        "somali-haatuf-news-2005", "somali-haatuf-news-2006", "somali-haatuf-news-2007", "somali-haatuf-news-2008",
        "somali-haatuf-news-2009", "somali-radioden2014", "somali-radioswe2014", "somali-radiomuq", "somali-ogaden",
        "somali-wardheer"]
};

settings.corporafolders.wb = {
    title: "Warbixin bulsheed",
    contents: ["somali-wksi", "somali-wksk"]
};

// Strukturella attribut
somalis = {}
somalis.title = {label: "title", order: 100};
somalis.source = {label: "source", type: "url", order: 200};
somalis.author = {label: "author", order: 300};
somalis.translator = {label: "translator", order: 400};
somalis.editor = {label: "editor", order: 500};
somalis.journal = {label: "journal", order: 600};
somalis.publisher = {label: "publisher", order: 700};
somalis.sponsor = {label: "sponsor", order: 800};
somalis.place = {label: "place", order: 900};
somalis.year = {label: "year", order: 1000};
somalis.edition = {label: "edition", order: 1100};
somalis.date = {label: "date", order: 1200};
somalis.page = {label: "page", order: 1300};
somalis.pagesource = {label: "pagesource", type: "url", order: 1400};

settings.corpora["somali-1971-79"] = {
    id: "somali-1971-79",
    title: "Af Soomaali 1971–79",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_place: somalis.place,
        text_author: somalis.author,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_source: somalis.source,
        page_n: somalis.page,
        page_purl: somalis.pagesource
    }
};

settings.corpora["somali-wardheer"] = {
    id: "somali-wardheer",
    title: "Wardheer News",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_date: somalis.date,
        text2_title: somalis.title,
        text2_publisher: somalis.publisher,
        text2_source: somalis.source,
        text_purl: somalis.pagesource
    }
};

settings.corpora["somali-1993-94"] = {
    id: "somali-1993-94",
    title: "Af Soomaali 1993–94",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_place: somalis.place,
        text_title: somalis.title,
        text_source: somalis.source,
        page_n: somalis.page
    }
};

settings.corpora["somali-haatuf-news-2002"] = {
    id: "somali-haatuf-news-2002",
    title: "Haatuf News 2002",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_date: somalis.date,
        text_publisher: somalis.publisher,
        text_title: somalis.title,
        text_place: somalis.place,
        text_source: somalis.source
    }
};

settings.corpora["somali-haatuf-news-2003"] = {
    id: "somali-haatuf-news-2003",
    title: "Haatuf News 2003",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_date: somalis.date,
        text_publisher: somalis.publisher,
        text_title: somalis.title,
        text_place: somalis.place,
        text_source: somalis.source
    }
};

settings.corpora["somali-haatuf-news-2004"] = {
    id: "somali-haatuf-news-2004",
    title: "Haatuf News 2004",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_date: somalis.date,
        text_publisher: somalis.publisher,
        text_title: somalis.title,
        text_place: somalis.place,
        text_source: somalis.source
    }
};

settings.corpora["somali-haatuf-news-2005"] = {
    id: "somali-haatuf-news-2005",
    title: "Haatuf News 2005",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_date: somalis.date,
        text_publisher: somalis.publisher,
        text_title: somalis.title,
        text_place: somalis.place,
        text_source: somalis.source
    }
};

settings.corpora["somali-haatuf-news-2006"] = {
    id: "somali-haatuf-news-2006",
    title: "Haatuf News 2006",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_date: somalis.date,
        text_publisher: somalis.publisher,
        text_title: somalis.title,
        text_place: somalis.place,
        text_source: somalis.source
    }
};

settings.corpora["somali-haatuf-news-2007"] = {
    id: "somali-haatuf-news-2007",
    title: "Haatuf News 2007",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_date: somalis.date,
        text_publisher: somalis.publisher,
        text_title: somalis.title,
        text_place: somalis.place,
        text_source: somalis.source
    }
};

settings.corpora["somali-haatuf-news-2008"] = {
    id: "somali-haatuf-news-2008",
    title: "Haatuf News 2008",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_date: somalis.date,
        text_publisher: somalis.publisher,
        text_title: somalis.title,
        text_place: somalis.place,
        text_source: somalis.source
    }
};

settings.corpora["somali-haatuf-news-2009"] = {
    id: "somali-haatuf-news-2009",
    title: "Haatuf News 2009",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_date: somalis.date,
        text_publisher: somalis.publisher,
        text_title: somalis.title,
        text_place: somalis.place,
        text_source: somalis.source
    }
};

settings.corpora["somali-caafimaad-1983"] = {
    id: "somali-caafimaad-1983",
    title: "Caafimaad 1983",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_publisher: somalis.publisher,
        text_title: somalis.title,
        text_source: somalis.source,
        page_n: somalis.page
    }
};

settings.corpora["somali-caafimaad-1994"] = {
    id: "somali-caafimaad-1994",
    title: "Caafimaad 1994",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_edition: somalis.edition,
        text_title: somalis.title,
        text_source: somalis.source,
        page_n: somalis.page
    }
};

settings.corpora["somali-ah-1992-02-kanada"] = {
    id: "somali-ah-1992-02-kanada",
    title: "Afka Hooyo 1992-02 Kanada",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_author: somalis.author,
        text_source: somalis.source,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        page_n: somalis.page
    }
};

settings.corpora["somali-2001"] = {
    id: "somali-2001",
    title: "Af-Soomaali 2001 Soomaaliya",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_sponsor: somalis.sponsor,
        text_place: somalis.place,
        page_n: somalis.page,
        text_edition: somalis.edition
    }
};

settings.corpora["somali-itoobiya"] = {
    id: "somali-itoobiya",
    title: "Af-Soomaali 2006 Itoobiya",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        page_n: somalis.page
    }
};

settings.corpora["somali-hargeysa-2010"] = {
    id: "somali-hargeysa-2010",
    title: "Af-Soomaali 2010 Somaliland",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: {},
    structAttributes: {
        text_edition: somalis.edition,
        text_place: somalis.place,
        text_publisher: somalis.publisher,
        text_title: somalis.title,
        text_year: somalis.year,
        page_n: somalis.page
    }
};

settings.corpora["somali-as-2001"] = {
    id: "somali-as-2001",
    title: "Af-Soomaali 2001 Somaliland",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: {},
    structAttributes: {
        text_edition: somalis.edition,
        text_place: somalis.place,
        text_publisher: somalis.publisher,
        text_title: somalis.title,
        text_year: somalis.year,
        page_n: somalis.page
    }
};


settings.corpora["somali-as-2013"] = {
    id: "somali-as-2013",
    title: "Af-Soomaali 2013 Somaliland",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: {},
    structAttributes: {
        text_edition: somalis.edition,
        text_place: somalis.place,
        text_publisher: somalis.publisher,
        text_title: somalis.title,
        text_year: somalis.year,
        page_n: somalis.page
    }
};

settings.corpora["somali-as-2016"] = {
    id: "somali-as-2016",
    title: "Af-Soomaali 2016 Somaliland",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: {},
    structAttributes: {
        text_edition: somalis.edition,
        text_place: somalis.place,
        text_publisher: somalis.publisher,
        text_title: somalis.title,
        text_year: somalis.year,
        page_n: somalis.page
    }
};

settings.corpora["somali-as-2018"] = {
    id: "somali-as-2018",
    title: "Af-Soomaali 2018 Soomaaliya",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: {},
    structAttributes: {
        text_edition: somalis.edition,
        text_place: somalis.place,
        text_publisher: somalis.publisher,
        text_title: somalis.title,
        text_year: somalis.year,
        page_n: somalis.page
    }
};

settings.corpora["somali-hargeysa"] = {
    id: "somali-hargeysa",
    title: "Cilmiga Bulshada 2001 Somaliland",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_editor: somalis.editor,
        text_edition: somalis.edition,
        text_sponsor: somalis.sponsor,
        page_n: somalis.page
    }
};

settings.corpora["somali-cb-2001-03-soomaaliya"] = {
    id: "somali-cb-2001-03-soomaaliya",
    title: "Cilmiga Bulshada 2001-03 Soomaaliya",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_editor: somalis.editor,
        text_edition: somalis.edition,
        text_sponsor: somalis.sponsor,
        page_n: somalis.page
    }
};

settings.corpora["somali-saynis-2011-soomaaliya"] = {
    id: "somali-saynis-2011-soomaaliya",
    title: "Saynis 2011 Soomaaliya",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_editor: somalis.editor,
        text_edition: somalis.edition,
        text_sponsor: somalis.sponsor,
        page_n: somalis.page
    }
};

settings.corpora["somali-cb-2010"] = {
    id: "somali-cb-2010",
    title: "Cilmiga Bulshada 2010 Somaliland",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_editor: somalis.editor,
        text_edition: somalis.edition,
        text_sponsor: somalis.sponsor,
        page_n: somalis.page
    }
};

settings.corpora["somali-cb-2011"] = {
    id: "somali-cb-2011",
    title: "Cilmiga Bulshada 2011 Itoobiya",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_edition: somalis.edition,
        page_n: somalis.page
    }
};

settings.corpora["somali-cb-2016"] = {
    id: "somali-cb-2016",
    title: "Cilmiga Bulshada 2016 Somaliland",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_edition: somalis.edition,
        page_n: somalis.page
    }
};

settings.corpora["somali-cb-2018"] = {
    id: "somali-cb-2018",
    title: "Cilmiga Bulshada 2018 Soomaaliya",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_edition: somalis.edition,
        page_n: somalis.page
    }
};

settings.corpora["somali-saynis-2010"] = {
    id: "somali-saynis-2010",
    title: "Saynis 2010 Somaliland",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_edition: somalis.edition,
        page_n: somalis.page
    }
};

settings.corpora["somali-saynis-2016"] = {
    id: "somali-saynis-2016",
    title: "Saynis 2016 Somaliland",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_edition: somalis.edition,
        page_n: somalis.page
    }
};

settings.corpora["somali-saynis-2018"] = {
    id: "somali-saynis-2018",
    title: "Saynis 2018 Soomaaliya",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_edition: somalis.edition,
        page_n: somalis.page
    }
};

settings.corpora["somali-xisaab-2016-somaliland"] = {
    id: "somali-xisaab-2016-somaliland",
    title: "Xisaab 2016 Somaliland",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_edition: somalis.edition,
        page_n: somalis.page
    }
};

settings.corpora["somali-xisaab-2018-soomaaliya"] = {
    id: "somali-xisaab-2018-soomaaliya",
    title: "Xisaab 2018 Soomaaliya",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_edition: somalis.edition,
        page_n: somalis.page
    }
};

settings.corpora["somali-saynis-2001"] = {
    id: "somali-saynis-2001",
    title: "Saynis 2001 Soomaaliya",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_edition: somalis.edition,
        text_editor: somalis.editor,
        page_n: somalis.page
    }
};

settings.corpora["somali-xisaab-2011-itoobiya"] = {
    id: "somali-xisaab-2011-itoobiya",
    title: "Xisaab 2011 Itoobiya",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_author: somalis.author,
        page_n: somalis.page
    }
};

settings.corpora["somali-bbc"] = {
    id: "somali-bbc",
    title: "BBC",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_source: somalis.source,
        page_n: somalis.page,
        page_purl: somalis.pagesource
    }
};

settings.corpora["somali-xisaab-2001-nayroobi"] = {
    id: "somali-xisaab-2001-nayroobi",
    title: "Xisaab 2001 Soomaaliya",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_author: somalis.author,
        text_sponsor: somalis.sponsor,
        page_n: somalis.page
    }
};

settings.corpora["somali-cb"] = {
    id: "somali-cb",
    title: "Cilmiga Bulshada 1971–1980",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_source: somalis.source,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        page_purl: somalis.pagesource
    }
};

settings.corpora["somali-cilmi"] = {
    id: "somali-cilmi",
    title: "Cilmi-Afeed",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_author: somalis.author,
        text_title: somalis.title,
        text_editor: somalis.editor,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_edition: somalis.edition,
        text_translator: somalis.translator,
        text_journal: somalis.journal,
        text_source: somalis.source,
        page_n: somalis.page
    }
};

settings.corpora["somali-xisaab-1971-79"] = {
    id: "somali-xisaab-1971-79",
    title: "Xisaab 1971-79",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_author: somalis.author,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_edition: somalis.edition,
        text_source: somalis.source,
        page_purl: somalis.pagesource,
        page_n: somalis.page
    }
};

settings.corpora["somali-xisaab-1994-97"] = {
    id: "somali-xisaab-1994-97",
    title: "Xisaab 1994-97",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_author: somalis.author,
        text_title: somalis.title,
        text_source: somalis.source,
        page_n: somalis.page
    }
};

settings.corpora["somali-xisaab-2001-hargeysa"] = {
    id: "somali-xisaab-2001-hargeysa",
    title: "Xisaab 2001 Somaliland",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_author: somalis.author,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        page_n: somalis.page
    }
};

settings.corpora["somali-wksi"] = {
    id: "somali-wksi",
    title: "Warbixin Ku Saabsan Iswiidhan",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_source: somalis.source,
        text_publisher: somalis.publisher,
        text_place: somalis.place
    }
};

settings.corpora["somali-wksk"] = {
    id: "somali-wksk",
    title: "Warbixin Ku Saabsan Kanada",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_source: somalis.source,
        text_publisher: somalis.publisher,
        text_place: somalis.place
    }
};

settings.corpora["somali-wakiillada"] = {
    id: "somali-wakiillada",
    title: "Golaha Wakiillada Somaliland",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: {},
    structAttributes: {
        text_date: somalis.date,
        text_title: somalis.title,
        text_source: somalis.source,
        text_publisher: somalis.publisher,
        text_place: somalis.place
    }
};

settings.corpora["somali-kqa"] = {
    id: "somali-kqa",
    title: "Kitaabka Quduuska Ah",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_title: somalis.title,
        text_sponsor: somalis.sponsor,
        text_place: somalis.place,
        text_edition: somalis.edition,
        text_date: somalis.year,
        text_source: somalis.source
    }
};

settings.corpora["somali-ogaden"] = {
    id: "somali-ogaden",
    title: "Ogaden Online",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_source: somalis.source,
        page_purl: somalis.pagesource
    }
};

settings.corpora["somali-qoraallo"] = {
    id: "somali-qoraallo",
    title: "Qoraallo 1956-1970",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_date: somalis.date,
        text_title: somalis.title,
        text_author: somalis.author,
        text_place: somalis.place,
        text_source: somalis.source,
        page_n: somalis.page
    }
};

settings.corpora["somali-quraan"] = {
    id: "somali-quraan",
    title: "Qur’aan",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_author: somalis.author,
        text_title: somalis.title,
        text_source: somalis.source
    }
};

settings.corpora["somali-saynis"] = {
    id: "somali-saynis",
    title: "Saynis 2001 Somaliland",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_editor: somalis.editor,
        text_edition: somalis.edition,
        text_sponsor: somalis.sponsor,
        page_n: somalis.page
    }
};

settings.corpora["somali-radioden2014"] = {
    id: "somali-radioden2014",
    title: "Raadiyaha Denmark 2014",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_date: somalis.date,
        text_source: somalis.source
    }
};

settings.corpora["somali-radioswe2014"] = {
    id: "somali-radioswe2014",
    title: "Raadiyaha Iswiidhan 2014",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: {},
    structAttributes: {
        text_publisher: somalis.publisher,
        text_place: somalis.place,
        text_date: somalis.date,
        text_source: somalis.source
    }
};


settings.corpora["somali-saynis-1972-77"] = {
    id: "somali-saynis-1972-77",
    title: "Saynis 1972–77",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_edition: somalis.edition,
        text_editor: somalis.editor,
        text_place: somalis.place,
        text_publisher: somalis.publisher,
        text_source: somalis.source,
        text_title: somalis.title,
        text_year: somalis.year,
        page_n: somalis.page
    }
};

settings.corpora["somali-saynis-1994-96"] = {
    id: "somali-saynis-1994-96",
    title: "Saynis 1994–96",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_edition: somalis.edition,
        text_editor: somalis.editor,
        text_place: somalis.place,
        text_publisher: somalis.publisher,
        text_source: somalis.source,
        text_title: somalis.title,
        text_year: somalis.year,
        page_n: somalis.page
    }
};

settings.corpora["somali-sheekooyin"] = {
    id: "somali-sheekooyin",
    title: "Sheekooyin Carruureed",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_title: somalis.title,
        text_date: somalis.year,
        text_publisher: somalis.publisher,
        text_source: somalis.source
    }
};

settings.corpora["somali-sheekooying"] = {
    id: "somali-sheekooying",
    title: "Sheekooyin Gaagaaban",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_title: somalis.title,
        text_date: somalis.year,
        text_author: somalis.author,
        text_source: somalis.source
    }
};

settings.corpora["somali-faces"] = {
    id: "somali-faces",
    title: "Somali Faces",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        page_n: somalis.page,
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_source: somalis.source,
        page_purl: somalis.pagesource
    }
};

settings.corpora["somali-radiomuq"] = {
    id: "somali-radiomuq",
    title: "Radio Muqdisho",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        page_n: somalis.page,
        text_year: somalis.year,
        text_title: somalis.title,
        text_publisher: somalis.publisher,
        text_source: somalis.source,
        page_purl: somalis.pagesource
    }
};

settings.corpora["somali-cb-1980-89"] = {
    id: "somali-cb-1980-89",
    title: "Cilmiga Bulshada 1980-89",
    description: "",
    within: settings.defaultWithin,
    context: spContext,
    attributes: {},
    structAttributes: {
        page_n: somalis.page,
        text_year: somalis.year,
        text_title: somalis.title,
        text_place: somalis.place,
        text_author: somalis.author,
        text_source: somalis.source,
        text_edition: somalis.edition,
        text_publisher: somalis.publisher
    }
};

settings.corpora["somali-cd-2012-itoobiya"] = {
    id: "somali-cd-2012-itoobiya",
    title: "Cilmiga Deegaanka 2012 Itoobiya",
    description: "",
    within: settings.defaultWithin,
    context: spContext,
    attributes: {},
    structAttributes: {
        page_n: somalis.page,
        text_year: somalis.year,
        text_title: somalis.title,
        text_place: somalis.place,
        text_author: somalis.author,
        text_edition: somalis.edition,
        text_publisher: somalis.publisher
    }
};

settings.corpora["somali-suugaan"] = {
    id: "somali-suugaan",
    title: "Suugaan",
    description: "",
    within: settings.defaultWithin,
    context: spContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_place: somalis.place,
        text_author: somalis.author,
        text_edition: somalis.edition
    }
};

settings.corpora["somali-suugaan2"] = {
    id: "somali-suugaan2",
    title: "Suugaan 2",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_place: somalis.place,
        text_author: somalis.author,
        text_publisher: somalis.publisher,
        text_source: somalis.source
    }
};

settings.corpora["wikipedia-so"] = {
    id: "wikipedia-so",
    title: "Somali Wikipedia",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {},
    structAttributes: {
        text_title: somalis.title,
        text_publisher: somalis.date,
        text_source: somalis.source
    }
};

settings.corpora["somali-xeerar"] = {
    id: "somali-xeerar",
    title: "Xeerar Somaliland",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: {},
    structAttributes: {
        text_year: somalis.year,
        text_title: somalis.title,
        text_source: somalis.source,
        text_publisher: somalis.publisher,
        text_place: somalis.place
    }
};



settings.corpusListing = new CorpusListing(settings.corpora);
