<template>
  <div class="apresentacao">
    <h1>{{ msg }}</h1>
    <div class="descricao">
      Atualmente vivemos na era da informação, todos os dias geramos terabytes de dados, porém, apenas produzir dados não é o suficiente.
      Durante a apresentação irei falar sobre a importância do acompanhamento dos dados produzidas pelo front-end, além de práticas e ferramentas para estar realizando essa tarefa.
    </div>
  </div>
</template>

<script>
export default {
  name: "Apresentacao",
  props: {
    msg: {
      type: String,
      default: "Sobre Apresentação"
    }
  },
  /*eslint-disable */
  mounted() {
    window.ga("set", "page", "/apresentacao");
    window.ga("send", "pageview");
  }
  /*eslint-enable */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.apresentacao {
  .descricao {
    width: 80%;
    margin: 0 auto;
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #610e48;
  }
}
</style>
