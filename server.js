const express = require('express');
const path = require('path');
const app = express();
console.log(app);

// the way CRA works is that when webpack runs it creates a build folder
// which contains the index.html and the bundle.js

// __dirname is the path to wherever this is deployed on this server.
// Can't know this info ahead of time. It's the absolute path.
// path.join will take care of putting forwardslashes etc

const pathToIndexHtml = path.join(__dirname, 'build', 'index.html');
const pathToBuildFolder = path.join(__dirname, 'build');

// allow static assets to be served off of this folder (build)!!
app.use(express.static(pathToBuildFolder));


//sendFile need absolute path to asset
app.get('/', (req, res) => {
    res.sendFile(pathToIndexHtml)
})

app.listen(process.env.PORT || 5000);

