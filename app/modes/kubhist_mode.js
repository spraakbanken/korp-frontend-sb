settings.primaryColor = "#E0F4F4";
settings.primaryLight = "#F2FFFF";
settings.wordpicture = true;

settings.kubhistattributes = {
    lemma: attrs.baseform,
    pos: attrs.pos,
    lex: attrs.lemgram,
    dalinlex: attrs.dalinlemgram,
    dephead: attrs.dephead,
    deprel: attrs.deprel,
    ref: attrs.ref,
    saldo: attrs.saldo,
    prefix: attrs.prefix,
    suffix: attrs.suffix
};

settings.kubhiststruct_attributes = {
    text_title: {
        label: "title",
        order: 10,
        opts: liteOptions
    },
    text_date: {label: "date", order: 11},
    page_no: {label: "page", order: 20},
    text_issn: {label: "issn", order: 30},
    text_kbid: {
        label: "source",
        order: 50,
        pattern: "<div><div>Kungliga Biblioteket</div><div><a href='http://magasin.kb.se/searchinterface/page.jsp?issue_id=<%= struct_attrs.text_kbid %>&sequence_number=<%= struct_attrs.page_no %>' target='_blank'><img src='http://magasin.kb.se:8080/fedora/get/kb:<%= parseInt((struct_attrs.text_kbid).split(':')[1]) + parseInt(struct_attrs.page_no) %>/WEBIMAGE' width='100%'></img></a></div></div>"
    },
    text_edition: {label: "edition", order: 60},
    text_periodofpublication: {label: "periodofpublication", order: 60},
    text_holderofpublicationlicense: {label: "holderofpublicationlicense", order: 60},
    text_publishingfrequency: {label: "publishingfrequency", order: 60},
    text_publishingdays: {label: "publishingdays", order: 60},
    text_completetitle: {label: "completetitle", order: 60},
    text_publisher: {label: "publisher", order: 60},
    text_politicaltendency: {label: "politicaltendency", order: 60, extendedComponent: "structServiceSelect"},
    text_annualprice: {label: "annualprice", order: 60},
    text_editorialplace: {label: "editorialplace", order: 60},
    text_typearea: {label: "typearea", order: 60},
    text_numberofpages: {label: "numberofpages", order: 60},
    text_publicationtype: {label: "publicationtype", order: 60},
    text_editor: {label: "editor", order: 60},
    text_printedin: {label: "printedin", order: 60},
    text_printedby: {label: "printedby", order: 60},
    text_commentaries: {label: "commentaries", order: 60}
};

var kubhist_custom_attributes = {
    metadatalink: {
        label: "more_metadata",
        order: 40,
        pattern: "<ul><li><a href='http://www.kb.se/Sverigesperiodiskalitteratur/'>Sveriges Periodiska Litteratur</a></li><li><a href='http://tidning.kb.se/nld/nld/nlnav'>Nya Lundstedts Dagstidningar</a></li></ul>",
        customType: "struct"
    }
};

var aftonbladet_custom_attributes = {
    text_kbid: {
        label: "source",
        order: 50,
        pattern: "<div><div>Kungliga Biblioteket</div><div><a href='http://tidningar.kb.se/?newspaper=AFTONBLADET&from=<%= struct_attrs.text_date %>&to=<%= struct_attrs.text_date %>' target='_blank'><img src='http://tidningar.kb.se/4112678/<%= struct_attrs.text_date %>/edition/0/part/1/page/<%= struct_attrs.page_no %>_thumb.jpg' width='100%'></img></a></div></div>",
        customType: "struct"
    },
    metadatalink: {
        label: "more_metadata",
        order: 40,
        pattern: "<ul><li><a href='http://www.kb.se/Sverigesperiodiskalitteratur/'>Sveriges Periodiska Litteratur</a></li><li><a href='http://tidning.kb.se/nld/nld/nlnav'>Nya Lundstedts Dagstidningar</a></li></ul>",
        customType: "struct"
    }
};

settings.aftonbladstruct_attributes = {
    text_title: {
        label: "title",
        order: 10,
        opts: liteOptions
    },
    text_date: {label: "date", order: 11},
    page_no: {label: "page", order: 20},
    text_issn: {label: "issn", order: 30}
};

digidailydescription = '<a href="http://feedback.blogg.kb.se/forums/topic/digidailyprojekten-2010-2014/" target="blank">Digidaily</a> var ett utvecklingsprojekt där Riksarkivet tillsammans med Kungl. biblioteket och Mittuniversitetet utvecklade rationella metoder och processer för massdigitalisering och texttolkning av dagstidningar. Projektet löpte mellan 2010 och 2014.'

$("#lemgram_list_item").remove();
$("#showLineDiagram").remove();


settings.corpora = {};
settings.corporafolders = {};

settings.corporafolders.kubhist = {
    title: "Kubhist",
    contents: []
};


settings.corporafolders.kubhist.aftonbladet = {
    title: "Aftonbladet",
    contents: ["kubhist-aftonbladet-1830", "kubhist-aftonbladet-1840", "kubhist-aftonbladet-1850", "kubhist-aftonbladet-1860"]
};

settings.corpora["kubhist-aftonbladet-1830"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-aftonbladet-1830",
    title: "Aftonbladet 1830-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.aftonbladstruct_attributes,
    customAttributes: aftonbladet_custom_attributes
};

settings.corpora["kubhist-aftonbladet-1840"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-aftonbladet-1840",
    title: "Aftonbladet 1840-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.aftonbladstruct_attributes,
    customAttributes: aftonbladet_custom_attributes
};

settings.corpora["kubhist-aftonbladet-1850"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-aftonbladet-1850",
    title: "Aftonbladet 1850-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.aftonbladstruct_attributes,
    customAttributes: aftonbladet_custom_attributes
};

settings.corpora["kubhist-aftonbladet-1860"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-aftonbladet-1860",
    title: "Aftonbladet 1860-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.aftonbladstruct_attributes,
    customAttributes: aftonbladet_custom_attributes
};



settings.corporafolders.kubhist.blekingsposten = {
    title: "Blekingsposten",
    contents: ["kubhist-blekingsposten-1850", "kubhist-blekingsposten-1860", "kubhist-blekingsposten-1870", "kubhist-blekingsposten-1880"]
};

settings.corpora["kubhist-blekingsposten-1850"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-blekingsposten-1850",
    title: "Blekingsposten 1850-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-blekingsposten-1860"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-blekingsposten-1860",
    title: "Blekingsposten 1860-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-blekingsposten-1870"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-blekingsposten-1870",
    title: "Blekingsposten 1870-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-blekingsposten-1880"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-blekingsposten-1880",
    title: "Blekingsposten 1880-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corporafolders.kubhist.bollnastidning = {
    title: "Bollnäs tidning",
    contents: ["kubhist-bollnastidning-1870", "kubhist-bollnastidning-1880"]
};

