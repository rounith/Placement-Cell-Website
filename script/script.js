function showLoginForm() {
    // Code to show the login form or perform any other action
    // Replace the console.log statement with your own logic

    // Example: Showing a modal login form using Bootstrap's Modal component
    var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
}
function showRegisterForm() {
  // Code to show the login form or perform any other action
  // Replace the console.log statement with your own logic

  // Example: Showing a modal login form using Bootstrap's Modal component
  var registerModal = new bootstrap.Modal(document.getElementById('registrationModal'));
  registerModal.show();
}

const firebaseConfig = {
    apiKey: "AIzaSyDJHVSj4aFa58MSQkMdL8mS1JbGW7WlsbA",
    authDomain: "placementcell-a7487.firebaseapp.com",
    databaseURL: "https://placementcell-a7487-default-rtdb.firebaseio.com",
    projectId: "placementcell-a7487",
    storageBucket: "placementcell-a7487.appspot.com",
    messagingSenderId: "628232835031",
    appId: "1:628232835031:web:11e652cc35a384978d0592",
    measurementId: "G-Z4FG1MJDTM",
  };
  firebase.initializeApp(firebaseConfig);

  function savedetails() {
    var messagesRef = firebase.database().ref("/registrations");
    const user_name = document.getElementById("name").value;
    const rollnumber = document.getElementById("rollnumber").value;
    const year = document.getElementById("year").value;
    const email = document.getElementById("email").value;
    const phonenumber = document.getElementById("phonenumber").value;
    const password = document.getElementById("password").value;
    if(password.length<8){
      alert("Password more than 6 characters");
      return;
    }
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      username: user_name,
      rollnumber: rollnumber,
      year: year,
      email: email,
      password: password,
      phonenumber: phonenumber
    });
    alert("Registration Successful");
    // Create user in Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        // User creation successful
        console.log("User created:", userCredential.user);
        // You can perform additional actions here, such as redirecting to another page
      })
      .catch(function(error) {
        // User creation failed
        console.log("Error creating user:", error);
      });
  }

  function login() {
    // Get all our input fields
    email = document.getElementById('username').value
    password = document.getElementById('passwordLogin').value
  
    /* Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }*/
  
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      document.getElementById("account-btn").innerHTML = "<a class='nav-link'><i class='fas fa-user'></i></a>";
      alert("Login Successful", userCredential.email);
      // You can perform additional actions here, such as redirecting to another page
    })
    .catch(function(error) {
      // User creation failed
      console.log("Error creating user:", error);
    });
  }
  
