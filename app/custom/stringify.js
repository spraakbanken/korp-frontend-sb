import { Lemgram } from "@/lemgram"
import { Saldo } from "@/saldo"

export default {
    sense: (sense) => Saldo.parse(sense).toHtml() || sense,
    lemgram: (str) => Lemgram.parse(str)?.toHtml() || str,
    complemgram: (str) => str.split('+').map((s) => Lemgram.parse(s)?.toHtml() || s).join('+'),
    lemma: (str) => str.replace(/_/g, " ").replace(/:\d+$/g, "")
}
