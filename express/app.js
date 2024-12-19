const express = require('express')
const router = require("./routes/api")
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);

//app.get('/students', (req, res) => {
  //res.send("Menampilkan semua mahasiswa")
//});
// app.post('/students', (req, res) => {
//     res.send("Menambahkan data student")
// });
// app.put('/students/:id', (req, res) => {
//     const { id } = req.params;
//     res.send(`Mengedit student ${id}`)
// });
// app.delete('/students/:id', (req, res) => {
//     const { id } = req.params;
//     res.send(`Menghapus student ${id}`)
// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})