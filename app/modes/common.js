var karpLemgramLink = "https://spraakbanken.gu.se/karp/#?mode=DEFAULT&search=extended||and|lemgram|equals|<%= val.replace(/:\\d+/, '') %>";

var liteOptions = {
    "is": "=",
    "is_not": "!="
}
var setOptions = {
    "is": "contains",
    "is_not": "not contains"
};
var probabilitySetOptions = {
    "is": "highest_rank",
    "is_not": "not_highest_rank",
    "contains": "rank_contains",
    "contains_not": "not_rank_contains",
};

var extendedSetOptions = {
    "is": "contains",
    "is_not": "not contains",
    "starts_with": "starts_with_contains",
    "contains": "incontains_contains",
    "ends_with": "ends_with_contains",
    "matches": "regexp_contains",
    "matches_not": "not_regexp_contains",
};

var defaultContext = {
    "1 sentence": "1 sentence"
};

var spContext = {
    "1 sentence": "1 sentence",
    "1 paragraph": "1 paragraph"
};
var spWithin = {
    "sentence": "sentence",
    "paragraph": "paragraph"
};

var attrs = {};  // positional attributes
var sattrs = {}; // structural attributes

attrs.pos = {
    label: "pos",
    translationKey: "pos_",
    dataset: {
        "AB": "AB",
        "MID|MAD|PAD": "DL",
        "DT": "DT",
        "HA": "HA",
        "HD": "HD",
        "HP": "HP",
        "HS": "HS",
        "IE": "IE",
        "IN": "IN",
        "JJ": "JJ",
        "KN": "KN",
        "NN": "NN",
        "PC": "PC",
        "PL": "PL",
        "PM": "PM",
        "PN": "PN",
        "PP": "PP",
        "PS": "PS",
        "RG": "RG",
        "RO": "RO",
        "SN": "SN",
        "UO": "UO",
        "VB": "VB"
    },
    opts: liteOptions,
    extendedComponent: "datasetSelect",
    escape: false,
    order: 0
};

