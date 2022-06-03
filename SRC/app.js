const express = require('express')
const path = require('path');
const app = express ()
const PORT = 3000
app.listen(PORT, () => console.log("Escuchando en el puert", PORT))

//app.get('/', (req, res) => {
  //  res.send("Hola! Soy una app!")
//}  )
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
}  )
app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productos.html'))
}  )
app.get('/productos/1', (req, res) => {
    const PathProducto = path.resolve ('src', 'views/producto1.html')
    res.sendFile(PathProducto)
}  )