settings.corpora["kubhist-bollnastidning-1870"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-bollnastidning-1870",
    title: "Bollnäs tidning 1870-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-bollnastidning-1880"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-bollnastidning-1880",
    title: "Bollnäs tidning 1880-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.dalpilen = {
    title: "Dalpilen",
    contents: ["kubhist-dalpilen-1850", "kubhist-dalpilen-1860", "kubhist-dalpilen-1870", "kubhist-dalpilen-1880", "kubhist-dalpilen-1890", "kubhist-dalpilen-1900", "kubhist-dalpilen-1910", "kubhist-dalpilen-1920"]
};

settings.corpora["kubhist-dalpilen-1850"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-dalpilen-1850",
    title: "Dalpilen 1850-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-dalpilen-1860"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-dalpilen-1860",
    title: "Dalpilen 1860-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-dalpilen-1870"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-dalpilen-1870",
    title: "Dalpilen 1870-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-dalpilen-1880"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-dalpilen-1880",
    title: "Dalpilen 1880-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-dalpilen-1890"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-dalpilen-1890",
    title: "Dalpilen 1890-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-dalpilen-1900"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-dalpilen-1900",
    title: "Dalpilen 1900-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-dalpilen-1910"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-dalpilen-1910",
    title: "Dalpilen 1910-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-dalpilen-1920"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-dalpilen-1920",
    title: "Dalpilen 1920-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.fahluweckoblad = {
    title: "Fahlu weckoblad",
    contents: ["kubhist-fahluweckoblad-1780", "kubhist-fahluweckoblad-1790", "kubhist-fahluweckoblad-1800", "kubhist-fahluweckoblad-1810", "kubhist-fahluweckoblad-1820"]
};

settings.corpora["kubhist-fahluweckoblad-1780"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-fahluweckoblad-1780",
    title: "Fahlu weckoblad 1780-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-fahluweckoblad-1790"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-fahluweckoblad-1790",
    title: "Fahlu weckoblad 1790-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-fahluweckoblad-1800"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-fahluweckoblad-1800",
    title: "Fahlu weckoblad 1800-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-fahluweckoblad-1810"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-fahluweckoblad-1810",
    title: "Fahlu weckoblad 1810-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-fahluweckoblad-1820"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-fahluweckoblad-1820",
    title: "Fahlu weckoblad 1820-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.faluposten = {
    title: "Faluposten",
    contents: ["kubhist-faluposten-1860", "kubhist-faluposten-1870", "kubhist-faluposten-1880", "kubhist-faluposten-1890"]
};

settings.corpora["kubhist-faluposten-1860"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-faluposten-1860",
    title: "Faluposten 1860-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-faluposten-1870"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-faluposten-1870",
    title: "Faluposten 1870-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-faluposten-1880"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-faluposten-1880",
    title: "Faluposten 1880-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-faluposten-1890"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-faluposten-1890",
    title: "Faluposten 1890-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.folketsrost = {
    title: "Folkets röst",
    contents: ["kubhist-folketsrost-1850", "kubhist-folketsrost-1860"]
};

settings.corpora["kubhist-folketsrost-1850"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-folketsrost-1850",
    title: "Folkets röst 1850-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-folketsrost-1860"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-folketsrost-1860",
    title: "Folkets röst 1860-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.gotlandstidning = {
    title: "Gotlands tidning",
    contents: ["kubhist-gotlandstidning-1860", "kubhist-gotlandstidning-1870", "kubhist-gotlandstidning-1880"]
};

settings.corpora["kubhist-gotlandstidning-1860"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-gotlandstidning-1860",
    title: "Gotlands tidning 1860-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-gotlandstidning-1870"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-gotlandstidning-1870",
    title: "Gotlands tidning 1870-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-gotlandstidning-1880"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-gotlandstidning-1880",
    title: "Gotlands tidning 1880-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.goteborgsweckoblad = {
    title: "Göteborgs weckoblad",
    contents: ["kubhist-goteborgsweckoblad-1870", "kubhist-goteborgsweckoblad-1880", "kubhist-goteborgsweckoblad-1890"]
};

settings.corpora["kubhist-goteborgsweckoblad-1870"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-goteborgsweckoblad-1870",
    title: "Göteborgs weckoblad 1870-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-goteborgsweckoblad-1880"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-goteborgsweckoblad-1880",
    title: "Göteborgs weckoblad 1880-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-goteborgsweckoblad-1890"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-goteborgsweckoblad-1890",
    title: "Göteborgs weckoblad 1890-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.gotheborgsweckolista = {
    title: "Götheborgs weckolista",
    contents: ["kubhist-gotheborgsweckolista-1740", "kubhist-gotheborgsweckolista-1750"]
};

settings.corpora["kubhist-gotheborgsweckolista-1740"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-gotheborgsweckolista-1740",
    title: "Götheborgs weckolista 1740-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-gotheborgsweckolista-1750"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-gotheborgsweckolista-1750",
    title: "Götheborgs weckolista 1750-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.jonkopingsbladet = {
    title: "Jönköpingsbladet",
    contents: ["kubhist-jonkopingsbladet-1840", "kubhist-jonkopingsbladet-1850", "kubhist-jonkopingsbladet-1860", "kubhist-jonkopingsbladet-1870"]
};

settings.corpora["kubhist-jonkopingsbladet-1840"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-jonkopingsbladet-1840",
    title: "Jönköpingsbladet 1840-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-jonkopingsbladet-1850"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-jonkopingsbladet-1850",
    title: "Jönköpingsbladet 1850-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-jonkopingsbladet-1860"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-jonkopingsbladet-1860",
    title: "Jönköpingsbladet 1860-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-jonkopingsbladet-1870"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-jonkopingsbladet-1870",
    title: "Jönköpingsbladet 1870-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.kalmar = {
    title: "Kalmar",
    contents: ["kubhist-kalmar-1860", "kubhist-kalmar-1870", "kubhist-kalmar-1880", "kubhist-kalmar-1890", "kubhist-kalmar-1900", "kubhist-kalmar-1910"]
};

settings.corpora["kubhist-kalmar-1860"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-kalmar-1860",
    title: "Kalmar 1860-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-kalmar-1870"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-kalmar-1870",
    title: "Kalmar 1870-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-kalmar-1880"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-kalmar-1880",
    title: "Kalmar 1880-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-kalmar-1890"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-kalmar-1890",
    title: "Kalmar 1890-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-kalmar-1900"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-kalmar-1900",
    title: "Kalmar 1900-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-kalmar-1910"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-kalmar-1910",
    title: "Kalmar 1910-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.lindesbergsallehanda = {
    title: "Lindesbergs allehanda",
    contents: ["kubhist-lindesbergsallehanda-1870", "kubhist-lindesbergsallehanda-1880"]
};

settings.corpora["kubhist-lindesbergsallehanda-1870"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-lindesbergsallehanda-1870",
    title: "Lindesbergs allehanda 1870-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-lindesbergsallehanda-1880"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-lindesbergsallehanda-1880",
    title: "Lindesbergs allehanda 1880-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.norraskane = {
    title: "Norra Skåne",
    contents: ["kubhist-norraskane-1880", "kubhist-norraskane-1890"]
};

