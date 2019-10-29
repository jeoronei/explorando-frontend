<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: {
      type: String,
      default: "Home"
    }
  },
  /*eslint-disable */
  mounted() {
    window.ga("set", "page", "/");
    window.ga("send", "pageview");
  }
  /*eslint-enable */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.home {
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
