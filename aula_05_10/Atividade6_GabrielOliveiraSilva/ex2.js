verificarTecla = (evento) => {
	//alert(evento.keyCode);
	if (evento.keyCode == 13)
    {
		evento.preventDefault();
		alert('Você pressionou o ENTER');
	}
    else
    {
		evento.preventDefault();
        alert('Você NÃO pressionou o ENTER');
    }
}

window.onload = () => {
	document.getElementById('txtDigitado').onkeypress = (evento) => 
		verificarTecla(evento);
}