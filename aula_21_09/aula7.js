function Calcular() {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var operacao = document.getElementById('operacao').value;
    var resultado = 0;

    if (isNaN(n1) || isNaN(n2))
    {
        document.getElementById('avisos').innerHTML = "Um dos valores informados não é um número válido!";
        return;
    }
    else if (n1 == '' || n2 == '')
    {
        document.getElementById('avisos').innerHTML = "Digite números válidos!";
        return;
    }
    else
    {
        document.getElementById('avisos').innerHTML = "Os dois valores informados são válidos!";
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
    }

    if (n1 != '' && n2 != '')
    {
        if (operacao == '+')
        {
            resultado = n1 + n2;
        }
        else if (operacao == '-')
        {
            resultado = n1 - n2;
        }
        else if (operacao == '/')
        {
            resultado = n1 / n2;
        }
        else if (operacao == '*')
        {
            resultado = n1 * n2;
        }
        else
        {
            document.getElementById('avisos').innerHTML = "Digite uma operação válida!";
            return;
        }
    }
    else
    {
        document.getElementById('avisos').innerHTML = "Preencha todos os campos!";
        return;
    }

    document.getElementById('avisos').innerHTML = `O resultado é ${resultado}`;
}