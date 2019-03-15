settings.primaryColor = "#E0F4F4";
settings.primaryLight = "#F2FFFF";
settings.wordpicture = true;

/////////////////////////////////////////////////////////////////////////////////////
// Common settings

settings.kubhistattributes = {
    lemma: attrs.baseform,
    pos: attrs.pos,
    lex: attrs.lemgram,
    dalinlex: attrs.dalinlemgram,
    dephead: attrs.dephead,
    deprel: attrs.deprel,
    ref: attrs.ref,
    ne_ex: attrs.ne_ex,
    ne_type: attrs.ne_type,
    ne_subtype: attrs.ne_subtype,
    ne_name: attrs.ne_name,
    sentiment: modernAttrs2.sentiment,
    blingbring: modernAttrs2.blingbring,
    swefn: modernAttrs2.swefn
};

settings.kubhiststruct_attributes = _.extend({}, commonStructAttrs, {
    text_title: {
        label: "title",
        order: 10,
        opts: liteOptions
    },
    text_date: {label: "date", order: 11},
    page_no: {label: "page", order: 20},
    text_edition: {label: "edition", order: 25},
    text_libris: {label: "librisid", order: 30},
    page_filename: {
        label: "source",
        order: 50,
        pattern: "<div><div>Kungliga Biblioteket</div><div><a href='https://tidningar.kb.se/<%= struct_attrs.text_libris %>/<%= struct_attrs.text_date %>/edition/<%= struct_attrs.text_edition %>/part/1/page/<%= struct_attrs.page_no %>/' target='_blank'><img src='https://tidningar.kb.se/<%= struct_attrs.text_libris %>/<%= struct_attrs.text_date %>/edition/<%= struct_attrs.text_edition %>/part/1/page/<%= struct_attrs.page_no %>_thumb.jpg' width='100%'></img></a></div></div>"
    }
});

digidailydescription = '<a href="http://feedback.blogg.kb.se/forums/topic/digidailyprojekten-2010-2014/" target="blank">Digidaily</a> var ett utvecklingsprojekt där Riksarkivet tillsammans med Kungl. biblioteket och Mittuniversitetet utvecklade rationella metoder och processer för massdigitalisering och texttolkning av dagstidningar. Projektet löpte mellan 2010 och 2014.'

$("#lemgram_list_item").remove();
$("#showLineDiagram").remove();

kubhist_settings = {
    morphology: "saldom|dalinm|swedbergm",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes
};

settings.corpora = {};
settings.corporafolders = {};
/////////////////////////////////////////////////////////////////////////////////////

// Test corpus
settings.corporafolders["barometern"] = {
    title: "Barometern",
    contents: ["kubhist2-barometern-1850"]
};

settings.corpora["kubhist2-barometern-1850"] = _.extend({}, kubhist_settings, {
    id: "kubhist2-barometern-1850",
    title: "Barometern 1850-talet"
});

/////////////////////////////////////////////////////////////////////////////////////
settings.corpora = _(settings.corpora)
                        .sortBy("title")
                        .map(function(item) {return [item.id, item]})
                        .fromPairs()
                        .value()

settings.corpusListing = new CorpusListing(settings.corpora);
