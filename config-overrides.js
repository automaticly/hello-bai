const path = require('path');
module.exports = function override(config, env) {
    // 参数中的 config 就是默认的 webpack config
    const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
    console.log(loaders);
    loaders[3] = {
        test: /\.(js|mjs|ts|tsx)$/,
        include: path.join(__dirname, 'src'),
        loader: 'esbuild-loader',
        options: {
            loader: 'tsx'
        }
    }


    // 一定要把新的 config 返回
    return config;
}