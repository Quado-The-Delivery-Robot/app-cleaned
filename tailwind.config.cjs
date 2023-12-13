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
                    DEFAULT: "#000000",
                    50: "#B8B8B8",
                    100: "#ADADAD",
                    200: "#999999",
                    300: "#858585",
                    400: "#707070",
                    500: "#5C5C5C",
                    600: "#474747",
                    700: "#333333",
                    800: "#1F1F1F",
                    900: "#0A0A0A",
                    950: "#000000",
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
                poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
