// Classe de Abstração
class Veiculo {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    ligar() {
      console.log(`${this.modelo} - Ligando o veículo.`);
    }
  
    desligar() {
      console.log(`${this.modelo} - Desligando o veículo.`);
    }
  }
  
  // Classes Herdeiras
  class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
      super(marca, modelo);
      this.portas = portas;
    }
  
    abrirPortas() {
      console.log(`${this.modelo} - Abrindo as ${this.portas} portas.`);
    }
  }
  
  class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
      super(marca, modelo);
      this.cilindradas = cilindradas;
    }
  
    acelerar() {
      console.log(`${this.modelo} - Acelerando a ${this.cilindradas} cilindradas.`);
    }
  }
  
  // Criando instâncias de objetos
  const carro1 = new Carro('Toyota', 'Corolla', 4);
  const moto1 = new Moto('Honda', 'CBR600RR', 600);
  const carro2 = new Carro('Ford', 'Fiesta', 2);
  
  // Usando os métodos das instâncias
  carro1.ligar();
  carro1.abrirPortas();
  
  moto1.ligar();
  moto1.acelerar();
  
  carro2.ligar();
  carro2.abrirPortas();
  