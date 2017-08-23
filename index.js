const express = require('express');

let app = express();
app.use(express.static("public"));
app.listen(80, "localhost", function() {
    console.log('Server listening on port 80');
});