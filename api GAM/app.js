var express = require('express')
var admin = require("firebase-admin");
var serviceAccount = "key.json";
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express()

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gam-app-725ff.firebaseio.com"
});

let db = admin.firestore();

app.use(bodyParser.json());
app.use(cors());
router = express.Router();

router.get('/listar', function(req,res){
  var datos = [];
  const colleccion = db.collection('Usuarios');
  let Datos = colleccion.get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      datos.push(doc.data());
    });
    res.json({
      status: 200,
      datos,
      message:"consulta realizada con exito"
    })
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });  
});

router.post('/crearUsuario', function(req,res){
   db.collection('Usuarios').add({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name
  }).then(function(docRef){
    res.json({
      status: 200,
      data: docRef.id,
      message:"datos insertados con exito"
    });
  }).catch(function(error){
    console.log('fallo', error)
  });
})

router.post('/subirNoticia', function(req,res){
  db.collection('Noticias').add({
   titulo: req.body.titulo,
   categoria: req.body.categoria,
   cuerpo: req.body.cuerpo,
   imagen: req.body.imagen,
 }).then(function(docRef){
   res.json({
     status: 200,
     data: docRef.id,
     message:"noticia agregada con exito"
   });
 }).catch(function(error){
   console.log('no se pudo agregar la noticia', error)
 });
})

app.use('/api', router);

const port = 3000;

/*
let docRef = db.collection('Usuarios').doc('alovelace');

let setAda = docRef.set({
  email: "prueba@mail.com",
  password: "abcd",
  name: "Juanito"
});
*/

  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
