import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./translations/en";
import { el } from "./translations/el";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        el: {
            translation: el,
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});
