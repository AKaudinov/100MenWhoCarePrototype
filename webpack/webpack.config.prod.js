import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

let extractCss = new ExtractTextPlugin('vendorStyles.css');
let extractSass = new ExtractTextPlugin('appStyles.css');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
    debug: true,
    devtool:'source-map',
    noInfo: false,
    entry:'./src/index',
    target: 'web',
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: './dist'
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve('src'),
                loader: 'babel'
            },
            {
                test: /\.css$/,
                exclude: path.resolve('src'),
                loader: extractCss.extract({fallbackLoader:'style', loader:'css'})
            },
            {
                test: /\.scss$/,
                include: path.resolve('src/styles'),
                loader: extractSass.extract(['css','sass'])
            },
            {
                test:/\.(woff|woff2|ttf|eot|ico|)?(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=fonts/[name].[hash].[ext]?'
            },
            {
                test:/\.(png|jpe?g|gif|svg)$/,
                loader: 'file?name=assets/[name].[hash].[ext]?'
            }
        ]
    },
    plugins: [
        extractCss,
        extractSass,
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery:"jquery",
            jQuery:"jquery",
            "windows.jQuery":"jquery",
            "window.Tether":'tether'
        })

    ]
}