settings.corpora["kubhist-norraskane-1880"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-norraskane-1880",
    title: "Norra Skåne 1880-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-norraskane-1890"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-norraskane-1890",
    title: "Norra Skåne 1890-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.postochinrikestidning = {
    title: "Post- och Inrikes Tidningar",
    contents: ["kubhist-postochinrikestidning-1770", "kubhist-postochinrikestidning-1780", "kubhist-postochinrikestidning-1790", "kubhist-postochinrikestidning-1800",
        "kubhist-postochinrikestidning-1810", "kubhist-postochinrikestidning-1820", "kubhist-postochinrikestidning-1830", "kubhist-postochinrikestidning-1840",
        "kubhist-postochinrikestidning-1850", "kubhist-postochinrikestidning-1860",]
};

settings.corpora["kubhist-postochinrikestidning-1770"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-postochinrikestidning-1770",
    title: "Post- och Inrikes Tidningar 1770-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-postochinrikestidning-1780"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-postochinrikestidning-1780",
    title: "Post- och Inrikes Tidningar 1780-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-postochinrikestidning-1790"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-postochinrikestidning-1790",
    title: "Post- och Inrikes Tidningar 1790-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-postochinrikestidning-1800"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-postochinrikestidning-1800",
    title: "Post- och Inrikes Tidningar 1800-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-postochinrikestidning-1810"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-postochinrikestidning-1810",
    title: "Post- och Inrikes Tidningar 1810-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-postochinrikestidning-1820"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-postochinrikestidning-1820",
    title: "Post- och Inrikes Tidningar 1820-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-postochinrikestidning-1830"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-postochinrikestidning-1830",
    title: "Post- och Inrikes Tidningar 1830-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-postochinrikestidning-1840"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-postochinrikestidning-1840",
    title: "Post- och Inrikes Tidningar 1840-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-postochinrikestidning-1850"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-postochinrikestidning-1850",
    title: "Post- och Inrikes Tidningar 1850-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-postochinrikestidning-1860"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-postochinrikestidning-1860",
    title: "Post- och Inrikes Tidningar 1860-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.stockholmsposten = {
    title: "Stockholmsposten",
    contents: ["kubhist-stockholmsposten-1770", "kubhist-stockholmsposten-1780", "kubhist-stockholmsposten-1790", "kubhist-stockholmsposten-1800",
        "kubhist-stockholmsposten-1810", "kubhist-stockholmsposten-1820", "kubhist-stockholmsposten-1830"]
};

settings.corpora["kubhist-stockholmsposten-1770"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-stockholmsposten-1770",
    title: "Stockholmsposten 1770-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-stockholmsposten-1780"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-stockholmsposten-1780",
    title: "Stockholmsposten 1780-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-stockholmsposten-1790"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-stockholmsposten-1790",
    title: "Stockholmsposten 1790-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-stockholmsposten-1800"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-stockholmsposten-1800",
    title: "Stockholmsposten 1800-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-stockholmsposten-1810"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-stockholmsposten-1810",
    title: "Stockholmsposten 1810-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-stockholmsposten-1820"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-stockholmsposten-1820",
    title: "Stockholmsposten 1820-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-stockholmsposten-1830"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-stockholmsposten-1830",
    title: "Stockholmsposten 1830-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.tidningforwenersborg = {
    title: "Tidning för Wenersborgs stad och län",
    contents: ["kubhist-tidningforwenersborg-1840" , "kubhist-tidningforwenersborg-1850", "kubhist-tidningforwenersborg-1860", "kubhist-tidningforwenersborg-1870",
        "kubhist-tidningforwenersborg-1880", "kubhist-tidningforwenersborg-1890"]
};

settings.corpora["kubhist-tidningforwenersborg-1840"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-tidningforwenersborg-1840",
    title: "Tidning för Wenersborgs stad och län 1840-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-tidningforwenersborg-1850"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-tidningforwenersborg-1850",
    title: "Tidning för Wenersborgs stad och län 1850-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-tidningforwenersborg-1860"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-tidningforwenersborg-1860",
    title: "Tidning för Wenersborgs stad och län 1860-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-tidningforwenersborg-1870"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-tidningforwenersborg-1870",
    title: "Tidning för Wenersborgs stad och län 1870-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-tidningforwenersborg-1880"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-tidningforwenersborg-1880",
    title: "Tidning för Wenersborgs stad och län 1880-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-tidningforwenersborg-1890"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-tidningforwenersborg-1890",
    title: "Tidning för Wenersborgs stad och län 1890-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.wermlandslanstidning = {
    title: "Wermlands läns tidning",
    contents: ["kubhist-wermlandslanstidning-1870"]
};

settings.corpora["kubhist-wermlandslanstidning-1870"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-wermlandslanstidning-1870",
    title: "Wermlands läns tidning 1870-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.wernamotidning = {
    title: "Wernamo tidning",
    contents: ["kubhist-wernamotidning-1870", "kubhist-wernamotidning-1880"]
};

settings.corpora["kubhist-wernamotidning-1870"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-wernamotidning-1870",
    title: "Wernamo tidning 1870-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-wernamotidning-1880"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-wernamotidning-1880",
    title: "Wernamo tidning 1880-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.ostergotlandsveckoblad = {
    title: "Östergötlands veckoblad",
    contents: ["kubhist-ostergotlandsveckoblad-1880", "kubhist-ostergotlandsveckoblad-1890"]
};

