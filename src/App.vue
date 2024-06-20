<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>Order Processing System</h1>
    <OrderForm />
    <OrderStatus />
  </div>
</template>

<script>
import OrderForm from './components/OrderForm.vue';
import OrderStatus from './components/OrderStatus.vue';

export default {
  components: {
    OrderForm,
    OrderStatus
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
