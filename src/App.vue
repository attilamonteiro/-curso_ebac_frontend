<template>
  <div id="app" class="container mt-5">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <h2>Calculadora Aritmética</h2>
        <div class="form-group">
          <label for="num1">Número 1:</label>
          <input v-model="num1" type="number" class="form-control" @input="calcularResultado" />
        </div>
        <div class="form-group">
          <label for="num2">Número 2:</label>
          <input v-model="num2" type="number" class="form-control" @input="calcularResultado" />
        </div>
        <div class="form-group">
          <label for="operacao">Operação:</label>
          <select v-model="operacao" class="form-control" @change="calcularResultado">
            <option value="+">Soma</option>
            <option value="-">Subtração</option>
            <option value="*">Multiplicação</option>
            <option value="/">Divisão</option>
          </select>
        </div>
        <div class="form-group">
          <label for="resultado">Resultado:</label>
          <input :value="resultado" type="text" class="form-control" disabled />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      operacao: '+',
    };
  },
  computed: {
    resultado() {
      switch (this.operacao) {
        case '+':
          return this.num1 + this.num2;
        case '-':
          return this.num1 - this.num2;
        case '*':
          return this.num1 * this.num2;
        case '/':
          return this.num1 / this.num2;
        default:
          return 0;
      }
    },
  },
  methods: {
    calcularResultado() {
      // Os resultados serão atualizados automaticamente devido ao uso de v-model
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}

.form-group {
  margin-bottom: 20px;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

input[disabled] {
  background-color: #e9ecef;
}

</style>