settings.corpora["kubhist-ostergotlandsveckoblad-1880"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-ostergotlandsveckoblad-1880",
    title: "Östergötlands veckoblad 1880-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-ostergotlandsveckoblad-1890"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-ostergotlandsveckoblad-1890",
    title: "Östergötlands veckoblad 1890-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};



settings.corporafolders.kubhist.ostgotaposten = {
    title: "Östgötaposten",
    contents: ["kubhist-ostgotaposten-1890", "kubhist-ostgotaposten-1900", "kubhist-ostgotaposten-1910"]
};

settings.corpora["kubhist-ostgotaposten-1890"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-ostgotaposten-1890",
    title: "Östgötaposten 1890-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-ostgotaposten-1900"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-ostgotaposten-1900",
    title: "Östgötaposten 1900-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes,
    customAttributes: kubhist_custom_attributes
};

settings.corpora["kubhist-ostgotaposten-1910"] = {
    morphology: "saldom|dalinm|swedbergm",
    id: "kubhist-ostgotaposten-1910",
    title: "Östgötaposten 1910-talet",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhistattributes,
    structAttributes: settings.kubhiststruct_attributes
};



/////////////////////////////////////////////////////////////////////////////////////
// kubhist2 settings

settings.preselectedCorpora = ["kubhist2"];


settings.corporafolders.kubhist2 = {
    title: "Kubhist 2",
    contents: []
};


settings.kubhist2attributes = {
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

settings.kubhist2struct_attributes = _.extend({}, commonStructAttrs, {
    text_title: {
        label: "title",
        order: 10,
        opts: liteOptions
    },
    text_date: {label: "date", order: 11},
    Page_n: {label: "page", order: 20},
    text_edition: {label: "edition", order: 25},
    text_libris: {label: "librisid", order: 30},
    Page_filename: {
        label: "source",
        order: 50,
        pattern: "<div><div>Kungliga Biblioteket</div><div><a href='https://tidningar.kb.se/<%= struct_attrs.text_libris %>/<%= struct_attrs.text_date %>/edition/<%= struct_attrs.text_edition %>/part/1/page/<%= struct_attrs.Page_n %>/' target='_blank'><img src='https://tidningar.kb.se/<%= struct_attrs.text_libris %>/<%= struct_attrs.text_date %>/edition/<%= struct_attrs.text_edition %>/part/1/page/<%= struct_attrs.Page_n %>_thumb.jpg' width='100%'></img></a></div></div>"
    },
    String_wordbreak: {
      label: "wordbreak"
    }
});

digidailydescription = '<a href="http://feedback.blogg.kb.se/forums/topic/digidailyprojekten-2010-2014/" target="blank">Digidaily</a> var ett utvecklingsprojekt där Riksarkivet tillsammans med Kungl. biblioteket och Mittuniversitetet utvecklade rationella metoder och processer för massdigitalisering och texttolkning av dagstidningar. Projektet löpte mellan 2010 och 2014.'

$("#lemgram_list_item").remove();
$("#showLineDiagram").remove();

kubhist2_settings = {
    morphology: "saldom|dalinm|swedbergm",
    description: digidailydescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: settings.kubhist2attributes,
    structAttributes: settings.kubhist2struct_attributes
};

/////////////////////////////////////////////////////////////////////////////////////
// kubhist2
/////////////////////////////////////////////////////////////////////////////////////
// Corpora Folders

settings.corporafolders.kubhist2["aftonbladet"] = {
    title: "Aftonbladet",
    contents: ["kubhist2-aftonbladet-1830", "kubhist2-aftonbladet-1840", "kubhist2-aftonbladet-1850", "kubhist2-aftonbladet-1860"]
};

settings.corporafolders.kubhist2["alfwarochskamt"] = {
    title: "Alfwar och Skämt",
    contents: ["kubhist2-alfwarochskamt-1840"]
};

settings.corporafolders.kubhist2["barometern"] = {
    title: "Barometern",
    contents: ["kubhist2-barometern-1840", "kubhist2-barometern-1850", "kubhist2-barometern-1860", "kubhist2-barometern-1870", "kubhist2-barometern-1880", "kubhist2-barometern-1890"]
};

settings.corporafolders.kubhist2["blekingsposten"] = {
    title: "Blekingsposten",
    contents: ["kubhist2-blekingsposten-1850", "kubhist2-blekingsposten-1860", "kubhist2-blekingsposten-1870", "kubhist2-blekingsposten-1880"]
};

settings.corporafolders.kubhist2["bollnastidning"] = {
    title: "Bollnäs Tidning",
    contents: ["kubhist2-bollnastidning-1870", "kubhist2-bollnastidning-1880"]
};

settings.corporafolders.kubhist2["borastidning"] = {
    title: "Borås Tidning",
    contents: ["kubhist2-borastidning-1830", "kubhist2-borastidning-1840", "kubhist2-borastidning-1850", "kubhist2-borastidning-1860", "kubhist2-borastidning-1870", "kubhist2-borastidning-1880", "kubhist2-borastidning-1890"]
};

settings.corporafolders.kubhist2["carlscronastidningar"] = {
    title: "Carlscronas Tidningar",
    contents: ["kubhist2-carlscronastidningar-1760"]
};

settings.corporafolders.kubhist2["carlscronaswekoblad"] = {
    title: "Carlscronas Wekoblad",
    contents: ["kubhist2-carlscronaswekoblad-1750", "kubhist2-carlscronaswekoblad-1760", "kubhist2-carlscronaswekoblad-1770", "kubhist2-carlscronaswekoblad-1780", "kubhist2-carlscronaswekoblad-1790", "kubhist2-carlscronaswekoblad-1800", "kubhist2-carlscronaswekoblad-1810", "kubhist2-carlscronaswekoblad-1820", "kubhist2-carlscronaswekoblad-1830", "kubhist2-carlscronaswekoblad-1840", "kubhist2-carlscronaswekoblad-1850", "kubhist2-carlscronaswekoblad-1860", "kubhist2-carlscronaswekoblad-1870"]
};

settings.corporafolders.kubhist2["dagligtallehanda"] = {
    title: "Dagligt Allehanda",
    contents: ["kubhist2-dagligtallehanda-1760", "kubhist2-dagligtallehanda-1770", "kubhist2-dagligtallehanda-1780", "kubhist2-dagligtallehanda-1790", "kubhist2-dagligtallehanda-1800", "kubhist2-dagligtallehanda-1810", "kubhist2-dagligtallehanda-1820", "kubhist2-dagligtallehanda-1830", "kubhist2-dagligtallehanda-1840"]
};

settings.corporafolders.kubhist2["dalpilen"] = {
    title: "Dalpilen",
    contents: ["kubhist2-dalpilen-1850", "kubhist2-dalpilen-1860", "kubhist2-dalpilen-1870", "kubhist2-dalpilen-1880", "kubhist2-dalpilen-1890", "kubhist2-dalpilen-1900"]
};

settings.corporafolders.kubhist2["fahluweckoblad"] = {
    title: "Fahlu Weckoblad",
    contents: ["kubhist2-fahluweckoblad-1780", "kubhist2-fahluweckoblad-1790", "kubhist2-fahluweckoblad-1800", "kubhist2-fahluweckoblad-1810", "kubhist2-fahluweckoblad-1820"]
};

settings.corporafolders.kubhist2["falkopingstidning"] = {
    title: "Falköpings Tidning",
    contents: ["kubhist2-falkopingstidning-1850", "kubhist2-falkopingstidning-1860", "kubhist2-falkopingstidning-1870", "kubhist2-falkopingstidning-1880", "kubhist2-falkopingstidning-1890"]
};

settings.corporafolders.kubhist2["faluposten"] = {
    title: "Faluposten",
    contents: ["kubhist2-faluposten-1860", "kubhist2-faluposten-1870", "kubhist2-faluposten-1880", "kubhist2-faluposten-1890"]
};

settings.corporafolders.kubhist2["folketsrost"] = {
    title: "Folkets Röst",
    contents: ["kubhist2-folketsrost-1840", "kubhist2-folketsrost-1850", "kubhist2-folketsrost-1860"]
};

settings.corporafolders.kubhist2["ghost"] = {
    title: "Göteborgs Handels- och Sjöfartstidning",
    contents: ["kubhist2-ghost-1830"]
    // contents: ["kubhist2-ghost-1830", "kubhist2-ghost-1840", "kubhist2-ghost-1850", "kubhist2-ghost-1860", "kubhist2-ghost-1870", "kubhist2-ghost-1880", "kubhist2-ghost-1890"]
};

settings.corporafolders.kubhist2["gotheborgsallehanda"] = {
    title: "Götheborgs Allehanda",
    contents: ["kubhist2-gotheborgsallehanda-1800", "kubhist2-gotheborgsallehanda-1810", "kubhist2-gotheborgsallehanda-1820", "kubhist2-gotheborgsallehanda-1830"]
    // contents: ["kubhist2-gotheborgsallehanda-1770", "kubhist2-gotheborgsallehanda-1780", "kubhist2-gotheborgsallehanda-1790", "kubhist2-gotheborgsallehanda-1800", "kubhist2-gotheborgsallehanda-1810", "kubhist2-gotheborgsallehanda-1820", "kubhist2-gotheborgsallehanda-1830", "kubhist2-gotheborgsallehanda-1840"]
};

settings.corporafolders.kubhist2["gotheborgskanyheter"] = {
    title: "Götheborgska Nyheter",
    contents: ["kubhist2-gotheborgskanyheter-1800", "kubhist2-gotheborgskanyheter-1810", "kubhist2-gotheborgskanyheter-1820", "kubhist2-gotheborgskanyheter-1830"]
    // contents: ["kubhist2-gotheborgskanyheter-1760", "kubhist2-gotheborgskanyheter-1770", "kubhist2-gotheborgskanyheter-1780", "kubhist2-gotheborgskanyheter-1790", "kubhist2-gotheborgskanyheter-1800", "kubhist2-gotheborgskanyheter-1810", "kubhist2-gotheborgskanyheter-1820", "kubhist2-gotheborgskanyheter-1830", "kubhist2-gotheborgskanyheter-1840"]
};

settings.corporafolders.kubhist2["inrikestidningar"] = {
    title: "Inrikes Tidningar",
    contents: ["kubhist2-inrikestidningar-1800", "kubhist2-inrikestidningar-1810", "kubhist2-inrikestidningar-1820"]
    // contents: ["kubhist2-inrikestidningar-1760", "kubhist2-inrikestidningar-1770", "kubhist2-inrikestidningar-1780", "kubhist2-inrikestidningar-1790", "kubhist2-inrikestidningar-1800", "kubhist2-inrikestidningar-1810", "kubhist2-inrikestidningar-1820"]
};

settings.corporafolders.kubhist2["kalmar"] = {
    title: "Kalmar",
    contents: ["kubhist2-kalmar-1900"]
    // contents: ["kubhist2-kalmar-1860", "kubhist2-kalmar-1870", "kubhist2-kalmar-1880", "kubhist2-kalmar-1890", "kubhist2-kalmar-1900"]
};

settings.corporafolders.kubhist2["lundsweckoblad"] = {
    title: "Lunds Weckoblad",
    contents: ["kubhist2-lundsweckoblad-1810", "kubhist2-lundsweckoblad-1820", "kubhist2-lundsweckoblad-1830"]
    // contents: ["kubhist2-lundsweckoblad-1770", "kubhist2-lundsweckoblad-1780", "kubhist2-lundsweckoblad-1810", "kubhist2-lundsweckoblad-1820", "kubhist2-lundsweckoblad-1830", "kubhist2-lundsweckoblad-1840", "kubhist2-lundsweckoblad-1850", "kubhist2-lundsweckoblad-1860", "kubhist2-lundsweckoblad-1870", "kubhist2-lundsweckoblad-1880", "kubhist2-lundsweckoblad-1890"]
};

settings.corporafolders.kubhist2["malmoallehanda"] = {
    title: "Malmö Allehanda",
    contents: ["kubhist2-malmoallehanda-1820", "kubhist2-malmoallehanda-1830"]
    // contents: ["kubhist2-malmoallehanda-1820", "kubhist2-malmoallehanda-1830", "kubhist2-malmoallehanda-1840", "kubhist2-malmoallehanda-1850", "kubhist2-malmoallehanda-1860", "kubhist2-malmoallehanda-1870", "kubhist2-malmoallehanda-1880", "kubhist2-malmoallehanda-1890"]
};

settings.corporafolders.kubhist2["norrkopingstidningar"] = {
    title: "Norrköpings Tidningar",
    contents: ["kubhist2-norrkopingstidningar-1800", "kubhist2-norrkopingstidningar-1810", "kubhist2-norrkopingstidningar-1820", "kubhist2-norrkopingstidningar-1830"]
    // contents: ["kubhist2-norrkopingstidningar-1780", "kubhist2-norrkopingstidningar-1790", "kubhist2-norrkopingstidningar-1800", "kubhist2-norrkopingstidningar-1810", "kubhist2-norrkopingstidningar-1820", "kubhist2-norrkopingstidningar-1830", "kubhist2-norrkopingstidningar-1840", "kubhist2-norrkopingstidningar-1850", "kubhist2-norrkopingstidningar-1860", "kubhist2-norrkopingstidningar-1870", "kubhist2-norrkopingstidningar-1880", "kubhist2-norrkopingstidningar-1890"]
};

settings.corporafolders.kubhist2["nyttochgammalt"] = {
    title: "Nytt och Gammalt",
    contents: ["kubhist2-nyttochgammalt-1800", "kubhist2-nyttochgammalt-1810"]
    // contents: ["kubhist2-nyttochgammalt-1780", "kubhist2-nyttochgammalt-1790", "kubhist2-nyttochgammalt-1800", "kubhist2-nyttochgammalt-1810"]
};

settings.corporafolders.kubhist2["ostgotacorrespondenten"] = {
    title: "Östgöta Correspondenten",
    contents: ["kubhist2-ostgotacorrespondenten-1830"]
    // contents: ["kubhist2-ostgotacorrespondenten-1830", "kubhist2-ostgotacorrespondenten-1840", "kubhist2-ostgotacorrespondenten-1850", "kubhist2-ostgotacorrespondenten-1860", "kubhist2-ostgotacorrespondenten-1870", "kubhist2-ostgotacorrespondenten-1880", "kubhist2-ostgotacorrespondenten-1890"]
};

settings.corporafolders.kubhist2["ostgotaposten"] = {
    title: "Östgötaposten",
    contents: ["kubhist2-ostgotaposten-1900"]
    // contents: ["kubhist2-ostgotaposten-1890", "kubhist2-ostgotaposten-1900"]
};

settings.corporafolders.kubhist2["post-ochinrikestidningar"] = {
    title: "Post- och Inrikes Tidningar",
    contents: ["kubhist2-post-ochinrikestidningar-1820", "kubhist2-post-ochinrikestidningar-1830"]
    // contents: ["kubhist2-post-ochinrikestidningar-1820", "kubhist2-post-ochinrikestidningar-1830", "kubhist2-post-ochinrikestidningar-1840", "kubhist2-post-ochinrikestidningar-1850", "kubhist2-post-ochinrikestidningar-1860", "kubhist2-post-ochinrikestidningar-1870", "kubhist2-post-ochinrikestidningar-1880", "kubhist2-post-ochinrikestidningar-1890"]
};

settings.corporafolders.kubhist2["posttidningar"] = {
    title: "Posttidningar",
    contents: ["kubhist2-posttidningar-1800", "kubhist2-posttidningar-1810", "kubhist2-posttidningar-1820"]
    // contents: ["kubhist2-posttidningar-1640", "kubhist2-posttidningar-1650", "kubhist2-posttidningar-1660", "kubhist2-posttidningar-1670", "kubhist2-posttidningar-1680", "kubhist2-posttidningar-1690", "kubhist2-posttidningar-1700", "kubhist2-posttidningar-1710", "kubhist2-posttidningar-1720", "kubhist2-posttidningar-1730", "kubhist2-posttidningar-1740", "kubhist2-posttidningar-1750", "kubhist2-posttidningar-1760", "kubhist2-posttidningar-1770", "kubhist2-posttidningar-1780", "kubhist2-    posttidningar-1790", "kubhist2-posttidningar-1800", "kubhist2-posttidningar-1810", "kubhist2-posttidningar-1820"]
};

settings.corporafolders.kubhist2["stockholmsdagblad"] = {
    title: "Stockholms Dagblad",
    contents: ["kubhist2-stockholmsdagblad-1820", "kubhist2-stockholmsdagblad-1830"]
    // contents: ["kubhist2-stockholmsdagblad-1820", "kubhist2-stockholmsdagblad-1830", "kubhist2-stockholmsdagblad-1840", "kubhist2-stockholmsdagblad-1850", "kubhist2-stockholmsdagblad-1860", "kubhist2-stockholmsdagblad-1870", "kubhist2-stockholmsdagblad-1880", "kubhist2-stockholmsdagblad-1890"]
};

settings.corporafolders.kubhist2["stockholmsposten"] = {
    title: "Stockholmsposten",
    contents: ["kubhist2-stockholmsposten-1800", "kubhist2-stockholmsposten-1810", "kubhist2-stockholmsposten-1820", "kubhist2-stockholmsposten-1830"]
    // contents: ["kubhist2-stockholmsposten-1770", "kubhist2-stockholmsposten-1780", "kubhist2-stockholmsposten-1790", "kubhist2-stockholmsposten-1800", "kubhist2-stockholmsposten-1810", "kubhist2-stockholmsposten-1820", "kubhist2-stockholmsposten-1830"]
};

settings.corporafolders.kubhist2["vestmanlandslanstidning"] = {
    title: "Vestmanlands Läns Tidning",
    contents: ["kubhist2-vestmanlandslanstidning-1830"]
    // contents: ["kubhist2-vestmanlandslanstidning-1830", "kubhist2-vestmanlandslanstidning-1840", "kubhist2-vestmanlandslanstidning-1850", "kubhist2-vestmanlandslanstidning-1860", "kubhist2-vestmanlandslanstidning-1870", "kubhist2-vestmanlandslanstidning-1880", "kubhist2-vestmanlandslanstidning-1890"]
};

settings.corporafolders.kubhist2["wexjobladet"] = {
    title: "Wexjöbladet",
    contents: ["kubhist2-wexjobladet-1810", "kubhist2-wexjobladet-1820", "kubhist2-wexjobladet-1830", "kubhist2-wexjobladet-1840", "kubhist2-wexjobladet-1850"]
};

/////////////////////////////////////////////////////////////////////////////////////
// Corpora

settings.corpora["kubhist2-aftonbladet-1830"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-aftonbladet-1830",
    title: "Aftonbladet 1830-talet"
});

settings.corpora["kubhist2-aftonbladet-1840"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-aftonbladet-1840",
    title: "Aftonbladet 1840-talet"
});

