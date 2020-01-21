importScripts('https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.2/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyA5Xvv-O_G531RILC50FlRBSWr-HVzlEJA',
  projectId: 'meu-starter',
  messagingSenderId: '581248963506',
  appId: '1:581248963506:web:9f09b416b6fbf3a8ee4aab',
});

const messaging = firebase.messaging();