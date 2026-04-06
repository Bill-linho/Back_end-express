// Simular um banco de dados
import pool from "../database/db.js";
import bcrypt from 'bcrypt'

export async function listarContatos() {
  try {
    const resultListagemGeral = await pool.query("SELECT * FROM Contatos");
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
            VALUES ('${nome}', '${telefone}', '${email}', '${senha_hash}) 
            RETURNING id, nome, telefone, email
        `);

    return inserirContatoDb.rows[0];
  } catch (error) {
    console.log("Erro ao consultar no banco de dados: ", error);
    return error;
  }
}

export async function loginModulo(email,senha) {
    try {
        const carregaUser = await pool.query(`SELECT * FROM contatos WHERE email=${email}`,email)

        const resLogin = await bcrypt.compare(senha, carregaUser.rows.senha_hash)
        
        return resLogin
        
    } catch (error) {
    console.log("Erro ao consultar no banco de dados: ", error);
    return error;
    }
}
