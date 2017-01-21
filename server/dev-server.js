const config = require('../webpack.config.js');
const path = require('path');
const webpack = require('webpack');  
const WebpackDevServer = require('webpack-dev-server');

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
    contentBase: '../src',

    setup: function(app) {
        app.get('/', (req, res) => {
            res.sendFile('index.html', { root: __dirname })
        });

        app.get('/assets/:directory/:file', (req, res) => {
            const rootPath = path.join(__dirname, '..', 'assets', req.params.directory);
            res.sendFile(req.params.file, { root: rootPath });
        });
    },
    
    publicPath: '/bundles/',

    stats: {
        colors: true 
    }
});

server.listen(3000, 'localhost', () => console.log(`Dev server running on port 3000`));