settings.corpora["kubhist2-aftonbladet-1850"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-aftonbladet-1850",
    title: "Aftonbladet 1850-talet"
});

settings.corpora["kubhist2-aftonbladet-1860"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-aftonbladet-1860",
    title: "Aftonbladet 1860-talet"
});

settings.corpora["kubhist2-alfwarochskamt-1840"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-alfwarochskamt-1840",
    title: "Alfwar och Skämt 1840-talet"
});

settings.corpora["kubhist2-barometern-1840"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-barometern-1840",
    title: "Barometern 1840-talet"
});

settings.corpora["kubhist2-barometern-1850"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-barometern-1850",
    title: "Barometern 1850-talet"
});

settings.corpora["kubhist2-barometern-1860"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-barometern-1860",
    title: "Barometern 1860-talet"
});

settings.corpora["kubhist2-barometern-1870"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-barometern-1870",
    title: "Barometern 1870-talet"
});

settings.corpora["kubhist2-barometern-1880"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-barometern-1880",
    title: "Barometern 1880-talet"
});

settings.corpora["kubhist2-barometern-1890"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-barometern-1890",
    title: "Barometern 1890-talet"
});

settings.corpora["kubhist2-blekingsposten-1850"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-blekingsposten-1850",
    title: "Blekingsposten 1850-talet"
});

