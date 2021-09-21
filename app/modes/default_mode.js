settings.newMapEnabled = true;

settings.corpora = {};
settings.corporafolders = {};

settings.globalFilterCorpora = ["ivip", "asu"]

settings.corporafolders.sweac = {
    title: "Akademiska texter",
    contents: ["sweachum", "sweacsam"]
};

settings.corporafolders.strindberg = {
    title: "August Strindberg",
    contents: ["strindbergromaner", "strindbergbrev"]
};

settings.corporafolders.fisk = {
    title: "Finlandssvenska texter",
    contents: [],
    description: "Det första steget för att skapa en finlandssvensk korpus togs redan " +
            "på 1990-talet (Institutionen för nordiska språk vid Helsingfors universitet) " +
            "och under åren 1999–2000 fortsatte arbetet (ett samarbetsprojekt mellan " +
            "Institutet för de inhemska språken, Institutionen för allmän språkvetenskap " +
            "och CSC (IT Center for Science)). Under åren 2011–2013 byggs den finlandssvenska " +
            "korpusen ut som ett samarbetsprojekt mellan Svenska litteratursällskapet i Finland, " +
            "Institutet för de inhemska språken och Göteborgs universitet."
};

settings.corporafolders.fisk.webtexts = {
    title: "Webbtexter",
    contents: ["fsbbloggvuxna", "magmakolumner"]
};

settings.corporafolders.fisk.governmental = {
    title: "Myndighetstexter",
    contents: ["informationstidningar", "lagtexter", "myndighet", "propositioner"]
};

settings.corporafolders.fisk.literature = {
    title: "Skön- och facklitteratur",
    contents: ["barnlitteratur", "fsbessaistik", "fsbsakprosa", "fsbskonlit1960-1999", "fsbskonlit2000tal", "ungdomslitteratur"]
};

settings.corporafolders.fisk.newspapertexts = {
    title: "Tidningstexter",
    contents: ["borgabladet", "vastranyland", "at2012", "ostranyland"]
};

settings.corporafolders.fisk.newspapertexts.fnb = {
    title: "FNB",
    contents: ["fnb1999", "fnb2000"],
    description: "<a href=\"http://www.stt.fi/sv\" target=\"_blank\">FNB</a> är Finlands ledande nyhets- och bildbyrå."
};

settings.corporafolders.fisk.newspapertexts.hbl = {
    title: "Hufvudstadsbladet",
    contents: ["hbl1991", "hbl1998", "hbl1999", "hbl20122013", "hbl2014"],
    description: "<a href=\"http://www.hbl.fi\" target=\"_blank\">Hufvudstadsbladet</a> är den största finlandssvenska dagstidningen i Finland."
};

settings.corporafolders.fisk.newspapertexts.jakobstadstidning = {
    title: "Jakobstads tidning",
    contents: ["jakobstadstidning1999", "jakobstadstidning2000"],
    description: "Jakobstads Tidning var en lokal dagstidning i Österbotten som gavs ut under perioden 1898–2008."
};

settings.corporafolders.fisk.newspapertexts.pargaskungorelser = {
    title: "Pargas kungörelser",
    contents: ["pargaskungorelser2011", "pargaskungorelser2012"],
    description: "<a href=\"http://www.pku.fi\" target=\"_blank\">Pargas Kungörelser</a> är en regional tvåspråkig (svenska och finska) tidning med spridning i Pargas med omnejd. I korpusen är endast den svenskspråkiga delen av tidningen med."
};

settings.corporafolders.fisk.newspapertexts.sydosterbotten = {
    title: "Syd-Österbotten",
    contents: ["sydosterbotten2010", "sydosterbotten2011", "sydosterbotten2012", "sydosterbotten2013", "sydosterbotten2014"],
    description: "<a href=\"http://www.sydin.fi\" target=\"_blank\">Syd-Österbotten</a> är en regional svenskspråkig dagstidning i Österbotten."
};

settings.corporafolders.fisk.newspapertexts.vasab = {
    title: "Vasabladet",
    contents: ["vasabladet1991", "vasabladet2012", "vasabladet2013", "vasabladet2014"],
    description: "<a href=\"http://www.vasabladet.fi\" target=\"_blank\">Vasabladet</a> är en regional svenskspråkig dagstidning i Österbotten."
};

settings.corporafolders.fisk.newspapertexts.abounderrattelser = {
    title: "Åbo Underrättelser",
    contents: ["abounderrattelser2012", "abounderrattelser2013"],
    description: "<a href=\"www.abounderrattelser.fi\" target=\"_blank\">Åbo Underrättelser</a> är en regional svenskspråkig dagstidning i Åbotrakten."
};

settings.corporafolders.fisk.newspapertexts.osterbottenstidning = {
    title: "Österbottens Tidning",
    contents: ["osterbottenstidning2011", "osterbottenstidning2012", "osterbottenstidning2013", "osterbottenstidning2014"],
    description: "<a href=\"http://www.ot.fi\" target=\"_blank\">Österbottens Tidning</a> är en regional svenskspråkig tidning i Österbotten."
    //
};

settings.corporafolders.fisk.magazines = {
    title: "Tidskrifter",
    contents: ["astra1960-1979", "astranova", "bullen", "fanbararen", "finsktidskrift", "forumfeot", "hankeiten", "hanken", "jft", "kallan", "meddelanden", "nyaargus", "studentbladet", "svenskbygden"]
};

settings.corporafolders.l2 = {
    title: "L2 Korp",
    contents: ["coctaill-ae", "coctaill-lt", "spinv1", "sw1203v1", "swellv1-original", "swellv1-target", "tisusv1"]
};

settings.corporafolders.medical = {
    title: "Medicinska texter",
    contents: ["diabetolog", "smittskydd"]
};

settings.corporafolders.medical.ltd = {
    title: "Läkartidningen",
    contents: ["lt1996", "lt1997", "lt1998", "lt1999", "lt2000", "lt2001", "lt2002", "lt2003", "lt2004", "lt2005", "lt2006"]
};

settings.corporafolders.governmental = {
    title: "Myndighetstexter",
    contents: ["klarsprak", "sou", "sfs"]
};

settings.corporafolders.protected = {
    title: "Skyddade korpusar",
    contents: ["ansokningar", "asu", "sprakfragor", "forhor", "gdc", "ivip", "lawline", "mepac", "mepac-i", "platsannonser", "spin-source", "soexempel", "sw1203", "sw1203v2", "swell-original", "swell-target", "tisus", "tisusv2"]
};

settings.corporafolders.novels = {
    title: "Skönlitteratur",
    contents: ["aspacsv", "romi", "romii", "rom99", "storsuc", "romg"]
};

settings.corporafolders.socialmedia = {
    title: "Sociala medier",
    contents: ["sic2"]
};

settings.corporafolders.socialmedia.bloggmix = {
    title: "Bloggmix",
    contents: ["bloggmix1998", "bloggmix1999", "bloggmix2000", "bloggmix2001", "bloggmix2002", "bloggmix2003", "bloggmix2004", "bloggmix2005", "bloggmix2006", "bloggmix2007", "bloggmix2008", "bloggmix2009", "bloggmix2010", "bloggmix2011", "bloggmix2012", "bloggmix2013", "bloggmix2014", "bloggmix2015", "bloggmix2016", "bloggmix2017", "bloggmixodat"],
    description: "Material från ett urval av svenska bloggar. Uppdateras regelbundet."
};

settings.corporafolders.socialmedia.forum = {
    title: "Diskussionsforum",
    contents: []
};

settings.corporafolders.socialmedia.forum.familjeliv = {
    title: "Familjeliv",
    contents: ["familjeliv-adoption", "familjeliv-allmanna-ekonomi", "familjeliv-allmanna-familjeliv", "familjeliv-allmanna-fritid", "familjeliv-allmanna-hushem", "familjeliv-allmanna-husdjur", "familjeliv-allmanna-kropp", "familjeliv-allmanna-noje", "familjeliv-allmanna-samhalle", "familjeliv-allmanna-sandladan", "familjeliv-expert", "familjeliv-foralder", "familjeliv-gravid", "familjeliv-kansliga", "familjeliv-medlem-allmanna", "familjeliv-medlem-foraldrar", "familjeliv-medlem-planerarbarn", "familjeliv-medlem-vantarbarn", "familjeliv-pappagrupp", "familjeliv-planerarbarn", "familjeliv-sexsamlevnad", "familjeliv-svartattfabarn", "familjeliv-anglarum"],
    description: "Material från diskussionsforumet <a target=\"_blank\" href=\"https://www.familjeliv.se/\">Familjeliv</a>. Materialet är under uppbyggnad."
};

settings.corporafolders.socialmedia.forum.flashback = {
    title: "Flashback",
    contents: ["flashback-dator", "flashback-droger", "flashback-ekonomi", "flashback-fordon", "flashback-hem", "flashback-kultur", "flashback-livsstil", "flashback-mat", "flashback-politik", "flashback-resor", "flashback-samhalle", "flashback-sex", "flashback-sport", "flashback-vetenskap", "flashback-ovrigt", "flashback-flashback"],
    description: "Material från diskussionsforumet <a target=\"_blank\" href=\"https://www.flashback.org/\">Flashback</a>."
};

settings.corporafolders.socialmedia.twitter = {
    title: "Twitter",
    contents: ["twitter", "twitter-pldebatt-130612", "twitter-pldebatt-131006", "twitter-pldebatt-140504", "twitter-2015", "twitter-2016", "twitter-2017"]
};

settings.corporafolders.newspapertexts = {
    title: "Tidningstexter",
    contents: ["attasidor", "dn1987", "ordat"]
};

settings.corporafolders.newspapertexts.gp = {
    title: "GP",
    contents: ["gp1994", "gp2001", "gp2002", "gp2003", "gp2004", "gp2005", "gp2006", "gp2007", "gp2008", "gp2009", "gp2010", "gp2011", "gp2012", "gp2013", "gp2d"]
};

settings.corporafolders.newspapertexts.press = {
    title: "Press",
    contents: ["press65", "press76", "press95", "press96", "press97", "press98"]
};

settings.corporafolders.newspapertexts.webnews = {
    title: "Webbnyheter",
    contents: ["webbnyheter2001", "webbnyheter2002", "webbnyheter2003", "webbnyheter2004", "webbnyheter2005", "webbnyheter2006", "webbnyheter2007", "webbnyheter2008", "webbnyheter2009", "webbnyheter2010", "webbnyheter2011", "webbnyheter2012", "webbnyheter2013"]
};

settings.corporafolders.magazines = {
    title: "Tidskrifter",
    contents: ["fof"]
};




/*
 * PRESELECTED CORPORA
 * Folders will be expanded to all corpora. Optionally prefix folders with __ , which will be ignored.
 */
settings.preselectedCorpora = ["suc3", "wikipedia-sv", "talbanken", "sfs", "snp7879", "__newspapertexts", "__fisk",
                                "fof", "twitter", "__socialmedia.bloggmix", "romi", "romii", "rom99", "storsuc"];

/*
 * CORPORA
 */

settings.corpora["magmakolumner"] = {
    id: "magmakolumner",
    title: "Magma kolumner 2009–2012",
    description: "Material ur kolumner publicerade av <a target=\"_blank\" href=\"http://www.magma.fi\">Tankesmedjan Magma</a>",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title", order : 1},
        text_date: {label: "date"}
    }
};

settings.corpora["fsbbloggvuxna"] = {
    id: "fsbbloggvuxna",
    title: "Bloggtexter 2006–2013",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        blog_title: {label: "blog_title"},
        blog_url: {label: "blog_url", type: "url"},
        blog_age: {label: "author_age"},
        blog_city: {label: "city"},
        text_title: {label: "post_title"},
        text_date: {label: "date"},
        text_tags: {label: "tags", type: "set"},
        text_url: {label: "post_url", type: "url"}
    }
};

settings.corpora["fsbskonlit1960-1999"] = {
    id: "fsbskonlit1960-1999",
    title: "Skönlitteratur 1960–1999",
    description: "Material ur skönlitterära verk publicerade under 1960–1999.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_date: {label: "year"},
        text_publisher: {label: "publisher"}
    }
};

settings.corpora["fsbskonlit2000tal"] = {
    id: "fsbskonlit2000tal",
    title: "Skönlitteratur 2000–2013",
    description: "Material ur skönlitterära verk publicerade under 2000–2013.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_date: {label: "year"},
        text_publisher: {label: "publisher"}
    }
};

settings.corpora["barnlitteratur"] = {
    id: "barnlitteratur",
    title: "Barnlitteratur 1988–2013",
    description: "Material ur barnlitterära verk publicerade under 2000–2013.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_date: {label: "year"},
        text_publisher: {label: "publisher"}
    }
};

settings.corpora["fsbessaistik"] = {
    id: "fsbessaistik",
    title: "Essäistisk litteratur 1963–2010",
    description: "Material ur essäistiska verk publicerade under 1992–2013",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_date: {label: "year"},
        text_publisher: {label: "publisher"}
    }
};

settings.corpora["fsbsakprosa"] = {
    id: "fsbsakprosa",
    title: "Sakprosa 2006–2013",
    description: "Material ur facklitterära verk publicerade under 2006–2013.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_date: {label: "year"},
        text_publisher: {label: "publisher"}
    }
};

settings.corpora["ungdomslitteratur"] = {
    id: "ungdomslitteratur",
    title: "Ungdomslitteratur 1992–2011",
    description: "Material ur ungdomslitterära verk publicerade under 1992–2013.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_date: {label: "year"},
        text_publisher: {label: "publisher"}
    }
};

settings.corpora["informationstidningar"] = {
    id: "informationstidningar",
    title: "Kommuners och städers informationstidningar 2001–2013",
    description: "Material ur informationstidningar som ges ut av kommuner och städer.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"},
        text_title: {label: "title"}
    }
};

settings.corpora["lagtexter"] = {
    id: "lagtexter",
    title: "Lagtexter 1990–2000",
    description: "Material ur Finlands lag.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
    }
};

settings.corpora["myndighet"] = {
    id: "myndighet",
    title: "Myndighetsprosa 1990–2013",
    description: "Material ur bland annat Utbildningsstyrelsens, Undervisningsministeriets och Länsstyrelsens publikationer.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_publisher: {label: "publisher"},
        text_title: {label: "title"}
    }
};

settings.corpora["propositioner"] = {
    id: "propositioner",
    title: "Propositioner 1993–2013",
    description: 'Material ur <a target="_blank" href="http://www.eduskunta.fi/triphome/bin/vexhaku.sh?lyh=HE?kieli=ru">regeringens propositioner</a>.',
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_title: {label: "title"}
    }
};

settings.corpora["finsktidskrift"] = {
    id: "finsktidskrift",
    title: "Finsk tidskrift 2011–2012",
    description: "<a target=\"_blank\" href=\"http://www.abo.fi/public/finsktidskrift\">Finsk Tidskrift</a> är en tidskrift som strävar efter ingående reflektion inom ett brett område och vill ge djupare historisk, politisk och kulturell förståelse av den aktuella samtidsdebatten.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"}
    }
};

settings.corpora["forumfeot"] = {
    id: "forumfeot",
    title: "Forum för ekonomi och teknik 2008–2012",
    description: "<a target=\"_blank\" href=\"http://www.forummag.fi\">Forum för ekonomi och teknik</a> är Finlands enda svenskspråkiga affärsmagasin och ger sina läsare information om näringsliv, ledarskap och teknologi.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["hanken"] = {
    id: "hanken",
    title: "Hanken 2008–2011",
    description: "Tidningen <a target=\"_blank\" href=\"http://www.hanken.fi/public/alumntidning\">Hanken</a> är Svenska handelshögskolans alumntidning.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"}
    }
};

settings.corpora["svenskbygden"] = {
    id: "svenskbygden",
    title: "Svenskbygden 2010–2011",
    description: "<a target=\"_blank\" href=\"http://www.sfv.fi/publikationer/svenskbygden/\">Svenskbygden</a> är Svenska Folkskolans Vänners medlemstidning. Tiskriften innehåller artiklar som berör allt från utbildning och aktuella samhällsfrågor till kultur och litteratur.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_year: {label: "year"},
        text_issue: {label: "issue"}
    }
};

settings.corpora["studentbladet"] = {
    id: "studentbladet",
    title: "Studentbladet 2011",
    description: "<a target=\"_blank\" href=\"http://www.stbl.fi\">Studentbladet</a> är en tidskrift som bevakar samtliga svenskspråkiga studieorter på fastlandet i Finland.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"}
    }
};

settings.corpora["jakobstadstidning1999"] = {
    id: "jakobstadstidning1999",
    title: "Jakobstads tidning 1999",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["jakobstadstidning2000"] = {
    id: "jakobstadstidning2000",
    title: "Jakobstads tidning 2000",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["sweachum"] = {
    id: "sweachum",
    title: "Humaniora",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_type: {
            label: "type",
            extendedComponent: "structServiceSelect"
        },
        text_subject: {
            label: "subject",
            extendedComponent: "structServiceSelect"
        }
    }
};

settings.corpora["sweacsam"] = {
    id: "sweacsam",
    title: "Samhällsvetenskap",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_type: {
            label: "type",
            extendedComponent: "structServiceSelect"
        },
        text_subject: {
            label: "subject",
            extendedComponent: "datasetSelect",
            dataset: {
                "Ekonomi och näringsliv": "Ekonomi och näringsliv",
                "Juridik": "Juridik",
                "Medie- och kommunikationsvetenskap": "Medie- och kommunikationsvetenskap",
                "Psykologi": "Psykologi",
                "Social och ekonomisk geografi": "Social och ekonomisk geografi",
                "Sociologi": "Sociologi",
                "Statsvetenskap": "Statsvetenskap",
                "Utbildningsvetenskap": "Utbildningsvetenskap"
            }
        }
    }
};

