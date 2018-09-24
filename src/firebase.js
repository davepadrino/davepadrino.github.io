import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDBFvgaxW9VhoWiL8tX7LUrXWLuStcIqss",
    authDomain: "dave-portfolio.firebaseapp.com",
    databaseURL: "https://dave-portfolio.firebaseio.com",
    projectId: "dave-portfolio",
    storageBucket: "dave-portfolio.appspot.com",
    messagingSenderId: "441508751758"
  };

firebase.initializeApp(config);

export default firebase;