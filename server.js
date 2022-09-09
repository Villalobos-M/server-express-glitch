const express = require("express");
const app = express();

const { Contenedor } = require("./classContent");

const product = new Contenedor("productos");
const getAllFn = product.getAll()

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
   console.log("express running");
});

app.get('/', async (req, res) => {
   const data = await getAllFn()
   res.send(data)
})

app.get("/productoRandom", async (req, res) => {
   const arrayData = await getAllFn();
   var num = Math.floor(Math.random() * (arrayData.length));
   const getByIDFn = product.getById(num);
   const data = await getByIDFn();
   res.send(data);
});