settings.corpora["attasidor"] = {
    id: "attasidor",
    title: "8 Sidor",
    description: "<a target=\"_blank\" href=\"http://www.8sidor.se/\">8 Sidor</a> är en lättläst nyhetstidning.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_title: {label: "title"},
        text_url: {label: "url", type: "url"},
        text_tags: {label: "tags", type: "set"},
        sentence_id: {
            displayType: "hidden"
        }
    }
};

settings.corpora["dn1987"] = {
    id: "dn1987",
    title: "DN 1987",
    description: "Dagens Nyheter 1987.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_sectionshort: {label: "section"}
    }
};

settings.corpora["webbnyheter2001"] = {
    id: "webbnyheter2001",
    title: "Webbnyheter 2001",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_title: {label: "title"},
        text_url: {label: "url", type: "url"},
        text_newspaper: {label: "newspaper"}
    }
};

settings.corpora["webbnyheter2002"] = {
    id: "webbnyheter2002",
    title: "Webbnyheter 2002",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_title: {label: "title"},
        text_url: {label: "url" , type: "url"},
        text_newspaper: {label: "newspaper"}
    }
};

settings.corpora["webbnyheter2003"] = {
    id: "webbnyheter2003",
    title: "Webbnyheter 2003",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_title: {label: "title"},
        text_url: {label: "url" , type: "url"},
        text_newspaper: {label: "newspaper"}
    }
};

settings.corpora["webbnyheter2004"] = {
    id: "webbnyheter2004",
    title: "Webbnyheter 2004",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_title: {label: "title"},
        text_url: {label: "url" , type: "url"},
        text_newspaper: {label: "newspaper"}
    }
};

settings.corpora["webbnyheter2005"] = {
    id: "webbnyheter2005",
    title: "Webbnyheter 2005",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_title: {label: "title"},
        text_url: {label: "url" , type: "url"},
        text_newspaper: {label: "newspaper"}
    }
};

settings.corpora["webbnyheter2006"] = {
    id: "webbnyheter2006",
    title: "Webbnyheter 2006",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_title: {label: "title"},
        text_url: {label: "url" , type: "url"},
        text_newspaper: {label: "newspaper"}
    }
};

settings.corpora["webbnyheter2007"] = {
    id: "webbnyheter2007",
    title: "Webbnyheter 2007",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_title: {label: "title"},
        text_url: {label: "url" , type: "url"},
        text_newspaper: {label: "newspaper"}
    }
};

settings.corpora["webbnyheter2008"] = {
    id: "webbnyheter2008",
    title: "Webbnyheter 2008",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_title: {label: "title"},
        text_url: {label: "url" , type: "url"},
        text_newspaper: {label: "newspaper"}
    }
};

settings.corpora["webbnyheter2009"] = {
    id: "webbnyheter2009",
    title: "Webbnyheter 2009",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_title: {label: "title"},
        text_url: {label: "url" , type: "url"},
        text_newspaper: {label: "newspaper"}
    }
};

settings.corpora["webbnyheter2010"] = {
    id: "webbnyheter2010",
    title: "Webbnyheter 2010",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_title: {label: "title"},
        text_url: {label: "url" , type: "url"},
        text_newspaper: {label: "newspaper"}
    }
};

settings.corpora["webbnyheter2011"] = {
    id: "webbnyheter2011",
    title: "Webbnyheter 2011",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_title: {label: "title"},
        text_url: {label: "url" , type: "url"},
        text_newspaper: {label: "newspaper"}
    }
};

settings.corpora["webbnyheter2012"] = {
    id: "webbnyheter2012",
    title: "Webbnyheter 2012",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_title: {label: "title"},
        text_url: {label: "url" , type: "url"},
        text_newspaper: {label: "newspaper"}
    }
};

settings.corpora["webbnyheter2013"] = {
    id: "webbnyheter2013",
    title: "Webbnyheter 2013",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_title: {label: "title"},
        text_url: {label: "url" , type: "url"},
        text_newspaper: {label: "newspaper"}
    }
};

settings.corpora["gp1994"] = {
    id: "gp1994",
    title: "GP 1994",
    description: "Göteborgs-Posten 1994.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_section: {label: "section"}
    }
};

settings.corpora["gp2001"] = {
    id: "gp2001",
    title: "GP 2001",
    description: "Göteborgs-Posten 2001.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_sectionshort: {label: "section"}
    }
};

settings.corpora["gp2002"] = {
    id: "gp2002",
    title: "GP 2002",
    description: "Göteborgs-Posten 2002.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_sectionshort: {label: "section"}
    }
};

settings.corpora["gp2003"] = {
    id: "gp2003",
    title: "GP 2003",
    description: "Göteborgs-Posten 2003.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_sectionshort: {label: "section"}
    }
};

settings.corpora["gp2004"] = {
    id: "gp2004",
    title: "GP 2004",
    description: "Göteborgs-Posten 2004.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_sectionshort: {label: "section"}
    }
};

settings.corpora["gp2005"] = {
    id: "gp2005",
    title: "GP 2005",
    description: "Göteborgs-Posten 2005.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_sectionshort: {label: "section"}
    }
};

settings.corpora["gp2006"] = {
    id: "gp2006",
    title: "GP 2006",
    description: "Göteborgs-Posten 2006.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_sectionshort: {label: "section"}
    }
};

settings.corpora["gp2007"] = {
    id: "gp2007",
    title: "GP 2007",
    description: "Göteborgs-Posten 2007.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_sectionshort: {label: "section"}
    }
};

settings.corpora["gp2008"] = {
    id: "gp2008",
    title: "GP 2008",
    description: "Göteborgs-Posten 2008.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_sectionshort: {label: "section"}
    }
};

settings.corpora["gp2009"] = {
    id: "gp2009",
    title: "GP 2009",
    description: "Göteborgs-Posten 2009.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_author: {label: "article_author"},
        text_section: {label: "article_section"}
    }
};

settings.corpora["gp2010"] = {
    id: "gp2010",
    title: "GP 2010",
    description: "Göteborgs-Posten 2010.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_author: {label: "article_author"},
        text_section: {label: "article_section"}
    }
};

settings.corpora["gp2011"] = {
    id: "gp2011",
    title: "GP 2011",
    description: "Göteborgs-Posten 2011.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_author: {label: "article_author"},
        text_section: {label: "article_section"}
    }
};

settings.corpora["gp2012"] = {
    id: "gp2012",
    title: "GP 2012",
    description: "Göteborgs-Posten 2012.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_author: {label: "article_author"},
        text_section: {label: "article_section"}
    }
};

settings.corpora["gp2013"] = {
    id: "gp2013",
    title: "GP 2013",
    description: "Göteborgs-Posten 2013.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_author: {label: "article_author"},
        text_section: {label: "article_section"}
    }
};

settings.corpora["gp2d"] = {
    id: "gp2d",
    title: "GP – Två dagar",
    description: "Helgbilaga till Göteborgs-Posten.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_issue: {label: "issue"}
    }
};

settings.corpora["ordat"] = {
    id: "ordat",
    title: "ORDAT: Svenska dagbladets årsbok 1923–1958",
    description: "25 årgångar av Svenska Dagbladets årsbok, 1923–45, 1948 och 1958.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "text_year"},
        text_volume: {label: "text_volume"}
    }
};

settings.corpora["fof"] = {
    id: "fof",
    title: "Forskning & Framsteg",
    description: "Artiklar från tidskriften Forskning & Framsteg, nummer 7, 1992 till och med nummer 8, 1996.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_issue: {label: "issue"}
    }
};

settings.corpora["press65"] = {
    id: "press65",
    title: "Press 65",
    description: "Tidningsartiklar från Göteborgs Handels- och Sjöfartstidning, Svenska Dagbladet, Stockholmstidningen, Dagens Nyheter och Sydsvenska Dagbladet.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"},
        text_publisher: {label: "article_publisher"},
        text_topic: {label: "article_topic"},
        text_genre: {label: "article_genre"}
    }
};

settings.corpora["press76"] = {
    id: "press76",
    title: "Press 76",
    description: "Tidningsartiklar från Göteborgs Handels- och Sjöfartstidning, Svenska Dagbladet, Stockholmstidningen, Dagens Nyheter och Sydsvenska Dagbladet.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_year: {label: "year"},
        text_publisher: {label: "article_publisher"}
    }
};

settings.corpora["press95"] = {
    id: "press95",
    title: "Press 95",
    description: "Tidningsartiklar från Arbetet, Dagens Nyheter, Göteborgs-Posten, Svenska Dagbladet och Sydsvenskan.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"},
        text_publisher: {label: "article_publisher"},
        text_sectionshort: {label: "section"}
    }
};

settings.corpora["press96"] = {
    id: "press96",
    title: "Press 96",
    description: "Tidningsartiklar från Göteborgs-Posten och Svenska Dagbladet.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"},
        text_publisher: {label: "article_publisher"},
        text_sectionshort: {label: "section"}
    }
};

settings.corpora["press97"] = {
    id: "press97",
    title: "Press 97",
    description: "Tidningsartiklar från DN, Göteborgs-Posten och Svenska Dagbladet.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"},
        text_publisher: {label: "publisher"},
        text_sectionshort: {label: "section"}
    }
};

settings.corpora["press98"] = {
    id: "press98",
    title: "Press 98",
    description: "Tidningsartiklar från DN, Göteborgs-Posten och Svenska Dagbladet.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"},
        text_publisher: {label: "article_publisher"},
        text_sectionshort: {label: "section"}
    }
};

settings.corpora["strindbergbrev"] = {
    id: "strindbergbrev",
    title: "August Strindbergs brev",
    description: "Samtliga tryckta och otryckta brev som var tillgängliga 1 augusti 1991.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_author: {label: "author"},
        text_recipient: {label: "text_recipient"},
        text_year: {label: "year"},
        text_month: {label: "month"},
        text_day: {label: "day"},
        text_volume: {label: "text_volume"}
    }
};

var familjeliv_structs = {
        text_username: {label: "username2"},
        text_date: {label: "date"},
        text_links: {label: "postlinks", type: "set"},
        text_url: {label: "posturl", type: "url"},
        thread_title: {label: "thread"},
        thread_postcount: {label: "threadpostcount"},
        thread_lastpost: {label: "threadlastpost"},
        thread_url: {label: "thread", type: "url"},
        forum_title: {label: "forum"},
        forum_url: {label: "forum", type: "url"}
};

settings.corpora["familjeliv-allmanna-ekonomi"] = {
    id: "familjeliv-allmanna-ekonomi",
    title: "Familjeliv: Allmänna rubriker – Ekonomi & juridik",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-allmanna-familjeliv"] = {
    id: "familjeliv-allmanna-familjeliv",
    title: "Familjeliv: Allmänna rubriker – Familjeliv.se",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-allmanna-hushem"] = {
    id: "familjeliv-allmanna-hushem",
    title: "Familjeliv: Allmänna rubriker – Hus & hem",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-allmanna-husdjur"] = {
    id: "familjeliv-allmanna-husdjur",
    title: "Familjeliv: Allmänna rubriker – Husdjur",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-allmanna-fritid"] = {
    id: "familjeliv-allmanna-fritid",
    title: "Familjeliv: Allmänna rubriker – Fritid & hobby",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-allmanna-kropp"] = {
    id: "familjeliv-allmanna-kropp",
    title: "Familjeliv: Allmänna rubriker – Kropp & själ",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-allmanna-noje"] = {
    id: "familjeliv-allmanna-noje",
    title: "Familjeliv: Allmänna rubriker – Nöje",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-allmanna-samhalle"] = {
    id: "familjeliv-allmanna-samhalle",
    title: "Familjeliv: Allmänna rubriker – Samhälle",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-allmanna-sandladan"] = {
    id: "familjeliv-allmanna-sandladan",
    title: "Familjeliv: Allmänna rubriker – Sandlådan",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-adoption"] = {
    id: "familjeliv-adoption",
    title: "Familjeliv: Adoption",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-expert"] = {
    id: "familjeliv-expert",
    title: "Familjeliv: Fråga experten",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-foralder"] = {
    id: "familjeliv-foralder",
    title: "Familjeliv: Förälder",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-gravid"] = {
    id: "familjeliv-gravid",
    title: "Familjeliv: Gravid",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-kansliga"] = {
    id: "familjeliv-kansliga",
    title: "Familjeliv: Känsliga rummet",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-medlem-allmanna"] = {
    id: "familjeliv-medlem-allmanna",
    title: "Familjeliv: Medlemstrådar – Allmänna",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};


settings.corpora["familjeliv-medlem-foraldrar"] = {
    id: "familjeliv-medlem-foraldrar",
    title: "Familjeliv: Medlemstrådar – Föräldrar",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-medlem-planerarbarn"] = {
    id: "familjeliv-medlem-planerarbarn",
    title: "Familjeliv: Medlemstrådar – Planerar barn",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};


