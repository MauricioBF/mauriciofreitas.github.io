onkeyup = function(){
  var max = document.getElementsByTagName('textarea')[0];
  var st = max.value.length;
  var contagem = document.getElementsByTagName('output')[0];
  c = contagem.innerHTML = parseInt(st);
}
var postar = document.getElementById('postar');
onclick=function (postar){
  div=document.createElement('div');
  div.setAttribute('id','pst');
  var post=document.getElementById('post').value;
  var parag2=document.createElement('p');
  parag2.textContent=post;
  div.appendChild(parag2);
  var nova=document.getElementById('postagem');
  var nova2=document.getElementById('postagens');
  var textarea=document.getElementsByTagName('textarea')[0].value;
  var parag = document.createElement('p');
  parag.textContent = textarea;
  div.appendChild(parag);
  var nomeautor=document.getElementById('nomeautor').value;
  var parag3=document.createElement('p');
  parag3.textContent=nomeautor;
  div.appendChild(parag3);
  var data = new Date ();
  parag4 = document.createElement('p');
  parag4.textContent = data;
  div.appendChild(parag4);
  nova2.insertBefore(div, nova2.childNodes[0]);
  var txa = document.createElement('textarea');
  div.appendChild(txa);
}
