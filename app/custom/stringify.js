import { lemgramToHtml, saldoToHtml } from "@/util"

export default {
    sense: (sense) => saldoToHtml(sense, true),
    lemgram: (str) => lemgramToHtml(str, true),
    complemgram: (str) => str.split('+').map((lemgram) => lemgramToHtml(lemgram, true)).join('+')
}