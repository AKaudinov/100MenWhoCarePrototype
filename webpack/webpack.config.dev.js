import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,
    devtool:'source-map',
    noInfo: false,
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client',
        './src/index'
    ],
    target: 'web',
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer:{
      contentBase: './src'
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
                loaders: ['style', 'css']
            },
            {
                test: /\.scss$/,
                include: path.resolve('src/styles'),
                loaders:['style','css','postcss-loader','sass']
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
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

        new webpack.ProvidePlugin({
            $: "jquery",
            jquery:"jquery",
            jQuery:"jquery",
            "windows.jQuery":"jquery",
            "window.Tether":'tether'
        })

    ]
}