attrs.msd = {
    label: "msd",
    opts: settings.defaultOptions,
    extendedComponent: 'msd'
};
attrs.baseform = {
    label: "baseform",
    type: "set",
    opts: extendedSetOptions,
    extendedTemplate: "<input ng-model='input' escaper>",
    order: 1
};
attrs.lemgram = {
    label: "lemgram",
    type: "set",
    opts: setOptions,
    stringify: function(lemgram) {
        // TODO: what if we're getting more than one consequtive lemgram back?
        return util.lemgramToString(_.trim(lemgram), true);
    },
    externalSearch: karpLemgramLink,
    internalSearch: true,
    extendedComponent: {
        name: "autocExtended",
        options: {
            type: 'lemgram',
            errorOnEmpty: true
        }
    },
    order: 2
};
attrs.dalinlemgram = {
    label: "dalin-lemgram",
    type: "set",
    opts: setOptions,
    stringify: function(lemgram) {
        // TODO: what if we're getting more than one consequtive lemgram back?
        return util.lemgramToString(_.trim(lemgram), true);
    },
    externalSearch: karpLemgramLink,
    internalSearch: true,
    extendedComponent: {
        name: "autocExtended",
        options: {
            type: 'lemgram',
            variant: 'dalin',
            errorOnEmpty: true
        }
    },
    order: 2
};
attrs.saldo = {
    label: "saldo",
    type: "set",
    opts: setOptions,
    stringify: function(saldo) {
        return util.saldoToString(saldo, true);
    },
    externalSearch: "https://spraakbanken.gu.se/karp/#?mode=DEFAULT&search=extended||and|sense|equals|<%= val %>",
    internalSearch: true,
    extendedComponent: {
        name: "autocExtended",
        options: {
            type: 'sense',
            errorOnEmpty: true
        }
    },
    order: 3
};
attrs.dephead = {
    label: "dephead",
    displayType: "hidden"
};
attrs.deprel = {
    label: "deprel",
    translationKey: "deprel_",
    extendedComponent: "datasetSelect",
    dataset: {
        "++": "++",
        "+A": "+A",
        "+F": "+F",
        "AA": "AA",
        "AG": "AG",
        "AN": "AN",
        "AT": "AT",
        "CA": "CA",
        "DB": "DB",
        "DT": "DT",
        "EF": "EF",
        "EO": "EO",
        "ES": "ES",
        "ET": "ET",
        "FO": "FO",
        "FP": "FP",
        "FS": "FS",
        "FV": "FV",
        "I?": "I?",
        "IC": "IC",
        "IG": "IG",
        "IK": "IK",
        "IM": "IM",
        "IO": "IO",
        "IP": "IP",
        "IQ": "IQ",
        "IR": "IR",
        "IS": "IS",
        "IT": "IT",
        "IU": "IU",
        "IV": "IV",
        "JC": "JC",
        "JG": "JG",
        "JR": "JR",
        "JT": "JT",
        "KA": "KA",
        "MA": "MA",
        "MS": "MS",
        "NA": "NA",
        "OA": "OA",
        "OO": "OO",
        "OP": "OP",
        "PL": "PL",
        "PR": "PR",
        "PT": "PT",
        "RA": "RA",
        "SP": "SP",
        "SS": "SS",
        "TA": "TA",
        "TT": "TT",
        "UK": "UK",
        "VA": "VA",
        "VO": "VO",
        "VS": "VS",
        "XA": "XA",
        "XF": "XF",
        "XT": "XT",
        "XX": "XX",
        "YY": "YY",
        "CJ": "CJ",
        "HD": "HD",
        "IF": "IF",
        "PA": "PA",
        "UA": "UA",
        "VG": "VG",
        "ROOT": "ROOT"
    },
    opts: liteOptions
};
attrs.prefix = {
    label: "prefix",
    type: "set",
    opts: setOptions,
    stringify: function(lemgram) {
        return util.lemgramToString(lemgram, true);
    },
    externalSearch: karpLemgramLink,
    internalSearch: true,
    extendedComponent: {
        name: "autocExtended",
        options: {
            type: 'lemgram',
            variant: 'affix',
            errorOnEmpty: true
        }
    }
};
attrs.suffix = {
    label: "suffix",
    type: "set",
    opts: setOptions,
    stringify: function(lemgram) {
        return util.lemgramToString(lemgram, true);
    },
    externalSearch: karpLemgramLink,
    internalSearch: true,
    extendedComponent: {
        name: "autocExtended",
        options: {
            type: 'lemgram',
            variant: 'affix',
            errorOnEmpty: true
        }
    }
};
attrs.ref = {
    label: "ref",
    displayType: "hidden"
};
attrs.link = {
    label: "sentence_link"
};
attrs.ne_ex = {
    label: "ne_expr",
    translationKey: "ne_expr_",
    extendedComponent: "datasetSelect",
    isStructAttr: true,
    dataset: [
       "ENAMEX",
       "TIMEX",
       "NUMEX",
   ]
};
attrs.ne_type = {
    label: "ne_type",
    translationKey: "ne_type_",
    extendedComponent: "datasetSelect",
    isStructAttr: true,
    dataset: [
       "LOC",
       "PRS",
       "ORG",
       "EVN",
       "WRK",
       "OBJ",
       "MSR",
       "TME"
   ]
};
attrs.ne_subtype = {
    label: "ne_subtype",
    translationKey: "ne_subtype_",
    extendedComponent: "datasetSelect",
    isStructAttr: true,
    dataset: [
        "AST",
        "GPL",
        "PPL",
        "FNC",
        "STR",
        "HUM",
        "MTH",
        "ANM",
        "CLC",
        "FIN",
        "ATH",
        "CLT",
        "PLT",
        "TVR",
        "EDU",
        "TRN",
        "CRP",
        "HPL",
        "WTH",
        "CLU",
        "ATL",
        "RLG",
        "WRT",
        "RTV",
        "WAO",
        "PRJ",
        "WMD",
        "WAE",
        "MDC",
        "FWP",
        "CMP",
        "VHA",
        "VHG",
        "VHW",
        "PRZ",
        "PRD",
        "VLM",
        "TMP",
        "INX",
        "DST",
        "PRC",
        "CUR",
        "DEN",
        "DSG",
        "SPD",
        "FRQ",
        "AGE",
        "MSU",
        "WMU",
        "CMU",
        "WEB",
        "PSS",
        "CVU",
        "IDX",
        "LST",
        "DAT",
        "PER"
   ],
   stringify: function(val) {
       lString = util.getLocaleStringUndefined("ne_subtype_" + val)
       return lString || val;
   }
};
attrs.ne_name = {
    label: "ne_name",
    isStructAttr: true
};
sattrs.date = {
    label: "date"
};

