import "./ivip.css"

const colors = ["#1565c0", "#388e3c", "#00838f", "#ff3333", "#ff7700"]

export default {
    // Due to the usage of CSS "whitespace: pre", needed to align sentences in IVIP, we load the template so that HTML is minified
    template: require("./ivip.html"),
    bindings: {
        data: "<",
        wordClick: '&',
        tabActive: "<"
    },
    controller: [
        "$element",
        "$timeout",
        function ($element, $timeout) {
            const scope = this

            scope.follow = true
            scope.codeScroll1 = false
            scope.codeScroll2 = false

            scope.$onInit = function() {
                const structs = scope.data.document.structs
                scope.isVideo = structs.text_mediatype !== 'telefoninspelning'
                const path = structs.text_mediafilepath
                const file = structs.text_mediafile
                const ext = structs.text_mediafileext
                const baseURL = 'https://spraakbanken.gu.se/korp/data/' + scope.data.corpus + '/'
                scope.mediaPath = baseURL + path +  file + "." + ext
    
                scope.mediaStartTime = 0
                scope.docColors = {}
                let colorIdx = 0
                for (let sentence of  scope.data.document.tokens) {
                    if (sentence.attrs.id == scope.data.sentenceData["sentence_id"]) {
                        scope.mediaStartTime = sentence.attrs.start / 1000
                    }
                    // map each speaker to a unique color
                    if (!(sentence.attrs.speaker_id in scope.docColors)) {
                        scope.docColors[sentence.attrs.speaker_id] = colors[colorIdx] || "#000000"
                        colorIdx++
                    }
                }
            }

            scope.$onChanges = function(changesObj) {
                if (changesObj.tabActive && !changesObj.tabActive.isFirstChange()) {
                    if (scope.tabActive) {
                        scope.play()
                    } else {
                        scope.pause()
                        scope.mediaElem.pause()
                    }
                }

            }

            scope.play = () => {
                if (!scope.mediaElem) {
                    initMedia()
                }
                const intervalID = setInterval(function() {
                    const currentTime = scope.mediaElem.currentTime
                    let scrollElem
                    for (let sentence of scope.data.document.tokens) {
                        const sentenceElem = $element.find('#' + sentence.attrs.id)
                        if (sentence.attrs.start * 0.001 <= currentTime && sentence.attrs.end * 0.001 > currentTime) {
                            sentenceElem.css("font-weight", "bold")
                            scrollElem = sentenceElem
                        } else {
                            sentenceElem.css("font-weight", "")
                        }
                    }
                    if (scope.follow && scrollElem) {
                        const container = $element.find('.text-container')
                        // TODO: a scroll event is called after the callback, 
                        // making it neccessary to have two bools to control this....
                        scope.codeScroll1 = true
                        scope.codeScroll2 = true
                        const scrollTop = scrollElem.offset().top - container.offset().top + container.scrollTop() - container.height() / 2
                        container.animate({
                            scrollTop: scrollTop
                        }, 500, () => { $timeout(() => scope.codeScroll1 = false, 10) })
                    }
                }, 1000)
                scope.intervalID = intervalID
            }

            scope.pause = () => clearInterval(scope.intervalID)

            scope.wordClicked = function (clickedSentence, clickedWord) {
                const currentTime = clickedSentence.attrs.start / 1000
                setCurrentTime(currentTime)
                scope.wordClick(['wordClick'])(clickedWord)
            }

            scope.makeFollow = function () {
                // a bit hacky, when user clicks the follow-button
                // it disappears and a scroll is being done automatically
                // if we are at the absolute bottom of the page
                scope.codeScroll1 = true
                scope.codeScroll2 = true
                scope.follow = true
                $timeout(() => {
                    scope.codeScroll1 = false
                    scope.codeScroll2 = false
                }, 0)
            }

            function initMedia(mediaElem) {
                scope.mediaElem = mediaElem[0]
                setCurrentTime(scope.mediaStartTime)
            }

            function setCurrentTime (currentTime) {
                scope.mediaElem.currentTime = currentTime
            }

            $timeout(function () {
                const mediaElem = $element.find(".ivip-media")
                initMedia(mediaElem)
                $element.find('.text-container').on('scroll', function() {
                    if (!scope.codeScroll1 && scope.codeScroll2) {
                        scope.codeScroll2 = false
                    } else if (!scope.codeScroll2) {
                        $timeout(() => scope.follow = false, 0)
                    }
                })
                mediaElem.on('play', scope.play)
                mediaElem.on('pause', scope.pause)
                mediaElem.on('contextmenu', (e) => e.preventDefault())
            })
        }
    ]
}
