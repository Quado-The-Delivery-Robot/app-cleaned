/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            textColor: {
                brand: "#46EBA5",
                primary: {
                    DEFAULT: "#FFFFFF",
                    50: "#FFFFFF",
                    100: "#FFFFFF",
                    200: "#FFFFFF",
                    300: "#FFFFFF",
                    400: "#FFFFFF",
                    500: "#FFFFFF",
                    600: "#E3E3E3",
                    700: "#C7C7C7",
                    800: "#ABABAB",
                    900: "#8F8F8F",
                    950: "#818181",
                },
            },
            colors: {
                brand: {
                    DEFAULT: "#46EBA5",
                    50: "#ECFDF6",
                    100: "#D9FBED",
                    200: "#B4F7DB",
                    300: "#90F3C9",
                    400: "#6BEFB7",
                    500: "#46EBA5",
                    600: "#18E18C",
                    700: "#13AE6C",
                    800: "#0D7B4D",
                    900: "#08492D",
                    950: "#052F1D",
                },
                background: {
                    DEFAULT: "#121212",
                    50: "#252525",
                    100: "#242424",
                    200: "#212121",
                    300: "#1F1F1F",
                    400: "#1C1C1C",
                    500: "#1A1A1A",
                    600: "#171717",
                    700: "#151515",
                    800: "#121212",
                    900: "#0A0A0A",
                    950: "#070707",
                },
                backgroundSecondary: {
                    DEFAULT: "#1E1E21",
                    50: "#CBCBCF",
                    100: "#C0C0C6",
                    200: "#AAAAB2",
                    300: "#95959F",
                    400: "#80808B",
                    500: "#6C6C76",
                    600: "#585861",
                    700: "#45454C",
                    800: "#313136",
                    900: "#1E1E21",
                    950: "#111112",
                },
                border: "#000000",
            },
            borderRadius: {
                normal: "10px",
            },
            fontFamily: {
                primary: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