var modernAttrsOld = {
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
};


var modernAttrs = {
    pos: attrs.pos,
    msd: attrs.msd,
    lemma: attrs.baseform,
    lex: attrs.lemgram,
    dephead: attrs.dephead,
    deprel: attrs.deprel,
    ref: attrs.ref,
    ne_ex: attrs.ne_ex,
    ne_type: attrs.ne_type,
    ne_subtype: attrs.ne_subtype,
    ne_name: attrs.ne_name,
    prefix: {
        label: "prefix", 
        extendedTemplate: "<span>{{'compound_move' | loc}}</span>",
        hideSidebar: true,
        hideStatistics: true,
        hideCompare: true
    },
    suffix: {
        label: "suffix", 
        extendedTemplate: "<span>{{'compound_move' | loc}}</span>",
        hideSidebar: true,
        hideStatistics: true,
        hideCompare: true
    },
    complemgram: {
        label: "compound",
        type: "set",
        opts: {
            "prefix": "starts_with_contains",
            "not_prefix": "not_starts_with_contains",
            "compound_middle": "incontains_contains",
            "not_compound_middle": "not_incontains_contains",
            "suffix": "ends_with_contains",
            "not_suffix": "not_ends_with_contains",
        },
        stringify: function(lemgram) {
            return util.lemgramToString(lemgram, true)
        },
        internalSearch: true,
        ranked: true,
        extendedComponent: "complemgramExtended",
        sidebarComponent: "complemgram"
    },
    compwf: {
        label: "compwf",
        display: {
            "expandList": {}
        },
        opts: {
            "prefix": "starts_with_contains",
            "not_prefix": "not_starts_with_contains",
            "compound_middle": "incontains_contains",
            "not_compound_middle": "not_incontains_contains",
            "suffix": "ends_with_contains",
            "not_suffix": "not_ends_with_contains",
        },
        extendedComponent: "compwf",
        type: "set",
    },
    sense: {
        label: "sense",
        type: "set",
        ranked: true,
        display: {
            expandList: {
                internalSearch: function(key, value) { return "[" + key + " highest_rank '" + regescape(value) + "']"}
            }
        },
        stringify: function(sense) { return util.saldoToString(sense, true); },
        opts: probabilitySetOptions,
        externalSearch: "https://spraakbanken.gu.se/karp/#?mode=DEFAULT&search=extended||and|sense|equals|<%= val %>",
        internalSearch: true,
        extendedComponent: {
            name: "autocExtended",
            options: {
                type: 'sense',
                errorOnEmpty: true
            }
        }
    }
};

