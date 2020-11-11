function enviar(){
	var nome = document.getElementById('nome');
	var arquivo = document.getElementById('arquivo');
	var descricaoForm = document.getElementById('descricaoForm');
	var certo = true;

	if(nome.value.length < 3){
		alert('O nome necessita de pelo menos 3 caracteres!');
		certo = false;
	}
	if(arquivo.value==''){
		alert('Insira uma imagem!');
		certo = false;
	}
	if(descricaoForm.value.length < 10){
		alert('A descrição precisa de no mínimo 10 caracteres!');
		certo = false;
	}

	if(certo)
		alert('Enviado com sucesso!');
}