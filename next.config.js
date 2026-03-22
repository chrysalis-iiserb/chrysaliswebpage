module.exports = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.unsplash.com',
              port: '',
            },
            {
              protocol: 'https',
              hostname: '**.sanity.io',
              port: '',
            },
          ],
        domains: [
            'images.unsplash.com',
            'cdn.sanity.io'
        ],
        
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}