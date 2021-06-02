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

var posTranslation = {
    "AB": {
        "en": "adverb",
        "sv": "adverb"
    },
    "MAD": {
        "en": "punctuation",
        "sv": "interpunktion"
    },
    "MID": {
        "en": "punctuation",
        "sv": "interpunktion"
    },
    "PAD": {
        "en": "punctuation",
        "sv": "interpunktion"
    },
    "MID|MAD|PAD": {
        "en": "punctuation",
        "sv": "interpunktion"
    },
    "DL": {
        "en": "punctuation",
        "sv": "interpunktion"
    },
    "DT": {
        "en": "determiner",
        "sv": "determinerare"
    },
    "HA": {
        "en": "interrogative/relative adverb",
        "sv": "frågande/relativt adverb"
    },
    "HD": {
        "en": "interrogative/relative determiner",
        "sv": "frågande/relativ determinerare"
    },
    "HP": {
        "en": "interrogative/relative pronoun",
        "sv": "frågande/relativt pronomen"
    },
    "HS": {
        "en": "interrogative/relative possessive",
        "sv": "frågande/relativt possesivt pronomen"
    },
    "IE": {
        "en": "infinitive marker",
        "sv": "infinitivmärke"
    },
    "IN": {
        "en": "interjection",
        "sv": "interjektion"
    },
    "JJ": {
        "en": "adjective",
        "sv": "adjektiv"
    },
    "KN": {
        "en": "conjunction",
        "sv": "konjunktion"
    },
    "NN": {
        "en": "noun",
        "sv": "substantiv"
    },
    "PC": {
        "en": "participle",
        "sv": "particip"
    },
    "PL": {
        "en": "particle",
        "sv": "partikel"
    },
    "PM": {
        "en": "proper noun",
        "sv": "egennamn"
    },
    "PN": {
        "en": "pronoun",
        "sv": "pronomen"
    },
    "PP": {
        "en": "preposition",
        "sv": "preposition"
    },
    "PS": {
        "en": "possessive",
        "sv": "possessivt pronomen"
    },
    "RG": {
        "en": "cardinal number",
        "sv": "grundtal"
    },
    "RO": {
        "en": "ordinal number",
        "sv": "ordningstal"
    },
    "SN": {
        "en": "subjunction",
        "sv": "subjunktion"
    },
    "UO": {
        "en": "foreign word",
        "sv": "utländskt ord"
    },
    "VB": {
        "en": "verb",
        "sv": "verb"
    },
    "E": {
        "en": "e",
        "sv": "e"
    }
};

