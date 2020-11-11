var apresentacao;
var tagImagem;
var descricao;

var imagemAtual;

var texto1 = ' Obrigado InfoEólica por fornecer esse espaço para seus internautas, sou o Francisco Alves de São Gonçalo do Amarante. Gostaria de apresentar a minha opinião sobre a energia eólica, aqui São Gonçalo do Amarante desde 1999 com o inicio das operações eólicas, a oferta de emprego e o investimento na região aumentou muito, tudo graças a essa forma de obtenção de energia. Quase esqueci, essa é a foto do parque eólico de Taíba';
var texto2 = 'Bom dia, meu nome é Eliana Duarte e sou de Santa Catarina, decidi compartilhar com vocês essa foto do parque eólico de Bom Jardim da Serra. Na minha opinião essas turbinas não deixam a paisagem poluída como alguns dizem, para mim elas demonstram a harmonia entre humanos e a natureza. O único problema para mim, são os passarinhos que de vez em quando são mortos por elas.';
var texto3 = 'Olá sou o Sebastião Santos, sou de Campo Formoso na Bahia, essa foto é do complexo de Morrinhos. Gostei muito dos tópicos abordados no site, da clareza nas explicações e do visual. Na minha opinião se as nações dessem maior foco no investimento em energias limpas, como a eólica, o planeta seria muito mais sustentável e a natureza seria beneficiada com isso. Entendo que a queima de carvão é uma forma barata de geração de energia, mas implica no efeito estufa, diferente da energia eólica que é limpa e sustentável e também não é cara.';

function inicializar(){
	apresentacao = document.getElementById('apresentacao');
	tagImagem = document.getElementById('imagens');
	descricao = document.getElementById('descricao');
	imagem3();
}

function imagem1(){
	tagImagem.setAttribute('src', 'imagens/postagens/CearaFortalezaAero.jpg');
	tagImagem.setAttribute('width', '800');
	tagImagem.setAttribute('height', '474');

	descricao.value = texto1;
	imagemAtual = 1;
}

function imagem2(){
	tagImagem.setAttribute('src', 'imagens/postagens/parqueEolicoDeBomJardimDaSerraSC.jpg');
	tagImagem.setAttribute('width', '800');
	tagImagem.setAttribute('height', '474');

	descricao.value = texto2;
	imagemAtual = 2;
}

function imagem3(){
	tagImagem.setAttribute('src', 'imagens/postagens/complexoMorrinhosBA.jpg');
	tagImagem.setAttribute('width', '800');
	tagImagem.setAttribute('height', '474');

	descricao.value = texto3;
	imagemAtual = 3;
}

function anterior(){
	if(imagemAtual == 1)
		imagem3();
	else if(imagemAtual == 2)
		imagem1();
	else
		imagem2();
}

function proximo(){
	if(imagemAtual == 1)
		imagem2();
	else if(imagemAtual == 2)
		imagem3();
	else
		imagem1();
}