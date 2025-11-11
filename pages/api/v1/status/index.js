// pages/api/status.js - versao 1 do endpoint de status

import database from "/infra/database.js"; // Importa o módulo de banco de dados

async function status(request, response) {
  // Função que lida com a requisição de status
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result);
  response
    .status(200)
    .json({ chave: "função status retorna 200 como já sendo uma rota válida" }); // Retorna status 200 com uma mensagem JSON
}

export default status; // Exporta a função como padrão para ser usada como handler do endpoint
