var auth = firebase.auth();

function popo(){
const signUpForm = document.querySelector('form');
signUpForm.addEventListener('submit', (e) => {
 e.preventDefault();
});

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Log in user with email and password
     auth.signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      var user = userCredential.user;
      
     
      console.log('User logged in:', user.uid);
      var currentUser = auth.currentUser;
      if(currentUser.emailVerified){
      Swal.fire({
        title: "Great!",
        text: "Login success.",
        icon: "success",
        
      });
      var urll = "dashboard.html?id=" + currentUser.uid;
      window.location.href = urll;
      signUpForm.reset();
    }  else{

        
      user.sendEmailVerification();
       Swal.fire({
        title: "Verification",
        text: "Login failed.A verification email has been sent check your inbox.",
        icon: "failed",
        
      });
      
      }
    
    })

    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error('Login error:', errorCode, errorMessage);
      // Display error message to the user
      Swal.fire({
        title: "Failed!",
        text: "Login Fail. " + error.message,
        icon: "fail",
        
      });
    });
}