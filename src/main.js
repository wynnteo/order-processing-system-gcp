import { createApp } from 'vue';
import App from './App.vue';
import { messaging } from './firebase';

navigator.serviceWorker.register('/firebase-messaging-sw.js')
  .then((registration) => {
    console.log('Service Worker registered:', registration);
    console.log(messaging)
    messaging.getToken({ vapidKey: 'YOUR_PUBLIC_VAPID' })
      .then((currentToken) => {
        if (currentToken) {
          console.log('Firebase Token:', currentToken);
          // Send the token to your server for storing and sending notifications
          fetch('https://asia-southeast1-orderprocessingsystem.cloudfunctions.net/storeToken', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              token: currentToken,
              user_id: 'USER_ID' // Replace with actual user ID or identifier
            })
          })
          .then(response => {
            console.log(response);
            if (!response.ok) {
              throw new Error('Failed to store token on server');
            }
            return response.json();
          })
          .then(data => {
            console.log('Token stored successfully:', data);
          })
          .catch(error => {
            console.error('Error storing token:', error);
          });

        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  }).catch((err) => {
    console.error('Service Worker registration failed:', err);
  });

createApp(App).mount('#app');