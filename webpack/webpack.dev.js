const { merge } = require("webpack-merge");
const base = require("./webpack.base.js");

module.exports = merge(base, {
    mode: "development",
    devServer: {
        open: true,
        compress: true,
        port: 9000,
    },
});
