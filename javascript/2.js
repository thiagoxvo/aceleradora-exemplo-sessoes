Veiculo = function(rodas, cor) {
  this.rodas = rodas;
  this.cor = cor;
};

Veiculo.prototype.andar = function andar(){
  console.log("O veiculo com " + this.rodas + " rodas e cor " + this.cor + ", andou!");
};

Carro = function(rodas, cor, marca){
  Veiculo.call(this, rodas, cor);
  this.marca = marca;
  console.log("Um carro foi instanciado");
}

Carro.prototype = new Veiculo();
Carro.prototype.abrirPorta = function abrirPorta(){
  console.log("Abrindo as portas");
}

var fusca = new Carro(4, "Azul", "Volks");
fusca.andar();
fusca.abrirPorta();