attrs.pos = {
    label: "pos",
    translation: posTranslation,
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
    translation: {
        "ROOT": {
            "en": "Root",
            "sv": "Rot"
        },
        "++": {
            "en": "Coordinating conjunction",
            "sv": "Samordnande konjunktion"
        },
        "+A": {
            "en": "Conjunctional adverbial",
            "sv": "Konjuktionellt adverb"
        },
        "+F": {
            "en": "Coordination at main clause level",
            "sv": "Koordination på huvudsatsnivå"
        },
        "AA": {
            "en": "Other adverbial",
            "sv": "Annat adverbial"
        },
        "AG": {
            "en": "Agent",
            "sv": "Agent"
        },
        "AN": {
            "en": "Apposition",
            "sv": "Apposition"
        },
        "AT": {
            "en": "Nominal (adjectival) pre-modifier",
            "sv": "Framförställt attribut"
        },
        "CA": {
            "en": "Contrastive adverbial",
            "sv": "Kontrastivt adverbial"
        },
        "DB": {
            "en": "Doubled function",
            "sv": "Dubbel funktion"
        },
        "DT": {
            "en": "Determiner",
            "sv": "Determinerare, bestämningsord"
        },
        "EF": {
            "en": "Relative clause in cleft",
            "sv": "Relativ bisats"
        },
        "EO": {
            "en": "Logical object",
            "sv": "Egentligt objekt"
        },
        "ES": {
            "en": "Logical subject",
            "sv": "Egentligt subjekt"
        },
        "ET": {
            "en": "Other nominal post-modifier",
            "sv": "Efterställd bestämning"
        },
        "FO": {
            "en": "Dummy object",
            "sv": "Formellt objekt"
        },
        "FP": {
            "en": "Free subjective predicative complement",
            "sv": "Fritt subjektivt predikativ (predikatsfyllnad)"
        },
        "FS": {
            "en": "Dummy subject",
            "sv": "Formellt subjekt"
        },
        "FV": {
            "en": "Finite predicate verb",
            "sv": "Finit verb, predikatsverb"
        },
        "I?": {
            "en": "Question mark",
            "sv": "Frågetecken"
        },
        "IC": {
            "en": "Quotation mark",
            "sv": "Citattecken"
        },
        "IG": {
            "en": "Other punctuation mark",
            "sv": "Övrig interpunktion"
        },
        "IK": {
            "en": "Comma",
            "sv": "Kommatecken"
        },
        "IM": {
            "en": "Infinitive marker",
            "sv": "Infinitivmärke"
        },
        "IO": {
            "en": "Indirect object",
            "sv": "Indirekt objekt (dativobjekt)"
        },
        "IP": {
            "en": "Period",
            "sv": "Punkt"
        },
        "IQ": {
            "en": "Colon",
            "sv": "Kolon"
        },
        "IR": {
            "en": "Parenthesis",
            "sv": "Parentes"
        },
        "IS": {
            "en": "Semicolon",
            "sv": "Semikolon"
        },
        "IT": {
            "en": "Dash",
            "sv": "Divis, bindestreck"
        },
        "IU": {
            "en": "Exclamation mark",
            "sv": "Utropstecken"
        },
        "IV": {
            "en": "Nonfinite verb",
            "sv": "Infinit verb"
        },
        "JC": {
            "en": "Second quotation mark",
            "sv": "Citattecken 2"
        },
        "JG": {
            "en": "Second (other) punctuation mark",
            "sv": "Övrig interpunktion 2"
        },
        "JR": {
            "en": "Second parenthesis",
            "sv": "Parentes 2"
        },
        "JT": {
            "en": "Second dash",
            "sv": "Divis 2, bindestreck 2"
        },
        "KA": {
            "en": "Comparative adverbial",
            "sv": "Komparativt adverbial"
        },
        "MA": {
            "en": "Attitude adverbial",
            "sv": "Satsadverbial"
        },
        "MS": {
            "en": "Macrosyntagm",
            "sv": "Makrosyntagm"
        },
        "NA": {
            "en": "Negation adverbial",
            "sv": "Negerande adverbial"
        },
        "OA": {
            "en": "Object adverbial",
            "sv": "Objektsadverbial (prepositionsobjekt)"
        },
        "OO": {
            "en": "Direct object",
            "sv": "Direkt objekt (ackusativobjekt)"
        },
        "OP": {
            "en": "Object predicative",
            "sv": "Objektspredikativ (objektiv predikatsfyllnad)"
        },
        "PL": {
            "en": "Verb particle",
            "sv": "Verbpartikel"
        },
        "PR": {
            "en": "Preposition",
            "sv": "Preposition"
        },
        "PT": {
            "en": "Predicative attribute",
            "sv": "Predikativt attribut"
        },
        "RA": {
            "en": "Place adverbial",
            "sv": "Platsadverbial"
        },
        "SP": {
            "en": "Subjective predicative complement",
            "sv": "Subjektspredikativ (subjektiv predikatsfyllnad)"
        },
        "SS": {
            "en": "Other subject",
            "sv": "Subjekt (övrigt subjekt)"
        },
        "TA": {
            "en": "Time adverbial",
            "sv": "Tidsadverbial"
        },
        "TT": {
            "en": "Address phrase",
            "sv": "Tilltalsfras"
        },
        "UK": {
            "en": "Subordinating conjunction",
            "sv": "Subjunktion"
        },
        "VA": {
            "en": "Notifying adverbial",
            "sv": "Korrelativt adverbial"
        },
        "VO": {
            "en": "Infinitive object complement",
            "sv": "Objekt med infinitiv"
        },
        "VS": {
            "en": "Infinitive subject complement",
            "sv": "Subjekt med infinitiv"
        },
        "XA": {
            "en": "Expressions like 'så att säga' (so to speak)",
            "sv": "Uttryck som ”så att säga”"
        },
        "XF": {
            "en": "Fundament phrase",
            "sv": "Fundamentsfras"
        },
        "XT": {
            "en": "Expressions like 'så kallad' (so called)",
            "sv": "Uttryck som ”så kallad”"
        },
        "XX": {
            "en": "Unclassifiable grammatical function",
            "sv": "Oklassificerbar satsfunktion"
        },
        "YY": {
            "en": "Interjection phrase",
            "sv": "Interjektionsfras"
        },
        "CJ": {
            "en": "Conjunct (in coordinate structure)",
            "sv": "Samordnat led"
        },
        "HD": {
            "en": "Head",
            "sv": "Huvud"
        },
        "IF": {
            "en": "Infinitive verb phrase minus infinitive marker",
            "sv": "Infinitivfras, utom infinitivmärke"
        },
        "PA": {
            "en": "Complement of preposition",
            "sv": "Prepositions komplement"
        },
        "UA": {
            "en": "Subordinate clause minus subordinating conjunction",
            "sv": "Underordnad sats (bisats), utom subjunktion"
        },
        "VG": {
            "en": "Verb group",
            "sv": "Verbgrupp"
        }
    },
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
    translation: {
        "ENAMEX": {
            "en": "name expression",
            "sv": "namnuttryck"
        },
        "TIMEX": {
            "en": "time expression",
            "sv": "tidsuttryck"
        },
        "NUMEX": {
            "en": "numerical expression",
            "sv": "numeriskt uttryck"
        }
    },
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
    translation: {
        "LOC": {
            "en": "location name",
            "sv": "platsnamn"
        },
        "PRS": {
            "en": "person name",
            "sv": "personnamm"
        },
        "ORG": {
            "en": "organization name",
            "sv": "organisationsnamn"
        },
        "EVN": {
            "en": "event name",
            "sv": "händelsenamn"
        },
        "WRK": {
            "en": "work or art name",
            "sv": "verks- eller konstnamn"
        },
        "OBJ": {
            "en": "object name",
            "sv": "objektnamn"
        },
        "MSR": {
            "en": "measure name",
            "sv": "måttnamn"
        },
        "TME": {
            "en": "time",
            "sv": "tid"
        }
    },    
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
    translation: {
        "AST": {
            "en": "astronomical",
            "sv": "astronomisk"
        },
        "GPL": {
            "en": "geographical/geological",
            "sv": "geografisk/geologisk"
        },
        "PPL": {
            "en": "geo-social-political entity",
            "sv": "geo-social-politisk entitet"
        },
        "FNC": {
            "en": "facility entity",
            "sv": "facilitetsentitet"
        },
        "STR": {
            "en": "street/road/postal address",
            "sv": "gata/väg/postadress"
        },
        "HUM": {
            "en": "human being/fictional human character",
            "sv": "människa/fiktiv mänsklig karaktär"
        },
        "MTH": {
            "en": "saint/apostle/god/mythical name/humanoid",
            "sv": "helgon/apostel/gud/mytiskt namm/humanoid"
        },
        "ANM": {
            "en": "animal/pet/mythical beasts",
            "sv": "djur/husdjur/mytiskt odjur"
        },
        "CLC": {
            "en": "tribe/dynasty/ethnical or race name",
            "sv": "stam/dynasti/etniskt namn"
        },
        "FIN": {
            "en": "financial",
            "sv": "finansiell"
        },
        "ATH": {
            "en": "athletic",
            "sv": "atletisk"
        },
        "CLT": {
            "en": "cultural",
            "sv": "kulturell"
        },
        "PLT": {
            "en": "political",
            "sv": "politisk"
        },
        "TVR": {
            "en": "media",
            "sv": "media"
        },
        "EDU": {
            "en": "educational",
            "sv": "utbildning"
        },
        "TRN": {
            "en": "transportation",
            "sv": "transport"
        },
        "CRP": {
            "en": "corporation/organization",
            "sv": "företag/organisation"
        },
        "HPL": {
            "en": "historical/political",
            "sv": "historisk/politisk"
        },
        "WTH": {
            "en": "natural",
            "sv": "natur"
        },
        "CLU": {
            "en": "cultural",
            "sv": "kulturell"
        },
        "ATL": {
            "en": "athletic",
            "sv": "atletisk"
        },
        "RLG": {
            "en": "religious",
            "sv": "religiös"
        },
        "WRT": {
            "en": "written material",
            "sv": "skrivet material"
        },
        "RTV": {
            "en": "radio/tv-programs",
            "sv": "radio/tv-program"
        },
        "WAO": {
            "en": "physical work or art",
            "sv": "fysiskt verk eller konst"
        },
        "PRJ": {
            "en": "project/agreement/initiative",
            "sv": "projekt/överenskommelse/initiativ"
        },
        "WMD": {
            "en": "written media",
            "sv": "skriven media"
        },
        "WAE": {
            "en": "opera/theater play/symphony",
            "sv": "opera/teaterpjäs/symfoni"
        },
        "MDC": {
            "en": "medical",
            "sv": "medicinsk"
        },
        "FWP": {
            "en": "food/beverage",
            "sv": "mat/dryck"
        },
        "CMP": {
            "en": "computer product/telephony",
            "sv": "datorprodukt/telefoni"
        },
        "VHA": {
            "en": "air/space vehicle",
            "sv": "luft-/rymdfarkost"
        },
        "VHG": {
            "en": "land vehicle",
            "sv": "fordon"
        },
        "VHW": {
            "en": "water vehicle",
            "sv": "fartyg"
        },
        "PRZ": {
            "en": "prize/scholarship/honour",
            "sv": "pris/stipendium/utmärkelse"
        },
        "PRD": {
            "en": "product/artefact/flower/plant",
            "sv": "produkt/artefakt/växt"
        },
        "VLM": {
            "en": "volume",
            "sv": "volym"
        },
        "TMP": {
            "en": "temperature",
            "sv": "temperatur"
        },
        "INX": {
            "en": "index",
            "sv": "index"
        },
        "IDX": {
            "en": "index",
            "sv": "index"
        },
        "DST": {
            "en": "distance",
            "sv": "avstånd"
        },
        "PRC": {
            "en": "percent",
            "sv": "procent"
        },
        "CUR": {
            "en": "currency",
            "sv": "valuta"
        },
        "DEN": {
            "en": "density",
            "sv": "densitet"
        },
        "DSG": {
            "en": "dosage",
            "sv": "dosering"
        },
        "SPD": {
            "en": "speed",
            "sv": "hastighet"
        },
        "FRQ": {
            "en": "frequency",
            "sv": "frekvens"
        },
        "AGE": {
            "en": "age",
            "sv": "ålder"
        },
        "MSU": {
            "en": "metric surface unit",
            "sv": "ytmått"
        },
        "WMU": {
            "en": "weight or mass unit",
            "sv": "vikt- eller massaenhet"
        },
        "CMU": {
            "en": "computer unit",
            "sv": "datorenhet"
        },
        "WEB": {
            "en": "web",
            "sv": "webb"
        },
        "PSS": {
            "en": "pressure",
            "sv": "tryck"
        },
        "CVU": {
            "en": "capacity/volume",
            "sv": "kapacitet/volym"
        },
        "LST": {
            "en": "list",
            "sv": "lista"
        },
        "DAT": {
            "en": "date",
            "sv": "datum"
        },
        "PER": {
            "en": "period",
            "sv": "period"
        }
    },
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
   ]
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
        sidebarComponent: "expandList",
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
        sidebarComponent: {
            name: "expandList",
            options: {
                internalSearch: true,
                op: "highest_rank"
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
        sidebarComponent: {
            name: "expandList",
            options: {
                op: "highest_rank",
                internalSearch: true,
                showAll: true
            }
        }
    },
    text_swefn: {
        label: "swefn",
        type: "set",
        isStructAttr: true,
        ranked: true,
        order: 501,
        sidebarComponent: {
            name: "expandList",
            options: {
                op: "highest_rank",
                internalSearch: true,
                showAll: true
            }
        },
        externalSearch: "https://spraakbanken.gu.se/karp/#?mode=swefn&search=sense%7C%7Cswefn--<%= val %>"
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
   translation: posTranslation,
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

var fabTranslation = {
    "texttype": {
        "en": "text type",
        "sv": "texttyp"
    },
    "footnote": {
        "en": "footnote",
        "sv": "fotnot"
    },
    "marginal": {
        "en": "margin notes",
        "sv": "marginalnoter"
    },
    "bold": {
        "en": "bold text",
        "sv": "fetstilt"
    },
    "emphasis": {
        "en": "emphasised text",
        "sv": "emfas"
    },
    "headline": {
        "en": "header",
        "sv": "rubrik"
    },
    "smallcaps": {
        "en": "small caps",
        "sv": "kapitäler"
    },
    "italic": {
        "en": "italics",
        "sv": "kursivt"
    },
    "info": {
        "en": "reference",
        "sv": "hänvisning"
    },
    "antikva": {
        "en": "antiqua",
        "sv": "antikva"
    },
    "gap": {
        "en": "missing text",
        "sv": "saknad text"
    },
    "kustod": {
        "en": "catchword",
        "sv": "kustod"
    },
    "unclear": {
        "en": "unreadable",
        "sv": "oläsligt"
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
  fsv_yngrelagar,
  fabTranslation
}
