<template>
  <div id="app">
    <edit-table ref="table" :p-model="model"></edit-table>
    <ElButton class="button" type="" @click="submit">校验</ElButton>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      model: {
        tableData: []
      }
    };
  },
  methods: {
    submit() {
      this.$refs.table.validate();
    }
  },
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button{
  padding: 1000px
}
</style>