settings.corpora["kubhist2-blekingsposten-1860"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-blekingsposten-1860",
    title: "Blekingsposten 1860-talet"
});

settings.corpora["kubhist2-blekingsposten-1870"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-blekingsposten-1870",
    title: "Blekingsposten 1870-talet"
});

settings.corpora["kubhist2-blekingsposten-1880"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-blekingsposten-1880",
    title: "Blekingsposten 1880-talet"
});

settings.corpora["kubhist2-bollnastidning-1870"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-bollnastidning-1870",
    title: "Bollnäs Tidning 1870-talet"
});

settings.corpora["kubhist2-bollnastidning-1880"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-bollnastidning-1880",
    title: "Bollnäs Tidning 1880-talet"
});

settings.corpora["kubhist2-borastidning-1830"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-borastidning-1830",
    title: "Borås Tidning 1830-talet"
});

settings.corpora["kubhist2-borastidning-1840"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-borastidning-1840",
    title: "Borås Tidning 1840-talet"
});

settings.corpora["kubhist2-borastidning-1850"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-borastidning-1850",
    title: "Borås Tidning 1850-talet"
});

settings.corpora["kubhist2-borastidning-1860"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-borastidning-1860",
    title: "Borås Tidning 1860-talet"
});

settings.corpora["kubhist2-borastidning-1870"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-borastidning-1870",
    title: "Borås Tidning 1870-talet"
});

settings.corpora["kubhist2-borastidning-1880"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-borastidning-1880",
    title: "Borås Tidning 1880-talet"
});

settings.corpora["kubhist2-borastidning-1890"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-borastidning-1890",
    title: "Borås Tidning 1890-talet"
});

settings.corpora["kubhist2-carlscronastidningar-1760"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-carlscronastidningar-1760",
    title: "Carlscronas Tidningar 1760-talet"
});

settings.corpora["kubhist2-carlscronaswekoblad-1750"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-carlscronaswekoblad-1750",
    title: "Carlscronas Wekoblad 1750-talet"
});

