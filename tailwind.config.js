/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        blueviolet: "#5c27c0",
        gray: {
          "100": "#898989",
          "200": "#7b7b7b",
          "300": "#202020",
        },
        gainsboro: "#d9d9d9",
        black: "#000",
        dimgray: "#505050",
        darkslategray: "#17313b",
      },
      fontFamily: {
        "gilroy-semibold": "Gilroy-SemiBold",
        "gilroy-regular": "Gilroy-Regular",
        "gilroy-bold": "Gilroy-Bold",
        outfit: "Outfit",
        body: "Quicksand",
        montserrat: "Montserrat",
        poppins: "Poppins",
        "gilroy-medium": "Gilroy-Medium",
        "gilroy-extrabold": "Gilroy-ExtraBold",
        inter: "Inter",
      },
      borderRadius: {
        "17xl-7": "36.7px",
        "3xs": "10px",
        "7xs-7": "5.7px",
        "smi-8": "12.8px",
        "7xs-1": "5.1px",
        "26xl-8": "45.8px",
        "94xl-3": "113.3px",
        "9xs-7": "3.7px",
        "2xs-7": "10.7px",
        "4xs-6": "8.6px",
      },
    },
    fontSize: {
      "base-5": "16.5px",
      base: "16px",
      "5xs": "8px",
      "5xl": "24px",
      "45xl": "64px",
      "xl-5": "20.5px",
      "xl-6": "20.6px",
      "26xl-3": "45.3px",
      xl: "20px",
      "13xl": "32px",
      "mid-3": "17.3px",
      "93xl": "112px",
      "2xs-7": "10.7px",
      "base-1": "16.1px",
      xs: "12px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
