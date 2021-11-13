class Smartphone {
    constructor(codigo, modelo, marca, disponibilidade, preco)
    {
        this.codigo = codigo;
        this.modelo = modelo;
        this.marca = marca;
        this.disponibilidade = disponibilidade;
        this.preco = preco;
    }
}

var produto1 = new Smartphone('1', 'iPhone X', 'Apple', 'Sim', '3000') ;

console.log(produto1);