settings.corpora["familjeliv-medlem-vantarbarn"] = {
    id: "familjeliv-medlem-vantarbarn",
    title: "Familjeliv: Medlemstrådar – Väntar barn",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-pappagrupp"] = {
    id: "familjeliv-pappagrupp",
    title: "Familjeliv: Pappagrupp",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-planerarbarn"] = {
    id: "familjeliv-planerarbarn",
    title: "Familjeliv: Planerar barn",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-sexsamlevnad"] = {
    id: "familjeliv-sexsamlevnad",
    title: "Familjeliv: Sex & samlevnad",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-svartattfabarn"] = {
    id: "familjeliv-svartattfabarn",
    title: "Familjeliv: Svårt att få barn",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

settings.corpora["familjeliv-anglarum"] = {
    id: "familjeliv-anglarum",
    title: "Familjeliv: Änglarum",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrsOld,
    structAttributes: familjeliv_structs
};

var flashback_structs = {
    text_username: {label: "username2"},
    text_date: {label: "date"},
    text_links: {label: "postlinks", type: "set"},
    text_url: {label: "posturl", type: "url"},
    thread_title: {label: "thread"},
    thread_postcount: {label: "threadpostcount"},
    thread_lastpost: {label: "threadlastpost"},
    thread_url: {label: "thread", type: "url"},
    forum_title: {label: "forum"},
    forum_url: {label: "forum", type: "url"}
};

settings.corpora["flashback-dator"] = {
    id: "flashback-dator",
    title: "Flashback: Dator & IT",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: flashback_structs
};

settings.corpora["flashback-droger"] = {
    id: "flashback-droger",
    title: "Flashback: Droger",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: flashback_structs
};

settings.corpora["flashback-ekonomi"] = {
    id: "flashback-ekonomi",
    title: "Flashback: Ekonomi",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: flashback_structs
};

settings.corpora["flashback-fordon"] = {
    id: "flashback-fordon",
    title: "Flashback: Fordon & trafik",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: flashback_structs
};

settings.corpora["flashback-hem"] = {
    id: "flashback-hem",
    title: "Flashback: Hem, bostad & familj",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: flashback_structs
};

settings.corpora["flashback-kultur"] = {
    id: "flashback-kultur",
    title: "Flashback: Kultur & media",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: flashback_structs
};

settings.corpora["flashback-livsstil"] = {
    id: "flashback-livsstil",
    title: "Flashback: Livsstil",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: flashback_structs
};

settings.corpora["flashback-mat"] = {
    id: "flashback-mat",
    title: "Flashback: Mat, dryck & tobak",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: flashback_structs
};

settings.corpora["flashback-politik"] = {
    id: "flashback-politik",
    title: "Flashback: Politik",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: flashback_structs
};

settings.corpora["flashback-resor"] = {
    id: "flashback-resor",
    title: "Flashback: Resor",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: flashback_structs
};

settings.corpora["flashback-samhalle"] = {
    id: "flashback-samhalle",
    title: "Flashback: Samhälle",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: flashback_structs
};

settings.corpora["flashback-sex"] = {
    id: "flashback-sex",
    title: "Flashback: Sex",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: flashback_structs
};

settings.corpora["flashback-sport"] = {
    id: "flashback-sport",
    title: "Flashback: Sport & träning",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: flashback_structs
};

settings.corpora["flashback-vetenskap"] = {
    id: "flashback-vetenskap",
    title: "Flashback: Vetenskap & humaniora",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: flashback_structs
};

settings.corpora["flashback-ovrigt"] = {
    id: "flashback-ovrigt",
    title: "Flashback: Övrigt",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: flashback_structs
};

settings.corpora["flashback-flashback"] = {
    id: "flashback-flashback",
    title: "Flashback: Om Flashback",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: flashback_structs
};

var bloggmix_structs = {
    blog_title: {label: "blog_title"},
    blog_url: {label: "blog_url", type: "url"},
    blog_age: {label: "author_age"},
    blog_city: {label: "city", extendedComponent: "structServiceSelect"},
    blog_categories: {label: "categories", type: "set", extendedComponent: "structServiceSelect"},
    text_title: {label: "post_title"},
    text_date: {label: "date"},
    text_tags: {label: "tags", type: "set"},
    text_url: {label: "post_url", type: "url"}
}

settings.corpora["bloggmix1998"] = {
    id: "bloggmix1998",
    title: "Bloggmix 1998",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs,
    defaultFilters: ["blog_categories"]
};

settings.corpora["bloggmix1999"] = {
    id: "bloggmix1999",
    title: "Bloggmix 1999",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs,
    defaultFilters: ["blog_categories"]
};

settings.corpora["bloggmix2000"] = {
    id: "bloggmix2000",
    title: "Bloggmix 2000",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2001"] = {
    id: "bloggmix2001",
    title: "Bloggmix 2001",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2002"] = {
    id: "bloggmix2002",
    title: "Bloggmix 2002",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2003"] = {
    id: "bloggmix2003",
    title: "Bloggmix 2003",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2004"] = {
    id: "bloggmix2004",
    title: "Bloggmix 2004",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2005"] = {
    id: "bloggmix2005",
    title: "Bloggmix 2005",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2006"] = {
    id: "bloggmix2006",
    title: "Bloggmix 2006",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2007"] = {
    id: "bloggmix2007",
    title: "Bloggmix 2007",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2008"] = {
    id: "bloggmix2008",
    title: "Bloggmix 2008",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2009"] = {
    id: "bloggmix2009",
    title: "Bloggmix 2009",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2009"] = {
    id: "bloggmix2009",
    title: "Bloggmix 2009",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2010"] = {
    id: "bloggmix2010",
    title: "Bloggmix 2010",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2011"] = {
    id: "bloggmix2011",
    title: "Bloggmix 2011",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2012"] = {
    id: "bloggmix2012",
    title: "Bloggmix 2012",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2013"] = {
    id: "bloggmix2013",
    title: "Bloggmix 2013",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2014"] = {
    id: "bloggmix2014",
    title: "Bloggmix 2014",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2015"] = {
    id: "bloggmix2015",
    title: "Bloggmix 2015",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2016"] = {
    id: "bloggmix2016",
    title: "Bloggmix 2016",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmix2017"] = {
    id: "bloggmix2017",
    title: "Bloggmix 2017",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["bloggmixodat"] = {
    id: "bloggmixodat",
    title: "Bloggmix okänt datum",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: bloggmix_structs
};

settings.corpora["coctaill"] = {
    id: "coctaill",
    title: "COCTAILL",
    description: '',
    context: spContext,
    within: spWithin,
    attributes: modernAttrs,
    structAttributes: {
        text_author: {label: "author", extendedComponent: "structServiceSelect"},
        text_title: {label: "title", extendedComponent: "structServiceSelect"},
        text_date: {label: "date", hideExtended: true},
        lesson_level: {
            label: "coctaill_level",
            extendedComponent: "structServiceSelect"
        },
        lessontext_genre: {
            label: "coctaill_genre",
            type: "set",
            opts: setOptions,
            extendedComponent: "structServiceSelect"
        },
        list_unit: {
            label: "coctaill_list_unit",
            type: "set",
            opts: setOptions,
            extendedComponent: "structServiceSelect"
        },
        list_skill: {
            label: "coctaill_list_skill",
            type: "set",
            opts: setOptions,
            extendedComponent: "structServiceSelect"
        },
        lessontext_topic: {
            label: "coctaill_lessontext_topic",
            type: "set",
            opts: setOptions,
            extendedComponent: "structServiceSelect"
        },
        activity_instruction_skill: {
            label: "coctaill_activity_instruction_skill",
            type: "set",
            opts: setOptions,
            extendedComponent: "structServiceSelect"
        },
        activity_instruction_format: {
            label: "coctaill_activity_instruction_format",
            type: "set",
            opts: setOptions,
            extendedComponent: "structServiceSelect"
        },
        task_skill: {
            label: "coctaill_task_skill",
            type: "set",
            opts: setOptions,
            extendedComponent: "structServiceSelect"
        },
        task_format: {
            label: "coctaill_task_format",
            type: "set",
            opts: setOptions,
            extendedComponent: "structServiceSelect"
        },
        language_example_unit: {
            label: "coctaill_language_example_unit",
            type: "set",
            opts: setOptions,
            extendedComponent: "structServiceSelect"
        },
        language_example_skill: {
            label: "coctaill_language_example_skill",
            type: "set",
            opts: setOptions,
            extendedComponent: "structServiceSelect"
        },
        extra_dummy:      {label: "+extra", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true},
        subheading_dummy: {label: "+subheading", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true},
        contents_dummy:   {label: "+contents", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true},
        lessontext_dummy: {label: "+lessontext", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true},
        list_dummy:       {label: "+list", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true},
        activity_instruction_dummy: {label: "+activity_instruction", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true},
        task_dummy: {label: "+task", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true},
        language_example_dummy: {label: "+language_example", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true},
        lesson_dummy: {label: "+lesson", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true}
    },
    customAttributes: {
        pdf: {
            label: "",
            pattern: "<a href='https://spraakbanken.gu.se/sites/spraakbanken.gu.se/files/Metadata_COCTAILL.pdf' target='_blank'>Metadata explanation</a>",
            customType: "struct",
            order: 1
            }
    }
};

settings.corpora["coctaill-ae"] = {
    id: "coctaill-ae",
    title: "COCTAILL activities & examples",
    description: "",
    context: spContext,
    within: spWithin,
    attributes: modernAttrs,
    structAttributes: {
        text_author: {label: "author", extendedComponent: "structServiceSelect"},
        text_coursebook_title: {label: "title", extendedComponent: "structServiceSelect"},
        text_date: {label: "date", hideExtended: true},
        lesson_cefr_level: {label: "cefr_level", extendedComponent: "structServiceSelect"},
        list_unit: {label: "coctaill_list_unit", type: "set", opts: setOptions, extendedComponent: "structServiceSelect"},
        list_skill: {label: "coctaill_list_skill", type: "set", opts: setOptions, extendedComponent: "structServiceSelect"},
        activity_instruction_skill: {label: "coctaill_activity_instruction_skill", type: "set", opts: setOptions, extendedComponent: "structServiceSelect"},
        activity_instruction_format: {label: "coctaill_activity_instruction_format", type: "set", opts: setOptions, extendedComponent: "structServiceSelect"},
        task_skill: {label: "coctaill_task_skill", type: "set", opts: setOptions, extendedComponent: "structServiceSelect"},
        task_format: {label: "coctaill_task_format", type: "set", opts: setOptions, extendedComponent: "structServiceSelect"},
        language_example_unit: {label: "coctaill_language_example_unit", type: "set", opts: setOptions, extendedComponent: "structServiceSelect"},
        language_example_skill: {label: "coctaill_language_example_skill", type: "set", opts: setOptions, extendedComponent: "structServiceSelect"},
        subheading_dummy: {label: "+subheading", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true},
        list_dummy:       {label: "+list", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true},
        activity_instruction_dummy: {label: "+activity_instruction", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true},
        task_dummy: {label: "+task", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true},
        language_example_dummy: {label: "+language_example", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true},
        lesson_dummy: {label: "+lesson", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true}
    },
    customAttributes: {
        pdf: {
            label: "",
            pattern: "<a href='https://spraakbanken.gu.se/sites/spraakbanken.gu.se/files/Metadata_COCTAILL.pdf' target='_blank'>Metadata explanation</a>",
            customType: "struct",
            order: 1
            }
    }
};

settings.corpora["coctaill-lt"] = {
    id: "coctaill-lt",
    title: "COCTAILL lesson text",
    description: "",
    context: spContext,
    within: spWithin,
    attributes: modernAttrs,
    structAttributes: {
        text_author: {label: "author", extendedComponent: "structServiceSelect"},
        text_coursebook_title: {label: "title", extendedComponent: "structServiceSelect"},
        text_date: {label: "date", hideExtended: true},
        lesson_cefr_level: {label: "cefr_level", extendedComponent: "structServiceSelect"},
        lessontext_genre: {label: "genre", type: "set", opts: setOptions, extendedComponent: "structServiceSelect"},
        lessontext_topic: {label: "topic", type: "set", opts: setOptions, extendedComponent: "structServiceSelect"},
        subheading_dummy: {label: "+subheading", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true},
        lessontext_dummy: {label: "+lessontext", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true},
        lesson_dummy: {label: "+lesson", dataset: ["-"], opts: liteOptions, extendedComponent: "singleValue", hideSidebar: true}
    },
    customAttributes: {
        pdf: {
            label: "",
            pattern: "<a href='https://spraakbanken.gu.se/sites/spraakbanken.gu.se/files/Metadata_COCTAILL.pdf' target='_blank'>Metadata explanation</a>",
            customType: "struct",
            order: 1
            }
    }
};

settings.corpora["drama"] = {
    id: "drama",
    title: "Dramawebben",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"}
    }
};
/*
settings.corpora["europarl-sv"] = {
    id: "europarl-sv",
    title: "Europarl svenska",
    description: "Texter från Europaparlamentets webbsida.",
    context: defaultContext,
    within: settings.defaultWithin,
    attributes: modernAttrsOld,
    structAttributes: {
        text_date: {label: "date"},
        text_speaker: {label: "speaker"}
    }
};*/

settings.corpora["fragelistor"] = {
    id: "fragelistor",
    title: "Etnologiska frågelistor",
    description: "Nordiska museets etnologiska frågelistor",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        "text_topicname": {label: "topic"},
        "text_topicid": {label: "topicid"},
        "text_year": {label: "year"},
        "text_amount_answers": {label: "amount_answers"},
        "text_author_signature": {label: "author_signature"},
        "document_id": {label: "document_id"},
        "text_source": {
            label: "source",
            extendedComponent: "structServiceSelect"
        },
        "page_n": {label: "page"},
        "sentence_id": {displayType: "hidden"}
    }
};

settings.corpora["sprakfragor"] = {
    id: "sprakfragor",
    title: "Besvarade språkfrågor",
    description: 'Spåkrådets rådgivningsmejl<br><br>För åtkomst kontakta <a href="mailto:per-anders.jande@sprakochfolkminnen.se">Per-Anders Jande</a>.',
    limitedAccess: true,
    context: {
        "1 sentence": "1 sentence",
        "1 text": "1 text"
    },
    within: settings.defaultWithin,
    attributes: modernAttrs,
    structAttributes: {
        text_topic: {label: "topic", order: 10},
        text_datetime: {label: "date", order: 20},
        text_sender: {label: "sender",
                      order: 30,
                      type: "set",
                    //   pattern: "<a href='mailto:<%= val.split('<')[1].split('>')[0] %>'><%= val.split('<')[0] %></span>"},
                      pattern: "<span> <%= val.replace(/</g, '&lt;').replace(/</g, '&lt;') %></span>"},
        text_receiver: {label: "receiver",
                        order: 40,
                        type: "set",
                        pattern: "<span> <%= val.replace(/</g, '&lt;').replace(/</g, '&lt;') %></span>"},
        "text_receiver-cc": {label: "copy",
                           order: 50,
                           type: "set",
                           pattern: "<span> <%= val.replace(/</g, '&lt;').replace(/</g, '&lt;') %></span>"}
    }
};

var ivipVideo = function(baseURL) {
    return {
        label: "video",
        sidebarComponent: {
            name: "ivipVideo",
            options: {
                baseURL: baseURL
            }
        },
        customType: "struct"
    }
};

settings.corpora["ivip"] = {
    id: "ivip",
    title: "IVIP",
    description: 'Interaktion och variation i pluricentriska språk – Kommunikativa mönster i sverigesvenska och finlandssvenska<br><br>Korpusen kommer att finnas tillgänglig för forskare omkring 2021.',
    limitedAccess: true,
    context: {
        "1 sentence": "1 sentence",
        "1 text": "1 text"
    },
    within: settings.defaultWithin,
    attributes: {
        pos: attrs.pos,
        msd: attrs.msd,
        lemma: attrs.baseform,
        lex: attrs.lemgram,
        sense: modernAttrs.sense,
        prefix: attrs.prefix,
        suffix: attrs.suffix,
        compwf: modernAttrs.compwf,
        complemgram: modernAttrs.complemgram,
        ne_ex: attrs.ne_ex,
        ne_type: attrs.ne_type,
        ne_subtype: attrs.ne_subtype,
        ne_name: attrs.ne_name,
        sentiment: modernAttrs2.sentiment,
        blingbring: modernAttrs2.blingbring,
        swefn: modernAttrs2.swefn,
        word_normalised: {
            label: "normalized_wordform",
            isStructAttr: true
        },
        word_full: {
            label: "annotation",
            isStructAttr: true
        },
        word_type: {
            label: "annotation_type",
            isStructAttr: true,
            type: "set",
            opts: setOptions,
            extendedComponent: "datasetSelect",
            dataset: {
                "överlapp": "överlapp",
                "paus": "paus",
                "förkortat": "förkortat"
            },
        },
        sentence_speaker_id: {
            label: "speaker",
            hideSidebar: true,
            extendedComponent: "structServiceSelect",
            isStructAttr: true
        },
        sentence_speaker_role: {
            label: "speakerrole",
            hideSidebar: true,
            extendedComponent: "datasetSelect",
            dataset: {
                "": "Odefinerat",
                "Assistent": "Assistent",
                "Hund": "Hund",
                "Kund": "Kund",
                "Kund1": "Kund1",
                "Kund2": "Kund2",
                "Observer": "Observer",
                "Participant": "Deltagare",
                "Personal": "Personal",
                "Talaren": "Talaren",
                "Uncertain": "Uncertain",
                "Visitor": "Visitor"
            },
            isStructAttr: true
        },
        sentence_speaker_gender: {
            label: "speakergender",
            order: 14,
            extendedComponent: "datasetSelect",
            dataset: {
                "": "Odefinerat",
                "female": "female",
                "male": "male"
            },
            isStructAttr: true
        },
        sentence_speaker_age: {
            label: "speakerage",
            order: 13,
            isStructAttr: true
        },
        sentence_speaker_region: {
            label: "speakerregion",
            extendedComponent: "structServiceSelect",
            order: 12,
            isStructAttr: true
        },
        sentence_id: {displayType: "hidden"},
        sentence_start: {
            displayType: "hidden"
        },
        sentence_end: {
            displayType: "hidden"
        },
        _head: {
            displayType: "hidden"
        },
        _tail: {
            displayType: "hidden"
        }
    },
    structAttributes: _.extend({}, commonStructAttrs, {
        sentence_start: {
            displayType: "hidden"
        },
        sentence_end: {
            displayType: "hidden"
        },
        text_country: {
            label: "country",
            order: 10,
            extendedComponent: "structServiceSelect"
        },
        text_city: {
            label: "city",
            order: 20,
            extendedComponent: "structServiceSelect"
        },
        text_place: {
            label: "place_type",
            order: 30,
            extendedComponent: "structServiceSelect"
         },
        text_participants: {label: "participants", order: 40},
        text_consentid: {label: "consentid", order: 50},
        text_type: {
            label: "material_type",
            hideSidebar: true,
            extendedComponent: "structServiceSelect"
        },
        text_date: {label: "date", order: 60},
        text_mediatype: {
            label: "mediatype",
            order: 70,
            extendedComponent: "structServiceSelect"
        },
        text_mediafilepath: {displayType: "hidden"},
        text_mediafile: {displayType: "hidden"},
        text_mediafileext: {displayType: "hidden"},
        sentence_id: {displayType: "hidden"}
    }),
    customAttributes: {
        video: ivipVideo("https://spraakbanken.gu.se/korp/data/ivip/"),
        text_speaker_custom: {
            label: "speaker",
            order: 45,
            pattern: "<span><%= pos_attrs.sentence_speaker_id %> <%= pos_attrs.sentence_speaker_role %></span>",
            customType: "struct"
        }
    },
    defaultFilters: ["text_country", "text_city", "text_place", "text_consentid"],
    readingMode: {
        component: "ivipReadingMode",
        groupElement: "sentence"
    }
};


