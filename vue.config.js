module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:5580/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "",
                },
            },
        },
    },
}