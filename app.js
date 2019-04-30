const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');
var cors = require('cors');

const url = config.bd_string;

mongoose.connect(url, (err, res) => {
	if (err) throw err;
});

mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
	console.log('Erro na conexão com o banco de dados: ' + err);
});

mongoose.connection.on('disconnected', () => {
	console.log('Aplicação desconectada do banco de dados!');
});

mongoose.connection.on('connected', () => {
	console.log('Aplicação conectada ao banco de dados!');
});

app.use(cors());

//Body Parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');

app.use('/', indexRoute);
app.use('/users', usersRoute);

app.listen('3000');
console.log('API rodando na porta ' + port);
module.exports = app;

/* CODE STATUS 

200 - OK (Processado normalmente)
201 - Created (Qualquer CRUD) 
202 - Accepted (Requisição aceita porem nao finalizado)

400 - Bad Request (Deu ruim)
401 - Unauthorized (Autenticação, carater temporario)
403 - Forbidden (Autorização, tem carater permanente)
404 - Not Found (Não tem o Endpoint)

500 - Internal Server error (Pau na API)
501 - Not Implemented - a API não suporta essa funcionalidade
503 - Service Unavailable (API executa essa operação, mas no momento está indisponível)

*/