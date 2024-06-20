importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js')

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "orderprocessingsystem.firebaseapp.com",
  projectId: "orderprocessingsystem",
  messagingSenderId: "244205369552",
  appId: "1:244205369552:web:73c966048159c84bdb06d5"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('FCM Background Message received:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});