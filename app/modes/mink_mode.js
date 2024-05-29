/** @format */
import currentMode from "@/mode"
import settings from "@/settings"
const minkImgPath = require("custom/mink.svg")

settings["auth_module"] = {
    module: "federated_auth",
    options: {
        jwt_url: "https://sp.spraakbanken.gu.se/auth/jwt",
        login_service: "https://sp.spraakbanken.gu.se/auth/login",
        logout_service: "https://sp.spraakbanken.gu.se/Shibboleth.sso/Logout",
    },
}

settings["corpus_info_link"] = {
    url_template: "https://spraakbanken.gu.se/mink/library/corpus/%s",
    label: {swe: "Öppna i Mink", eng: "Open in Mink"}
}
settings["frontpage"]["corpus_updates"] = false
settings["korp_backend_url"] = "https://spraakbanken3.it.gu.se/korp"

settings["config_dependent_on_authentication"] = true

settings["corpus_config_url"] = async () => {
    const minkUrl = "https://spraakbanken2.it.gu.se/ws/mink"
    const authenticationProxy = await import("@/components/auth/auth")
    const creds = authenticationProxy.getAuthorizationHeader()
    const baseUrl = `${settings["korp_backend_url"]}/corpus_config?mode=${currentMode}`
    if (!_.isEmpty(creds)) {
        const response = await fetch(`${minkUrl}/list-korp-corpora`, {
            headers: authenticationProxy.getAuthorizationHeader(),
        })
        const data = await response.json()
        return `${baseUrl}&corpus=${data.corpora.join(",")}`
    } else {
        return baseUrl
    }
}

let html = String.raw

const minkLink = "https://spraakbanken.gu.se/mink/"

settings["initialization_checks"] = async (s) => {
    // Import only when needed, because it depends on the auth_module setting defined here
    const {default: statemachine} = await import("@/statemachine")
    const authenticationProxy = await import("@/components/auth/auth")

    const sweDesc = "Det här är Mink-läget i Korp. "
    const engDesc = "This is the Mink mode in Korp. "
    const translations = {
        readMore: { eng: "Read more about Mink", swe: "Läs mer om Mink" },
        here: { eng: "here", swe: "här" },
        noAccess: {
            eng: `${engDesc}Mink is in a test phase and you do not have access right know.`,
            swe: `${sweDesc}Mink är i en testfas och du har inte tillgång just nu.`,
        },
        notAuthenticated: {
            eng: `${engDesc}Only logged in users with access to Mink can use this mode.`,
            swe: `${sweDesc}Bara inloggande användare kan använda det här läget.`,
        },
        login: {
            eng: "Do you want to log in?",
            swe: "Vill du logga in?",
        },
        noCorpora: {
            eng: `${engDesc}You do not have any corpora to explore.`,
            swe: `${sweDesc}Du har inga korpusar att undersöka.`,
        },
        goTo: {
            eng: "If you want to create your own corpora, go to",
            swe: "Om du vill skapa dina egna korpusar, gå till",
        },
    }

    const readMore = html`<div>
        {{translations.readMore | locObj:$root.lang}}
        <a href="${minkLink}">{{translations['here'] | locObj:$root.lang}}</a>.
    </div>`

    const minkImg = html`<div class="text-center my-5"><img src="${minkImgPath}" class="h-16" /></div>`
    if (!authenticationProxy.isLoggedIn()) {
        s.openErrorModal({
            content: html`${minkImg}
                <div class="my-3">{{translations.notAuthenticated | locObj:$root.lang}}</div>
                ${readMore}
                <div class="mt-3">{{translations.login | locObj:$root.lang}}</div>`,
            onClose: () => {
                s.waitForLogin = true
                statemachine.send("LOGIN_NEEDED")
            },
            translations,
        })
        return true
    } else if (_.isEmpty(settings["corpora"])) {
        s.openErrorModal({
            content: html`${minkImg}
                <div class="my-5">{{translations.noCorpora | locObj:$root.lang}}</div>
                <div class="my-5">{{translations.goTo | locObj:$root.lang}} <a href="${minkLink}">Mink</a></div>`,
            resolvable: false,
            translations,
        })
        return true
    }
    return false
}

settings["description"] = {
    swe: html`<div class="mt-3">
        <img src="${minkImgPath}" class="block h-32 my-5 mx-auto" />
        <div class="text-lg">
            <div class="mt-2">Det här är Mink-läget i Korp.</div>
            <div class="mt-2">
                Här kan du söka i de korpusar som du har laddat upp och installerat via Mink. Alla korpusar i läget är
                privata och kan endast ses av dig.
            </div>
            <div class="mt-2">Klicka i korpusväljaren ovanför för att göra ditt materialurval.</div>
            <div class="mt-2">Läs mer om Mink <a href="${minkLink}">här</a>.</div>
        </div>
    </div>`,
    eng: html`<div class="mt-3">
        <img src="${minkImgPath}" class="block h-32 my-5 mx-auto" />
        <div class="text-lg">
            <div class="mt-2">This is the Mink mode in Korp.</div>
            <div class="mt-2">
                Here you can search in the corpora that you have uploaded and installed with Mink. All corpora in this
                mode are private and can only be seen by you.
            </div>
            <div class="mt-2">Click in the corpus chooser above to make your corpus selection.</div>
            <div class="mt-2">Read more about Mink <a href="${minkLink}">here</a>.</div>
        </div>
    </div>`,
}

settings["frontpage"]["examples"] = [
    {
        label: {
            swe: "Alla adjektiv",
            eng: "All adjectives",
        },
        params: {
            search: "cqp",
            cqp: '[pos = "JJ"]',
            search_tab: 1,
            show_stats: 1,
        },
    },
    {
        label: {
            swe: "Fördelning över olika verb",
            eng: "Distribution of different verbs",
        },
        params: {
            search: "cqp",
            cqp: '[pos = "VB"]',
            search_tab: 1,
            show_stats: 1,
            stats_reduce: "word,lemma",
            result_tab: 2,
        },
    },
    {
        label: {
            swe: 'Verb följt av "inte"',
            eng: 'Verbs followed by "inte" ("not")',
        },
        params: {
            search: "cqp",
            cqp: '[pos = "VB"] [word = "inte" %c]',
            search_tab: 1,
        },
    },
    {
        label: {
            swe: 'Ordbild för "jobb"',
            eng: 'Word picture for "jobb" ("work")',
        },
        params: {
            search: "lemgram|jobb..nn.1",
            word_pic: 1,
            result_tab: 3,
        },
    },
  ]
