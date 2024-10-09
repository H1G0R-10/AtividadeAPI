const express = require('express');
const db = require('./db');
const app = express();
app.use(express.json());
const port = 3000;

let veiculos = [];

// CREATE TABLE veiculos (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     marca VARCHAR(50) NOT NULL,
//     modelo VARCHAR(50) NOT NULL,
//     ano INT NOT NULL,
//     cor VARCHAR(30),
//     preco DECIMAL(10, 2) NOT NULL
// );

// novo veículo
app.post('/inserir', (req, res) => {
    const { marca, modelo, ano, cor, proprietario } = req.body;
    // memória volátil(apenas na memória) => veiculos.push({ id, marca, modelo, ano, cor, proprietario });
    db.query(
        `INSERT INTO veiculos (marca, modelo, ano, cor, proprietario) VALUES (?, ?, ?, ?, ?)`,
        [marca, modelo, Number(ano), cor, proprietario],
        function (err, results, fields) {
          if (err) {
            console.error('Erro na inserção:', err);
            return;
          }
          console.log(results);
          console.log(fields);
        }
      );
    res.send(`Veículo inserido!\n\nMarca: ${marca} \nModelo: ${modelo} \nAno: ${ano} \nCor: ${cor} \nProprietário: ${proprietario}`);
});

// selecionar todos os veículos
app.get('/veiculos', (req, res) => {
    db.query(
      `SELECT * FROM veiculos`,
      function (err, results, fields) {
        if (err) {
          console.error('Erro na consulta:', err);
          return res.status(500).json({ error: 'Erro ao consultar veículos' });
        }
        // Retorna os resultados como um objeto JSON
        return res.json(results);
      }
    );
  });

// atualizar por ID
app.put('/atualizar/:id', (req, res) => {
    const { id } = req.params;
    const { marca, modelo, ano, cor, proprietario } = req.body;

        db.query(
            `UPDATE veiculos set marca = ?, modelo = ?, ano = ?, cor = ?, propriterio = ? WHERE id = ?`,
            [marca, modelo, Number(ano), cor, proprietario],
            function (err, results, fields) {
              if (err) {
                console.error('Erro na inserção:', err);
                return;
              }
              console.log(results);
              console.log(fields);
            }
          );
        res.send(`Veículo inserido!\n\nMarca: ${marca} \nModelo: ${modelo} \nAno: ${ano} \nCor: ${cor} \nProprietário: ${proprietario}`);
    });
    

// deletar por ID
app.delete('/deletar/id/:id', (req, res) => {
    const { id } = req.params;
    db.query(
        `DELET FROM veiculos WHERE id = ?`

        [marca, modelo, Number(ano), cor, proprietario],
        function (err, results, fields) {
          if (err) {
            console.error('Erro na inserção:', err);
            return;
          }
          console.log(results);
          console.log(fields);
        }
      );
    res.send(`Veículo inserido!\n\nMarca: ${marca} \nModelo: ${modelo} \nAno: ${ano} \nCor: ${cor} \nProprietário: ${proprietario}`);
});
 
// deletar por modelo
app.delete('/deletar/modelo/:modelo', (req, res) => {
    const { modelo } = req.params;
    const veiculosAntes = veiculos.length; // lenght ver o tamnaho da array
    db.query(
        `DELET FROM veiculos WHERE modelo = ?`

        [marca, modelo, Number(ano), cor, proprietario],
        function (err, results, fields) {
          if (err) {
            console.error('Erro na inserção:', err);
            return;
          }
          console.log(results);
          console.log(fields);
        }
      );
    res.send(`Veículo inserido!\n\nMarca: ${marca} \nModelo: ${modelo} \nAno: ${ano} \nCor: ${cor} \nProprietário: ${proprietario}`);
});
// selecionar por ID
app.get('/veiculos/:id', (req, res) => {
    const { id } = req.params;
    const veiculo = veiculos.find(v => v.id == id); // v recebe v.id igual ao id
    db.query(
        `SELECT * FROM veiculos WHERE id = ?`,
        function (err, results, fields) {
          if (err) {
            console.error('Erro na consulta:', err);
            return res.status(500).json({ error: 'Erro ao consultar veículos' });
          }
          // Retorna os resultados como um objeto JSON
          return res.json(results);
        }
      );
    });
 
// selecionar por ano
app.get('/veiculos/ano/:ano', (req, res) => {
    const { ano } = req.params;
    const veiculosAno = veiculos.filter(v => v.ano == ano);

    db.query(
        `SELECT * FROM veiculos WHERE ano = ?`,
        function (err, results, fields) {
          if (err) {
            console.error('Erro na consulta:', err);
            return res.status(500).json({ error: 'Erro ao consultar veículos' });
          }
          // Retorna os resultados como um objeto JSON
          return res.json(results);
        }
      );
    });

// selecionar todos os veículos da cor AZUL
app.get('/veiculos/cor/azul', (req, res) => {
    const veiculosAzuis = veiculos.filter(v => v.cor.toLowerCase() === 'azul'); // toLowerCase converte p letra minuscula

    db.query(
        `SELECT * FROM veiculos WHERE cor = azul`,
        function (err, results, fields) {
          if (err) {
            console.error('Erro na consulta:', err);
            return res.status(500).json({ error: 'Erro ao consultar veículos' });
          }
          // Retorna os resultados como um objeto JSON
          return res.json(results);
        }
      );
    });

app.listen(port, () => {
    console.log(`Server listening on  http://localhost:${port}`);
});