settings.wordpicture = false;


settings.hitsPerPageDefault = 10
settings.hitsPerPageValues = [10,25,50,75,100,500,1000]

settings.primaryColor = "#FFF3D8";
settings.primaryLight = "#FFF9EE";

settings.startLang = "swe";

var context = {
    "defaultAligned": {
        "1 link": "1 link"
    }
};

settings.defaultOverviewContext = "1 link"
settings.defaultReadingContext = "1 link"

settings.defaultWithin = { "link": "link" };

settings.corporafolders = {};

settings.corporafolders.europarl = {
    title: "Europarl3",
    contents: ["europarl-da", "europarl-en", "europarl-fi", "europarl-fr", "europarl-el", "europarl-it", "europarl-nl", "europarl-pt", "europarl-es", "europarl-de"]
};

settings.corporafolders.salt = {
    title: "SALT",
    contents: ["saltnld-sv"]
};

settings.corporafolders.aspac = {
    title: "ASPAC",
    contents: ["aspacsven-sv", "aspacsves-sv", "aspacsvde-sv", "aspacsvfr-sv", "aspacsvit-sv", "aspacsvnl-sv", "aspacsvru-sv", "aspacsvpt-sv", "aspacsvla-sv", "aspacsvpl-sv", "aspacsvbg-sv", "aspacsvel-sv", "aspacsvcs-sv", "aspacsvbe-sv", "aspacsvhr-sv", "aspacsvmk-sv", "aspacsvro-sv", "aspacsvsk-sv", "aspacsvsl-sv", "aspacsvuk-sv", "aspacsvtk-sv", "aspacsvsr-sv", "aspacsvsbc-sv", "aspacsvsvm-sv", "aspacsvdsb-sv", "aspacsvhsb-sv"]
};

settings.corpora = {};

settings.corpora["europarl-sv"] = {
    id: "europarl-sv",
    lang: "swe",
    linkedTo: ["europarl-da", "europarl-de", "europarl-el", "europarl-en", "europarl-es", "europarl-fi", "europarl-fr", "europarl-it", "europarl-nl", "europarl-pt"],
    pivot: true,
    title: "Europarl svenska",
    context: context.defaultAligned,
    within: {
        "linkda": "meningspar"
    },
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
        text_date: {label: "date"},
        text_speaker: {label: "speaker"},
        text_speakerlang: {
            label: "lang",
            extendedComponent: "datasetSelect",
            dataset: {
                "EN": "engelska",
                "FI": "finska",
                "FR": "franska",
                "NL": "nederländska",
                "IT": "italienska",
                "DE": "tyska",
                "ES": "spanska",
                "EL": "grekiska",
                "PT": "portugisiska",
                "DA": "danska",
                "HU": "ungerska",
                "PL": "polska",
                "MT": "maltesiska",
                "LT": "litauiska",
                "SL": "slovenska",
                "CS": "tjeckiska",
                "LV": "lettiska",
                "SV": "svenska",
                "SK": "slovakiska",
                "ET": "estniska"
            }
        }
    },
    hide: true
};

settings.corpora["europarl-da"] = {
    id: "europarl-da",
    lang: "dan",
    linkedTo: ["europarl-sv"],
    title: "Europarl svenska-danska",
    context: {
        "1 linkda": "1 link"
    },
    within: {
        "linkda": "meningspar"
    },
    attributes: {
    },
    structAttributes: {
    }
};

settings.corpora["europarl-de"] = {
    id: "europarl-de",
    lang: "deu",
    linkedTo: ["europarl-sv"],
    title: "Europarl svenska-tyska",
    context: {
        "1 linkde": "1 link"
    },
    within: {
        "linkde": "meningspar"
    },
    attributes: {
    },
    structAttributes: {
    }
};

settings.corpora["europarl-el"] = {
    id: "europarl-el",
    lang: "ell",
    linkedTo: ["europarl-sv"],
    title: "Europarl svenska-grekiska",
    context: {
        "1 linkel": "1 link"
    },
    within: {
        "linkel": "meningspar"
    },
    attributes: {
    },
    structAttributes: {
    }
};

settings.corpora["europarl-en"] = {
    id: "europarl-en",
    lang: "eng",
    linkedTo: ["europarl-sv"],
    title: "Europarl svenska-engelska",
    context: {
        "1 linken": "1 link"
    },
    within: {
        "linken": "meningspar"
    },
    attributes: {
    },
    structAttributes: {
    }
};

settings.corpora["europarl-es"] = {
    id: "europarl-es",
    lang: "spa",
    linkedTo: ["europarl-sv"],
    title: "Europarl svenska-spanska",
    context: {
        "1 linkes": "1 link"
    },
    within: {
        "linkes": "meningspar"
    },
    attributes: {
    },
    structAttributes: {
    }
};

settings.corpora["europarl-fi"] = {
    id: "europarl-fi",
    lang: "fin",
    linkedTo: ["europarl-sv"],
    title: "Europarl svenska-finska",
    context: {
        "1 linkfi": "1 link"
    },
    within: {
        "linkfi": "meningspar"
    },
    attributes: {
    },
    structAttributes: {
    }
};

settings.corpora["europarl-fr"] = {
    id: "europarl-fr",
    lang: "fra",
    linkedTo: ["europarl-sv"],
    title: "Europarl svenska-franska",
    context: {
        "1 linkfr": "1 link"
    },
    within: {
        "linkfr": "meningspar"
    },
    attributes: {
    },
    structAttributes: {
    }
};

settings.corpora["europarl-it"] = {
    id: "europarl-it",
    lang: "ita",
    linkedTo: ["europarl-sv"],
    title: "Europarl svenska-italienska",
    context: {
        "1 linkit": "1 link"
    },
    within: {
        "linkit": "meningspar"
    },
    attributes: {
    },
    structAttributes: {
    }
};

settings.corpora["europarl-nl"] = {
    id: "europarl-nl",
    lang: "nld",
    linkedTo: ["europarl-sv"],
    title: "Europarl svenska-nederländska",
    context: {
        "1 linknl": "1 link"
    },
    within: {
        "linknl": "meningspar"
    },
    attributes: {
    },
    structAttributes: {
    }
};

settings.corpora["europarl-pt"] = {
    id: "europarl-pt",
    lang: "por",
    linkedTo: ["europarl-sv"],
    title: "Europarl svenska-portugisiska",
    context: {
        "1 linkpt": "1 link"
    },
    within: {
        "linkpt": "meningspar"
    },
    attributes: {
    },
    structAttributes: {
    }
};

var linkref = {
    label: "linkref",
    displayType: "hidden"
}
var wordlink = {
    label: "wordlink",
    displayType: "hidden"
}

settings.corpora["saltnld-sv"] = {
    id: "saltnld-sv",
    lang: "swe",
    linkedTo: ["saltnld-nl"],
    title: "SALT svenska-nederländska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-nl": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},

        text_year: {label: "year"},
        text_origlang: {
            label: "origlang",
            extendedComponent: "datasetSelect",
            dataset: {
                "swe": "swedish",
                "nld": "dutch"
            }
        },
        page_n: {label: "page_n"}
    }
};
settings.corpora["saltnld-nl"] = {
    id: "saltnld-nl",
    lang: "nld",
    linkedTo: ["saltnld-sv"],
    title: "SALT svenska-nederländska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        pos: {label: "pos"},
        msd: {label: "msd"},
        lemma: {label: "baseform"},
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},

        text_year: {label: "year"},
        text_origlang: {
            label: "origlang",
            extendedComponent: "datasetSelect",
            dataset: {
                "swe": "swedish",
                "nld": "dutch"
            }
        },
        page_n: {label: "page_n"}
    },
    hide: true
};


settings.corpora["aspacsvru-sv"] = {
    id: "aspacsvru-sv",
    lang: "swe",
    linkedTo: ["aspacsvru-ru"],
    title: "ASPAC svenska-ryska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-ru": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};
settings.corpora["aspacsvru-ru"] = {
    id: "aspacsvru-ru",
    lang: "rus",
    linkedTo: ["aspacsvru-sv"],
    title: "ASPAC svenska-ryska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        pos: {label: "pos"},
        msd: {label: "msd"},
        lemma: {label: "baseform"},
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvde-sv"] = {
    id: "aspacsvde-sv",
    lang: "swe",
    linkedTo: ["aspacsvde-de"],
    title: "ASPAC svenska-tyska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-de": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};
settings.corpora["aspacsvde-de"] = {
    id: "aspacsvde-de",
    lang: "deu",
    linkedTo: ["aspacsvde-sv"],
    title: "ASPAC svenska-tyska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        pos: {label: "pos"},
        msd: {label: "msd"},
        lemma: {label: "baseform"},
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsven-sv"] = {
    id: "aspacsven-sv",
    lang: "swe",
    linkedTo: ["aspacsven-en"],
    title: "ASPAC svenska-engelska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-en": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};
