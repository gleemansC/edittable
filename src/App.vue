<template>
  <div id="app">
    <edit-table :p-model="model"></edit-table>
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
</style>
