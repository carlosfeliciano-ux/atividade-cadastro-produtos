export default class Produto {
    id;
    nome;
    preco;
    quantidade;
    constructor(id, nome, preco, quantidade) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}
