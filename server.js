console.log('server is started...');

const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
const app = express();

function listening() {
  console.log('server is listening on port: 4567');
}

app.listen(4567, listening);

app.use(express.static('public'));
