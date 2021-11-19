// undefined
// null 
// 0
// ''
// NaN

var user = "null";

if(user) {
    console.log("Value is defined");
}



var l1 = "2";

// JS is assuming both the 2's similar(string) thats why this condition holds true
if(l1 == 2) {
    console.log("True");
}

// === Performs strict checking between the variables and doesn't assume anything on its own
if(l1 === 2) {
    console.log("True");
}
