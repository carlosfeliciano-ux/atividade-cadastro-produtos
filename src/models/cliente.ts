export default class Cliente{
    id: number;
    nome: string;
    rg: string;

    constructor(id: number, nome: string, rg: string){
        this.id = id;
        this.nome = nome;
        this.rg = rg;
    }
}