var modernAttrs2 = {
    pos: attrs.pos,
    msd: attrs.msd,
    lemma: attrs.baseform,
    lex: attrs.lemgram,
    dephead: attrs.dephead,
    deprel: attrs.deprel,
    ref: attrs.ref,
    prefix: modernAttrs.prefix,
    suffix: modernAttrs.suffix,
    ne_ex: attrs.ne_ex,
    ne_type: attrs.ne_type,
    ne_subtype: attrs.ne_subtype,
    ne_name: attrs.ne_name,
    complemgram: modernAttrs.complemgram,
    compwf: modernAttrs.compwf,
    sense: modernAttrs.sense,
    sentiment: {
        label: "sentiment"
    },
    blingbring: {
        label: "blingbring",
        type: "set",
        internalSearch: true
    },
    swefn: {
        label: "swefn",
        type: "set",
        externalSearch: "https://spraakbanken.gu.se/karp/#?mode=swefn&search=sense%7C%7Cswefn--<%= val %>",
        internalSearch: true
    }
};

var lexClassesText = {
    text_blingbring: {
        label: "blingbring",
        type: "set",
        isStructAttr: true,
        ranked: true,
        order: 500,
        display: {
            expandList: {
                internalSearch: function(key, value) { return "[_.text_blingbring highest_rank '" + regescape(value) + "']"},
                linkAllValues: true,
                showAll: true
            }
        },
        internalSearch: true
    },
    text_swefn: {
        label: "swefn",
        type: "set",
        isStructAttr: true,
        ranked: true,
        order: 501,
        display: {
            expandList: {
                internalSearch: function(key, value) { return "[_.text_swefn highest_rank '" + regescape(value) + "']"},
                linkAllValues: true,
                showAll: true
            }
        },
        externalSearch: "https://spraakbanken.gu.se/karp/#?mode=swefn&search=sense%7C%7Cswefn--<%= val %>",
        internalSearch: true
    }
};

var readability = {
    lix: {
        label: "lix",
        isStructAttr: true,
        order: 600
    },
    ovix: {
        label: "ovix",
        isStructAttr: true,
        order: 601
    },
    nk: {
        label: "nk",
        isStructAttr: true,
        order: 602
    }
};

var commonStructAttrs = {
    text_blingbring: lexClassesText.text_blingbring,
    text_swefn: lexClassesText.text_swefn,
    text_lix: readability.lix,
    text_ovix: readability.ovix,
    text_nk: readability.nk
};

settings.posset = {
   type: "set",
   label: "posset",
   opts: setOptions,
   translationKey: "pos_",
   extendedComponent: "datasetSelect",
   dataset:  {
        "AB": "AB",
        "MID|MAD|PAD": "DL",
        "DT": "DT",
        "HA": "HA",
        "HD": "HD",
        "HP": "HP",
        "HS": "HS",
        "IE": "IE",
        "IN": "IN",
        "JJ": "JJ",
        "KN": "KN",
        "NN": "NN",
        "PC": "PC",
        "PL": "PL",
        "PM": "PM",
        "PN": "PN",
        "PP": "PP",
        "PS": "PS",
        "RG": "RG",
        "RO": "RO",
        "SN": "SN",
        "UO": "UO",
        "VB": "VB"
    },
    order: 0
};

settings.fsvlemma = {
    type: "set",
    label: "baseform",
    opts: setOptions,
    extendedTemplate: "<input ng-model='model' >"
};
settings.fsvlex = {
    type: "set",
    label: "lemgram",
    opts: setOptions,
    extendedComponent: {
        name: "autocExtended",
        options: {
            type: 'lemgram',
            errorOnEmpty: true
        }
    },
    stringify: function(str) {
        return util.lemgramToString(str, true);
    },
    externalSearch: karpLemgramLink,
    internalSearch: true
};
settings.fsvvariants = {
    type: "set",
    label: "variants",
    stringify: function(str) {
        return util.lemgramToString(str, true);
    },
    extendedComponent: {
        name: "autocExtended",
        options: {
            type: 'lemgram',
            errorOnEmpty: true
        }
    },
    opts: setOptions,
    externalSearch: karpLemgramLink,
    internalSearch: true,
    order: 4
};

settings.fsvdescription ='<a target="_blank" href="http://project2.sol.lu.se/fornsvenska/">Fornsvenska textbanken</a> är ett projekt som digitaliserar fornsvenska texter och gör dem tillgängliga över webben. Projektet leds av Lars-Olof Delsing vid Lunds universitet.';

