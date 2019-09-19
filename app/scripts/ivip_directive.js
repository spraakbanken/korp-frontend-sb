const app = angular.module("korpApp")

app.directive("ivip", ($timeout) => ({
    scope: {
        data: "<",
        wordClick: '&'
    },

    template: require("customviews/ivip.html"),
    link(scope, elem, attr) {
        scope.follow = true
        scope.codeScroll1 = false
        scope.codeScroll2 = false

        const structs = scope.data.document.structs
        scope.isVideo = structs.text_mediatype !== 'telefoninspelning'
        const path = structs.text_mediafilepath
        const file = structs.text_mediafile
        const ext = structs.text_mediafileext
        const baseURL = 'https://spraakbanken.gu.se/korp/data/' + scope.data.corpus + '/'
        scope.mediaPath = baseURL + path +  file + "." + ext

        scope.mediaStartTime = 0
        for (let sentence of  scope.data.document.tokens) {
            if (sentence.attrs.id == scope.data.sentenceId) {
                scope.mediaStartTime = sentence.attrs.start / 1000
            }
        }

        scope.$on('on-entry', function(event, arg) {
            scope.play()
        })

        scope.$on('on-exit', function(event, arg) {
            scope.pause()
        })

        scope.play = () => {
            if (!scope.mediaElem) {
                initMedia()
            }
            const intervalID = setInterval(function() {
                const currentTime = scope.mediaElem.currentTime
                let scrollElem
                for (let sentence of scope.data.document.tokens) {
                    const sentenceElem = elem.find('#' + sentence.attrs.id)
                    if (sentence.attrs.start * 0.001 <= currentTime && sentence.attrs.end * 0.001 > currentTime) {
                        sentenceElem.css("font-weight", "bold")
                        scrollElem = sentenceElem
                    } else {
                        sentenceElem.css("font-weight", "")
                    }
                }
                if (scope.follow && scrollElem) {
                    const container = elem.find('.text-container')
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
            scope.follow = true
        }

        function initMedia(mediaElem) {
            scope.mediaElem = mediaElem[0]
            setCurrentTime(scope.mediaStartTime)
        }

        function setCurrentTime (currentTime) {
            scope.mediaElem.currentTime = currentTime
        }

        $timeout(function () {
            const mediaElem = elem.find(".ivip-media")
            initMedia(mediaElem)
            elem.find('.text-container').on('scroll', function() {
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
}))