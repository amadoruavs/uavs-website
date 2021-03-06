export default {
    mode: "universal",

    head: {
        title: "AmadorUAVs",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: process.env.npm_package_description || "" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" },
            { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css" },
        ]
    },

    modules: [
        "nuxt-buefy"
    ],

    pageTransition: "page",

    css: ["~/assets/global.css"],

    plugins: [{
        src: "~/plugins/global.ts"
    }]
}
