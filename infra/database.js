import { Client } from "pg";

async function query(queryObject) {
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
    await client.connect();
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error("Erro na consulta ao banco:", error);
    throw error;
  } finally {
    await client.end();
  }
}

export default { query };
