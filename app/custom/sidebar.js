import { stringifyFunc } from "@/stringify"
import statemachine from "@/statemachine"

export default {
    complemgram: {
        template: String.raw`
            <i ng-show="value == '|'" style="color : grey">{{ 'empty' | loc:lang }}</i>
            <ul ng-show="value != '|'">
                <li ng-repeat="comp in values | limitTo:listLimit">
                    
                    <span ng-repeat="value in comp.split('+') track by $index">
                        <span ng-if="!$first"> + </span>
                        <a ng-click="onItemClick(value, $first, $last)" ng-bind-html="stringify(value) | trust"></a>
                    </span>
                </li>
                <li class="link" ng-show="values.length > 1" ng-click="listLimit = listLimit < 10 ? 10 : 1">
                    {{listLimit < 10 ? 'complemgram_show_all': 'complemgram_show_one' | loc:lang}} ({{values.length - 1}})
                </li>
            </ul>
        `,
        controller: ["$scope", function($scope) {
            $scope.listLimit = 1
            $scope.stringify = (lemgram) => util.lemgramToString(lemgram, true)
            $scope.values = $scope.value.split("|").filter(Boolean).map((item) => item.replace(/:.*$/, ""))
            $scope.onItemClick = (value, isPrefix, isSuffix) => {
                let isMiddle = !(isPrefix || isSuffix)

                let p = new URLSearchParams(location.hash.slice(1))
                if(isPrefix) {
                    p.set("prefix", "")
                    p.delete("mid_comp")
                    p.delete("suffix")
                }
                if(isMiddle) {
                    p.set("mid_comp", "")
                    p.delete("suffix")
                    p.delete("prefix")
                }
                if(isSuffix) {
                    p.set("suffix", "")
                    p.delete("mid_comp")
                    p.delete("prefix")
                }
                statemachine.send("SEARCH_LEMGRAM", {value})
                p.set("search", "lemgram|" + value)

                window.location.hash = "#?" + p.toString().replace("=&", "&").replace(/=$/, "")
                
            }
        }]
    },
    ivipVideo: (options) => ({
        template: String.raw`
            <span class="link" ng-click="showVideoModal()">visa inspelning</span>
            <div id="video-modal" ng-controller="VideoCtrl"></div>
        `,
        controller: ["$scope", function($scope) {
            const startTime = $scope.sentenceData["sentence_start"]
            const endTime = $scope.sentenceData["sentence_end"]
            const path = $scope.sentenceData["text_mediafilepath"]
            const file = $scope.sentenceData["text_mediafile"]
            const ext = $scope.sentenceData["text_mediafileext"]

            $scope.showVideoModal = function () {
                const url = options.baseURL + path +  file + "." + ext

                const modalScope = angular.element("#video-modal").scope()
                modalScope.videos = [{"url": url, "type": "video/mp4"}]
                modalScope.fileName = file + "." + ext
                modalScope.startTime = startTime / 1000
                modalScope.endTime = endTime / 1000

                // find start of sentence
                let startIdx = 0
                for(let i = $scope.wordData.position; i >= 0; i--) {
                    if(_.includes($scope.tokens[i]._open, "sentence")) {
                        startIdx = i
                        break
                    }
                }

                // find end of sentence
                let endIdx = $scope.tokens.length - 1
                for(let i = $scope.wordData.position; i < $scope.tokens.length; i++) {
                    if(_.includes($scope.tokens[i]._close, "sentence")) {
                        endIdx = i
                        break
                    }
                }

                modalScope.sentence = _.map($scope.tokens.slice(startIdx, endIdx + 1), "word").join(" ")
                modalScope.open()
            }
        }]
    }),
    lsiImage: {
        template: String.raw`
            <div>
                <a target="_blank" ng-href="{{pageUrl}}" ng-show="pageUrl">
                    <img ng-src="https://spraakbanken.gu.se/korp/data/lsi/faksimil_thumb/thumb.lsi-v{{volumeName}}-{{pageNumber2}}.jpg">
                </a>
            </div>
        `,
        controller: ["$scope", function($scope) {
            $scope.pageUrl = $scope.sentenceData["page_page_url"]
            const re = new RegExp("volume=(.*-.*)&pages=.*#page/(.*)/mode")
            const matches = $scope.pageUrl.match(re)
            $scope.volumeName = matches[1]
            const pageNumber = matches[2]
            $scope.pageNumber2 = ("00"+pageNumber).slice(-3)
        }]
    },
    expandList: (options = {}) => ({
        template: `
        <i ng-if="value == '|'" style="color : grey">{{ 'empty' | loc:lang }}</i>
        <ul ng-if="value != '|'" style="list-style: initial;">
            <li ng-repeat="value in values | limitTo:listLimit">
                <span 
                    ng-class="{link: internalSearch}"
                    title="{{ value.prob }}"
                    ng-bind-html="stringify(value.value) | trust"
                    ng-click="internalSearch && onItemClick(value.value)"></span>
                <a
                    ng-if="attrs.externalSearch"
                    ng-href="{{ externalLink(value.value) }}"
                    class="external_link"
                    target="_blank"
                    style="margin-top: -6px"></a>
            </li>
        </ul>
        <span class="link" ng-show="values.length > 1 && !showAll" ng-click="listLimit = listLimit != $scope.values.length ? $scope.values.length : 1">
            {{listLimit != $scope.values.length ? 'complemgram_show_all': 'complemgram_show_one' | loc:lang}} ({{values.length - 1}})
        </span>
        `,
        controller: ["$scope", function($scope) {
            let valueArray = _.filter(($scope.value && $scope.value.split("|")) || [], Boolean)

            if ($scope.attrs.ranked) {
                $scope.values = _.map(valueArray, (value) => {
                    // TODO is this correct? should we not split at the last occurrence of ":"
                    const val = value.split(":")
                    return { value: val[0], prob: val[val.length - 1] }
                })
            } else {
                $scope.values = _.map(valueArray, (value) => ({ value: value }))
            }

            $scope.listLimit = options.showAll ? $scope.values.length : 1

            $scope.showAll = options.showAll
            $scope.internalSearch = options.internalSearch

            $scope.stringify = stringifyFunc($scope.key)

            const op = options.op ? options.op : "contains"

            $scope.onItemClick = (value) => {
                const cqp = `[${$scope.type == 'struct' ? '_.' : ''}${$scope.key} ${op} "${regescape(value)}"]`;
                statemachine.send("SEARCH_CQP", {cqp})
            }
 
            if ($scope.attrs.externalSearch) {
                $scope.externalLink = (value) => {
                    return _.template($scope.attrs.externalSearch)({
                        val: value,
                    })
                }
            }     
       }]
    })
}   