settings.corpora["ivip-demo"] = {
    id: "ivip-demo",
    title: "IVIP demo",
    description: 'Interaktion och variation i pluricentriska språk – Kommunikativa mönster i sverigesvenska och finlandssvenska. Detta är en öppen delmängd av IVIP-korpusen.',
    context: {
        "1 sentence": "1 sentence",
        "1 text": "1 text"
    },
    within: settings.defaultWithin,
    attributes: {
        pos: attrs.pos,
        msd: attrs.msd,
        lemma: attrs.baseform,
        lex: attrs.lemgram,
        sense: modernAttrs.sense,
        prefix: attrs.prefix,
        suffix: attrs.suffix,
        compwf: modernAttrs.compwf,
        complemgram: modernAttrs.complemgram,
        ne_ex: attrs.ne_ex,
        ne_type: attrs.ne_type,
        ne_subtype: attrs.ne_subtype,
        ne_name: attrs.ne_name,
        sentiment: modernAttrs2.sentiment,
        blingbring: modernAttrs2.blingbring,
        swefn: modernAttrs2.swefn,
        word_normalised: {
            label: "normalized_wordform",
            isStructAttr: true
        },
        word_full: {
            label: "annotation",
            isStructAttr: true
        },
        word_type: {
            label: "annotation_type",
            isStructAttr: true,
            type: "set",
            opts: setOptions,
            extendedComponent: "datasetSelect",
            dataset: {
                "överlapp": "överlapp",
                "paus": "paus",
                "förkortat": "förkortat"
            },
        },
        sentence_speaker_id: {
            label: "speaker",
            hideSidebar: true,
            extendedComponent: "structServiceSelect",
            isStructAttr: true
        },
        sentence_speaker_role: {
            label: "speakerrole",
            hideSidebar: true,
            extendedComponent: "datasetSelect",
            dataset: {
                "": "Odefinerat",
                "Kund": "Kund",
                "Personal": "Personal"
            },
            isStructAttr: true
        },
        sentence_speaker_gender: {
            label: "speakergender",
            order: 14,
            extendedComponent: "datasetSelect",
            dataset: {
                "": "Odefinerat",
                "female": "female",
                "male": "male"
            },
            isStructAttr: true
        },
        sentence_speaker_age: {
            label: "speakerage",
            order: 13,
            isStructAttr: true
        },
        sentence_speaker_region: {
            label: "speakerregion",
            extendedComponent: "structServiceSelect",
            order: 12,
            isStructAttr: true
        },
        sentence_id: {displayType: "hidden"},
        sentence_start: {
            displayType: "hidden"
        },
        sentence_end: {
            displayType: "hidden"
        },
        _head: {
            displayType: "hidden"
        },
        _tail: {
            displayType: "hidden"
        }
    },
    structAttributes: _.extend({}, commonStructAttrs, {
        sentence_start: {
            displayType: "hidden"
        },
        sentence_end: {
            displayType: "hidden"
        },
        text_country: {
            label: "country",
            order: 10,
            extendedComponent: "structServiceSelect"
        },
        text_city: {
            label: "city",
            order: 20,
            extendedComponent: "structServiceSelect"
        },
        text_place: {
            label: "location",
            order: 30,
            extendedComponent: "structServiceSelect"
         },
        text_participants: {label: "participants", order: 40},
        text_consentid: {label: "consentid", order: 50},
        text_type: {
            label: "material_type",
            hideSidebar: true,
            extendedComponent: "structServiceSelect"
        },
        text_date: {label: "date", order: 60},
        text_mediatype: {
            label: "mediatype",
            order: 70,
            extendedComponent: "structServiceSelect"
        },
        text_mediafilepath: {displayType: "hidden"},
        text_mediafile: {displayType: "hidden"},
        text_mediafileext: {displayType: "hidden"},
        sentence_id: {displayType: "hidden"}
    }),
    customAttributes: {
        video: ivipVideo("https://spraakbanken.gu.se/korp/data/ivip-demo/"),
        text_speaker_custom: {
            label: "speaker",
            order: 45,
            pattern: "<span><%= pos_attrs.sentence_speaker_id %> <%= pos_attrs.sentence_speaker_role %></span>",
            customType: "struct"
        }
    },
    defaultFilters: ["text_country", "text_city", "text_place", "text_consentid"],
    readingMode: {
        component: "ivipReadingMode",
        groupElement: "sentence"
    }
};


settings.corpora["lawline"] = {
    id: "lawline",
    title: "Lawline",
    description: 'Frågor och svar kring juridisk rådgivning från lawline.' +
                 '<br><br>För åtkomst kontakta <a href="mailto:lena.rogstroem@svenska.gu.se">Lena Rogström</a>.',
    limitedAccess: true,
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        "text_category": {label: "category", order: 10},
        "text_topic": {label: "topic", order: 20},
        "text_datum": {label: "date", order: 30},
        "textpart_type": {label: "type",
                          order: 40,
                          extendedComponent: "datasetSelect",
                          dataset: {
                            "answer": "answer",
                            "question": "question"
                            }
                        },
        "text_url": {label: "url",
                     order: 50,
                     pattern: "<a href='<%= struct_attrs.text_url %>' target='_blank'><%= struct_attrs.text_url %></a>"
                 },
        "text_category_link": {label: "category_url",
                               order: 60,
                               pattern: "<a href='<%= struct_attrs.text_category_link %>' target='_blank'><%= struct_attrs.text_category_link %></a>"
                          }
    }
};


settings.corpora["lasbart"] = {
    id: "lasbart",
    title: "LäSBarT – Lättläst svenska och barnbokstext",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_source: {label: "source"},
        text_type: {label: "type"},
        text_date: {label: "date"},
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_age: {label: "age"}
    }
};

settings.corpora["parole"] = {
    id: "parole",
    title: "PAROLE",
    description: "Material insamlat inom ramen för EU-projektet PAROLE. Innehåller romaner, dagstidningar, tidskrifter och webbtexter.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_id: {label: "text"},
        text_date: {label: "date"},
        text_title: {label: "title"},
        text_publisher: {label: "publisher"},
    }
};

settings.corpora["poeter"] = {
    id: "poeter",
    title: "Poeter.se",
    description: "Poesi från sidan <a target=\"_blank\" href=\"http://www.poeter.se\">Poeter.se</a>.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_type: {label: "type"},
        text_url: {label: "source", type: "url"},
        text_date: {label: "date"}
    }
};

settings.corpora["psalmboken"] = {
    id: "psalmboken",
    title: "Psalmboken (1937)",
    description: "",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_year: {label: "year"}
    }
};

settings.corpora["saltnld-sv"] = {
    id: "saltnld-sv",
    title: "SALT svenska-nederländska",
    description: "En samling parallella korpusar (svenska-nederländska), bestående av följande subkorpusar:\
<ul>\
<li>Bergman, Ingmar: Laterna magica</li>\
<li>Claus, Hugo: Rykten / De geruchten</li>\
<li>Dekker, Rudolf och van de Pol, Lotte: Kvinnor i manskläder / Vrouwen en mannekleren</li>\
<li>Ekman, Kerstin: Händelser vid vatten / Zwart water</li>\
<li>Froman, Ingmarie: Sverige och Belgien / Zweden und Belgiê</li>\
<li>Guillou, Jan: Fiendens fiende / De vijand van de vijand</li>\
<li>Gustafsson, Lars: En kakesättares eftermiddag / De namiddag van een tegelzetter</li>\
<li>Johanisson, Karin: Den mörka kontinenten / Het duistere continent</li>\
<li>Krabbé, Tim: De försvunna / Het gouden ei</li>\
<li>Mankell, Henning: Mördare utan ansikte / Moordenaar zonder gezicht</li>\
<li>Mulish, Harry: Överfallet / De aanslag</li>\
<li>Nilson, Peter: Hem till jorden / Terug naar de aarde</li>\
<li>van Paemel, Monika: Den första stenen / De eersten steen</li>\
<li>Sjöwall, Maj och Wahlöö, Per: Brandbilen som försvann / De brandweerauto die verdween</li>\
<li>Swartz, Richard: Room service</li>\
<li>Tunström, Göran: Tjuven / Die dief</li>\
<li>Wolkers, Jan: Turkisk konfekt / Turks fruit</li>\
</ul>\
\
Meningarna i korpusarna är sorterade i slumpvis ordning, för att man inte ska kunna återskapa originalet.",
    context: defaultContext,
    within: settings.defaultWithin,
    attributes: modernAttrsOld,
    structAttributes: {
    }
};

settings.corpora["sic2"] = {
    id: "sic2",
    title: "SIC2 - Stockholm Internet Corpus",
    description: 'The <a href="https://www.ling.su.se/english/nlp/corpora-and-resources/sic/stockholm-internet-corpus-sic-1.99019" target="blank">Stockholm Internet Corpus (SIC2)</a> contains Swedish blog posts, annotated with part of speech, morphological features, and named entities.',
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence",
        "1 post": "1 post"
    },
    attributes: _.extend({}, modernAttrs2,{
        name_type: {
            label: "sic2_name",
            isStructAttr: true
        }
    }),
    structAttributes: _.extend({}, commonStructAttrs, {
        blog_id: {
            label: "blog_id",
            extendedComponent: "structServiceSelect"
        },
        blog_sex: {
            label: "author_gender",
            extendedComponent: "structServiceSelect"
        },
        post_id: {
            label: "post_id",
            extendedComponent: "structServiceSelect"
        }
    })
};

settings.corpora["snp7879"] = {
    id: "snp7879",
    title: "SNP 78–79 (Riksdagens snabbprotokoll)",
    description: "Riksdagens snabbprotokoll 1978–1979.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {}
};

settings.corpora["sou"] = {
    id: "sou",
    title: "Statens offentliga utredningar",
    description: "Statens offentliga utredningar (SOU) i digitaliserat format. Samlingen är inte komplett men kommer att uppdateras.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrsOld,
    structAttributes: {
        text_id: {label: "id"},
        text_librisid: {label: "librisid"}
    }
};

settings.corpora["suc2"] = {
    id: "suc2",
    title: "SUC 2.0",
    description: "Stockholm-Umeå Corpus",
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence"
    },
    attributes: _.extend({}, modernAttrs, {
        // compwf: {
        //     label: "compwf",
        //     displayType: "hidden",
        //     type: "set"
        // }
    }),
    structAttributes: {
        text_id: {label: "text"}
    }
};

settings.corpora["suc3"] = {
    id: "suc3",
    title: "SUC 3.0",
    description: "Stockholm-Umeå Corpus",
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence"
    },
    attributes: _.extend({}, modernAttrs2, {
        name_type: {
            label: "suc_name",
            isStructAttr: true
        }
    }),
    structAttributes: _.extend({}, commonStructAttrs, {
        text_id: {label: "text"}
    })
};

settings.corpora["storsuc"] = {
    id: "storsuc",
    title: "SUC-romaner",
    description: "En samling romaner och andra böcker som har använts i urvalet till SUC. 58 böcker ingår.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_id: {label: "text"}
    }
};

settings.corpora["aspacsv"] = {
    id: "aspacsv",
    title: "ASPAC svenska",
    description: "Svenska delen av The Amsterdam Slavic Parallel Aligned Corpus",
    context: defaultContext,
    within: settings.defaultWithin,
    attributes: modernAttrs,
    structAttributes: {
        text_lang: {label: "lang"},
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"}
    },
    defaultFilters: ["text_author", "text_title", "text_description"]
};

settings.corpora["diabetolog"] = {
    id: "diabetolog",
    title: "DiabetologNytt (1996–1999)",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_year: {label: "year"},
        text_title: {label: "title"},
        text_source: {label: "url", type: "url"}
    }
};

settings.corpora["lt1996"] = {
    id: "lt1996",
    title: "Läkartidningen 1996",
    description: "Läkartidningens publicerade artiklar under 1996.<br/>Antal artiklar: 2345",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_year: {label: "year"},
        text_article: {label: "article"},
        text_id: {label: "text"}
    }
};

settings.corpora["lt1997"] = {
    id: "lt1997",
    title: "Läkartidningen 1997",
    description: "Läkartidningens publicerade artiklar under 1997.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"},
        text_title: {label: "title"}
    }
};

settings.corpora["lt1998"] = {
    id: "lt1998",
    title: "Läkartidningen 1998",
    description: "Läkartidningens publicerade artiklar under 1998.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"},
        text_title: {label: "title"}
    }
};

settings.corpora["lt1999"] = {
    id: "lt1999",
    title: "Läkartidningen 1999",
    description: "Läkartidningens publicerade artiklar under 1999.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"},
        text_title: {label: "title"}
    }
};

settings.corpora["lt2000"] = {
    id: "lt2000",
    title: "Läkartidningen 2000",
    description: "Läkartidningens publicerade artiklar under 2000.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"},
        text_title: {label: "title"}
    }
};

settings.corpora["lt2001"] = {
    id: "lt2001",
    title: "Läkartidningen 2001",
    description: "Läkartidningens publicerade artiklar under 2001.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"},
        text_title: {label: "title"}
    }
};

settings.corpora["lt2002"] = {
    id: "lt2002",
    title: "Läkartidningen 2002",
    description: "Läkartidningens publicerade artiklar under 2002.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"},
        text_title: {label: "title"}
    }
};

settings.corpora["lt2003"] = {
    id: "lt2003",
    title: "Läkartidningen 2003",
    description: "Läkartidningens publicerade artiklar under 2003.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"},
        text_title: {label: "title"}
    }
};

settings.corpora["lt2004"] = {
    id: "lt2004",
    title: "Läkartidningen 2004",
    description: "Läkartidningens publicerade artiklar under 2004.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"},
        text_title: {label: "title"}
    }
};

settings.corpora["lt2005"] = {
    id: "lt2005",
    title: "Läkartidningen 2005",
    description: "Läkartidningens publicerade artiklar under 2005.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"},
        text_title: {label: "title"}
    }
};

settings.corpora["lt2006"] = {
    id: "lt2006",
    title: "Läkartidningen 2006",
    description: "Läkartidningens publicerade artiklar under 2006.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"},
        text_title: {label: "title"}
    }
};

settings.corpora["smittskydd"] = {
    id: "smittskydd",
    title: "Smittskydd",
    description: "Smittskyddsinstitutets tidskrift, årgångarna 2002–2010.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_year: {label: "year"},
        text_issue: {label: "issue"},
        text_title: {label: "title"}
    }
};

settings.corpora["sfs"] = {
    id: "sfs",
    title: "Svensk författningssamling",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_title: {label: "title"},
        text_date: {label: "date"}
    }
};

settings.corpora["sv-covid-19"] = {
    id: "sv-covid-19",
    title: "sv-COVID-19",
    description: "Blandade artiklar relaterade till corona.",
    context: spContext,
    within: spWithin,
    attributes: modernAttrs,
    structAttributes: {
        text_title: {label: "title"},
        text_source: {label: "source", type: "url"},
        text_date: {label: "date"}
    }
};

settings.corpora["vivill"] = {
    id: "vivill",
    title: "Svenska partiprogram och valmanifest 1887–2010",
    description: "",
    within: {
        "sentence": "sentence",
        "5 sentence": "5 sentences"
    },
    context: {
        "1 sentence": "1 sentence",
        "5 sentence": "5 sentences"
    },
    attributes: _.extend({}, modernAttrs, {
        sentiment: {
            label: "sentiment"
        },
        sentimentclass: {
            label: "sentiment_class"
        },
        _head: {
            displayType: "hidden"
        },
        _tail: {
            displayType: "hidden"
        }
    }),
    structAttributes: {
        text_year: {label: "year",
            extendedComponent: "datasetSelect",
            escape: false,
            dataset: {
                "1887": "1887",
                "1902": "1902",
                "1904": "1904",
                "1905": "1905",
                "1908": "1908",
                "1911": "1911",
                "1912": "1912",
                "1914a|1914b": "1914",
                "1917": "1917",
                "1919": "1919",
                "1920": "1920",
                "1921": "1921",
                "1924": "1924",
                "1928": "1928",
                "1932": "1932",
                "1933": "1933",
                "1934": "1934",
                "1936": "1936",
                "1940": "1940",
                "1944": "1944",
                "1946": "1946",
                "1948": "1948",
                "1951": "1951",
                "1952": "1952",
                "1953": "1953",
                "1956": "1956",
                "1958": "1958",
                "1959": "1959",
                "1960": "1960",
                "1961": "1961",
                "1962": "1962",
                "1964": "1964",
                "1967": "1967",
                "1968": "1968",
                "1969": "1969",
                "1970": "1970",
                "1972": "1972",
                "1973": "1973",
                "1975": "1975",
                "1976": "1976",
                "1979": "1979",
                "1981": "1981",
                "1982": "1982",
                "1984": "1984",
                "1985": "1985",
                "1987": "1987",
                "1988": "1988",
                "1990": "1990",
                "1991": "1991",
                "1993": "1993",
                "1994": "1994",
                "1997": "1997",
                "1998": "1998",
                "1999": "1999",
                "2000": "2000",
                "2001": "2001",
                "2002": "2002",
                "2005": "2005",
                "2006": "2006",
                "2010": "2010"
            }
        },
        text_party: {
            label: "party",
            extendedComponent: "structServiceSelect",
            translation: {
                "all": "Alliansen",
                "c": "Centerpartiet",
                "rg": "De rödgröna",
                "fi": "Feministiskt initiativ",
                "fp": "Folkpartiet liberalerna",
                "jr": "Jordbrukarnas riksförbund",
                "kd": "Kristdemokraterna",
                "la": "Lantmannapartiet",
                "labp": "Lantmanna- och borgarepartiet",
                "lisp": "Liberala samlingspartiet",
                "mp": "Miljöpartiet de gröna",
                "m": "Moderata samlingspartiet",
                "npf": "Nationella framstegspartiet",
                "nyd": "Ny demokrati",
                "pp": "Piratpartiet",
                "sd": "Sverigedemokraterna",
                "k_h": "Sveriges kommunistiska parti, Höglundarna",
                "k_k": "Sverges kommunistiska parti, Kilbommarna",
                "svp": "Sverges socialdemokratiska vänsterparti",
                "lp": "Sveriges liberala parti",
                "s": "Sveriges socialdemokratiska arbetareparti",
                "v": "Vänsterpartiet"
            }
        },
        text_type: {label: "type"},
        sentence_id: {displayType: "hidden"}
    },
    readingMode: {
        component: "standardReadingMode"
    }
};