var fsv_yngrelagar = {
    morphology: 'fsvm',
    id: "fsv-yngrelagar",
    title: "Yngre lagar – Fornsvenska textbankens material",
    description: settings.fsvdescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: {
        posset: settings.posset,
        lemma: settings.fsvlemma,
        lex: settings.fsvlex,
        variants: settings.fsvvariants
        },
    structAttributes: {
        text_title: {
            label: "title",
            extendedComponent: "datasetSelect",
            dataset: [
                "Kristoffers Landslag, nyskrivna flockar i förhållande till MEL",
                "Kristoffers Landslag, innehållsligt ändrade flockar i förhållande til MEL",
                "Kristoffers Landslag, flockar direkt hämtade från MEL",
                "Kristoffers Landslag"
                ],
        },
        text_date: {label: "date"}
    }
};

var fsv_aldrelagar = {
    morphology: 'fsvm',
    id: "fsv-aldrelagar",
    title: "Äldre lagar – Fornsvenska textbankens material",
    description: settings.fsvdescription,
    within: settings.defaultWithin,
    context: spContext,
    attributes: {
        posset: settings.posset,
        lemma: settings.fsvlemma,
        lex: settings.fsvlex,
        variants: settings.fsvvariants
                },
    structAttributes: {
        text_title: {
            label: "title",
            extendedComponent: "datasetSelect",
            dataset: [
                "Yngre Västgötalagens äldsta fragment, Lydekini excerpter och anteckningar",
                "Tillägg till Upplandslagen, hskr A (Ups B 12)",
                "Södermannalagen, enligt Codex iuris Sudermannici",
                "Östgötalagen, fragment H, ur Kyrkobalken ur Skokloster Avdl I 145",
                "Yngre Västmannalagen, enl Holm B 57",
                "Vidhemsprästens anteckningar",
                "Magnus Erikssons Stadslag, exklusiva stadslagsflockar",
                "Södermannalagens additamenta, efter NKS 2237",
                "Hälsingelagen",
                "Yngre Västgötalagen, tillägg, enligt Holm B 58",
                "Östgötalagen, fragment C, ur Holm B 1709",
                "Yngre Västgötalagen, enligt Holm B 58",
                "Upplandslagen enl Schlyters utgåva och Codex Ups C 12, hskr A",
                "Skånelagen, enligt Holm B 76",
                "Östgötalagen, fragment D, ur Holm B 24",
                "Östgötalagen A, ur Holm B 50",
                "Äldre Västgötalagen",
                "Östgötalagen, fragment M, ur Holm B 196",
                "Gutalagen enligt Holm B 64",
                "Upplandslagen enligt Codex Holm B 199, Schlyters hskr B",
                "Smålandslagens kyrkobalk",
                "Dalalagen (Äldre Västmannalagen)",
                "Gutalagens additamenta enligt AM 54",
                "Bjärköarätten",
                "Magnus Erikssons Landslag",
                "Östgötalagen, fragment N, ur Köpenhamn AM 1056",
                "Södermannalagen stadsfästelse - Confirmatio, enligt NKS 2237",
                "Östgötalagen, fragment E, ur Ups B 22"
                            ],
        },
        text_date: {label: "date"}
    }
};

settings.commonStructTypes = {
    date_interval: {
        label: "date_interval",
        hideSidebar: "true",
        hideCompare: "true",
        hideStatistics: "true",
        opts: false,
        extendedComponent: "dateInterval"
    }
};

module.exports = {
  spWithin,
  spContext,
  modernAttrs,
  modernAttrs2,
  commonStructAttrs,
  defaultContext,
  attrs,
  sattrs,
  modernAttrsOld,
  setOptions,
  liteOptions,
  lexClassesText,
  readability,
  fsv_aldrelagar,
  fsv_yngrelagar
}
