const fs = require('fs');
const express = require('express');
const mustache = require('mustache');

let db = [{
        name: "Coding Dojo",
        place: "Tour du Web"
    },
    {
        name: "Apprendre à Coder",
        place: "Simplon Villeurbanne"
    },
    {
        name: "Découverte de Symphony 3",
        place: "Kotobo"
    }
];
let app = express();


app.get("/", function(req, resp) {
    resp.render('index', {

        events: db
    });
});

app.get("/test", function(req, resp) {
    let str = mustache.render("Hello {{name}}!!! You are beautiful!", {
        name: "panda"
    })
    resp.send(str)
});

app.engine("html", function(path, options, callback) {
    fs.readFile(path, function(err, content) {
        if (err) {
            console.error("fail to open template:", err);
            return callback(err);
        }
        let str = mustache.render(content.toString(), options);
        return callback(null, str);
    })

});
// specify the views directory
app.set('views', './template');
// register the template engin
app.set('view engine', 'html');
app.use(express.static("public"));
//remplacer par app.engine, app.set
app.listen(80, "localhost", function() {
    console.log('Server listening on port 80');
});