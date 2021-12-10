
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCguAt7PAAMIztYdN4rdI7tYY0X-tHykMs",
      authDomain: "let-s-chat-74b4a.firebaseapp.com",
      databaseURL: "https://let-s-chat-74b4a-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-74b4a",
      storageBucket: "let-s-chat-74b4a.appspot.com",
      messagingSenderId: "626088132020",
      appId: "1:626088132020:web:47a1fa1ba34548881dc6e1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