settings.corpora["wikipedia-sv"] = {
    id: "wikipedia-sv",
    title: "Svenska Wikipedia (januari 2017)",
    description: "Samtliga artikar från svenska Wikipedia. Uppdateras regelbundet.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_title: {label: "article"},
        text_url: {label: "url", type: "url"},
        sentence_id: {displayType: "hidden"}
    }
};

settings.corpora["strindbergromaner"] = {
    id: "strindbergromaner",
    title: "August Strindbergs samlade verk",
    description: "August Strindbergs samlade verk. Innehåller material från de 59 volymer som utgivits fram till år 2003.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_date: {label: "year"},
        text_sv: {label: "text_sv"},
        page_n: {label: "page"}
    }
};

settings.corpora["romi"] = {
    id: "romi",
    title: "Bonniersromaner I (1976–77)",
    description: "69 romaner utgivna 1976–77.",
    context: spContext,
    within: spWithin,
    attributes: modernAttrs,
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"}
    },
    defaultFilters: ["text_author", "text_title"]
};

settings.corpora["romii"] = {
    id: "romii",
    title: "Bonniersromaner II (1980–81)",
    description: "60 romaner från 1980–81.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"}
    },
    defaultFilters: ["text_author", "text_title"]
};

settings.corpora["romg"] = {
    id: "romg",
    title: "Äldre svenska romaner",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_year: {label: "year"}
    },
    defaultFilters: ["text_author", "text_title", "text_year"]
};

settings.corpora["rom99"] = {
    id: "rom99",
    title: "Norstedtsromaner (1999)",
    description: "23 romaner utgivna 1999 på Norstedts förlag.",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_year: {label: "year"}
    },
    defaultFilters: ["text_author", "text_title", "text_year"]
};

settings.corpora["swefn-ex"] = {
    id: "swefn-ex",
    title: "Svenskt frasnät (SweFN)",
    description: '',
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        "text_created_by": {label: "created_by"},
/*      "element_name": {label: "element"},
        "lu_n": {label: ""},
        "supp_n": {label: ""},
        "copula_n": {label: ""},
        "sentence_id": {label: ""},*/
        "example_source": {label: "source"},
        "text_frame": {label: "frame"},
        "text_domain": {label: "domain"},
        "text_semantic_type": {label: "semantic_type"},
        "text_core_elements": {label: "core_elements"},
        "text_peripheral_elements": {label: "peripheral_elements"},
        "text_compound_patterns": {label: "compound_patterns"},
        "text_compound_pattern_examples": {label: "compound_pattern_examples"},
/*      "text_lexical_units_saldo": {label: "lexical_units_saldo"},
        "text_lexical_units_new": {label: "lexical_units_new"},*/
        "text_notes": {label: "notes"}
    }
};

settings.corpora["astranova"] = {
    id: "astranova",
    title: "Astra Nova 2008–2010",
    description: "<a target=\"_blank\" href=\"http://www.astranova.fi\">Astra Nova</a> är en tidskrift med feministisk prägel. Innehåller samtliga nummer av Astra Nova från perioden 2008–2010 med artiklar av finlandssvenska skribenter. Artiklar av utländska skribenter ingår inte i materialet, utan är bortplockade.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"}
    }
};

settings.corpora["astra1960-1979"] = {
    id: "astra1960-1979",
    title: "Astra 1960–1979",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"}
    }
};

settings.corpora["bullen"] = {
    id: "bullen",
    title: "Bullen 2010–2012",
    description: "<a target=\"_blank\" href=\"http://www.karen.abo.fi/index.php?u[2]=0&u[3]=70\">Bullen</a> är Åbo Akademis Studentkårs informationsbulletin.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["fanbararen"] = {
    id: "fanbararen",
    title: "Fanbäraren 2011–2012",
    description: "<a target=\"_blank\" href=\"http://www.nylandsbrigadsgille.fi/sidor/?page_id=813\">Fanbäraren</a> är en tidskrift som utges gemensamt av Nylands brigad och Nylands Brigads Gille, med syfte att öka kännedomen om utbildningen vid Nylands Brigad och öka sammanhållningen mellan Gillets medlemmar.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"}
    }
};

settings.corpora["kallan"] = {
    id: "kallan",
    title: "Källan 2008–2010",
    description: "<a target=\"_blank\" href=\"http://www.sls.fi/kallan\">Källan</a> är Svenska litteratursällskapets tidskrift.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"}
    }
};

settings.corpora["jft"] = {
    id: "jft",
    title: "JFT 2000–2013",
    description: "<a target=\"_blank\" href=\"http://jff.fi/index.asp?page=5\">JFT</a> publiceras av Juridiska Föreningen i Finland r.f. Den är Nordens äldsta utkommande rättsvetenskapliga tidskrift.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"}
    }
};

settings.corpora["meddelanden"] = {
    id: "meddelanden",
    title: "Meddelanden från Åbo Akademi 2002–2010",
    description: "<a target=\"_blank\" href=\"http://www.abo.fi/meddelanden\">Meddelanden från Åbo Akademi</a> är Åbo Akademis tidning för extern och intern information. Materialet består av artiklar skrivna av redaktörerna Peter Sandström och Michael Karlsson",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"}
    }
};

settings.corpora["hankeiten"] = {
    id: "hankeiten",
    title: "Hankeiten 2006–2012",
    description: "<a target=\"_blank\" href=\"http://www.shsweb.fi/shs/arkiv/hankeiten1\">Hankeiten</a> är Svenska Handelshögskolans Studentkårs tidskrift.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"}
    }
};

settings.corpora["nyaargus"] = {
    id: "nyaargus",
    title: "Nya Argus 2010–2011",
    description: "<a target=\"_blank\" href=\"http://www.kolumbus.fi/nya.argus/\">Nya Argus</a> är en tidskrift som bevakar kultur, samhälle och debatt. Artiklar skrivna av utländska skribenter är bortplockade.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"}
    }
};

settings.corpora["pargaskungorelser2011"] = {
    id: "pargaskungorelser2011",
    title: "Pargas Kungörelser 2011",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"}
    }
};

settings.corpora["pargaskungorelser2012"] = {
    id: "pargaskungorelser2012",
    title: "Pargas Kungörelser 2012",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_issue: {label: "issue"}
    }
};

settings.corpora["borgabladet"] = {
    id: "borgabladet",
    title: "Borgåbladet 2012–2013",
    description: "<a target=\"_blank\" href=\"http://www.bbl.fi\">Borgåbladet</a> är en regional svenskspråkig dagstidning i Borgå med omnejd.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["sydosterbotten2010"] = {
    id: "sydosterbotten2010",
    title: "Syd-Österbotten 2010",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["sydosterbotten2011"] = {
    id: "sydosterbotten2011",
    title: "Syd-Österbotten 2011",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["sydosterbotten2012"] = {
    id: "sydosterbotten2012",
    title: "Syd-Österbotten 2012",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["sydosterbotten2013"] = {
    id: "sydosterbotten2013",
    title: "Syd-Österbotten 2013",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["sydosterbotten2014"] = {
    id: "sydosterbotten2014",
    title: "Syd-Österbotten 2014",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_author: {label: "article_author"},
        text_section: {label: "article_section"}
    }
};

settings.corpora["vastranyland"] = {
    id: "vastranyland",
    title: "Västra Nyland 2012–2013",
    description: "<a target=\"_blank\" href=\"http://www.vastranyland.fi\">Västra Nyland</a> är en regional svenskspråkig dagstidning i Västra Nyland.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["ostranyland"] = {
    id: "ostranyland",
    title: "Östra Nyland 2012–2013",
    description: "<a target=\"_blank\" href=\"http://www.ostnyland.fi\">Östra Nyland</a> är en regional svenskspråkig dagstidning i Östra Nyland.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["abounderrattelser2012"] = {
    id: "abounderrattelser2012",
    title: "Åbo Underrättelser 2012",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["abounderrattelser2013"] = {
    id: "abounderrattelser2013",
    title: "Åbo Underrättelser 2013",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};


settings.corpora["at2012"] = {
    id: "at2012",
    title: "Ålandstidningen 2012",
    description: "<a target=\"_blank\" href=\"http://www.alandstidningen.ax/\">Ålandstidningen</a> är en regional svenskspråkig dagstidning på Åland.",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["vasabladet1991"] = {
    id: "vasabladet1991",
    title: "Vasabladet 1991",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"},
        text_type: {label: "section"}
    }
};

settings.corpora["vasabladet2012"] = {
    id: "vasabladet2012",
    title: "Vasabladet 2012",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
    }
};

settings.corpora["vasabladet2013"] = {
    id: "vasabladet2013",
    title: "Vasabladet 2013",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["vasabladet2014"] = {
    id: "vasabladet2014",
    title: "Vasabladet 2014",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_author: {label: "article_author"},
        text_section: {label: "article_section"}
    }
};

settings.corpora["osterbottenstidning2011"] = {
    id: "osterbottenstidning2011",
    title: "Österbottens Tidning 2011",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["osterbottenstidning2012"] = {
    id: "osterbottenstidning2012",
    title: "Österbottens Tidning 2012",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["osterbottenstidning2013"] = {
    id: "osterbottenstidning2013",
    title: "Österbottens Tidning 2013",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["osterbottenstidning2014"] = {
    id: "osterbottenstidning2014",
    title: "Österbottens Tidning 2014",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: sattrs.date,
        text_author: {label: "article_author"},
        text_section: {label: "article_section"}
    }
};

settings.corpora["fnb1999"] = {
    id: "fnb1999",
    title: "FNB 1999",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"},
        text_title: {label: "title"}
    }
};

settings.corpora["fnb2000"] = {
    id: "fnb2000",
    title: "FNB 2000",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"},
        text_title: {label: "title"}
    }
};

settings.corpora["hbl1991"] = {
    id: "hbl1991",
    title: "Hufvudstadsbladet 1991",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "year"},
        text_type: {label: "section"}
    }
};

settings.corpora["hbl1998"] = {
    id: "hbl1998",
    title: "Hufvudstadsbladet 1998",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_year: {label: "year"}
    }
};

settings.corpora["hbl1999"] = {
    id: "hbl1999",
    title: "Hufvudstadsbladet 1999",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_year: {label: "year"}
    }
};

settings.corpora["hbl20122013"] = {
    id: "hbl20122013",
    title: "Hufvudstadsbladet (2012–)2013",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["hbl2014"] = {
    id: "hbl2014",
    title: "Hufvudstadsbladet 2014",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_date: {label: "date"}
    }
};

settings.corpora["talbanken"] = {
    id: "talbanken",
    title: "Talbanken",
    description: "",
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
    }
};

settings.corpora["klarsprak"] = {
    id: "klarsprak",
    title: "Förvaltningsmyndigheters texter",
    description: "",
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_title: {label: "title"},
        text_textid: {label: "id"},
        text_organisation: {label: "organization"},
        text_author: {label: "author"},
        text_genre: {label: "genre"},
        text_textcategory: {label: "category"},
        text_year: {label: "year"},
        text_month: {label: "month"},
        type_type: {
            label: "type",
            extendedComponent: "datasetSelect",
            dataset: {
                "heading": "Heading",
                "section_heading": "Section heading",
                "signature": "Signature"
            }
        }
    }
};

const firstLangAttr = {
    label: "firstlang",
    opts: setOptions,
    type: "set",
    extendedComponent: "structServiceSelect",
    translation: {
        "undefined": {
            "en": "missing data",
            "sv": "Uppgift saknas"
        },
        "afr": {
            "en": "Afrikaans",
            "sv": "Afrikaans"
        },
        "aii": {
            "en": "Assyrian Neo-Aramaic",
            "sv": "Nyöstsyriska"
        },
        "amh": {
            "en": "Amharic",
            "sv": "Amhariska"
        },
        "ara": {
            "en": "Arabic",
            "sv": "Arabiska"
        },
        "arc": {
            "en": "Aramaic",
            "sv": "Arameiska"
        },
        "ary": {
            "en": "Moroccan Arabic",
            "sv": "Marockansk arabiska"
        },
        "aze": {
            "en": "Azerbaijani",
            "sv": "Azerbaijdzjanska"
        },
        "bci": {
            "en": "Baoule",
            "sv": "Baoule"
        },
        "bel": {
            "en": "Belarusian",
            "sv": "Vitryska"
        },
        "ben": {
            "en": "Bengali",
            "sv": "Bengali"
        },
        "ber": {
            "en": "Berber",
            "sv": "Berberspråk"
        },
        "bos": {
            "en": "Bosnian",
            "sv": "Bosniska"
        },
        "bsy": {
            "en": "Sabah Bisaya",
            "sv": "Bisaya"
        },
        "bul": {
            "en": "Bulgarian",
            "sv": "Bulgariska"
        },
        "cat": {
            "en": "Catalan",
            "sv": "Katalanska"
        },
        "ces": {
            "en": "Czech",
            "sv": "Tjeckiska"
        },
        "cgg": {
            "en": "Chiga",
            "sv": "Rukiga"
        },
        "ckb": {
            "en": "Central Kurdish",
            "sv": "Sorani"
        },
        "cld": {
            "en": "Chaldean Neo-Aramaic",
            "sv": "Kaldeiska"
        },
        "cmn": {
            "en": "Mandarin Chinese",
            "sv": "Mandarin"
        },
        "cnr": {
            "en": "Montenegrin",
            "sv": "Montenegrinska"
        },
        "dan": {
            "en": "Danish",
            "sv": "Danska"
        },
        "deu": {
            "en": "German",
            "sv": "Tyska"
        },
        "ell": {
            "en": "Greek",
            "sv": "Grekiska"
        },
        "eng": {
            "en": "English",
            "sv": "Engelska"
        },
        "epo": {
            "en": "Esperanto",
            "sv": "Esperanto"
        },
        "est": {
            "en": "Estonian",
            "sv": "Estniska"
        },
        "eus": {
            "en": "Basque",
            "sv": "Baskiska"
        },
        "fil": {
            "en": "Filipino",
            "sv": "Filippinska"
        },
        "fin": {
            "en": "Finnish",
            "sv": "Finska"
        },
        "fra": {
            "en": "French",
            "sv": "Franska"
        },
        "gig": {
            "en": "Goaria",
            "sv": "Goaria"
        },
        "glg": {
            "en": "Galician",
            "sv": "Galiciska"
        },
        "guj": {
            "en": "Gujarati",
            "sv": "Gujarati"
        },
        "hbs": {
            "en": "Serbo-Croatian",
            "sv": "Serbo-kroatiska"
        },
        "hin": {
            "en": "Hindi",
            "sv": "Hindi"
        },
        "hrv": {
            "en": "Croatian",
            "sv": "Kroatiska"
        },
        "hun": {
            "en": "Hungarian",
            "sv": "Ungerska"
        },
        "ibo": {
            "en": "Igbo",
            "sv": "Igbo"
        },
        "isl": {
            "en": "Icelandic",
            "sv": "Isländska"
        },
        "ita": {
            "en": "Italian",
            "sv": "Italienska"
        },
        "jpn": {
            "en": "Japanese",
            "sv": "Japanska"
        },
        "kaz": {
            "en": "Kazakh",
            "sv": "Kazakiska"
        },
        "kin": {
            "en": "Kinyarwanda",
            "sv": "Kinyarwanda"
        },
        "kir": {
            "en": "Kirghiz",
            "sv": "Kirgiziska"
        },
        "kor": {
            "en": "Korean",
            "sv": "Koreanska"
        },
        "kur": {
            "en": "Kurdish",
            "sv": "Kurdiska"
        },
        "lat": {
            "en": "Latin",
            "sv": "Latin"
        },
        "lav": {
            "en": "Latvian",
            "sv": "Lettiska"
        },
        "lit": {
            "en": "Lithuanian",
            "sv": "Litauiska"
        },
        "lug": {
            "en": "Ganda",
            "sv": "Luganda,ganda"
        },
        "mal": {
            "en": "Malayalam",
            "sv": "Malayalam"
        },
        "mkd": {
            "en": "Macedonian",
            "sv": "Makedonska"
        },
        "msa": {
            "en": "Malay",
            "sv": "Malajiska"
        },
        "nep": {
            "en": "Nepali",
            "sv": "Nepali"
        },
        "nld": {
            "en": "Dutch",
            "sv": "Nederländska"
        },
        "nor": {
            "en": "Norwegian",
            "sv": "Norska"
        },
        "nub": {
            "en": "Nuba (Sudan)",
            "sv": "Nuba (Sudan)"
        },
        "nyn": {
            "en": "Nyankole",
            "sv": "Runyankore"
        },
        "pan": {
            "en": "Panjabi",
            "sv": "Punjabi"
        },
        "pol": {
            "en": "Polish",
            "sv": "Polska"
        },
        "por": {
            "en": "Portuguese",
            "sv": "Portugisiska"
        },
        "prd": {
            "en": "Parsi-Dari",
            "sv": "Dari"
        },
        "prp": {
            "en": "Parsi",
            "sv": "Persiska"
        },
        "prs": {
            "en": "Dari",
            "sv": "Persiska farsi"
        },
        "pus": {
            "en": "Pushto",
            "sv": "Pashto"
        },
        "ron": {
            "en": "Romanian",
            "sv": "Rumänska"
        },
        "rus": {
            "en": "Russian",
            "sv": "Ryska"
        },
        "sco": {
            "en": "Scots",
            "sv": "Skottska"
        },
        "sin": {
            "en": "Sinhala",
            "sv": "Singalesiska"
        },
        "slk": {
            "en": "Slovak",
            "sv": "Slovakiska"
        },
        "som": {
            "en": "Somali",
            "sv": "Somaliska"
        },
        "spa": {
            "en": "Spanish",
            "sv": "Spanska"
        },
        "sqi": {
            "en": "Albanian",
            "sv": "Albanska"
        },
        "srp": {
            "en": "Serbian",
            "sv": "Serbiska"
        },
        "swa": {
            "en": "Swahili",
            "sv": "Swahili"
        },
        "swe": {
            "en": "Swedish",
            "sv": "Svenska"
        },
        "swh": {
            "en": "Swahili",
            "sv": "Swahili"
        },
        "syc": {
            "en": "Classical Syriac",
            "sv": "Syrisk arameiska"
        },
        "syr": {
            "en": "Syriac",
            "sv": "Syriska"
        },
        "tgl": {
            "en": "Tagalog",
            "sv": "Tagalog"
        },
        "tha": {
            "en": "Thai",
            "sv": "Thailändska"
        },
        "tir": {
            "en": "Tigrinya",
            "sv": "Tigrinska"
        },
        "ttj": {
            "en": "Tooro",
            "sv": "Rutooro"
        },
        "tuk": {
            "en": "Turkmen",
            "sv": "Turkmeniska"
        },
        "tur": {
            "en": "Turkish",
            "sv": "Turkiska"
        },
        "ukr": {
            "en": "Ukrainian",
            "sv": "Ukrainska"
        },
        "urd": {
            "en": "Urdu",
            "sv": "Urdu"
        },
        "uzb": {
            "en": "Uzbek",
            "sv": "Uzbekiska"
        },
        "vie": {
            "en": "Vietnamese",
            "sv": "Vietnamesiska"
        },
        "vls": {
            "en": "Vlaams",
            "sv": "Flamländska"
        },
        "yue": {
            "en": "Yue Chinese",
            "sv": "Kantonesiska"
        },
        "zho": {
            "en": "Chinese",
            "sv": "Kinesiska"
        }
    }    
};

