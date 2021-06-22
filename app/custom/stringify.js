export default {
    sense: (sense) => util.saldoToString(sense, true),
    lemgram: (str) => util.lemgramToString(str, true),
    complemgram: (str) => str.split('+').map((lemgram) => util.lemgramToString(lemgram, true)).join('+')
}