class Produto {
	constructor(codigo,descricao,valor) {
		this.codigo = codigo;
		this.descricao = descricao;
		this.valor = valor;
	}
}

var calca = new Produto('001','Calça jeans','R$100,00');
var camiseta = new Produto('002','Camiseta Preta','R$50,00');
var sapato = new Produto('003','Sapato casual branco','R$300,00');

window.onload = () => {

	for(var i in calca)
	{
		console.log(calca[i]);
	}

	/*for(var i in calca, camiseta, sapato)
	{
		console.log(calca[i]);
		console.log(camiseta[i]);
		console.log(sapato[i]);
	}*/

    //document.getElementById('mostrar').innerHTML = calca.codigo + '<br>' + calca.descricao + '<br>' + calca.valor;

    //document.getElementById('mostrar').innerHTML = camiseta.codigo + '<br>' + camiseta.descricao + '<br>' + camiseta.valor;

    //document.getElementById('mostrar').innerHTML = sapato.codigo + '<br>' + sapato.descricao + '<br>' + sapato.valor;
}