settings.corpora["aspacsven-en"] = {
    id: "aspacsven-en",
    lang: "eng",
    linkedTo: ["aspacsven-sv"],
    title: "ASPAC svenska-engelska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        pos: {label: "pos"},
        msd: {label: "msd"},
        lemma: {label: "baseform"},
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsves-sv"] = {
    id: "aspacsves-sv",
    lang: "swe",
    linkedTo: ["aspacsves-es"],
    title: "ASPAC svenska-spanska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-es": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};
settings.corpora["aspacsves-es"] = {
    id: "aspacsves-es",
    lang: "spa",
    linkedTo: ["aspacsves-sv"],
    title: "ASPAC svenska-spanska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        pos: {label: "pos"},
        msd: {label: "msd"},
        lemma: {label: "baseform"},
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvfr-sv"] = {
    id: "aspacsvfr-sv",
    lang: "swe",
    linkedTo: ["aspacsvfr-fr"],
    title: "ASPAC svenska-franska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-fr": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};
settings.corpora["aspacsvfr-fr"] = {
    id: "aspacsvfr-fr",
    lang: "fra",
    linkedTo: ["aspacsvfr-sv"],
    title: "ASPAC svenska-franska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        pos: {label: "pos"},
        msd: {label: "msd"},
        lemma: {label: "baseform"},
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvit-sv"] = {
    id: "aspacsvit-sv",
    lang: "swe",
    linkedTo: ["aspacsvit-it"],
    title: "ASPAC svenska-italienska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-it": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};
settings.corpora["aspacsvit-it"] = {
    id: "aspacsvit-it",
    lang: "ita",
    linkedTo: ["aspacsvit-sv"],
    title: "ASPAC svenska-italienska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        pos: {label: "pos"},
        msd: {label: "msd"},
        lemma: {label: "baseform"},
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvnl-sv"] = {
    id: "aspacsvnl-sv",
    lang: "swe",
    linkedTo: ["aspacsvnl-nl"],
    title: "ASPAC svenska-nederländska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-nl": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};
settings.corpora["aspacsvnl-nl"] = {
    id: "aspacsvnl-nl",
    lang: "nld",
    linkedTo: ["aspacsvnl-sv"],
    title: "ASPAC svenska-nederländska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        pos: {label: "pos"},
        msd: {label: "msd"},
        lemma: {label: "baseform"},
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvpt-sv"] = {
    id: "aspacsvpt-sv",
    lang: "swe",
    linkedTo: ["aspacsvpt-pt"],
    title: "ASPAC svenska-portugisiska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-pt": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};
settings.corpora["aspacsvpt-pt"] = {
    id: "aspacsvpt-pt",
    lang: "por",
    linkedTo: ["aspacsvpt-sv"],
    title: "ASPAC svenska-portugisiska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        pos: {label: "pos"},
        msd: {label: "msd"},
        lemma: {label: "baseform"},
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvpl-sv"] = {
    id: "aspacsvpl-sv",
    lang: "swe",
    linkedTo: ["aspacsvpl-pl"],
    title: "ASPAC svenska-polska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-pl": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};
