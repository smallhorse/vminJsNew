module.exports = {
    entry: {
        app : "./engine/ubt_blockly_app.js",
        course : './engine/ubt_blockly_course.js'
    },
    output: {
        path: __dirname + '/',
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader?harmony' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'jsx-loader?harmony' },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf|otf)\??.*$/, loader: "url-loader?limit=8192&name=css/fonts/[name].[ext]"}
        ]
    }
};