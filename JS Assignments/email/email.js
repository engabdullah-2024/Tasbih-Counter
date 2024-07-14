
// let email =      prompt("Enter Your Email")
// let password = prompt ("Enter Your Password")



// if(email =   abdullah) {
//     document.write("welocme", email)
// }

// if(password = 123){
//     document.write("Correct" , password)
// }
// else( document.write("Validation" , email && password)
    
// )


// / Define the correct email and password
const correctEmail = "abdullah@gmail.com";
const correctPassword = "123";

// Prompt the user for email and password
const email = prompt("Enter abdullah@gmail.com:");
const password = prompt("Enter 123:");

// Check if the entered email and password are correct
if (email === correctEmail && password === correctPassword) {
  alert("Welcome");
} else {
  alert("Invalid");
}
