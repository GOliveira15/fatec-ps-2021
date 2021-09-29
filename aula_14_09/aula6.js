var repetir = 's';

while(repetir == 's')
{
  var numero1 = parseInt(prompt('informe o numero 1: '));
  var numero2 = parseInt(prompt('informe o numero 2: '));
  var operacao = prompt('informe o valor a operacao');

  switch (operacao) {
  case '+':
    alert(numero1 + numero2);
    break;
  case '-':
    alert(numero1 - numero2);
    break;
  case '*':
    alert(numero1 * numero2);
    break;
  case '/':
    alert(numero1 / numero2);
    break;
  }

  repetir = prompt('Deseja repetir o cálculo? (s = Sim) ou (n = Não)');

}