settings.corpora["sw1203"] = {
    id: "sw1203",
    title: "SW1203-uppsatser",
    description: 'För åtkomst kontakta <a href="mailto:ingegerd.enstroem@svenska.gu.se">Ingegerd Enström</a>.',
    limitedAccess: true,
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_type: {label: "type", extendedComponent: "structServiceSelect"},
        text_student: {label: "student", extendedComponent: "structServiceSelect"},
        text_gender: {label: "gender", extendedComponent: "datasetSelect",
            dataset: {
                "F": "Kvinna",
                "M": "Man"
            }},
        text_birthyear: {label: "birthyear", extendedComponent: "structServiceSelect"},
        text_a: {label: "a", extendedComponent: "structServiceSelect"},
        text_b: {label: "b", extendedComponent: "structServiceSelect"},
        text_cd: {label: "c/d", extendedComponent: "structServiceSelect"},
        text_semester: {label: "semester", extendedComponent: "structServiceSelect"},
        text_age: {label: "age", extendedComponent: "structServiceSelect"},
        text_level: {label: "proficiencylevel", extendedComponent: "structServiceSelect"},
        text_task: {label: "task", extendedComponent: "structServiceSelect"},
        text_task_url: {label: "task_url", extendedComponent: "structServiceSelect", type: "url"},
        text_firstlang: firstLangAttr
    },
    customAttributes: {
        pdf: {
            label: "",
            pattern: "<a href='https://spraakbanken.gu.se/sites/spraakbanken.gu.se/files/Metadata_SW1203_0.pdf' target='_blank'>Metadata explanation</a>",
            customType: "struct",
            order: 1
            }
    },
    defaultFilters: ["text_type", "text_level", "text_firstlang"]
};

settings.corpora["tisus"] = {
    id: "tisus",
    title: "TISUS-texter",
    description: 'För åtkomst kontakta <a href="mailto:elena.volodina@svenska.gu.se">Elena Volodina</a>.',
    limitedAccess: true,
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_id: {label: "id", extendedComponent: "structServiceSelect"},
        text_age: {label: "age", extendedComponent: "structServiceSelect"},
        text_gender: {
            label: "gender",
            extendedComponent: "datasetSelect",
            dataset: {
                "F": "Kvinna",
                "M": "Man"
            }},
        text_residencetime: {label: "residencetime", extendedComponent: "structServiceSelect"},
        text_education: {label: "education", extendedComponent: "structServiceSelect"},
        text_lfone: {label: "tisus_lfone", extendedComponent: "structServiceSelect"},
        text_lftwo: {label: "tisus_lftwo", extendedComponent: "structServiceSelect"},
        text_sum: {label: "sum", extendedComponent: "structServiceSelect"},
        text_written: {label: "tisus_written", extendedComponent: "structServiceSelect"},
        text_oral: {label: "tisus_oral", extendedComponent: "structServiceSelect"},
        text_finalgrade: {label: "finalgrade", extendedComponent: "structServiceSelect"},
        text_proficiencylevel: {label: "proficiencylevel", extendedComponent: "structServiceSelect"},
        text_date: {label: "date", hideExtended: true},
        text_firstlang: firstLangAttr
    },
    customAttributes: {
        pdf: {
            label: "",
            pattern: "<a href='https://spraakbanken.gu.se/sites/spraakbanken.gu.se/files/Metadata_explanations2.pdf' target='_blank'>Metadata explanation</a>",
            customType: "struct",
            order: 1
            }
    }
};

settings.corpora["tisusv2"] = {
    id: "tisusv2",
    title: "TISUS-texter v2",
    description: 'För åtkomst kontakta <a href="mailto:elena.volodina@svenska.gu.se">Elena Volodina</a>.',
    limitedAccess: true,
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        text_essay_id: {label: "essay_id", extendedComponent: "structServiceSelect"},
        text_age: {label: "age", extendedComponent: "structServiceSelect"},
        text_gender: {
            label: "gender",
            extendedComponent: "datasetSelect",
            dataset: {
                "Kvinna": "Kvinna",
                "Man": "Man"
            }},
        text_time_in_sweden: {label: "time_in_sweden", extendedComponent: "structServiceSelect"},
        text_edu_level: {label: "edu_level", extendedComponent: "structServiceSelect"},
        text_lf1_result: {label: "lf1_result"},
        text_lf2_result: {label: "lf2_result"},
        text_final_grade: {label: "finalgrade", extendedComponent: "structServiceSelect"},
        text_approximate_level: {label: "approximate_level", extendedComponent: "structServiceSelect"},
        text_datum: {label: "date", hideExtended: true},
        /*text_iso_l1: {
            label: "firstlang",
            type: "set",
            opts: setOptions,
            extendedComponent: "structServiceSelect",
            translationKey: "langcode_"
        },*/
        text_l1: {label: "firstlang", extendedComponent: "structServiceSelect"},
        text_birthyear_interval: {label: "birthyear", extendedComponent: "structServiceSelect"},
        text_cefr_level: {label: "cefr_level", extendedComponent: "structServiceSelect"},
        text_course_level: {label: "course_subject", extendedComponent: "structServiceSelect"},
        text_course_subject: {label: "school_type", extendedComponent: "structServiceSelect"},
        text_grade: {label: "essay_grade", extendedComponent: "structServiceSelect"},
        text_grading_scale: {label: "grading_scale", extendedComponent: "structServiceSelect"},
        text_lf_sum: {label: "lf_sum"},
        text_oral_result: {label: "oral_result", extendedComponent: "structServiceSelect"},
        text_source: {label: "tisus_source", extendedComponent: "structServiceSelect"},
        text_student_id: {label: "student_id", extendedComponent: "structServiceSelect"},
        text_svala_link: {label: "full text", hideExtended: true, pattern: "<a href='<%= struct_attrs.text_svala_link %>' target='_blank'>länk</a>"},
        text_task: {label: "task_id", extendedComponent: "structServiceSelect"},
        text_task_date: {label: "task_date", extendedComponent: "structServiceSelect"},
        text_task_format: {label: "task_format", extendedComponent: "structServiceSelect"},
        text_task_subject: {label: "task_subject", extendedComponent: "structServiceSelect"},
        text_task_type: {label: "task_type", extendedComponent: "structServiceSelect"},
        text_text_types: {label: "genre", extendedComponent: "structServiceSelect"},
        text_written_result: {label: "written_result", extendedComponent: "structServiceSelect"}
    },
    customAttributes: {
        pdf: {
            label: "",
            pattern: "<a href='https://spraakbanken.gu.se/sites/spraakbanken.gu.se/files/Metadata_explanations2.pdf' target='_blank'>Metadata explanation</a>",
            customType: "struct",
            order: 1
            }
    },
    defaultFilters: ["text_text_types", "text_l1", "text_gender", "text_task_subject", "text_age", "text_grade", "text_grading_scale"]
};

settings.corpora["ansokningar"] = {
    id: "ansokningar",
    title: "Ansökningar",
    description: 'För åtkomst kontakta <a href="mailto:lena.rogstroem@svenska.gu.se">Lena Rogström</a>.',
    limitedAccess: true,
    context: defaultContext,
    within: settings.defaultWithin,
    attributes: modernAttrs,
    structAttributes: {
        text_id: {label: "id"},
        text_gender: {label: "gender"},
        text_birthyear: {label: "birthyear"}
    }
};

settings.corpora["asu"] = {
    id: "asu",
    title: "ASU",
    description: 'Andraspråkets strukturutveckling<br>För åtkomst kontakta <a href="mailto:ham@ling.su.se">Björn Hammarberg</a>.',
    limitedAccess: true,
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence",
        "1 text": "1 text"
    },
    attributes: {
        pos: attrs.pos,
        msd: attrs.msd,
        lemma: attrs.baseform,
        lex: attrs.lemgram,
        sense: modernAttrs.sense,
        prefix: attrs.prefix,
        suffix: attrs.suffix,
        compwf: modernAttrs.compwf,
        complemgram: modernAttrs.complemgram,
        ne_ex: attrs.ne_ex,
        ne_type: attrs.ne_type,
        ne_subtype: attrs.ne_subtype,
        ne_name: attrs.ne_name,
        sentiment: modernAttrs2.sentiment,
        blingbring: modernAttrs2.blingbring,
        swefn: modernAttrs2.swefn,
        lang: {
            label: "language",
            extendedComponent: "structServiceSelect"
        },
        msd_orig: {
            label: "msd_orig",
            extendedComponent: "structServiceSelect"
        },
        speaker: {
            label: "speaker",
            extendedComponent: "structServiceSelect"
        },
        type: {
            label: "utterance_type",
            extendedComponent: "structServiceSelect"
        }
        // annotation_type: {
        //     label: "annotation_type",
        //     extendedComponent: "structServiceSelect"
        // }
    },
    structAttributes: {
        text_mode: {
            label: "mode",
            order: 1,
            extendedComponent: "structServiceSelect"
                },
        text_category: {
            label: "category",
            order: 2,
            extendedComponent: "structServiceSelect"
        },
        // text_textid: {label: "text_id", order: 3},
        // text_filename: {label: "filename"},
        text_person: {
            label: "person",
            order: 3,
            extendedComponent: "structServiceSelect"
        },
        line_id: {
            label: "line_id",
            order: 4
        },
        text_text: {
            label: "text",
            order: 5,
            extendedComponent: "structServiceSelect"
        },
        text_date: {
            label: "date",
            order: 6
        },
        text_header: {
            label: "header",
            order: 7,
            extendedComponent: "structServiceSelect"
        },
        text_transcriber: {
            label: "transcriber",
            order: 50,
            extendedComponent: "structServiceSelect"
        },
        text_transcription_date: {
            label: "transcription_date",
            order: 51
        },
        text_transcription_check: {
            label: "transcription_check",
            order: 52,
            extendedComponent: "structServiceSelect"
        },
        text_transcription_check_date: {
            label: "transcription_check_date",
            order: 53
        },
        text_giventext: {
            label: "giventext",
            order: 100,
            extendedComponent: "structServiceSelect"
        }
    },
    customAttributes: {
        pdf: {
            label: "",
            pattern: "<a href='https://spraakbanken.gu.se/sites/spraakbanken.gu.se/files/Metadata_ASU.pdf' target='_blank'>Metadata explanation</a>",
            customType: "struct",
            order: 1000
            }
    },
    defaultFilters: ["text_mode", "text_category", "text_person", "text_text"]
};


settings.corpora["twitter"] = {
    id: "twitter",
    title: "Twittermix",
    description: "Material från ett urval av svenska Twitteranvändare. Uppdateras regelbundet.",
    within: {
        "sentence": "sentence",
        "text": "text"
    },
    context: {
        "1 sentence": "1 sentence",
        "1 text": "1 text"
    },
    attributes: modernAttrsOld,
    structAttributes: {
        user_username: {label: "username2"},
        user_name: {label: "name"},
        text_datetime: {label: "date"},
        text_weekday: {label: "weekday"},
        text_hashtags: {label: "hashtags", type: "set"},
        text_mentions: {label: "mentions", type: "set"},
        text_retweets: {label: "retweets"},
        text_location: {label: "tweet_location"},
        text_coordinates: {label: "coordinates"},
        text_replytouser: {label: "replytouser"},
        text_language: {label: "language"},
        text_id: {label: "id", displayType: "hidden"},
        user_location: {label: "user_location"},
        user_followers: {label: "followers"},
        user_following: {label: "following"},
        user_tweets: {label: "tweets"},
        user_description: {
                    label: "description",
                    pattern: '<p style="margin-left: 5px;"><%=val%></p>'
            },
        user_url: {label: "website", type: "url"},
        user_created: {label: "user_since"},
        user_trstrank: {label: "trstrank"},
    },
    customAttributes: {
        text_url: {
            label: "url",
            pattern: "<a href='http://twitter.com/<%= struct_attrs.user_username %>/status/<%= struct_attrs.text_id %>' target='_blank'>http://twitter.com/<%= struct_attrs.user_username %>/status/<%= struct_attrs.text_id %></a>",
            customType: "struct"
            }
    }
};

settings.corpora["twitter-pldebatt-130612"] = {
    id: "twitter-pldebatt-130612",
    title: "Twitter - Partiledardebatt juni 2013",
    description: "Material från Twitter, insamlat under partiledardebatten 12 juni 2013 samt några dagar före och efter.",
    within: {
        "sentence": "sentence",
        "text": "text"
    },
    context: {
        "1 sentence": "1 sentence",
        "1 text": "1 text"
    },
    attributes: modernAttrs,
    structAttributes: {
        user_username: {label: "username2"},
        user_name: {label: "name"},
        text_datetime: {label: "date"},
        text_weekday: {label: "weekday"},
        text_hashtags: {label: "hashtags", type: "set"},
        text_mentions: {label: "mentions", type: "set"},
        text_retweets: {label: "retweets"},
        text_location: {label: "location"},
        text_coordinates: {label: "coordinates"},
        text_replytouser: {label: "replytouser"},
        text_id: {label: "id", displayType: "hidden"},
        user_location: {label: "user_location"},
        user_followers: {label: "followers"},
        user_following: {label: "following"},
        user_tweets: {label: "tweets"},
        user_description: {
                    label: "description",
                    pattern: '<p style="margin-left: 5px;"><%=val%></p>'
            },
        user_url: {label: "website", type: "url"},
        user_created: {label: "user_since"}
    },
    customAttributes: {
        text_url: {
            label: "url",
            pattern: "<a href='http://twitter.com/<%= struct_attrs.user_username %>/status/<%= struct_attrs.text_id %>' target='_blank'>http://twitter.com/<%= struct_attrs.user_username %>/status/<%= struct_attrs.text_id %></a>",
            customType: "struct"
            }
    }
};

settings.corpora["twitter-pldebatt-131006"] = {
    id: "twitter-pldebatt-131006",
    title: "Twitter - Partiledardebatt oktober 2013",
    description: "Material från Twitter, insamlat under partiledardebatten 6 oktober 2013 samt några dagar före och efter.",
    within: {
        "sentence": "sentence",
        "text": "text"
    },
    context: {
        "1 sentence": "1 sentence",
        "1 text": "1 text"
    },
    attributes: modernAttrs,
    structAttributes: {
        user_username: {label: "username2"},
        user_name: {label: "name"},
        text_datetime: {label: "date"},
        text_weekday: {label: "weekday"},
        text_hashtags: {label: "hashtags", type: "set"},
        text_mentions: {label: "mentions", type: "set"},
        text_retweets: {label: "retweets"},
        text_location: {label: "location"},
        text_coordinates: {label: "coordinates"},
        text_replytouser: {label: "replytouser"},
        text_id: {label: "id", displayType: "hidden"},
        user_location: {label: "user_location"},
        user_followers: {label: "followers"},
        user_following: {label: "following"},
        user_tweets: {label: "tweets"},
        user_description: {
                    label: "description",
                    pattern: '<p style="margin-left: 5px;"><%=val%></p>'
            },
        user_url: {label: "website", type: "url"},
        user_created: {label: "user_since"}
    },
    customAttributes: {
        text_url: {
            label: "url",
            pattern: "<a href='http://twitter.com/<%= struct_attrs.user_username %>/status/<%= struct_attrs.text_id %>' target='_blank'>http://twitter.com/<%= struct_attrs.user_username %>/status/<%= struct_attrs.text_id %></a>",
            customType: "struct"
            }
    }
};

