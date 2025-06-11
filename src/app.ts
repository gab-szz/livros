import express, { Request, Response } from 'express';
import initDB from './source/dbConnect.js';
import routes from "./routes/index.js"

const conexao = await initDB();

conexao.on("error", (erro) => {
  console.log("Erro de conexão: ", erro);
})

conexao.once("open", () => {
  console.log("Conectado com sucesso no banco de dados.")
})

const app = express();
routes(app)

export default app;