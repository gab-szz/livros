import express from "express";
import livros from "./livrosRoutes.js"; // Sem .js se for TypeScript
const routes = (app) => {
    app.use(express.json()); // ✅ Corrigido com parênteses
    app.route("/").get((req, res) => {
        res.status(200).send("Curso de Node.js");
    });
    app.use("/livros", livros); // ✅ Adiciona rotas de livros
};
export default routes;