settings.corpora["kubhist2-carlscronaswekoblad-1760"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-carlscronaswekoblad-1760",
    title: "Carlscronas Wekoblad 1760-talet"
});

settings.corpora["kubhist2-carlscronaswekoblad-1770"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-carlscronaswekoblad-1770",
    title: "Carlscronas Wekoblad 1770-talet"
});

settings.corpora["kubhist2-carlscronaswekoblad-1780"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-carlscronaswekoblad-1780",
    title: "Carlscronas Wekoblad 1780-talet"
});

settings.corpora["kubhist2-carlscronaswekoblad-1790"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-carlscronaswekoblad-1790",
    title: "Carlscronas Wekoblad 1790-talet"
});

settings.corpora["kubhist2-carlscronaswekoblad-1800"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-carlscronaswekoblad-1800",
    title: "Carlscronas Wekoblad 1800-talet"
});

settings.corpora["kubhist2-carlscronaswekoblad-1810"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-carlscronaswekoblad-1810",
    title: "Carlscronas Wekoblad 1810-talet"
});

settings.corpora["kubhist2-carlscronaswekoblad-1820"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-carlscronaswekoblad-1820",
    title: "Carlscronas Wekoblad 1820-talet"
});

settings.corpora["kubhist2-carlscronaswekoblad-1830"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-carlscronaswekoblad-1830",
    title: "Carlscronas Wekoblad 1830-talet"
});

settings.corpora["kubhist2-carlscronaswekoblad-1840"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-carlscronaswekoblad-1840",
    title: "Carlscronas Wekoblad 1840-talet"
});

settings.corpora["kubhist2-carlscronaswekoblad-1850"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-carlscronaswekoblad-1850",
    title: "Carlscronas Wekoblad 1850-talet"
});

settings.corpora["kubhist2-carlscronaswekoblad-1860"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-carlscronaswekoblad-1860",
    title: "Carlscronas Wekoblad 1860-talet"
});

settings.corpora["kubhist2-carlscronaswekoblad-1870"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-carlscronaswekoblad-1870",
    title: "Carlscronas Wekoblad 1870-talet"
});

settings.corpora["kubhist2-dagligtallehanda-1760"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-dagligtallehanda-1760",
    title: "Dagligt Allehanda 1760-talet"
});

settings.corpora["kubhist2-dagligtallehanda-1770"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-dagligtallehanda-1770",
    title: "Dagligt Allehanda 1770-talet"
});

settings.corpora["kubhist2-dagligtallehanda-1780"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-dagligtallehanda-1780",
    title: "Dagligt Allehanda 1780-talet"
});

settings.corpora["kubhist2-dagligtallehanda-1790"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-dagligtallehanda-1790",
    title: "Dagligt Allehanda 1790-talet"
});

settings.corpora["kubhist2-dagligtallehanda-1800"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-dagligtallehanda-1800",
    title: "Dagligt Allehanda 1800-talet"
});

settings.corpora["kubhist2-dagligtallehanda-1810"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-dagligtallehanda-1810",
    title: "Dagligt Allehanda 1810-talet"
});

settings.corpora["kubhist2-dagligtallehanda-1820"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-dagligtallehanda-1820",
    title: "Dagligt Allehanda 1820-talet"
});

settings.corpora["kubhist2-dagligtallehanda-1830"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-dagligtallehanda-1830",
    title: "Dagligt Allehanda 1830-talet"
});

settings.corpora["kubhist2-dagligtallehanda-1840"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-dagligtallehanda-1840",
    title: "Dagligt Allehanda 1840-talet"
});

settings.corpora["kubhist2-dalpilen-1850"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-dalpilen-1850",
    title: "Dalpilen 1850-talet"
});

settings.corpora["kubhist2-dalpilen-1860"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-dalpilen-1860",
    title: "Dalpilen 1860-talet"
});

settings.corpora["kubhist2-dalpilen-1870"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-dalpilen-1870",
    title: "Dalpilen 1870-talet"
});

settings.corpora["kubhist2-dalpilen-1880"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-dalpilen-1880",
    title: "Dalpilen 1880-talet"
});

settings.corpora["kubhist2-dalpilen-1890"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-dalpilen-1890",
    title: "Dalpilen 1890-talet"
});

settings.corpora["kubhist2-dalpilen-1900"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-dalpilen-1900",
    title: "Dalpilen 1900-talet"
});

settings.corpora["kubhist2-fahluweckoblad-1780"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-fahluweckoblad-1780",
    title: "Fahlu Weckoblad 1780-talet"
});

settings.corpora["kubhist2-fahluweckoblad-1790"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-fahluweckoblad-1790",
    title: "Fahlu Weckoblad 1790-talet"
});

settings.corpora["kubhist2-fahluweckoblad-1800"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-fahluweckoblad-1800",
    title: "Fahlu Weckoblad 1800-talet"
});

settings.corpora["kubhist2-fahluweckoblad-1810"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-fahluweckoblad-1810",
    title: "Fahlu Weckoblad 1810-talet"
});

settings.corpora["kubhist2-fahluweckoblad-1820"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-fahluweckoblad-1820",
    title: "Fahlu Weckoblad 1820-talet"
});

settings.corpora["kubhist2-falkopingstidning-1850"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-falkopingstidning-1850",
    title: "Falköpings Tidning 1850-talet"
});

settings.corpora["kubhist2-falkopingstidning-1860"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-falkopingstidning-1860",
    title: "Falköpings Tidning 1860-talet"
});

settings.corpora["kubhist2-falkopingstidning-1870"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-falkopingstidning-1870",
    title: "Falköpings Tidning 1870-talet"
});

settings.corpora["kubhist2-falkopingstidning-1880"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-falkopingstidning-1880",
    title: "Falköpings Tidning 1880-talet"
});

settings.corpora["kubhist2-falkopingstidning-1890"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-falkopingstidning-1890",
    title: "Falköpings Tidning 1890-talet"
});

settings.corpora["kubhist2-faluposten-1860"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-faluposten-1860",
    title: "Faluposten 1860-talet"
});

settings.corpora["kubhist2-faluposten-1870"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-faluposten-1870",
    title: "Faluposten 1870-talet"
});

settings.corpora["kubhist2-faluposten-1880"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-faluposten-1880",
    title: "Faluposten 1880-talet"
});

settings.corpora["kubhist2-faluposten-1890"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-faluposten-1890",
    title: "Faluposten 1890-talet"
});

settings.corpora["kubhist2-folketsrost-1840"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-folketsrost-1840",
    title: "Folkets Röst 1840-talet"
});

settings.corpora["kubhist2-folketsrost-1850"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-folketsrost-1850",
    title: "Folkets Röst 1850-talet"
});

settings.corpora["kubhist2-folketsrost-1860"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-folketsrost-1860",
    title: "Folkets Röst 1860-talet"
});

settings.corpora["kubhist2-ghost-1830"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-ghost-1830",
    title: "Göteborgs Handels- och Sjöfartstidning 1830-talet"
});

