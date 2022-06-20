const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    // 修改 src 为 examples
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html',
        },
    },
    // 组件样式内联
    css: {
        extract: false,
    },
    // 让 packages 加入编译
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('examples')).set('~', resolve('packages')).set('@packages', resolve('packages')).set('@lib', resolve('lib'));
        config.module
            .rule('eslint')
            .exclude.add(path.resolve('lib'))
            .end()
            .exclude.add(path.resolve('examples/docs'))
            .end();

        config.module
            .rule('js')
            .include.add('/packages/')
            .end()
            .include.add(/examples/)
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options;
            });
    },
};