settings.corpora["twitter-pldebatt-140504"] = {
    id: "twitter-pldebatt-140504",
    title: "Twitter - Partiledardebatt maj 2014",
    description: "Material från Twitter, insamlat under partiledardebatten 4 maj 2014 samt några dagar före och efter.",
    within: {
        "sentence": "sentence",
        "text": "text"
    },
    context: {
        "1 sentence": "1 sentence",
        "1 text": "1 text"
    },
    attributes: modernAttrs,
    structAttributes: {
        user_username: {label: "username2"},
        user_name: {label: "name"},
        text_datetime: {label: "date"},
        text_weekday: {label: "weekday"},
        text_hashtags: {label: "hashtags", type: "set"},
        text_mentions: {label: "mentions", type: "set"},
        text_retweets: {label: "retweets"},
        text_location: {label: "location"},
        text_coordinates: {label: "coordinates"},
        text_replytouser: {label: "replytouser"},
        text_id: {label: "id", displayType: "hidden"},
        user_location: {label: "user_location"},
        user_followers: {label: "followers"},
        user_following: {label: "following"},
        user_tweets: {label: "tweets"},
        user_description: {
                    label: "description",
                    pattern: '<p style="margin-left: 5px;"><%=val%></p>'
            },
        user_url: {label: "website", type: "url"},
        user_created: {label: "user_since"}
    },
    customAttributes: {
        text_url: {
            label: "url",
            pattern: "<a href='http://twitter.com/<%= struct_attrs.user_username %>/status/<%= struct_attrs.text_id %>' target='_blank'>http://twitter.com/<%= struct_attrs.user_username %>/status/<%= struct_attrs.text_id %></a>",
            customType: "struct"
            }
    }
};

settings.corpora["twitter-2015"] = {
    id: "twitter-2015",
    title: "Twitter - 2015",
    description: "Material från ett urval av svenskspråkiga Twitteranvändare från 2015.",
    within: {
        "sentence": "sentence",
        "text": "text"
    },
    context: {
        "1 sentence": "1 sentence",
        "1 text": "1 text"
    },
    attributes: modernAttrs2,
    structAttributes: _.extend({}, commonStructAttrs, {
        user_username: {label: "username2"},
        text_datetime: {label: "date"},
        text_retweets: {label: "retweets"},
        text_favourite_count: {label: "favourite_count"},
        text_id: {label: "id", displayType: "hidden"},
    }),
    customAttributes: {
        text_url: {
            label: "url",
            pattern: "<a href='http://twitter.com/<%= struct_attrs.user_username %>/status/<%= struct_attrs.text_id %>' target='_blank'>http://twitter.com/<%= struct_attrs.user_username %>/status/<%= struct_attrs.text_id %></a>",
            customType: "struct"
            }
    }
};

settings.corpora["twitter-2016"] = {
    id: "twitter-2016",
    title: "Twitter - 2016",
    description: "Material från ett urval av svenskspråkiga Twitteranvändare från 2016.",
    within: {
        "sentence": "sentence",
        "text": "text"
    },
    context: {
        "1 sentence": "1 sentence",
        "1 text": "1 text"
    },
    attributes: modernAttrs2,
    structAttributes: _.extend({}, commonStructAttrs, {
        user_username: {label: "username2"},
        text_datetime: {label: "date"},
        text_retweets: {label: "retweets"},
        text_favourite_count: {label: "favourite_count"},
        text_id: {label: "id", displayType: "hidden"}
    }),
    customAttributes: {
        text_url: {
            label: "url",
            pattern: "<a href='http://twitter.com/<%= struct_attrs.user_username %>/status/<%= struct_attrs.text_id %>' target='_blank'>http://twitter.com/<%= struct_attrs.user_username %>/status/<%= struct_attrs.text_id %></a>",
            customType: "struct"
            }
    }
};

settings.corpora["twitter-2017"] = {
    id: "twitter-2017",
    title: "Twitter - 2017",
    description: "Material från ett urval av svenskspråkiga Twitteranvändare från 2017.",
    within: {
        "sentence": "sentence",
        "text": "text"
    },
    context: {
        "1 sentence": "1 sentence",
        "1 text": "1 text"
    },
    attributes: modernAttrs2,
    structAttributes: _.extend({}, commonStructAttrs, {
        user_username: {label: "username2"},
        text_datetime: {label: "date"},
        text_retweets: {label: "retweets"},
        text_favourite_count: {label: "favourite_count"},
        text_id: {label: "id", displayType: "hidden"}
    }),
    customAttributes: {
        text_url: {
            label: "url",
            pattern: "<a href='http://twitter.com/<%= struct_attrs.user_username %>/status/<%= struct_attrs.text_id %>' target='_blank'>http://twitter.com/<%= struct_attrs.user_username %>/status/<%= struct_attrs.text_id %></a>",
            customType: "struct"
            }
    }
};

settings.corpora["gdc"] = {
    id: "gdc",
    title: "Gothenburg Dialogue Corpus (GDC)",
    description: 'För åtkomst kontakta <a href="mailto:data@flov.gu.se">data@flov.gu.se</a>.',
    limitedAccess: true,
    within: settings.defaultWithin,
    context: {
        "1 sentence": "1 sentence",
        "3 sentence": "3 sentences"
    },
    attributes: _.extend({}, modernAttrs, {
        wordclean: {label: "normalized_wordform"}
    }),
    structAttributes: {
        "text_activity1": {label: "activity1"},
        "text_activity2": {label: "activity2"},
        "text_activity3": {label: "activity3"},
        "text_title": {label: "title"},
        "text_duration": {label: "duration"},
        "text_project": {label: "project"},
        "line_speaker": {label: "speaker"},
        "line_speakergender": {label: "gender"},
        "text_date": {label: "date"},
        "section_name": {label: "section"}
        // TODO: this gives some error, fix this.
        //"meta_comment": {label: "comment", type: "set"}
    }
};

settings.corpora["platsannonser"] = {
    id: "platsannonser",
    title: "Platsannonser",
    description: '',
    limitedAccess: true,
    context: {
        "1 sentence": "1 sentence",
        "1 text": "1 text"
    },
    within: settings.defaultWithin,
    attributes: modernAttrs,
    structAttributes: {
        "text_type": {label: "type"},
        "text_filename": {label: "name"}
    }
};

settings.corpora["mepac"] = {
    id: "mepac",
    title: "MEPAC bloggar",
    description: 'För åtkomst kontakta <a href="mailto:anna_w.gustafsson@nordlund.lu.se">Anna W Gustafsson</a>.',
    limitedAccess: true,
    context: {
        "1 sentence": "1 sentence",
        "1 text": "1 text"
    },
    within: settings.defaultWithin,
    attributes: modernAttrs,
    structAttributes: {
        "text_source": {label: "source"},
        "text_date": {label: "date"},
        "text_type": {label: "type",
            extendedComponent: "datasetSelect",
            dataset: {
                "patientblogg": "patientblogg",
                "närståendeblogg": "närståendeblogg",
            }
        }
    }
};

settings.corpora["mepac-i"] = {
    id: "mepac-i",
    title: "MEPAC intervjuer",
    description: 'För åtkomst kontakta <a href="mailto:anna_w.gustafsson@nordlund.lu.se">Anna W Gustafsson</a>.',
    limitedAccess: true,
    context: {
        "1 sentence": "1 sentence",
        "3 text": "3 text"
    },
    within: settings.defaultWithin,
    attributes: modernAttrs,
    structAttributes: {
        "text_source": {label: "source"},
        "text_date": {label: "date"},
        "text_type": {
            label: "type",
            extendedComponent: "structServiceSelect"
        }
    }
};

settings.corpora["forhor"] = {
    id: "forhor",
    title: "Förhör",
    description: 'För åtkomst kontakta <a href="mailto:ylva.byrman@svenska.gu.se">Ylva Byrman</a>.',
    limitedAccess: true,
    context: spContext,
    within: spWithin,
    attributes: modernAttrs,
    structAttributes: {
        "text_fall": {label: "fall"},
        "text_hord": {label: "hord"},
        "text_fl1": {label: "fl1"},
        "text_fl2": {label: "fl2"},
        "text_telefon": {label: "telefon"},
        "text_bandat": {label: "bandat"},
        "text_samtycke": {label: "samtycke"},
        "text_forsvarare": {label: "forsvarare"},
        "text_skribent": {label: "skribent"},
        "text_tolkat": {label: "tolkat"}
    }
};

settings.corpora["soexempel"] = {
    id: "soexempel",
    title: "Språkprov SO 2009",
    description: 'De drygt 94 000 språkexemplen är hämtade ur Svensk ordbok utgiven av Svenska Akademien (2009). '+
                  'Exemplens uppgift är att stödja ordboksdefinitionerna och att ge information om uppslagsordens fraseologi. ' +
                  '<br><br>För åtkomst kontakta <a href="mailto:emma.skoldberg@svenska.gu.se">Emma Sköldberg</a>.',
    limitedAccess: true,
    within: spWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: {
        "text_date": {label: "year", extendedComponent: "structServiceSelect"},
        "entry_word": {label: "entryword"},
        "entry_entryno": {label: "entryno", extendedComponent: "structServiceSelect"},
        "entry_sense1": {label: "sense1", extendedComponent: "structServiceSelect"},
        "entry_sense2": {label: "sense2", extendedComponent: "structServiceSelect"}
    }
};

settings.corpora["spin-source"] = {
    id: "spin-source",
    title: "SpIn",
    description: "",
    limitedAccess: true,
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: _.extend({}, modernAttrs, {
        anonymize: {label: "anonymize"}
    }),
    structAttributes: {
        text_date: {label: "date", extendedComponent: "structServiceSelect"},
        text_birthyear_interval: {label: "birthyear", extendedComponent: "structServiceSelect"},
        text_age: {label: "age", extendedComponent: "structServiceSelect"},
        text_course_level: {label: "course_level", extendedComponent: "structServiceSelect"},
        text_course_subject: {label: "course_subject", extendedComponent: "structServiceSelect"},
        text_essay_id: {label: "essay ID"},
        text_student_id: {label: "student ID", extendedComponent: "structServiceSelect"},
        text_task_id: {label: "task ID", extendedComponent: "structServiceSelect"},
        text_gender: {label: "gender", extendedComponent: "structServiceSelect"},
        text_grade: {label: "cefr_level", extendedComponent: "structServiceSelect"},
        text_grading_scale: {label: "grading_scale", extendedComponent: "structServiceSelect"},
        text_l1: {label: "firstlang", extendedComponent: "structServiceSelect"},
        text_residence: {label: "residence", extendedComponent: "structServiceSelect"},
        text_subject: {label: "subject", extendedComponent: "structServiceSelect"},
        text_text_types: {label: "genre", extendedComponent: "structServiceSelect"},
        text_type: {label: "type", extendedComponent: "structServiceSelect"},
        text_writing_language: {label: "writing_language", extendedComponent: "structServiceSelect"}
    },
    defaultFilters: ["text_text_types", "text_l1", "text_gender", "text_subject", "text_age", "text_grade"]
};

l2_structs = {
    text_date: {label: "date", extendedComponent: "structServiceSelect"},
    text_birthyear_interval: {label: "birthyear", extendedComponent: "structServiceSelect"},
    text_age: {label: "age", extendedComponent: "structServiceSelect"},
    text_course_subject: {label: "course_subject", extendedComponent: "structServiceSelect"},
    text_essay_id: {label: "essay ID"},
    text_student_id: {label: "student ID", extendedComponent: "structServiceSelect"},
    text_task_id: {label: "task ID", extendedComponent: "structServiceSelect"},
    text_gender: {label: "gender", extendedComponent: "structServiceSelect"},
    text_grade: {label: "essay_grade", extendedComponent: "structServiceSelect"},
    text_grading_scale: {label: "grading_scale", extendedComponent: "structServiceSelect"},
    text_l1: {label: "firstlang", extendedComponent: "structServiceSelect"},
    text_text_types: {label: "genre", extendedComponent: "structServiceSelect"},
    text_approximate_level: {label: "approximate_level", extendedComponent: "structServiceSelect"},
    text_cefr_level: {label: "cefr_level", extendedComponent: "structServiceSelect"},
    text_edu_level: {label: "edu_level", extendedComponent: "structServiceSelect"},
    /*text_iso_l1: {label: "l1", extendedComponent: "structServiceSelect"},*/
    text_lessontext_topic: {label: "lessontext_topic", extendedComponent: "structServiceSelect"},
    text_nr_essay_student: {label: "nr_essay_student", extendedComponent: "structServiceSelect"},
    text_school_type: {label: "school_type", extendedComponent: "structServiceSelect"},
    text_svala_link: {label: "full text", pattern: "<a href='<%= struct_attrs.text_svala_link %>' target='_blank'>länk</a>"},
    text_task_date: {label: "task_date", extendedComponent: "structServiceSelect"},
    text_task_format: {label: "task_format", extendedComponent: "structServiceSelect"},
    text_task_subject: {label: "task_subject", extendedComponent: "structServiceSelect"},
    text_task_type: {label: "task_type", extendedComponent: "structServiceSelect"},
    text_task_url: {label: "task_url", type: "url"},
    text_time_in_sweden: {label: "time_in_sweden", extendedComponent: "structServiceSelect"}
};

l2_filters = ["text_age", "text_gender", "text_text_types", "text_l1", "text_approximate_level", "text_course_subject", "text_grading_scale", "text_school_type", "text_edu_level", "text_task_type"];


settings.corpora["spinv1"] = {
    id: "spinv1",
    title: "SpIn v1",
    description: "",
    limitedAccess: true,
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: _.extend({}, modernAttrs, {
        original_form: {label: "original form"},
        pseudo_label: {label: "pseudo label"}
    }),
    structAttributes: l2_structs,
    defaultFilters: l2_filters,
    customAttributes: {
        pdf: {
            label: "",
            pattern: "<a href='https://spraakbanken.github.io/swell-release-v1/Metadata-SpIn' target='_blank'>Metadata explanation</a>",
            customType: "struct",
            order: 1
            }
    }
};

settings.corpora["sw1203v1"] = {
    id: "sw1203v1",
    title: "SW1203 v1",
    description: "",
    limitedAccess: true,
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: l2_structs,
    defaultFilters: l2_filters,
    customAttributes: {
        pdf: {
            label: "",
            pattern: "<a href='https://spraakbanken.github.io/swell-release-v1/Metadata-SW1203' target='_blank'>Metadata explanation</a>",
            customType: "struct",
            order: 1
            }
    }
};

settings.corpora["swellv1-original"] = {
    id: "swellv1-original",
    title: "SweLL v1 original",
    description: "",
    limitedAccess: true,
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: _.extend({}, modernAttrs, {
        correction_label: {label: "correction label"},
        target_form: {label: "target form"},
        pseudo_label: {label: "pseudo label"}
    }),
    structAttributes: l2_structs,
    defaultFilters: l2_filters,
    customAttributes: {
        pdf: {
            label: "",
            pattern: "<a href='https://spraakbanken.github.io/swell-release-v1/Metadata-SweLL' target='_blank'>Metadata explanation</a>",
            customType: "struct",
            order: 1
            }
    }
};

settings.corpora["swellv1-target"] = {
    id: "swellv1-target",
    title: "SweLL v1 target",
    description: "",
    limitedAccess: true,
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: _.extend({}, modernAttrs, {
        correction_label: {label: "correction label"},
        original_form: {label: "original form"},
        pseudo_label: {label: "pseudo label"}
    }),
    structAttributes: l2_structs,
    defaultFilters: l2_filters,
    customAttributes: {
        pdf: {
            label: "",
            pattern: "<a href='https://spraakbanken.github.io/swell-release-v1/Metadata-SweLL' target='_blank'>Metadata explanation</a>",
            customType: "struct",
            order: 1
            }
    }
};

