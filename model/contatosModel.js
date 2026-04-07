// Simular um banco de dados
import pool from "../database/db.js";
import bcrypt from 'bcrypt'
import { autencticar } from "../Middleware/auth.middleware.js";

export async function listarContatos() {
  try {
    const resultListagemGeral = await pool.query("SELECT * FROM contatos");
    return resultListagemGeral.rows;
  } catch (error) {
    console.log("Erro ao consultar no banco de dados: ", error);
    return error;
  }
}

export async function buscarContatoID(id) {
  try {
    const resultadoPorID = await pool.query(
      `SELECT * FROM Contatos WHERE id = ${id}`,
    );
    return resultadoPorID.rows;
  } catch (error) {
    console.log("Erro ao consultar no banco de dados: ", error);
    return error;
  }
}

export async function cadastrarContato(nome, telefone, email, senha_hash) {
  try {
    const inserirContatoDb = await pool.query(`
            INSERT INTO Contatos (nome, telefone, email, senha_hash)
            VALUES ('${nome}', '${telefone}', '${email}', '${senha_hash}') 
            RETURNING id, nome, telefone, email
        `);

    return inserirContatoDb.rows[0];
  } catch (error) {
    console.log("Erro ao consultar no banco de dados: ", error);
    return error;
  }
}

export async function loginModulo(email, senha) {
  try {
    const carregaUser = await pool.query(`SELECT * FROM contatos WHERE email=$1`, [email])

    const resLogin = await bcrypt.compare(senha, carregaUser.rows[0].senha_hash)

    return resLogin

  } catch (error) {
    console.log("Erro ao consultar no banco de dados: ", error);
    return error;
  }
}

export async function perfilModule(email) {
  try {
    const resUser = await pool.query('SELECT * FROM contatos WHERE email=$1',[email])

    const respsota = {
      id: resUser.rows[0].id,
      nome: resUser.rows[0].nome,
      telefone: resUser.rows[0].telefone,
      email: resUser.rows[0].email
    }

    return respsota
//lula
  } catch (error) {
    console.log("Erro ao consultar no banco de dados: ", error);
    return error;
  }
}