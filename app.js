const express = require('express');
const app = express();
let port = process.env.PORT || 1111
global.env = process.env.NODE_ENV || 'Development'

app.use(express.static(__dirname + '/public')); //__dir and not _dir
app.listen(port);