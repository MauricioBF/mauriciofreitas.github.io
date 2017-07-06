const divValores = document.querySelector('div.valores');
const divMaior = document.querySelector('div.maior');
const divMenor = document.querySelector('div.menor');
const divAmplitude = document.querySelector('div.amplitude');
const divMedia = document.querySelector('div.media');
const divMediana = document.querySelector('div.mediana');
const divBarras = document.querySelector('div.barras');
const divBrs = document.querySelector('div.brs');

const Dados = {
  dds : [],
  classes : [],
  'adicionar': function (val) {
    let  n = parseFloat(val);
    this.dds.push(n);
    this.dds.sort(function (a, b) {
     return a - b
    });
    this.atualizaView();
  },
  'atualizaView': function () {
    let page = [];
    let media = 0;
    let c = 0
    for (let valor of this.dds) {
        page[c] = valor;
        media = valor + media;
        c++;
    }
    divValores.innerHTML =  `<p>${page}</p>`;
    divMaior.textContent = this.dds[this.dds.length - 1];
    divMenor.textContent = this.dds[0];
    divMedia.textContent = media/this.dds.length;

    if(this.dds.length % 2 === 0){
      let mediana = (this.dds[this.dds.length / 2] + this.dds[this.dds.length / 2 - 1] )/ 2;
      divMediana.textContent = mediana;
    }else{
      divMediana.textContent = this.dds[(this.dds.length -1) - (parseInt(this.dds.length / 2))]; // Caso conjunto ímpar
    }
    if(this.dds.length - 1 >0){
      divAmplitude.textContent = this.dds[this.dds.length - 1] -  this.dds[0];
      if(this.dds[0] < 0 && this.dds[this.dds.length - 1] >0 ) divAmplitude.textContent = this.dds[this.dds.length - 1] +  (this.dds[0] * - 1);
      //Caso o menor número for negativo deve ser somado e não diminuido ex: 8 e -8 amplitude = 16
    }

    let escala = 0;

    for (let c of this.classes) {
      c = 0;
      for (let n of this.dds) this.conta(n);
      if (this.contagem > escala) escala = this.contagem;
    }
    for (let c of this.classes) this.desenha(escala);
    valor.value = 0;
  }
};


const form1 = document.getElementById('form1');
form1.addEventListener('submit', function (evento) {
  Dados.adicionar(this.valor.value);
  evento.preventDefault();
});
const form2 = document.getElementById('form2');
form2.addEventListener('submit', function (evento) {
  Classe(this.name.value,this.de.value,this.a.value);
  evento.preventDefault();
});
function Classe(nome, de, ate) {
    if(nome != "" && de != "" && a != "" && de != a){

      this.nome = nome;
      this.de = de;
      this.ate = ate;
      this.contagem = 0;

      this.div = document.createElement('div');
      this.div.classList.add('barra');
      this.div.textContent = '0';
      divBrs.appendChild(this.div);

      var label = document.createElement('label');
      label.textContent = this.nome;
      divBarras.appendChild(label);

      this.desenha = function (escala) {
        let tamanho = this.contagem / escala * 100;
        this.div.style.height = `${tamanho}%`;
        this.div.textContent = this.contagem;
      }

      this.zerar = function () {
        this.contagem = 0;
      }

      this.conta = function(n) {
        this.contagem++;
      }

      // this.verifica = function(n) {
      //   if (this.de instanceof Classe) {
      //     return n > this.de.ate && n <= this.ate;
      //   }
      //   return n >= this.de && n <= this.ate;
      // }

    }else{
      alert("Preencha todos os campos e mantenha o campo 'de' com valor diferente do campo 'a'!");
    }
}
var ns = new Classe('N/S');
Dados.classes.push(ns);
