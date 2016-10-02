import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackConfig from '../webpack/webpack.config.dev';
import open from 'open';

/*eslint-disable no-console*/

const port = 3000;
const app = express();
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, err => {
   if(err){
       console.log(err);
   } else{
       open(`http://localhost:${port}`);
   }
});