settings.corpora["kubhist2-gotheborgsallehanda-1800"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-gotheborgsallehanda-1800",
    title: "Götheborgs Allehanda 1800-talet"
});

settings.corpora["kubhist2-gotheborgsallehanda-1810"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-gotheborgsallehanda-1810",
    title: "Götheborgs Allehanda 1810-talet"
});

settings.corpora["kubhist2-gotheborgsallehanda-1820"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-gotheborgsallehanda-1820",
    title: "Götheborgs Allehanda 1820-talet"
});

settings.corpora["kubhist2-gotheborgsallehanda-1830"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-gotheborgsallehanda-1830",
    title: "Götheborgs Allehanda 1830-talet"
});

settings.corpora["kubhist2-gotheborgskanyheter-1800"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-gotheborgskanyheter-1800",
    title: "Götheborgska Nyheter 1800-talet"
});

settings.corpora["kubhist2-gotheborgskanyheter-1810"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-gotheborgskanyheter-1810",
    title: "Götheborgska Nyheter 1810-talet"
});

settings.corpora["kubhist2-gotheborgskanyheter-1820"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-gotheborgskanyheter-1820",
    title: "Götheborgska Nyheter 1820-talet"
});

settings.corpora["kubhist2-gotheborgskanyheter-1830"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-gotheborgskanyheter-1830",
    title: "Götheborgska Nyheter 1830-talet"
});

settings.corpora["kubhist2-inrikestidningar-1800"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-inrikestidningar-1800",
    title: "Inrikes Tidningar 1800-talet"
});

settings.corpora["kubhist2-inrikestidningar-1810"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-inrikestidningar-1810",
    title: "Inrikes Tidningar 1810-talet"
});

settings.corpora["kubhist2-inrikestidningar-1820"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-inrikestidningar-1820",
    title: "Inrikes Tidningar 1820-talet"
});

settings.corpora["kubhist2-kalmar-1900"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-kalmar-1900",
    title: "Kalmar 1900-talet"
});

settings.corpora["kubhist2-lundsweckoblad-1810"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-lundsweckoblad-1810",
    title: "Lunds Weckoblad 1810-talet"
});

settings.corpora["kubhist2-lundsweckoblad-1820"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-lundsweckoblad-1820",
    title: "Lunds Weckoblad 1820-talet"
});

settings.corpora["kubhist2-lundsweckoblad-1830"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-lundsweckoblad-1830",
    title: "Lunds Weckoblad 1830-talet"
});

settings.corpora["kubhist2-malmoallehanda-1820"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-malmoallehanda-1820",
    title: "Malmö Allehanda 1820-talet"
});

settings.corpora["kubhist2-malmoallehanda-1830"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-malmoallehanda-1830",
    title: "Malmö Allehanda 1830-talet"
});

settings.corpora["kubhist2-norrkopingstidningar-1800"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-norrkopingstidningar-1800",
    title: "Norrköpings Tidningar 1800-talet"
});

settings.corpora["kubhist2-norrkopingstidningar-1810"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-norrkopingstidningar-1810",
    title: "Norrköpings Tidningar 1810-talet"
});

settings.corpora["kubhist2-norrkopingstidningar-1820"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-norrkopingstidningar-1820",
    title: "Norrköpings Tidningar 1820-talet"
});

settings.corpora["kubhist2-norrkopingstidningar-1830"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-norrkopingstidningar-1830",
    title: "Norrköpings Tidningar 1830-talet"
});

settings.corpora["kubhist2-nyttochgammalt-1800"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-nyttochgammalt-1800",
    title: "Nytt och Gammalt 1800-talet"
});

settings.corpora["kubhist2-nyttochgammalt-1810"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-nyttochgammalt-1810",
    title: "Nytt och Gammalt 1810-talet"
});

settings.corpora["kubhist2-ostgotacorrespondenten-1830"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-ostgotacorrespondenten-1830",
    title: "Östgöta Correspondenten 1830-talet"
});

settings.corpora["kubhist2-ostgotaposten-1900"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-ostgotaposten-1900",
    title: "Östgötaposten 1900-talet"
});

settings.corpora["kubhist2-post-ochinrikestidningar-1820"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-post-ochinrikestidningar-1820",
    title: "Post- och Inrikes Tidningar 1820-talet"
});

settings.corpora["kubhist2-post-ochinrikestidningar-1830"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-post-ochinrikestidningar-1830",
    title: "Post- och Inrikes Tidningar 1830-talet"
});

settings.corpora["kubhist2-posttidningar-1800"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-posttidningar-1800",
    title: "Posttidningar 1800-talet"
});

settings.corpora["kubhist2-posttidningar-1810"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-posttidningar-1810",
    title: "Posttidningar 1810-talet"
});

settings.corpora["kubhist2-posttidningar-1820"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-posttidningar-1820",
    title: "Posttidningar 1820-talet"
});

settings.corpora["kubhist2-stockholmsdagblad-1820"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-stockholmsdagblad-1820",
    title: "Stockholms Dagblad 1820-talet"
});

settings.corpora["kubhist2-stockholmsdagblad-1830"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-stockholmsdagblad-1830",
    title: "Stockholms Dagblad 1830-talet"
});

settings.corpora["kubhist2-stockholmsposten-1800"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-stockholmsposten-1800",
    title: "Stockholmsposten 1800-talet"
});

settings.corpora["kubhist2-stockholmsposten-1810"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-stockholmsposten-1810",
    title: "Stockholmsposten 1810-talet"
});

settings.corpora["kubhist2-stockholmsposten-1820"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-stockholmsposten-1820",
    title: "Stockholmsposten 1820-talet"
});

settings.corpora["kubhist2-stockholmsposten-1830"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-stockholmsposten-1830",
    title: "Stockholmsposten 1830-talet"
});

settings.corpora["kubhist2-vestmanlandslanstidning-1830"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-vestmanlandslanstidning-1830",
    title: "Vestmanlands Läns Tidning 1830-talet"
});

settings.corpora["kubhist2-wexjobladet-1810"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-wexjobladet-1810",
    title: "Wexjöbladet 1810-talet"
});

settings.corpora["kubhist2-wexjobladet-1820"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-wexjobladet-1820",
    title: "Wexjöbladet 1820-talet"
});

settings.corpora["kubhist2-wexjobladet-1830"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-wexjobladet-1830",
    title: "Wexjöbladet 1830-talet"
});

settings.corpora["kubhist2-wexjobladet-1840"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-wexjobladet-1840",
    title: "Wexjöbladet 1840-talet"
});

settings.corpora["kubhist2-wexjobladet-1850"] = _.extend({}, kubhist2_settings, {
    id: "kubhist2-wexjobladet-1850",
    title: "Wexjöbladet 1850-talet"
});

/////////////////////////////////////////////////////////////////////////////////////
settings.corpora = _(settings.corpora)
                        .sortBy("title")
                        .map(function(item) {return [item.id, item]})
                        .fromPairs()
                        .value()

settings.corpusListing = new CorpusListing(settings.corpora);
