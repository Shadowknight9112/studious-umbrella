//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDyyotATQ8gdy2aX_jCNtKgE01r2ugniXI",
    authDomain: "kwitter-76722.firebaseapp.com",
    databaseURL: "https://kwitter-76722-default-rtdb.firebaseio.com",
    projectId: "kwitter-76722",
    storageBucket: "kwitter-76722.appspot.com",
    messagingSenderId: "176128323647",
    appId: "1:176128323647:web:12506b0e0ce196c4c9c88a"
  };

firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username + "!";

function addroom() {
    roomname = document.getElementById("room").value;
    
    firebase.database().ref("/").child(roomname).update({
          purpose : "adding room name"
    });

    localStorage.setItem("roomname", roomname);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("room name - "+ roomname);
                row = "<div class='roomname' id="+ roomname + " onclick='redirect(this.id)"+ roomname + "</div><hr>"
                document.getElementById("output").innerHTML += row;
                //End code
          });
    });
}
getData();

function redirect(name)
{
    console.log(name);
    localStorage.setItem("roomname", name);
    window.location = "kwitter_page.html"
}