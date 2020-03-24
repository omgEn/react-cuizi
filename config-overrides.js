// const { injectBabelPlugin } = require('react-app-rewired');
// const { injectBabelPlugin } = require('customize-cra');
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = function override(config, env) {
    // config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);

    fixBabelImports("import", {
        libraryName: "antd-mobile", 
        libraryDirectory: "es", 
        style: true,
    });
    addLessLoader({
        javascriptEnabled:true,
        modifyvars:{ '@primary-color': '#1DA57A' },
    });
    return config;
};

