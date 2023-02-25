/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                accent: "#eab308",
                accent_dark: "#ca8a04",
                black: "#44403C"
            },
        },
    },
    plugins: [],
};
