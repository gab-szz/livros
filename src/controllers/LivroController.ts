import livro from "../models/Livro.js";
import { Request, Response } from "express"

class LivroController {

    static async listarLivros(req: Request, res: Response) {
        const listaLivros = await livro.find({})
        res.status(200).json(listaLivros);
    }

    static async cadastrarLivro(req: Request, res: Response) {
        try {
            const novoLivro = await livro.create(req.body)
            res.status(201).json({ message: "Livro cadastrado com sucesso", livro: novoLivro });
        } catch (erro) {
            console.log(erro);
            res.status(500).json({ message: erro })
        }
    }

    static async listarLivroPorId(req: Request, res: Response) {
        const id = Number(req.params.id);
        const livroEncontrado = await livro.findById({})

        if (!livroEncontrado) {
            res.status(404).json({ mensagem: "Livro não encontrado" });
        } else {
            res.status(200).json(livroEncontrado);
        }
    }

    static async atualizarLivro(req: Request, res: Response) {
        const id = req.params.id;
        await livro.findByIdAndUpdate(id, req.body);
        res.status(200).json({ mensagem: "Livro atualizado com sucesso!" })
    }

    static async deletarLivro(req: Request, res: Response) {
        const id = req.params.id;
        await livro.findByIdAndDelete(id);
        res.status(200).json({ message: "Livro excluído com sucesso!" })
    }

}

export default LivroController;