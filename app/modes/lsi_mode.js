settings.primaryColor = "#FFE7D2";
settings.primaryLight = "#FFF4EB";
settings.autocomplete = false;
settings.wordpicture = false;

settings.mapCenter = {
  lat: 23.987825,
  lng: 78.223017,
  zoom: 4
}

settings.corpora = {};
settings.corporafolders = {};
settings.corpora["lsi"] = {
    id: "lsi",
    title: "Linguistic Survey of India",
    description: "A digital version of the classic Grierson’s <i>Linguistic Survey of India</i> (LSI; 1903-1927) covering more than 250 varieties representing the four major South Asian language families.",
    within: settings.defaultWithin,
    context: {
    "1 sentence": "1 sentence",
    "7 sentence": "7 sentence"
    },
    attributes: {
        norm: {label: "normalized_wordform"},
        pos: {label: "pos"},
        msd: attrs.msd,
        lemma: {label: "baseform"},
        dephead: attrs.dephead,
        deprel: {label: "deprel"},
        ref: attrs.ref
    },
    structAttributes: {
        "corpus_vol": {label: "volume", order: 10},
        "corpus_part": {label: "part", order: 20},
        "page_normalized_language_name": {label: "language", order: 30},
        "page_pno": {label: "page", order: 40},
        "page_family": {label: "languagefamily", order: 50},
        "page_lsi_classification": {label: "lsi_classification", order: 60},
        "page_ethnologue_classification": {label: "ethnologue_classification", order: 70},
        "page_glottolog_classification": {label: "glottolog_classification", order: 80},
        "page_ethnologue_glottolog_language_name": {label: "ethnologue_glottolog_language_name", order: 85},
        "page_latitude": {label: "latitude", order: 90},
        "page_longitude": {label: "longitude", order: 100},
        "page_page_tables_url": {label: "page_tables", type: "url", order: 110},
        "page_page_url": {label: "pagesource", type: "url", order: 120},
        "page_iso_code": {label: "iso_code", order: 130},
        "page_q_name": {label: "q_name", order: 140},
        "sentence_id": {label: "sentence", order: 150}
    },
    customAttributes: {
        "image": {
            customType: "struct",
            sidebarComponent: {
                template: String.raw`
                    <div>
                        <a target="_blank" ng-href="{{pageUrl}}" ng-show="pageUrl">
                            <img ng-src="https://spraakbanken.gu.se/korp/data/lsi/faksimil_thumb/thumb.lsi-v{{volumeName}}-{{pageNumber2}}.jpg">
                        </a>
                    </div>
                `,
                controller: ["$scope", function($scope) {
                    $scope.pageUrl = $scope.sentenceData["page_page_url"];
                    const re = new RegExp("volume=(.*-.*)&pages=.*#page/(.*)/mode");
                    const matches = pageUrl.match(re);
                    const volumeName = matches[1];
                    const pageNumber = matches[2];
                    const pageNumber2 = ("00"+pageNumber).slice(-3);
                    return div;
                }]
            },
            order: 200
        }
    }
};

settings.corpusListing = new CorpusListing(settings.corpora);
