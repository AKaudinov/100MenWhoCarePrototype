import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import OptimizeCssAssetsWebpackPlugin from 'optimize-css-assets-webpack-plugin';

let extractCss = new ExtractTextPlugin('vendorStyles.css');
let extractSass = new ExtractTextPlugin('appStyles.css');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
    devtool:'source-map',
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
        rules: [
            {
                test: /\.js$/,
                include: path.resolve('src'),
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: path.resolve('src'),
                loader: extractCss.extract({fallbackLoader:'style-loader', loader:'css-loader'})
            },
            {
                test: /\.scss$/,
                include: path.resolve('src/styles'),
                loader: extractSass.extract(['css-loader','postcss-loader','sass-loader'])
            },
            {
                test:/\.(woff|woff2|ttf|eot|ico|svg)?(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader?name=fonts/[name].[hash].[ext]?'
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]?'
            },
            {
                test:/\.ico$/,
                use:'file-loader?name=[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
           debug: true,
            options:{
                noInfo: false
            }
        }),
        extractCss,
        extractSass,
        new OptimizeCssAssetsWebpackPlugin({
            cssProcessorOptions: {zindex:false}
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery",
            "window.Tether":'tether',
            "tether":'tether',
            "Tether": 'tether'
        })
    ],
    performance:{
        hints: false
    }
}