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
                background: "#000000",
                backgroundSecondary: "#1E1E21",
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
