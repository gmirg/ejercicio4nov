const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', urlencodedParser, (req, res) => {
    console.log('email:', req.body.email, '\nPassword: ', req.body.pass);
    res.send(req.body);
    insertData(req.body.email,req.body.pass);
});

app.listen(3000); const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const mydb = "DatosAcesso";
const coleccion = "Usuarios";

const url = "mongodb://localhost:27017/";


//Creacion de una BD 
MongoClient.connect(url + mydb, function (err, db) {
    if (err) throw err;
    console.log("Base de datos creada");
    db.close();
});

// //Creacion de una coleccion dentro de una BD
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db(mydb);
//     dbo.createCollection(coleccion, function (err, res) {
//         if (err) throw err;
//         console.log("Colección creada");
//         db.close();
//     });
// });

//Insertar dentro de una coleccion de una BD

function insertData(key, value) {
    let objeto = `{"${key}": "${value}"}`;
    let myobj = JSON.parse(objeto);
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);

        dbo.collection(coleccion).insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("Documento insertado");
            db.close();
        });
    });
}
