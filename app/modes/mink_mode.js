/** @format */
import statemachine from "@/statemachine"
import { getOtherCredentials } from "@/components/auth/federatedauth/fed_auth"

const minkImgPath = require("custom/mink-309dbbc5.svg")

settings["auth_module"] = {
    module: "federated_auth",
    options: {
        jwt_url: "https://sp.spraakbanken.gu.se/auth/jwt",
        login_service: "https://sp.spraakbanken.gu.se/auth/login",
        logout_service: "https://sp.spraakbanken.gu.se/Shibboleth.sso/Logout",
    },
}

settings["korp_backend_url"] = "https://ws.spraakbanken.gu.se/ws/korp/mink"

settings["config_dependent_on_authentication"] = true

settings["corpus_config_url"] = async () => {
    const minkUrl = "https://ws.spraakbanken.gu.se/ws/min-sb"
    const creds = authenticationProxy.getAuthorizationHeader()
    const baseUrl = `${settings["korp_backend_url"]}/corpus_config?mode=${window.currentMode}`
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

settings["initalization_checks"] = (s) => {
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
        {{translations.readMore | locObj:lang}}
        <a href="${minkLink}">{{translations['here'] | locObj:lang}}</a>.
    </div>`

    const minkImg = html`<div class="text-center my-5"><img src="${minkImgPath}" class="h-16" /></div>`
    if (!authenticationProxy.isLoggedIn()) {
        s.openErrorModal({
            content: html`${minkImg}
                <div class="my-5">{{translations.notAuthenticated | locObj:lang}}</div>
                ${readMore}
                <div class="mt-3">{{translations.login | locObj:lang}}</div>`,
            onClose: () => {
                s.waitForLogin = true
                statemachine.send("LOGIN_NEEDED")
            },
            translations,
        })
        return true
    } else if (!getOtherCredentials().includes("MINK-APP")) {
        s.openErrorModal({
            content: html`${minkImg}
                <div>{{translations.noAccess | locObj:lang}}</div>
                ${readMore}`,
            resolvable: false,
            translations,
        })
        return true
    } else if (_.isEmpty(settings["corpora"])) {
        s.openErrorModal({
            content: html`${minkImg}
                <div class="my-5">{{translations.noCorpora | locObj:lang}}</div>
                <div class="my-5">{{translations.goTo | locObj:lang}} <a href="${minkLink}">Mink</a></div>`,
            resolvable: false,
            translations,
        })
        return true
    }
    return false
}

// *mode*-description
settings["description"] = {
    swe: html`<div class="p-5 mt-3">
        <div class="p-5"><img src="${minkImgPath}" class="h-32" /></div>
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
    eng: html`<div class="p-5 mt-3">
        <div class="p-5"><img src="${minkImgPath}" class="h-32" /></div>
        <div class="text-lg">
            <div class="mt-2">This is the Mink mode in Korp.</div>
            <div class="mt-2">
                Here you can search in the corpora that you have uploaded and installed with Mink. All corpora in this
                mode is private and can only be seen by you.
            </div>
            <div class="mt-2">Click in the corpus chooser above to make your corpus selection.</div>
            <div class="mt-2">Read more about Mink <a href="${minkLink}">here</a>.</div>
        </div>
    </div>`,
}

function createStartupComponent() {
    return {
        template: html`<div class="border-2 w-fit p-5 mt-3">
            <div class="p-5"><img src="${minkImgPath}" class="h-32" /></div>
            <div class="text-lg">
                <div class="mt-2">{{$ctrl.desc | locObj:$root.lang}}</div>
                <div class="mt-2">{{$ctrl.desc2 | locObj:$root.lang}}</div>
                <div class="mt-2">{{$ctrl.searchTip | locObj:$root.lang}}</div>
                <div class="mt-2">
                    {{$ctrl.readMore | locObj:$root.lang}}
                    <a href="${minkLink}">{{$ctrl.here | locObj:$root.lang}}</a>.
                </div>
            </div>
        </div>`,
        controller: [
            function () {
                const $ctrl = this

                $ctrl.desc = {
                    swe: "Det här är Mink-läget i Korp.",
                    eng: "This is the Mink mode in Korp.",
                }

                $ctrl.desc2 = {
                    swe: "Här kan du söka i de korpusar som du har laddat upp och installerat via Mink. Alla korpusar i läget är privata och kan endast ses av dig.",
                    eng: "Here you can search in the corpora that you have uploaded and installed with Mink. All corpora in this mode is private and can only be seen by you.",
                }

                $ctrl.readMore = {
                    swe: `Läs mer om Mink `,
                    eng: `Read more about Mink `,
                }

                $ctrl.searchTip = {
                    swe: "Klicka i korpusväljaren ovanför för att göra ditt materialurval.",
                    eng: "Click in the corpus chooser above to make your corpus selection.",
                }

                $ctrl.here = {
                    swe: "här",
                    eng: "here",
                }
            },
        ],
    }
}

settings["startup_component"] = createStartupComponent()