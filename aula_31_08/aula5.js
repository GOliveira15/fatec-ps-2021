do{
    var n1 = prompt('Digite um número:');
    var n2 = prompt('Digite outro número:');
    var operacao = prompt('Informe a operação desejada (+ | - | / | *)');
    var resultado = 0;

    if (isNaN(n1) || isNaN(n2))
    {
        alert('Um dos valores informados não é um número válido!');
    }
    else if (n1 == '' || n2 == '')
    {
        alert('Digite números válidos!');
    }
    else
    {
        alert('Os dois valores informados são válidos!');
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
    }

    if (n1 != '' && n2 != '')
    {
        if (operacao == '+')
        {
            resultado = n1 + n2;
            alert(resultado);
        }
        else if (operacao == '-')
        {
            resultado = n1 - n2;
            alert(resultado);
        }
        else if (operacao == '/')
        {
            resultado = n1 / n2;
            alert(resultado);
        }
        else if (operacao == '*')
        {
            resultado = n1 * n2;
            alert(resultado);
        }
        else
        {
            alert('Digite uma operação válida!');
        }
    }
    else
    {
        alert('Preencha todos os campos!');
    }

    var resposta = prompt('Deseja realizar outra operação? Digite 1 para continuar e 2 para finalizar');
} while(resposta == 1);

alert('Finalizado!');