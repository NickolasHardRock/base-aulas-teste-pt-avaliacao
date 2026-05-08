const RepositorioExercicio = require("../repositories/pessoa.js")

const repositorio = new RepositorioExercicio()
class ServicoExercicio {

  async PegarUm(id) {


    //Sugestão de melhoria adicionar uma verificação de numeros negativos em PegarUm
    //Sugestão de melhoria adicionar uma verificação quando não for informado id
    if (!id || isNaN(id) || id < -1 || id == null) {
      throw new Error("Favor corretamente o id.")
    }
    // Sugestão de melhoria adicionar um Erro quando o dado não for encontrado
    const result = await repositorio.PegarUm(id)

    if (result == null) {
      throw new Error("Dado não encontrado")

    }
    return repositorio.PegarUm(id)
  }
  // Sugestão: Adicionar mensagem de erro caso o banco esteja vazio 
  async PegarTodos() {

    const result = await repositorio.PegarTodos()
    console.log(result)
    if(result.length == 0){
      throw new Error("Dados não encontrado")
    }

    return repositorio.PegarTodos()
  }

  async Adicionar(pessoa) {
    if (!pessoa) {
      throw new Error("Favor preencher o pessoa.")
    } else if (!pessoa.nome) {
      throw new Error("Favor preencher o nome.")
      } else if (pessoa.nome.length < 3) {
    throw new Error("O nome deve ter no mínimo 3 caracteres.")
      } else if (/\d/.test(pessoa.nome)) {
    throw new Error("O nome não pode conter números.")
    } else if (!pessoa.email) {
      throw new Error("Favor preencher o email.")
    } else if (!pessoa.senha) {
      throw new Error("Favor preencher o senha.")
    }else if (pessoa.senha.length < 8) {
    throw new Error("A senha deve ter no mínimo 8 caracteres.")
    }
    return repositorio.Adicionar(pessoa)
  }

  async Alterar(id, pessoa) {
    if (!id || isNaN(id)) {
      throw new Error("Favor corretamente o id.")
    }else if (pessoa.nome && /\d/.test(pessoa.nome)) {
    throw new Error("O nome não pode conter números.")
  }else if (pessoa.nome && pessoa.nome.length < 3) {
    throw new Error("O nome deve ter no mínimo 3 caracteres.")
  }else if (pessoa.senha && pessoa.senha.length < 8) {
    throw new Error("A senha deve ter no mínimo 8 caracteres.")
  } else if (/^(.)\1*$/.test(pessoa.senha)) {
    throw new Error("A senha não pode conter apenas um caractere repetido.")
  }
    // Correção: Service alterar pessoa esta chamando adicionar pessoa inves de alterar
    return repositorio.Alterar(id, pessoa)
  }

  async Deletar(id) {
    if (!id || isNaN(id)) {
      throw new Error("Favor corretamente o id.")
    }

    return repositorio.Deletar(id)
  }

}
module.exports = ServicoExercicio
