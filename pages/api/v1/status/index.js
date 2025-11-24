import database from "/infra/database.js"; // Importa o módulo de banco de dados

async function status(request, response) {
  // Função que lida com a requisição de status
  const updatedAt = new Date().toISOString(); // Obtém a data e hora atual em formato ISO

  try {
    // Executa uma query simples para testar a conexão
    const result = await database.query("SELECT 1 + 1 as sum;");
    console.log(result);

    // Consulta a versão do PostgreSQL
    const versionRes = await database.query("SHOW server_version;");
    const postgresVersion = versionRes.rows[0].server_version;

    // Consulta o número máximo de conexões permitidas
    const maxConnRes = await database.query("SHOW max_connections;");
    const maxConnections = parseInt(maxConnRes.rows[0].max_connections);

    // Consulta o número de conexões atualmente em uso (excluindo 'idle')
    const usedConnRes =
      await database.query(`SELECT COUNT(*) FROM pg_stat_activity WHERE state != 'idle';
    `);
    const usedConnections = parseInt(usedConnRes.rows[0].count); // Número de conexões em uso

    // Retorna o JSON com todas as propriedades
    response.status(200).json({
      updated_at: updatedAt, // Data e hora da última atualização
      postgres_version: postgresVersion, // Versão do PostgreSQL
      max_connections: maxConnections, // Número máximo de conexões
      used_connections: usedConnections, // Número de conexões em uso
    });
  } catch (error) {
    console.error("Erro ao consultar status do banco:", error);
    response.status(500).json({ error: "Erro ao obter status do sistema" });
  }
}

export default status; // Exporta a função como handler do endpoint
