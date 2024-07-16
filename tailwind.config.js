/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        container: {
            center: true,
            padding: {
                DEFAULT: "15px",
                md: "25px",
                lg: "20px"
            }
        },
        fontFamily: {
            primary: "Poppins"
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1200px"
        }
    },

    plugins: []
};
