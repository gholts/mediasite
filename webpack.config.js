module.exports = {
    entry   : "./web/js/app.jsx",
    output: {
        filename: "FilterableSongList.js",
        path : 'web/assets/',
        publicPath : '/assets/',
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony' },
            { test: /\.scss$/, loader: "style!css!sass" },
        ]
    },
    externals: {'react': 'React'},
    resolve: {extensions: ['', '.js', '.jsx']}
}
