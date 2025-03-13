let email = window.prompt (`what is your email`)

function isValidEmail (email) {
if (email.includes(`@`)){
return `valid email!`
}
else {
return `liar!`
}


}
console.log (isValidEmail(email))