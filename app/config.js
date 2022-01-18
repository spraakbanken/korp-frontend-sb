/* lemma => grundform, base form
 * lexem => lemgram, lemgram
 *
 */
settings.autocomplete = true;
settings.mapEnabled = false;
settings.hitsPerPageDefault = 25
settings.hitsPerPageValues = [25,50,75,100,500,1000]
settings.enableBackendKwicDownload = false
settings.enableFrontendKwicDownload = true

settings.languages = ["sv", "en"];
settings.defaultLanguage = "sv";

settings.wordLabel = { sv: "ord", en: "word" };

class MotomoLogger {
    static logEvent(category, action, name, value) {
        // uses global _paq obj from motomo tracking lib. 
        console.info("LOG", category, action, name, value)
        _paq.push(["trackEvent", category, action, name, value])
    }
}

settings.logger = MotomoLogger

settings.downloadFormats = [
    "csv",
    "tsv",
    "annot",
    "ref",
];

settings.groupStatistics = ["saldo", "prefix", "suffix", "lex", "lemma", "sense", "text_swefn", "text_blingbring"];

// for extended search dropdown, can be 'union' or 'intersection'
settings.wordAttributeSelector = "union";
settings.structAttributeSelector = "union";

// for 'compile statistics by' selector, can be 'union' or 'intersection'
settings.reduceWordAttributeSelector = "intersection";
settings.reduceStructAttributeSelector = "intersection";

settings.filterSelection = "intersection"

settings.newsDeskUrl = "https://svn.spraakdata.gu.se/sb-arkiv/pub/component_news/json/korpnews.json";

settings.wordpictureTagset = {
    // supported pos-tags
    verb: "vb",

    noun: "nn",
    adjective: "jj",
    adverb: "ab",
    preposition: "pp",

    // dependency releations
    subject: "ss",
    object: "obj",
    adverbial: "adv",
    preposition_rel: "pa",
    pre_modifier: "at",
    post_modifier: "et",
    adverbial2: "aa"
}


settings.wordPictureConf = {
    verb: [[
        {rel: "subject", css_class: "color_blue"},
        "_",
        {rel: "object", css_class: "color_purple"},
        {rel: "adverbial", css_class: "color_green"}
    ]],
    noun: [
        [{rel: "preposition_rel", css_class: "color_yellow", field_reverse: true},
         {rel: "pre_modifier", css_class: "color_azure"},
         "_",
         {rel: "post_modifier", css_class: "color_red"}],

        ["_", {rel: "subject", css_class: "color_blue", field_reverse: true, alt_label: "vb"}],
        [{rel: "object", css_class: "color_purple", field_reverse: true, alt_label: "vb"}, "_"]
    ],
    adjective: [
        ["_", {rel: "pre_modifier", css_class: "color_yellow", field_reverse: true}],
        [{rel: "adverbial2", css_class: "color_purple"}, "_"]
    ],
    adverb: [
        ["_", {rel: "adverbial", css_class: "color_yellow", field_reverse: true}],
        ["_", {rel: "adverbial2", css_class: "color_purple", field_reverse: true}]
    ],
    preposition: [["_", {rel: "preposition_rel", css_class: "color_green"}]]

}

settings.visibleModes = 6
settings.modeConfig = [
    {
        localekey: "modern_texts",
        mode: "default"
    },
    {
        localekey: "parallel_texts",
        mode: "parallel",
        parallel: true
    },
    {
        localekey: "old_swedish_texts",
        mode: "old_swedish"
    },
    {
        localekey: "lb_texts",
        mode: "lb"
    },
    {
        localekey: "kubhist",
        mode: "kubhist"
    },
    {
        localekey: "all_hist",
        mode: "all_hist",
    },
    {
        localekey: "spf_texts",
        mode: "spf"
    },
    {
        localekey: "fisk1800_texts",
        mode: "fisk1800"
    },
    {
        localekey: "faroese_texts",
        mode: "faroe"
    },
    {
        localekey: "siberian_texts",
        mode: "siberian_german",
    },
    {
        localekey: "kioping_texts",
        mode: "kioping_books",
    },
    {
        localekey: "runeberg",
        mode: "runeberg",
    },
    
    {
        localekey: "bible_texts",
        mode: "bible",
    },
    {
        localekey: "lawroom",
        mode: "law",
    },
    {
        localekey: "spanish_texts",
        mode: "spanish",
    },
    {
        localekey: "interfra",
        mode: "interfra"
    },
    {
        localekey: "bellman",
        mode: "bellman"
    },
    {
        localekey: "eddan",
        mode: "eddan"
    },
    {
        localekey: "lsi",
        mode: "lsi"
    },
    {
        localekey: "dream",
        mode: "dream"
    },
    {
        localekey: "somali",
        mode: "somali",
    },
    {
        localekey: "kubord",
        mode: "kubord"
    }

];

settings.primaryColor = "rgb(221, 233, 255)";
settings.primaryLight = "rgb(242, 247, 255)";

settings.defaultOverviewContext = "1 sentence"
settings.defaultReadingContext = "1 paragraph"

settings.defaultWithin = {
    "sentence": "sentence"
};

// for optimization purposes
settings.cqpPrio = ['deprel', 'pos', 'msd', 'suffix', 'prefix', 'grundform', 'lemgram', 'saldo', 'word'];

settings.defaultOptions = {
    "is": "=",
    "is_not": "!=",
    "starts_with": "^=",
    "contains": "_=",
    "ends_with": "&=",
    "matches": "*=",
    "matches_not": "!*=",
}

settings.korpBackendURL = "https://ws.spraakbanken.gu.se/ws/korp/v8";
settings.downloadCgiScript = "https://ws.spraakbanken.gu.se/ws/korp/download";
settings.korpConfigurationBackendURL = "http://localhost:9000"

settings.mapCenter = {
  lat: 62.99515845212052,
  lng: 16.69921875,
  zoom: 4
};

settings.readingModeField = "sentence_id"
