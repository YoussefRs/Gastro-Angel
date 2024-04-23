import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector";

i18n
  .use(i18nextBrowserLanguagedetector)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: "De",
    fallbackLng: "De",
    returnObjects: true,
    resources: {
      De: {
        translation: {
          navbar: {
            item1: "HOME",
            item2: "ÜBER UNS",
            item3: "CATERING",
            item4: "LIVE KOCHEN",
            item5: "GÄSTE",
            item6: "KONTACT",
          },
          hero: {
            Desc: "Willkommen Bei Gastro Angel",
            desc2: "probier das",
            word: "BESTE",
            word2: "ESSEN",
            btn: "BUCHEN",
          },
          button: "BUCHEN",
          more: "MEHR",
          about: {
            title: "ÜBER UNS",
            sub: "Willkommen Bei Gastro Angel",
            desc: "BESTE QUALITÄT",
            desc2: "LEBENSMITTEL",
            btn: "MEHR",
          },
          banner: {
            b1: "HOCHZEIT",
            b2: "FRÜHSTÜCK",
          },
          friends: {
            title: "FREUNDE & FAMILIE",
          },
          testimonials: {
            title: "WAS UNSERE KUNDEN SAGEN",
          },
          footer: {
            title: "TISCH RESERVIEREN",
            in1: "Vor- Und Nachname",
            in2: "Telefonnummer",
            in3: "Anzahl Der Personen",
          },
        },
      },
      En: {
        translation: {
          navbar: {
            item1: "HOME",
            item2: "ABOUT US",
            item3: "CATERING",
            item4: "LIVE COOKING",
            item5: "GUESTS",
            item6: "CONTACT",
          },
          hero: {
            desc: "Welcome to Gastro Angel",
            desc2: "Try this",
            word: "BEST",
            word2: "FOOD",
            btn: "BOOK",
          },
          button: "BOOK",
          more: "MORE",
          about: {
            title: "ABOUT US",
            sub: "Welcome to Gastro Angel",
            desc: "BEST QUALITY",
            desc2: "FOOD",
            btn: "MORE",
          },
          banner: {
            b1: "WEDDING",
            b2: "BREAKFAST",
          },
          friends: {
            title: "FRIENDS & FAMILY",
          },
          testimonials: {
            title: "WHAT OUR CUSTOMERS SAY",
          },
          footer: {
            title: "RESERVE A TABLE",
            in1: "First and Last Name",
            in2: "Phone Number",
            in3: "Number of People",
          },
        },
      },
    },
  });
