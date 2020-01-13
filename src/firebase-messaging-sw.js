importScripts('https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.2/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyA5Xvv-O_G531RILC50FlRBSWr-HVzlEJA',
  projectId: 'meu-starter',
  messagingSenderId: '581248963506',
  appId: '1:581248963506:web:9f09b416b6fbf3a8ee4aab',
});

const messaging = firebase.messaging();

// This step is only mentioned in this guide: https://firebase.google.com/docs/cloud-messaging/js/client#configure_web_credentials_with_fcm
// Don't know if it's actually needed
// Add the public key generated from the console here.
// messaging.usePublicVapidKey('BFZSr4pR-YFsTxygWUf4HlNlzDtn-eIQJmJZVQce01Ilm9b0ajcKvn1wczReayNdUfBPYcrI7oOwGEga-h4EFcA');