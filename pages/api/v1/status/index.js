// pages/api/status.js - versao 1 do endpoint de status
function status(request, response) {
  response
    .status(200)
    .json({ chave: "função status retorna 200 como já sendo uma rota válida" });
}

export default status;
