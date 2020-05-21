const prodConfig = {
    baseUrl: "https://api-dot-localhero.ew.r.appspot.com",
    production: true
}

const localConfig = {
    baseUrl: "http://localhost:5000",
    production: false
}

export const config = process.env["NODE_ENV"] === "production" ? prodConfig : localConfig