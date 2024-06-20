<!-- src/components/OrderStatus.vue -->
<template>
  <div>
    <h2>Order Status</h2>
    <p v-if="loading">Loading order status...</p>
    <p v-else>{{ status }}</p>
  </div>
</template>

<script>
import { messaging } from '../firebase'; 

export default {
  data() {
    return {
      status: '',
      loading: true
    };
  },
  created() {
    // Example: Subscribe to Firebase Cloud Messaging (FCM) notifications
    messaging.onMessage(payload => {
      console.log('FCM Message received:', payload);
      this.loading = false;
      this.status = `Order ${payload.data.orderId} processed`;
    });
  }
};
</script>
