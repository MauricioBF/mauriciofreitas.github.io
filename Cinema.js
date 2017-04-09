var t=document.getElementById("lugares");
var quantasint=0;
var quantasmeia=0;
t.addEventListener('click',function(evento){//(DES)SELECIONAR LUGARES INTEIROS
	var irineu=evento.target;
	var a=0;
	var quantsinteira=document.getElementById('qtdint');
	var tinteira=document.getElementById('tipoint');
	var valorinteira=document.getElementById('valint');
	if(irineu.className=='lugar2'){
		irineu.className='lugar';
		a=1;
		quantasint-=1;
	}
	if(a===0){
		if(irineu.className=='lugar'){
			irineu.className='lugar2';
			quantasint+=1;
		}
	}
quantsinteira.innerText=quantasint;
if(quantasint<2){
	tinteira.innerText='Entrada Inteira';
}
if(quantasint>=2){
	tinteira.innerText='Entradas Inteiras';
}
valorinteira.innerText="R$"+(quantasint*qualquer.value);
var finish=((quantasint*qualquer.value)+((quantasmeia*qualquer.value)/2));
tt.innerText="R$"+finish;
ss.innerText="R$"+finish;
});
var tt=document.getElementById('tot');
var ss=document.getElementById('subtot');
t.addEventListener('contextmenu',function(evento){//(DES)SELECIONAR LUGARES MEIOS
	var quantsmeia=document.getElementById('qtdmeia');
	var timeia=document.getElementById('tipomeia');
	var valormeia=document.getElementById('valmeia');
	var dougras=evento.target;
	var c=0;
	if(dougras.className=='lugar3'){
		dougras.className='lugar';
		c=1;
		quantasmeia-=1;
	}
	if(c===0){
		if(dougras.className=='lugar'){
			dougras.className='lugar3';
			quantasmeia+=1;
		}
	}
quantsmeia.innerText=quantasmeia;
if(quantasmeia<2){
	tipomeia.innerText='Meia Entrada';
}
if(quantasmeia>=2){
	tipomeia.innerText='Meias Entradas';
}
valormeia.innerText="R$"+((quantasmeia*qualquer.value)/2);
var finish=((quantasint*qualquer.value)+((quantasmeia*qualquer.value)/2));
tt.innerText="R$"+finish;
ss.innerText="R$"+finish;
});
var inte=document.getElementById("qualquer");
var met=document.getElementById("sem");
inte.addEventListener('keyup', function(evento){//CALCULO DA MEIA ENTRADA
	var quantsinteira=document.getElementById('qtdint');
	var tinteira=document.getElementById('tipoint');
	var valorinteira=document.getElementById('valint');
	var quantsmeia=document.getElementById('qtdmeia');
	var timeia=document.getElementById('tipomeia');
	var valormeia=document.getElementById('valmeia');
	var xinte=inte.value/2;
	met.innerText="R$ "+xinte;
	quantsinteira.innerText=quantasint;
	if(quantasint<2){
		tinteira.innerText='Entrada Inteira';
	}
	if(quantasint>=2){
		tinteira.innerText='Entradas Inteiras';
	}
	valorinteira.innerText="R$"+(quantasint*qualquer.value);
	var finish=((quantasint*qualquer.value)+((quantasmeia*qualquer.value)/2));
	tt.innerText="R$"+finish;
	ss.innerText="R$"+finish;
	quantsmeia.innerText=quantasmeia;
	if(quantasmeia<2){
		tipomeia.innerText='Meia Entrada';
	}
	if(quantasmeia>=2){
		tipomeia.innerText='Meias Entradas';
	}
	valormeia.innerText="R$"+((quantasmeia*qualquer.value)/2);
	var finish=((quantasint*qualquer.value)+((quantasmeia*qualquer.value)/2));
	tt.innerText="R$"+finish;
	ss.innerText="R$"+finish;
});
