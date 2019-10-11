const express = require('express');

const app = express();

//TEST HOME SCREEN
app.get('/', function(req, res){
    res.send(`🏚 Home!`)
})


//GET - show all animals
// app.get('/animals', function(req, res){
//     db.animal.findAll()
//     .then(function(animals){
//         res.json(animal)
//     })
//     .catch(logErro)
// })














app.listen(3000, () => console.log(`🎧 You're listening to port 3000 🎧`))

