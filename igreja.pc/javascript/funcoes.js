
// SLIDER

var imgs=[];
var slider, imgAtual, maxImg, tmp, tempoTroca, vtempo, vload;
/*var texto1;
var texto2;
var texto11 = document.getElementById("texo1").innerHTML = "Deus esta conosco!";
var texto21 = document.getElementById("texo2").innerHTML = "Até aqui nos ajudou o Senhor!";

var texto12 = texto11.innerHTML = "Deus esta conosco!";
var texto22 = texto21.innerHTML = "Até aqui nos ajudou o Senhor!";

var texto13 = texto11.innerHTML = "Se Deus é por nós quem será contra nós?";
var texto23 = texto21.innerHTML = "O Senhor é o meu pastor e nada me faltara!";

var texto14 = texto11.innerHTML = "Deus Salva";
var texto24 = texto21.innerHTML = "Ele é unico que pode nos tirar das garras de satanas";
*/
function preCarregamento(){
	var s=1;
	for (var i=0; i<4; i++) {
		imgs[i]=new Image();
		imgs[i].src="img/fundo-top-"+s+".jpg";
		s++;
	}
}

function carregarImg(img){
	slider.style.backgroundImage="url('"+imgs[img].src+"')";
}

function inicia(){
	preCarregamento();
	imgAtual=0;
	maxImg=imgs.length-1;
	slider=document.getElementById("banner");
	carregarImg(imgAtual);
	tempoTroca=0
	anima();
}

function troca(dir){
	tempoTroca=0;
	imgAtual+=dir;
	slider.style.transition="all 2s";
	if(imgAtual>maxImg){
		imgAtual=0;
	}
	else if(imgAtual<0){
		imgAtual=maxImg;
	}
	carregarImg(imgAtual);
}

function anima(){
	tempoTroca++;
	if(tempoTroca>=300){
		tempoTroca=0;
		troca(1);
	}
	window.requestAnimationFrame(anima);
}

window.addEventListener("load", inicia);

// LADO-2




