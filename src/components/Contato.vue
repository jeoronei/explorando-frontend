<template>
  <div class="contato">
    <h1>{{ msg }}</h1>
    <div>
      <b>E-mail:</b> jeoronei.ribinski@hotmail.com
      <br />
      <b>Linkedin:</b>
      <a href="https://www.linkedin.com/in/jeoronei-ribinski/">/in/jeoronei-ribinski/</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contato",
  props: {
    msg: {
      type: String,
      default: "Contato"
    }
  },
  /*eslint-disable */
  mounted() {
    window.ga("set", "page", "/contato");
    window.ga("send", "pageview");
  }
  /*eslint-enable */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.contato {
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