settings.corpora["aspacsvpl-pl"] = {
    id: "aspacsvpl-pl",
    lang: "pol",
    linkedTo: ["aspacsvpl-sv"],
    title: "ASPAC svenska-polska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        pos: {label: "pos"},
        msd: {label: "msd"},
        lemma: {label: "baseform"},
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvla-sv"] = {
    id: "aspacsvla-sv",
    lang: "swe",
    linkedTo: ["aspacsvla-la"],
    title: "ASPAC svenska-latin",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-la": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};
settings.corpora["aspacsvla-la"] = {
    id: "aspacsvla-la",
    lang: "lat",
    linkedTo: ["aspacsvla-sv"],
    title: "ASPAC svenska-latin",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        pos: {label: "pos"},
        msd: {label: "msd"},
        lemma: {label: "baseform"},
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvbg-sv"] = {
    id: "aspacsvbg-sv",
    lang: "swe",
    linkedTo: ["aspacsvbg-bg"],
    title: "ASPAC svenska-bulgariska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-bg": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};
settings.corpora["aspacsvbg-bg"] = {
    id: "aspacsvbg-bg",
    lang: "bul",
    linkedTo: ["aspacsvbg-sv"],
    title: "ASPAC svenska-bulgariska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        pos: {label: "pos"},
        msd: {label: "msd"},
        lemma: {label: "baseform"},
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvcs-sv"] = {
    id: "aspacsvcs-sv",
    lang: "swe",
    linkedTo: ["aspacsvcs-cs"],
    title: "ASPAC svenska-tjeckiska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-cs": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};
settings.corpora["aspacsvcs-cs"] = {
    id: "aspacsvcs-cs",
    lang: "ces",
    linkedTo: ["aspacsvcs-sv"],
    title: "ASPAC svenska-tjeckiska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvbe-sv"] = {
    id: "aspacsvbe-sv",
    lang: "swe",
    linkedTo: ["aspacsvbe-be"],
    title: "ASPAC svenska-vitryska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-be": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};
settings.corpora["aspacsvbe-be"] = {
    id: "aspacsvbe-be",
    lang: "bel",
    linkedTo: ["aspacsvbe-sv"],
    title: "ASPAC svenska-vitryska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvhr-sv"] = {
    id: "aspacsvhr-sv",
    lang: "swe",
    linkedTo: ["aspacsvhr-hr"],
    title: "ASPAC svenska-kroatiska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-hr": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};
settings.corpora["aspacsvhr-hr"] = {
    id: "aspacsvhr-hr",
    lang: "hrv",
    linkedTo: ["aspacsvhr-sv"],
    title: "ASPAC svenska-kroatiska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvmk-sv"] = {
    id: "aspacsvmk-sv",
    lang: "swe",
    linkedTo: ["aspacsvmk-mk"],
    title: "ASPAC svenska-makedonska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-mk": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};

settings.corpora["aspacsvmk-mk"] = {
    id: "aspacsvmk-mk",
    lang: "mkd",
    linkedTo: ["aspacsvmk-sv"],
    title: "ASPAC svenska-makedonska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvel-sv"] = {
    id: "aspacsvel-sv",
    lang: "swe",
    linkedTo: ["aspacsvel-el"],
    title: "ASPAC svenska-grekiska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-el": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};

settings.corpora["aspacsvel-el"] = {
    id: "aspacsvel-el",
    lang: "ell",
    linkedTo: ["aspacsvel-sv"],
    title: "ASPAC svenska-grekiska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvro-sv"] = {
    id: "aspacsvro-sv",
    lang: "swe",
    linkedTo: ["aspacsvro-ro"],
    title: "ASPAC svenska-rumänska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-ro": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};

settings.corpora["aspacsvro-ro"] = {
    id: "aspacsvro-ro",
    lang: "ron",
    linkedTo: ["aspacsvro-sv"],
    title: "ASPAC svenska-rumänska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        pos: {label: "pos"},
        msd: {label: "msd"},
        lemma: {label: "baseform"},
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvsk-sv"] = {
    id: "aspacsvsk-sv",
    lang: "swe",
    linkedTo: ["aspacsvsk-sk"],
    title: "ASPAC svenska-slovakiska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-sk": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden",
            //     "slk": "slovak"
            // }
        }
    }
};

settings.corpora["aspacsvsk-sk"] = {
    id: "aspacsvsk-sk",
    lang: "slk",
    linkedTo: ["aspacsvsk-sv"],
    title: "ASPAC svenska-slovakiska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        pos: {label: "pos"},
        msd: {label: "msd"},
        lemma: {label: "baseform"},
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvsl-sv"] = {
    id: "aspacsvsl-sv",
    lang: "swe",
    linkedTo: ["aspacsvsl-sl"],
    title: "ASPAC svenska-slovenska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-sl": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};

settings.corpora["aspacsvsl-sl"] = {
    id: "aspacsvsl-sl",
    lang: "slv",
    linkedTo: ["aspacsvsk-sv"],
    title: "ASPAC svenska-slovenska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        pos: {label: "pos"},
        msd: {label: "msd"},
        lemma: {label: "baseform"},
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvuk-sv"] = {
    id: "aspacsvuk-sv",
    lang: "swe",
    linkedTo: ["aspacsvuk-uk"],
    title: "ASPAC svenska-ukrainska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-uk": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};

settings.corpora["aspacsvuk-uk"] = {
    id: "aspacsvuk-uk",
    lang: "ukr",
    linkedTo: ["aspacsvuk-sv"],
    title: "ASPAC svenska-ukrainska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvtk-sv"] = {
    id: "aspacsvtk-sv",
    lang: "swe",
    linkedTo: ["aspacsvtk-tk"],
    title: "ASPAC svenska-turkmeniska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-tk": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};

