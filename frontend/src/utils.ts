import type { Country } from "./types";

export const capitalize = (input: string): string => {
  if (!input) return input;
  return input.charAt(0).toUpperCase() + input.slice(1);
};

export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const shuffle = (a: Array<unknown>) => {
  let currentIndex = a.length;
  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [a[currentIndex], a[randomIndex]] = [a[randomIndex], a[currentIndex]];
  }
};

const countries = [
  {
    name: "nederland",
    inhabitants: "18 miljoen",
    capital: "Amsterdam",
    donkeyBridgeDescription: "De leeuw staat symbool voor Nederland",
  },
  {
    name: "chili",
    inhabitants: "19 miljoen",
    capital: "Santiago",
    donkeyBridgeDescription:
      "Chili is een lang en dun uitgerekt land, net als een chilipeper",
  },
  {
    name: "duitsland",
    inhabitants: "83 miljoen",
    capital: "Berlijn",
    donkeyBridgeDescription:
      "De adelaar kijkt naar het oosten, richting Duitsland",
  },
  {
    name: "china",
    inhabitants: "1,4 miljard",
    capital: "Beijing",
    donkeyBridgeDescription:
      "De draak is het symbool van China en haar keizerlijke macht",
  },
  {
    name: "rusland",
    inhabitants: "144 miljoen",
    capital: "Moskou",
    donkeyBridgeDescription:
      "De beer staat voor de kracht en grootte van Rusland",
  },
  {
    name: "verenigde staten",
    inhabitants: "331 miljoen",
    capital: "Washington D.C.",
    donkeyBridgeDescription:
      "De kale adelaar (bald eagle) is het nationale symbool van de VS",
  },
  {
    name: "india",
    inhabitants: "1,4 miljard",
    capital: "New Delhi",
    donkeyBridgeDescription:
      "De tijger is het nationale dier en symbool van India's natuur",
  },
  {
    name: "frankrijk",
    inhabitants: "67 miljoen",
    capital: "Parijs",
    donkeyBridgeDescription:
      "De haan (le coq) kraait en is het symbool van Frankrijk",
  },
  {
    name: "japan",
    inhabitants: "125 miljoen",
    capital: "Tokio",
    donkeyBridgeDescription:
      "De rijzende zon op de vlag: Japan = land van de rijzende zon",
  },
  {
    name: "brazilie",
    inhabitants: "213 miljoen",
    capital: "Brasília",
    donkeyBridgeDescription:
      "De papegaai leeft in het Amazoneregenwoud van Brazilië",
  },
  {
    name: "verenigd koninkrijk",
    inhabitants: "67 miljoen",
    capital: "Londen",
    donkeyBridgeDescription: "De leeuw staat voor de Britse koninklijke macht",
  },
  {
    name: "italie",
    inhabitants: "60 miljoen",
    capital: "Rome",
    donkeyBridgeDescription: "Italië heeft de vorm van een laars.",
  },
];

shuffle(countries);

export const getDefaultCountries = (): Array<Country> => countries;
