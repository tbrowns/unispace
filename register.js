var auth = firebase.auth();
var database = firebase.database();
function popo()  {
   const signUpForm = document.querySelector('form');
   signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
   });
    var email = document.getElementById("email").value;
    var nam = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var uid = userCredential.user.uid; 
        var currentUser = auth.currentUser;
        database.ref(`users/${uid}`).set({
            email: email,
            uid:uid,
            password:password,
            name:nam,
            createdAt: new Date().toISOString()
          });
          Swal.fire({
            title: "Great!",
            text: "User created successfully.You can now log in",
            icon: "success",
          });
            var urll = "index.html?id=";
            window.location.href = urll;
            signUpForm.reset();

    })
    .catch((error) => {
        // Handle errors
        console.error('Error signing up: ', error.message);
        Swal.fire({
          title: "Failed",
          text: "Problem creating user.  " + error.message,
          icon: "fail",
          
        });
      })
}

  