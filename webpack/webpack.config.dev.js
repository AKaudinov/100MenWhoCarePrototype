import webpack from 'webpack';
import path from 'path';

export default {
    devtool:'source-map',
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
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: path.resolve('src'),
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                include: path.resolve('src/styles'),
                loaders:['style-loader','css-loader','postcss-loader','sass-loader']
            },
            {
                test:/\.(woff|woff2|ttf|eot|ico|)?(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=fonts/[name].[hash].[ext]?'
            },
            {
                test:/\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]?'
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

    ],
    performance:{
        hints: false
    }
}