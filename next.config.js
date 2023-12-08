/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['avatars.githubusercontent.com','lh3.googleusercontent.com','source.unsplash.com','res.cloudinary.com']
    },
    serverRuntimeConfig:{
        cacheRevalidation: false,
    },
    experimental:{
        isr: true
    }
}

module.exports = nextConfig
