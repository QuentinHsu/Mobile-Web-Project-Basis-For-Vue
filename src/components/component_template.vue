<template>
  <div class="component_template">
    <div class="list"></div>
    <div class="button"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  mounted() {},
}
</script>

<style lang="scss" scoped>
.component_template {
  width: 750px;
  .list {
    font-size: 50px;
    // width: 100%;
    height: 100px;
    background: rgb(80, 184, 224);
  }
  .button {
    width: 50%;
    height: 100px;
    background: forestgreen;
  }
}
</style>