var email = true;
var facebook = false;
var google = false;

if(email || facebook || google) {
    console.log("User logged in succesfully");
}
else {
    console.log("Awaiting authorisation");
}