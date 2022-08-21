const firebaseConfig = {
    apiKey: "AIzaSyAu8PJ5xSE0oNAHy1ZeJFu1UOHWrw4rfGk",
    authDomain: "kwitterreamake.firebaseapp.com",
    databaseURL: "https://kwitterreamake-default-rtdb.firebaseio.com",
    projectId: "kwitterreamake",
    storageBucket: "kwitterreamake.appspot.com",
    messagingSenderId: "801733515016",
    appId: "1:801733515016:web:47b054192bac600a277ebd",
    measurementId: "G-QG4NVL4WNY"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addRoom()
{
      room_name = document.getElementById("room_name").vlaue;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Names" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick=redirectToRoomName(this.id)# >" + room_name + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName()
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}