settings.corpora["tisusv1"] = {
    id: "tisusv1",
    title: "TISUS v1",
    description: "",
    limitedAccess: true,
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: modernAttrs,
    structAttributes: {
        text_essay_id: {label: "essay_id", extendedComponent: "structServiceSelect"},
        text_age: {label: "age", extendedComponent: "structServiceSelect"},
        text_gender: {
            label: "gender",
            extendedComponent: "datasetSelect",
            dataset: {
                "Kvinna": "Kvinna",
                "Man": "Man"
            }},
        text_time_in_sweden: {label: "time_in_sweden", extendedComponent: "structServiceSelect"},
        text_edu_level: {label: "edu_level", extendedComponent: "structServiceSelect"},
        text_lf1_result: {label: "lf1_result"},
        text_lf2_result: {label: "lf2_result"},
        text_final_grade: {label: "finalgrade", extendedComponent: "structServiceSelect"},
        text_approximate_level: {label: "approximate_level", extendedComponent: "structServiceSelect"},
        text_datum: {label: "date", hideExtended: true},
        /*text_iso_l1: {
            label: "firstlang",
            type: "set",
            opts: setOptions,
            extendedComponent: "structServiceSelect",
            translationKey: "langcode_"
        },*/
        text_l1: {label: "firstlang", extendedComponent: "structServiceSelect"},
        text_birthyear_interval: {label: "birthyear", extendedComponent: "structServiceSelect"},
        text_cefr_level: {label: "cefr_level", extendedComponent: "structServiceSelect"},
        //text_course_level: {label: "course_subject", extendedComponent: "structServiceSelect"},
        //text_course_subject: {label: "school_type", extendedComponent: "structServiceSelect"},
        text_grade: {label: "essay_grade", extendedComponent: "structServiceSelect"},
        text_grading_scale: {label: "grading_scale", extendedComponent: "structServiceSelect"},
        text_lf_sum: {label: "lf_sum"},
        text_oral_result: {label: "oral_result", extendedComponent: "structServiceSelect"},
        text_source: {label: "tisus_source", extendedComponent: "structServiceSelect"},
        text_student_id: {label: "student_id", extendedComponent: "structServiceSelect"},
        text_svala_link: {label: "full text", hideExtended: true, pattern: "<a href='<%= struct_attrs.text_svala_link %>' target='_blank'>länk</a>"},
        text_task_id: {label: "task_id", extendedComponent: "structServiceSelect"},
        text_task_date: {label: "task_date", extendedComponent: "structServiceSelect"},
        text_task_format: {label: "task_format", extendedComponent: "structServiceSelect"},
        text_task_subject: {label: "task_subject", extendedComponent: "structServiceSelect"},
        text_task_type: {label: "task_type", extendedComponent: "structServiceSelect"},
        text_text_types: {label: "genre", extendedComponent: "structServiceSelect"},
        text_written_result: {label: "written_result", extendedComponent: "structServiceSelect"},
        text_nr_essay_student: {label: "nr_essay_student"},
        text_task_url: {label: "task_url", type: "url"}
    },
    defaultFilters: ["text_age", "text_gender", "text_text_types", "text_l1", "text_approximate_level", "text_grading_scale", "text_edu_level", "text_task_type"],
    customAttributes: {
        pdf: {
            label: "",
            pattern: "<a href='https://spraakbanken.github.io/swell-release-v1/Metadata-TISUS' target='_blank'>Metadata explanation</a>",
            customType: "struct",
            order: 1
            }
    }
};

swell_structs = {
        text_date: {label: "date", extendedComponent: "structServiceSelect"},
        text_birthyear_interval: {label: "birthyear", extendedComponent: "structServiceSelect", order: 10},
        text_age: {label: "age", extendedComponent: "structServiceSelect", order: 20},
        text_course_level: {label: "course_level", extendedComponent: "structServiceSelect"},
        text_course_subject: {label: "course_subject", extendedComponent: "structServiceSelect"},
        text_essay_id: {label: "essay ID"},
        text_student_id: {label: "student ID", extendedComponent: "structServiceSelect", order: 50},
        text_task_id: {label: "task ID", extendedComponent: "structServiceSelect"},
        text_gender: {label: "gender", extendedComponent: "structServiceSelect", order: 30},
        text_grade: {label: "proficiencylevel", extendedComponent: "structServiceSelect", order: 60},
        text_grading_scale: {label: "grading_scale", extendedComponent: "structServiceSelect"},
        text_l1: {label: "firstlang", extendedComponent: "structServiceSelect", order: 40},
        text_residence: {label: "residence", extendedComponent: "structServiceSelect", order: 45},
        text_subject: {label: "subject", extendedComponent: "structServiceSelect"},
        text_text_types: {label: "genre", extendedComponent: "structServiceSelect"},
        text_type: {label: "type", extendedComponent: "structServiceSelect"},
        text_writing_language: {label: "writing_language", extendedComponent: "structServiceSelect"},
        text_task_url: {label: "url", type: "url"},
        text_svala_link: {label: "full text", pattern: "<a href='<%= struct_attrs.text_svala_link %>' target='_blank'>länk</a>"}
    };

settings.corpora["swell-original"] = {
    id: "swell-original",
    title: "SweLL original",
    description: "",
    limitedAccess: true,
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: _.extend({}, modernAttrs, {
        target_form: {label: "target_form"},
        correction_label: {label: "correction_label", extendedComponent: "structServiceSelect"},
        pseudo_label: {label: "pseudo_label", extendedComponent: "structServiceSelect"}
    }),
    structAttributes: swell_structs,
    customAttributes: {
        pdf: {
            label: "",
            pattern: "<a href='https://spraakbanken.gu.se/swell/portal/files/instructions/SweLL_-_Metadata_explanation.pdf' target='_blank'>Metadata explanation</a>",
            customType: "struct",
            order: 1
            }
    },
    defaultFilters: ["text_text_types", "text_l1", "text_gender", "text_subject", "text_age", "text_grade", "text_grading_scale"]
};

settings.corpora["swell-target"] = {
    id: "swell-target",
    title: "SweLL target",
    description: "",
    limitedAccess: true,
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: _.extend({}, modernAttrs, {
        original_form: {label: "original_form"},
        correction_label: {label: "correction_label"},
        pseudo_label: {label: "pseudo_label"}
    }),
    structAttributes: swell_structs,
    customAttributes: {
        pdf: {
            label: "",
            pattern: "<a href='https://spraakbanken.gu.se/swell/portal/files/instructions/SweLL_-_Metadata_explanation.pdf' target='_blank'>Metadata explanation</a>",
            customType: "struct",
            order: 1
            }
    },
    defaultFilters: ["text_text_types", "text_l1", "text_gender", "text_subject", "text_age", "text_grade", "text_grading_scale"]
};


settings.corpora["sw1203v2"] = {
    id: "sw1203v2",
    title: "SW1203-uppsatser version 2",
    description: "",
    limitedAccess: true,
    within: settings.defaultWithin,
    context: defaultContext,
    attributes: _.extend({}, modernAttrs, {
        anonymize: {label: "anonymize"}
    }),
    structAttributes: {
        text_date: {label: "date", extendedComponent: "structServiceSelect"},
        text_birthyear_interval: {label: "birthyear", extendedComponent: "structServiceSelect"},
        text_age: {label: "age", extendedComponent: "structServiceSelect"},
        text_course_level: {label: "course_level", extendedComponent: "structServiceSelect"},
        text_course_subject: {label: "course_subject", extendedComponent: "structServiceSelect"},
        text_essay_id: {label: "essay ID"},
        text_student_id: {label: "student ID", extendedComponent: "structServiceSelect"},
        text_task_id: {label: "task ID", extendedComponent: "structServiceSelect"},
        text_gender: {label: "gender", extendedComponent: "structServiceSelect"},
        text_grade: {label: "cefr_level", extendedComponent: "structServiceSelect"},
        text_grading_scale: {label: "grading_scale", extendedComponent: "structServiceSelect"},
        text_l1: {label: "firstlang", extendedComponent: "structServiceSelect"},
        text_subject: {label: "subject", extendedComponent: "structServiceSelect"},
        text_text_types: {label: "genre", extendedComponent: "structServiceSelect"},
        text_type: {label: "type", extendedComponent: "structServiceSelect"},
        text_writing_language: {label: "writing_language", extendedComponent: "structServiceSelect"}
    },
    defaultFilters: ["text_text_types", "text_l1", "text_gender", "text_subject", "text_age", "text_grade"]
};


// RD Riksdagens öppna data
rd_struct_attributes = {
    dokument_dok_id: {label: "rd_dok_id", order: 1},
    text_datatyp: {label: "rd_datatyp", order: 9},

    text_titel: {label: "title", order: 10},
    text_subtitel: {label: "rd_subtitel", order: 12},
    text_debattnamn: {label: "rd_debattnamn", order: 14},
    text_rubrik: {label: "rd_rubrik", order: 16},
    // text_rubriker: {label: "rubriker", order: 16},
    text_datum: {label: "date", order: 18},
    // text_systemdatum: {label: "systemdatum"},
    text_publicerad: {label: "published", order: 20},
    text_typ: {label: "type", order: 22},
    text_subtyp: {label: "rd_subtyp", order: 23},
    text_doktyp: {label: "rd_doktyp", order: 24},
    text_parti: {label: "party", order: 26},
    dokument_dokumentstatus_url_xml: {label: "rd_dokumentstatus_url_xml", order: 29, type: "url"},
    text_dokument_url_html: {label: "rd_dokument_url_html", order: 30, type: "url"},
    text_dokument_url_text: {label: "rd_dokument_url_text", order: 32, type: "url"},

    text_talare: {label: "speaker", order: 36},
    text_source: {label: "source", order: 38},
    text_htmlformat: {label: "rd_htmlformat", order: 44},
    text_pretext: {label: "rd_pretext", order: 50},
    text_hangar_id: {label: "rd_hangar_id", order: 52},
    text_relaterat_id: {label: "rd_relaterat_id", order: 54},
    text_nummer: {label: "rd_nummer", order: 56},
    text_slutnummer: {label: "rd_slutnummer", order: 58},
    text_beteckning: {label: "rd_beteckning", order: 60},
    text_tempbeteckning: {label: "rd_tempbeteckning", order: 62},
    text_status: {label: "rd_status", order: 64},

    text_lydelse: {label: "rd_lydelse", order: 80},
    text_lydelse2: {label: "rd_lydelse2", order: 81},
    text_avsnitt: {label: "rd_avsnitt", order: 100},
    text_behandlas_i: {label: "rd_behandlas_i", order: 100},
    text_beslutstyp: {label: "rd_beslutstyp", order: 100},
    text_bet: {label: "rd_bet", order: 100},
    text_datumtid: {label: "rd_datumtid", order: 100},
    text_forslag: {label: "rd_forslag", order: 100},
    text_intressent: {label: "rd_intressent", order: 100},
    text_intressent_id: {label: "rd_intressent_id", order: 100},
    text_kammarbeslutstyp: {label: "rd_kammarbeslutstyp", order: 100},
    text_kammaren: {label: "rd_kammaren", order: 100},
    text_motforslag_nummer: {label: "rd_motforslag_nummer", order: 100},
    text_motforslag_partier: {label: "rd_motforslag_partier", order: 100},
    text_mottagare: {label: "rd_mottagare", order: 100},
    text_nummer: {label: "rd_nummer", order: 100},
    text_organ: {label: "rd_organ", order: 100},
    text_pretext: {label: "rd_pretext", order: 100},
    text_punkt: {label: "rd_punkt", order: 100},
    text_relaterat_id: {label: "rd_relaterat_id", order: 100},
    text_rm: {label: "rd_rm", order: 100},
    text_sourceid: {label: "rd_sourceid", order: 100},
    text_startpos: {label: "rd_startpos", order: 100},
    text_status: {label: "rd_status", order: 100},
    text_tumnagel: {label: "rd_tumnagel", order: 100},
    text_tumnagel_stor: {label: "rd_tumnagel_stor", order: 100},
    text_utskottet: {label: "rd_utskottet", order: 100},
    text_utskottsforslag_url_xml: {label: "rd_utskottsforslag_url_xml", order: 100, type: "url"},
    text_video_id: {label: "rd_video_id", order: 100},
    text_video_url: {label: "rd_video_url", order: 100},
    text_vinnare: {label: "rd_vinnare", order: 100},
    text_votering_id: {label: "rd_votering_id", order: 100},
    text_votering_ledamot_url_xml: {label: "rd_votering_ledamot_url_xml", order: 100, type: "url"},

    text_anf_beteckning: {label: "rd_anf_beteckning", order: 200},
    text_anf_datum: {label: "rd_anf_datum", order: 200},
    text_anf_hangar_id: {label: "rd_anf_hangar_id", order: 200},
    text_anf_klockslag: {label: "rd_anf_klockslag", order: 200},
    text_anf_nummer: {label: "rd_anf_nummer", order: 200},
    text_anf_rm: {label: "rd_anf_rm", order: 200},
    text_anf_sekunder: {label: "rd_anf_sekunder", order: 200},
    text_anf_typ: {label: "rd_anf_typ", order: 200},
    text_anf_video_id: {label: "rd_anf_video_id", order: 200},
    sentence_id: {displayType: "hidden"}
};

settings.corporafolders.governmental.rd = {
    title: "Riksdagens öppna data",
    contents: ["rd-anf", "rd-bet", "rd-ds", "rd-eun", "rd-fpm", "rd-frsrdg", "rd-flista", "rd-ip", "rd-kammakt", "rd-kom", "rd-mot", "rd-prop", "rd-prot", "rd-rskr", "rd-samtr", "rd-skfr", "rd-sou", "rd-tlista", "rd-utr", "rd-utsk", "rd-yttr", "rd-ovr"]
};

settings.corpora["rd-anf"] = {
    id: "rd-anf",
    title: "Anföranden",
    description: "De tal som riksdagsledamöterna håller under debatter i kammaren kallas anföranden.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs2,
    structAttributes: {
        "text_dok_id": {label: "rd_dok_id", order: 1},
        "text_dok_hangar_id": {label: "rd_hangar_id", order: 10},
        "text_dok_titel": {label: "title", order: 20},
        "text_dok_rm": {label: "rd_anf_rm", order: 30},
        "text_dok_nummer": {label: "rd_nummer", order: 40},
        "text_dok_datum": {label: "date", order: 50},
        "text_avsnittsrubrik": {label: "rd_rubrik", order: 60},
        "text_kammaraktivitet": {label: "rd_kammaraktivitet", order: 70},
        "text_anforande_id": {label: "rd_anforande_id", order: 80},
        "text_anforande_nummer": {label: "rd_anf_nummer", order: 90},
        "text_talare": {label: "speaker", order: 100},
        "text_parti": {label: "party", order: 110},
        "text_intressent_id": {label: "rd_intressent_id", order: 120},
        "text_rel_dok_id": {label: "rd_relaterat_id", order: 130},
        "text_replik": {label: "rd_replik", order: 140},
        "text_systemdatum": {label: "rd_systemdatum", order: 150}
    }
};

settings.corpora["rd-bet"] = {
    id: "rd-bet",
    title: "Betänkande",
    description: "Utskottens betänkanden och utlåtanden, inklusive rksdagens beslut, en sammanfattning av voteringsresultaten och Beslut i korthet.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-ds"] = {
    id: "rd-ds",
    title: "Departementsserien",
    description: "Utredningar från regeringens departement.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-eun"] = {
    id: "rd-eun",
    title: "EUN",
    description: "Dokument från EU-nämnden, bland annat möteskallelser, föredragningslistor, protokoll och skriftliga samråd med regeringen.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-flista"] = {
    id: "rd-flista",
    title: "Föredragningslista",
    description: "Föredragningslistor för kammarens sammanträden.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-fpm"] = {
    id: "rd-fpm",
    title: "Faktapromemoria",
    description: "Regeringens faktapromemorior om EU-kommissionens förslag.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-frsrdg"] = {
    id: "rd-frsrdg",
    title: "Framställning/redogörelse",
    description: "Framställningar och redogörelser från organ som utsetts av riksdagen.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-ip"] = {
    id: "rd-ip",
    title: "Interpellation",
    description: "Interpellationer från ledamöterna till regeringen.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-kammakt"] = {
    id: "rd-kammakt",
    title: "Kammaraktiviteter",
    description: "",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-kom"] = {
    id: "rd-kom",
    title: "KOM",
    description: "EU-kommissionens förslag och redogörelser, så kallade KOM-dokument.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-mot"] = {
    id: "rd-mot",
    title: "Motion",
    description: "Motioner från riksdagens ledamöter.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-prop"] = {
    id: "rd-prop",
    title: "Proposition",
    description: "Propositioner och skrivelser från regeringen.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-prot"] = {
    id: "rd-prot",
    title: "Protokoll",
    description: "Protokoll från kammarens sammanträden.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-rskr"] = {
    id: "rd-rskr",
    title: "Riksdagsskrivelse",
    description: "Skrivelser från riksdagen till regeringen.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-samtr"] = {
    id: "rd-samtr",
    title: "Sammanträden",
    description: "",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-skfr"] = {
    id: "rd-skfr",
    title: "Skriftliga frågor",
    description: "Skriftliga frågor från ledamöterna till regeringen och svaren på dessa.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-sou"] = {
    id: "rd-sou",
    title: "Statens offentliga utredningar",
    description: "Olika utredningars förslag till regeringen.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-tlista"] = {
    id: "rd-tlista",
    title: "Talarlista",
    description: "Talarlistor för kammarens sammanträden.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-utr"] = {
    id: "rd-utr",
    title: "Utredningar",
    description: "Kommittédirektiv och kommittéberättelser för utredningar som regeringen tillsätter.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-utsk"] = {
    id: "rd-utsk",
    title: "Utskottsdokument",
    description: "Dokument från utskotten, bland annat KU-anmälningar, protokoll, verksamhetsberättelser och den gamla dokumentserien Utredningar från riksdagen.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-yttr"] = {
    id: "rd-yttr",
    title: "Yttrande",
    description: "Utskottens yttranden.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};

settings.corpora["rd-ovr"] = {
    id: "rd-ovr",
    title: "Övrigt",
    description: "Dokumentserierna Riksrevisionens granskningsrapporter, Utredningar från Riksdagsförvaltningen och Rapporter från riksdagen samt planeringsdokument, bilagor till dokument och uttag ur riksdagens databaser.",
    within: settings.defaultWithin,
    context: spContext,
    attributes: modernAttrs,
    structAttributes: rd_struct_attributes
};


settings.corpusListing = new CorpusListing(settings.corpora);
