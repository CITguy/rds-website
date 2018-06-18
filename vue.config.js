module.exports = {
    chainWebpack: (config) => {
        config.module
            .rule('markdown-showdown')
            .test(/\.md$/)
            .use('showdown')
                .loader('./lib/showdown-loader')
                .end();
    },
};
