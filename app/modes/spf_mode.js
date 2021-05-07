
settings.primaryColor = "#eecccc";
settings.primaryLight = "#eee2e2";
settings.autocomplete = true;
settings.wordpicture = true;

settings.corpora = {};
settings.corporafolders = {};
settings.corpora["spf"] = {
    id: "spf",
    title: "Svensk prosafiktion 1800–1900",
    description: 'Svensk prosafiktion 1800–1900 är en korpus som Litteraturbanken tog fram med stöd av Vetenskapsrådet 2009-2011. Målet var att samla den svenska skönlitteratur som trycktes separat första gången åren 1800, 1820, 1840, 1860, 1880 och 1900.',
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: {
        pos: attrs.pos,
        msd: attrs.msd,
        lemma: attrs.baseform,
        lex: attrs.lemgram,
        saldo: attrs.saldo,
        dephead: attrs.dephead,
        deprel: attrs.deprel,
        ref: attrs.ref,
        prefix: attrs.prefix,
        suffix: attrs.suffix
    },
    structAttributes: {
        "text_title": {label: "title"},
        "text_author": {label: "author"},
        "text_date": {label: "imprintyear"},
        "text_id": {label: "id", displayType: "hidden"},
        "page_ix": {label: "id", displayType: "hidden"},
        "page_n": {label: "page"}
    },
    customAttributes: {
        page_url: {
            label: "source",
            pattern: "<a href='https://spraakbanken.gu.se/lb/resurser/spf/txt/<%= struct_attrs.text_id %>/res_<%= struct_attrs.page_ix %>.html' target='_blank'>länk</a>",
            customType: "struct"
            }
    }
};

settings.corpusListing = new CorpusListing(settings.corpora);
