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

        app.get('/assets/:file', (req, res) => {
            const safeFilePath = req.params.file.replace(/\.\.\//gi, '');
            res.sendFile(safeFilePath, { root: path.join(__dirname, '..', 'assets') });
        });
    },
    
    publicPath: '/bundles/',

    stats: {
        colors: true 
    }
});

server.listen(3000, 'localhost', () => console.log(`Dev server running on port 3000`));
