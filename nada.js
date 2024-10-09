//Nicoxdzin
// const express = require('express');
// const res = require('express/lib/response');
// const app = express();
// app.use(express.json());

// let personList = [];

// const port = 3002;

// app.get('/visualizar', (req, res) => {
//     const {id} = req.params;
//     res.send(personList);
// });

// app.get('/params/:id', (req, res) => {
//     const { id } = req.params;
//     res.send(id);
// });


// app.post('/cadastrar', (req,res) => {
//     const { marca, modelo, ano, proprietario, cor} = req.body;
//     const id = personList.length;
//     personList.push({marca, modelo, ano, proprietario, cor, id})
//     res.send(`Usuario recebido ${id} ${marca}, ${modelo}, ${ano}, ${proprietario}, ${cor}`)
// });

// app.delete('/deletar/:id', (req,res) => {
//     const {id} = req.params;
//     const index = parseInt(id);
//     personList.splice(index, 1);
//     res.send(`Carro deletado ${JSON.stringify(personList)}`)
  
 
// });
// app.delete('/deletar/:modelo', (req,res) => {
//     const {modelo} = req.params;
//     const index = modelo;
//     personList.splice(index, 1);
//     res.send(`Carro deletado ${JSON.stringify(personList)}`)
// });

// app.put('/atualizar/:id', (req,res) =>{
//     const {id} = req.params;
//     const { marca, modelo, ano, proprietario, cor} = req.body;
//     try{
//         personList[id - 1] = {id, marca, modelo, ano, proprietario, cor}
//         res.send(`Carro atualizado ${id} Marca:${marca} Modelo:${modelo} Ano:${ano} Proprietario:${proprietario} Cor:${cor}`);
//     }
//     catch(err){
//         res.send("usuaria nao encontrado")
//     }
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });