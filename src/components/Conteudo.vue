<template>
  <div class="conteudo">
    <h1>{{ msg }}</h1>
    <div>
      <b>Apresentação:</b>
      <a
        href="https://docs.google.com/presentation/d/1tTc6vslHVjxniWxrEzV3zavOPG-w95isvgUuTUHig4I/edit?usp=sharing"
      >Google Docs</a>
      <br />
      <b>Explorando Frontend:</b>
      <a href="https://github.com/jeoronei/explorando-frontend">Git</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conteudo",
  props: {
    msg: {
      type: String,
      default: "Conteúdo"
    }
  },
  /*eslint-disable */
  mounted() {
    window.ga("set", "page", "/conteudo");
    window.ga("send", "pageview");
  }
  /*eslint-enable */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.conteudo {
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
