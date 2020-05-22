const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
    "entry": ["./proto/src/js/index.js", "./proto/src/sass/index.scss"],
    "mode": 'development',
    "output": {
        "filename": "script.min.js",
        "path": path.resolve(__dirname, 'proto/build')
    },
    "plugins": [
        new MiniCssExtractPlugin({
            "filename": '[name].css',
            "chunkFilename": '[id].css'
        })
    ],
    "module": {
        "rules": [{
            test: /\.module\.s(a|c)ss$/,
            loader: [
                isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap: isDevelopment
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: isDevelopment
                    }
                }
            ]
        }, {
            test: /\.s(a|c)ss$/,
            exclude: /\.module.(s(a|c)ss)$/,
            loader: [
                isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: isDevelopment
                    }
                }
            ]
        },
        {
            test: /\.(svg|eot|woff|ttf|svg|woff2)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: "fonts/[name].[ext]"
                    }
                }
            ]
        }]
    },
    "resolve": {
        extensions: ['.js', '.jsx', '.scss']
    }
};