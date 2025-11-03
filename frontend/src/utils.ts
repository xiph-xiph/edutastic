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

export const getDefaultCountries = (): Array<Country> => {
  return [
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
      donkeyBridgeDescription: "",
    },
    {
      name: "china",
      inhabitants: "1,4 miljard",
      capital: "Beijing",
      donkeyBridgeDescription: "",
    },
    {
      name: "rusland",
      inhabitants: "144 miljoen",
      capital: "Moskou",
      donkeyBridgeDescription: "",
    },
    {
      name: "verenigde staten",
      inhabitants: "331 miljoen",
      capital: "Washington D.C.",
      donkeyBridgeDescription: "",
    },
    {
      name: "india",
      inhabitants: "1,4 miljard",
      capital: "New Delhi",
      donkeyBridgeDescription: "",
    },
    {
      name: "frankrijk",
      inhabitants: "67 miljoen",
      capital: "Parijs",
      donkeyBridgeDescription: "",
    },
    {
      name: "japan",
      inhabitants: "125 miljoen",
      capital: "Tokio",
      donkeyBridgeDescription: "",
    },
    {
      name: "brazilie",
      inhabitants: "213 miljoen",
      capital: "Brasília",
      donkeyBridgeDescription: "",
    },
    {
      name: "verenigd koninkrijk",
      inhabitants: "67 miljoen",
      capital: "Londen",
      donkeyBridgeDescription: "",
    },
    {
      name: "italie",
      inhabitants: "60 miljoen",
      capital: "Rome",
      donkeyBridgeDescription: "",
    },
  ];
};
