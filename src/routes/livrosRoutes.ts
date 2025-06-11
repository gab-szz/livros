import express from "express"; // <-- necessário!
import LivroController from "../controllers/LivroController.js";
import livro from "../models/Livro.js";

const routes = express.Router();

routes.get("/", LivroController.listarLivros);
routes.get("/:id", LivroController.listarLivroPorId);
routes.post("/", LivroController.cadastrarLivro);
routes.put("/:id", LivroController.atualizarLivro);
routes.delete("/:id", LivroController.deletarLivro);

export default routes;