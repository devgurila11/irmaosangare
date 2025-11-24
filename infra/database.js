// Importa o cliente do PostgreSQL da biblioteca 'pg'
import { Client } from "pg";

// Função assíncrona que executa uma consulta no banco de dados
async function query(queryObject) {
  // Cria uma nova instância do cliente PostgreSQL com as configurações de conexão
  const client = new Client({
    host: process.env.POSTGRES_HOST, // Host do banco (deve ser definido na variável de ambiente)
    port: process.env.POSTGRES_PORT, // Porta do banco (deve ser definida na variável de ambiente)
    user: process.env.POSTGRES_USER, // Usuário do banco (deve ser definido na variável de ambiente)
    database: process.env.POSTGRES_DB, // Nome do banco (deve ser definido na variável de ambiente)
    password: process.env.POSTGRES_PASSWORD, // Senha do usuário (deve ser definida na variável de ambiente)
  });
  console.log("Credencias do postgres:", {
    host: process.env.POSTGRES_HOST, // Host do banco (deve ser definido na variável de ambiente)
    port: process.env.POSTGRES_PORT, // Porta do banco (deve ser definida na variável de ambiente)
    user: process.env.POSTGRES_USER, // Usuário do banco (deve ser definido na variável de ambiente)
    database: process.env.POSTGRES_DB, // Nome do banco (deve ser definido na variável de ambiente)
    password: process.env.POSTGRES_PASSWORD, // Senha do usuário (deve ser definida na variável de ambiente)
  });

  try {
    // Estabelece a conexão com o banco
    await client.connect();

    // Executa a consulta recebida como parâmetro e espera o resultado
    const result = await client.query(queryObject);

    // Retorna o resultado da consulta
    return result;
  } catch (error) {
    // Se ocorrer algum erro, exibe no console
    console.error("Erro na consulta ao banco:", error);
    throw error; // Repassa o erro para quem chamou a função
  } finally {
    // Encerra a conexão com o banco, mesmo que tenha ocorrido erro
    await client.end();
  }
}

// Exporta a função 'query' dentro de um objeto como padrão
export default {
  query: query,
};
