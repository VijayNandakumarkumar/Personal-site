const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const markdownPlugin = require('markdown-html-webpack-plugin');
const marked = require('marked');
const fs = require('fs');

const readFileContents = (filePath) => fs.readFileSync(path.join(__dirname, filePath), 'utf8');

const extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});
module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath: 'img/'
                    }
                }]
            },
            {
                test: /\.html$/,
                use: ['ejs-loader', 'extract-loader', 'html-loader']
            }
        ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Vijay App',
            bodycontent: marked(readFileContents('./src/index.md')),
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};