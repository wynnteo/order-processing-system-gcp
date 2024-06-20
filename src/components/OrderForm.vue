<template>
  <div>
    <form @submit.prevent="placeOrder">
      <label for="order_id">Order ID:</label>
      <input type="text" id="order_id" v-model="order.order_id" required><br><br>

      <label for="product">Product:</label>
      <input type="text" id="product" v-model="order.product" required><br><br>

      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" v-model.number="order.quantity" required><br><br>

      <label for="customer_name">Customer Name:</label>
      <input type="text" id="customer_name" v-model="order.customer_name" required><br><br>

      <label for="customer_email">Customer Email:</label>
      <input type="email" id="customer_email" v-model="order.customer_email" required><br><br>

      <label for="status">Status:</label>
      <select id="status" v-model="order.status" required>
        <option value="Pending">Pending</option>
        <option value="Processing">Processing</option>
        <option value="Completed">Completed</option>
      </select><br><br>

      <button type="submit">Place Order</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        order_id: '',
        product: '',
        quantity: null,
        customer_name: '',
        customer_email: '',
        status: 'Pending'
      }
    };
  },
  methods: {
    async placeOrder() {
      try {
        fetch('https://asia-southeast1-orderprocessingsystem.cloudfunctions.net/createOrder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.order)
        })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log("Order placed:", data);
        })
        .catch(error => {
          console.error('Error placing order:', error);
        });
      } catch (error) {
        console.error('Error placing order:', error);
        alert('Failed to place order. Please try again.');
      }
    }
  }
};
</script>