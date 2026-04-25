const ServicoExercicio = require("../services/pessoa.js");

const servico = new ServicoExercicio()
class ControllerExercicio {

    async PegarUm(req, res){
      try {
        const id = req.params.id

        const result = await servico.PegarUm(id)
        
        res.status(200).json(result);
      } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message}); 
      }
    }

    async PegarTodos(_, res){
      try {
        const result = await servico.PegarTodos()

        res.status(201).json(result); 
      } catch (error) {
        res.status(500).json({ message: error.message});
      }
    }

    async Adicionar(req, res){
      try {
        // retirar {pessoa} e substituir por  const pessoa
        const  pessoa  = req.body

        await servico.Adicionar(pessoa)
        
        res.status(201).json({ message: "Adicionado com sucesso!"});
      } catch (error) {
        if(error.parent.code === "ER_DUP_ENTRY") {
          res.status(409).json({ message: "Email já cadastrado!"});
        }
        res.status(400).json({ message: error.parent.message || error.message});
      }
    }

    async Alterar(req, res){
      try {
        
        const id = req.params.id
        // Correção: Controller alterar req.body.nome para req.body
        // Sugestão: Controller trocar o nome da variavel para pessoa  
        const pessoa = req.body
        console.log(req.body)
        await servico.Alterar(id, pessoa)
          
        res.status(200).json({ message: "Alterado com sucesso!"});
      } catch (error) {
        // Correção : Controller errors esta sendo chamado de maneira incorreta
        console.log(error)
        res.status(500).json({ message:  error.message});
        
      }
    }

    async Deletar(req, res){
      try {
        const id = req.params.id

        await servico.Deletar(id)
          
        res.status(200).json({ message: "Deletado com sucesso!"});
      } catch (error) {
        res.status(500).json({ message: error.message});
        
      }
    }

}

module.exports = ControllerExercicio