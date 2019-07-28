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

const createHtmlFiles = (templateFileName, bodyContent) => {
    const filename = templateFileName.split('.')[0];
    return new HtmlWebpackPlugin({
        filename: `${filename}.html`,
        template: path.resolve(__dirname, `./src/pages/${filename}.html`),
        templateParameters: {
            title: "Hello Vijay",
            content: bodyContent,
            header: readFileContents("./src/partials/header.html"),
            footer: readFileContents("./src/partials/footer.html")
        },
        meta: {
            "language": "English",
            "charset": "utf-8",
            "viewport": "width=device-width, initail-scale=1",
            "theme-color": "#d50000",
            "keywords": "vijay, theVijay_, theVijay, web, full-stack, android, research, research-developer, programming-language, developer, india, chennai",
            "robots": "index",
            "article:author": "Vijaykumar"
        }
    })
}

function generate_all_pages(dirPath) {
    const pathName = path.resolve(__dirname, dirPath);
    const templateFiles = fs.readdirSync(pathName);
    const htmlFiles = templateFiles.filter(filename => /\.html$/.test(filename));
    const mdFiles = templateFiles.filter(filename => /\.md$/.test(filename));
    return htmlFiles.map(filename => createHtmlFiles(filename, null)).concat(
        mdFiles.map(filename => createHtmlFiles(
            filename, marked(readFileContents(path.join(dirPath, filename)))
        )));
}

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/dist'
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
        ...generate_all_pages('./src/pages')
        // new HtmlWebpackPlugin({
        //     hash: true,
        //     title: 'Vijay App',
        //     bodycontent: marked(readFileContents('./src/pages/index.md')),
        //     template: './src/pages/index.html',
        //     filename: 'index.html'
        // })
    ]
};