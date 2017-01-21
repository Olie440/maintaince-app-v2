const express = require('express');
const path = require('path');
const app = express();

app.use('/bundles', express.static(path.join(__dirname, '..', 'dist')));
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));
app.get('/', (req, res) => res.sendFile('index.html', { root: __dirname }));

app.listen(3000, 'localhost', () => console.log('Server running on port 3000'));
