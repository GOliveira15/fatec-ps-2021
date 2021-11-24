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

var listaSmartphones = [];
var auxPosicao = '';

function cadastrar(objeto, lista) {
	lista.push(objeto);
}

function alterar(objeto, lista, posicao) {
	lista[posicao] = objeto;
}

function listar(lista) {
	let auxHtml = '';
	for (let i = 0; i < lista.length; i++) {
		auxHtml += '<tr>'+
		           '<td>'+ lista[i].codigo +'</td>'+
		           '<td>'+ lista[i].modelo +'</td>'+
		           '<td>'+ lista[i].marca +'</td>'+
		           '<td>'+ lista[i].disponibilidade +'</td>'+
                   '<td>'+ lista[i].preco +'</td>'+
		           '<td>'+
		           '<button class="btn btn-warning" rel="'+ i +'">A</button>'+
		           '</td>'+
		           '</tr>';
	}
	return auxHtml;
}

$(document).ready(() => {
	$('#btnSalvar').click(() => {
		let codigo = $('#codigo').val();
		let modelo = $('#modelo').val();
		let marca = $('#marca').val();
		let disponibilidade = $('#disponibilidade').val();
        let preco = $('#preco').val();

		if (codigo != '' && modelo != '' && marca != '' && disponibilidade != '' && preco != '') {

			let smartphone = new Smartphone(codigo, modelo, marca, disponibilidade, preco);
			
			if (auxPosicao == '')
			{
				cadastrar(smartphone, listaSmartphones);
			} else {
				alterar(smartphone, listaSmartphones, auxPosicao);
				auxPosicao = '';
			}

			$('#tbTabela').html(listar(listaSmartphones));
			$('input').val('');
            
		} else {
			alert('Todos os dados são necessários!');
		}
	});

	$('#tbTabela').on('click', '.btn-warning', function(){
		//let posicaoAtual = $(this).attr('rel');
		auxPosicao = $(this).attr('rel');
		$('#codigo').val(listaSmartphones[auxPosicao].codigo);
		$('#modelo').val(listaSmartphones[auxPosicao].modelo);
		$('#marca').val(listaSmartphones[auxPosicao].marca);
		$('#disponibilidade').val(listaSmartphones[auxPosicao].disponibilidade);
		$('#preco').val(listaSmartphones[auxPosicao].preco);
	});

	$('#btnAjax').click(() => {
		$.ajax({
			url: "http://date.jsontest.com/",
			method: 'GET'
			}).done(function(resposta) {
			$('#retornoAjax').html(resposta.date + ' ' + resposta.time);
		});
	});

});