const express = require('express');

let app = express();
app.listen(80, "localhost", function() {
    console.log('Server listening on port 80');
});