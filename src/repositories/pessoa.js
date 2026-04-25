const Pessoa = require('../models/pessoa.js');

class RepositorioExercicio {

    async PegarUm(id){
        return Pessoa.findOne({
            where: {
                id
            }
        })
    }

    async PegarTodos(){
        return Pessoa.findAll()
    }

    async Adicionar(pessoa){
        return Pessoa.create({ ...pessoa})
    }

    async Alterar(id, pessoa){
        return Pessoa.update(pessoa, {
            where: {
                id
            }
        })
    }

    async Deletar(id){
        const deletado = await Pessoa.destroy({
            where: {
                id
            }
        })
        if(deletado === 0) {
            throw new Error("Pessoa não encontrado.")
        }
        return deletado
    }    
}

module.exports = RepositorioExercicio