settings.corpora["aspacsvtk-tk"] = {
    id: "aspacsvtk-tk",
    lang: "tuk",
    linkedTo: ["aspacsvtk-sv"],
    title: "ASPAC svenska-turkmeniska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvsr-sv"] = {
    id: "aspacsvsr-sv",
    lang: "swe",
    linkedTo: ["aspacsvsr-sr"],
    title: "ASPAC svenska-serbiska (latinska alfabetet)",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-sr": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};
settings.corpora["aspacsvsr-sr"] = {
    id: "aspacsvsr-sr",
    lang: "srp",
    linkedTo: ["aspacsvsr-sv"],
    title: "ASPAC svenska-serbiska (latinska alfabetet)",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvsbc-sv"] = {
    id: "aspacsvsbc-sv",
    lang: "swe",
    linkedTo: ["aspacsvsbc-sbc"],
    title: "ASPAC svenska-serbiska (kyrilliska alfabetet)",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-sbc": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};

settings.corpora["aspacsvsbc-sbc"] = {
    id: "aspacsvsbc-sbc",
    lang: "srp",
    linkedTo: ["aspacsvsbc-sv"],
    title: "ASPAC svenska-serbiska (kyrilliska alfabetet)",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvdsb-sv"] = {
    id: "aspacsvdsb-sv",
    lang: "swe",
    linkedTo: ["aspacsvdsb-dsb"],
    title: "ASPAC svenska-lågsorbiska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-dsb": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};
settings.corpora["aspacsvdsb-dsb"] = {
    id: "aspacsvdsb-dsb",
    lang: "dsb",
    linkedTo: ["aspacsvdsb-sv"],
    title: "ASPAC svenska-lågsorbiska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvhsb-sv"] = {
    id: "aspacsvhsb-sv",
    lang: "swe",
    linkedTo: ["aspacsvhsb-hsb"],
    title: "ASPAC svenska-högsorbiska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-hsb": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};

settings.corpora["aspacsvhsb-hsb"] = {
    id: "aspacsvhsb-hsb",
    lang: "hsb",
    linkedTo: ["aspacsvhsb-sv"],
    title: "ASPAC svenska-högsorbiska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["aspacsvsvm-sv"] = {
    id: "aspacsvsvm-sv",
    lang: "swe",
    linkedTo: ["aspacsvsvm-svm"],
    title: "ASPAC svenska-moliseslaviska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
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
        suffix: attrs.suffix,
        linkref: linkref,
        "wordlink-svm": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    }
};

settings.corpora["aspacsvsvm-svm"] = {
    id: "aspacsvsvm-svm",
    lang: "svm",
    linkedTo: ["aspacsvsvm-sv"],
    title: "ASPAC svenska-moliseslaviska",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        linkref: linkref,
        "wordlink-sv": wordlink
    },
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_description: {label: "description"},
        text_lang: {
            label: "lang",
            displayType: "hidden"
        }
    },
    hide: true
};

settings.corpora["espc-sv"] = {
    id: "espc-sv",
    lang: "swe",
    linkedTo: ["espc-en"],
    limitedAccess: true,
    title: "The English-Swedish Parallel Corpus (ESPC)",
    description: 'För åtkomst kontakta <a href="mailto:espc@sprak.gu.se">Anna-Lena Fredriksson</a>.<br>Mer information om ESPC finns <a href="https://sprak.gu.se/forskning/korpuslingvistik/korpusar-vid-spl/espc">här</a>.',
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {
        pos: attrs.pos,
        espcmsd: {label: "msd"},
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
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_date: {label: "year"}
    }
};
settings.corpora["espc-en"] = {
    id: "espc-en",
    lang: "eng",
    linkedTo: ["espc-sv"],
    limitedAccess: true,
    title: "The English-Swedish Parallel Corpus (ESPC)",
    context: context.defaultAligned,
    within: {
        "link": "meningspar"
    },
    attributes: {},
    structAttributes: {
        text_author: {label: "author"},
        text_title: {label: "title"},
        text_date: {label: "year"}
    },
    hide: true
};


console.log("parallelcorpuslisting")
window.cl = settings.corpusListing = new ParallelCorpusListing(settings.corpora);
delete ParallelCorpusListing;
delete context;
