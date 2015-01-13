Carro = function(rodas, cor){
  this.rodas = rodas;
  this.cor = cor;
};

Carro.prototype.andar = function andar(){
  console.log("O carro com " + this.rodas + " rodas e cor " + this.cor + ", andou!");
};

var fusca = new Carro(4, "Azul");
fusca.andar();