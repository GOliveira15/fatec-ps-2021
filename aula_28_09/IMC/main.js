window.onload = () => {
    document.getElementById('calcular').onclick = () => {

        var nome = document.getElementById('nome').value;
        var peso = document.getElementById('peso').value;
        var altura = document.getElementById('altura').value;
        var imc;
        var classificacao;

        if (isNaN(peso) || isNaN(altura))
        {
            document.getElementById('resultado').innerHTML = "Um dos valores informados não é um número válido!";
            return;
        }
        else if (peso == '' || altura == '')
        {
            document.getElementById('resultado').innerHTML = "Digite números válidos!";
            return;
        }
        else
        {
            peso = parseFloat(peso);
            altura = parseFloat(altura);
        }

        imc = peso / Math.pow(altura, 2);

        if (imc <= 18.5)
        {
            classificacao = 'Abaixo do peso';
        }
        else if (imc >= 18.6 && imc <= 24.9)
        {
            classificacao = 'Peso ideal (Parabéns!)';
        }
        else if (imc >= 25 && imc <= 29.9)
        {
            classificacao = 'Levemente acima do peso';
        }
        else if (imc >= 30 && imc <= 34.9)
        {
            classificacao = 'Obesidade Grau I';
        }
        else if(imc >= 35 && imc <= 39.9)
        {
            classificacao = 'Obesidade Grau II (Severa)';
        }
        else if (imc >= 40)
        {
            classificacao = 'Obesidade III (Mórbida)';
        }
        else
        {
            classificacao = 'Erro';
        }

        document.getElementById('resultado').innerHTML = `Olá, ${nome}. <br>Seu IMC é de ${imc}. <br>Sua classificação é: ${classificacao}.`;

    }

    document.getElementById('nome').onclick = () => {
        document.getElementById('images').innerHTML = 'Imagem 1 aqui!';
    }

    document.getElementById('peso').onclick = () => {
        document.getElementById('images').innerHTML = 'Imagem 2 aqui!';
    }

    document.getElementById('altura').onclick = () => {
        document.getElementById('images').innerHTML = 'Imagem 3 aqui!';
    }
}