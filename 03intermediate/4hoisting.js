function tipper(a) {
    console.log(a+5);
}

tipper(4);

bigTipper("200");       //This would work
// bigTipper2("200");      //This won't work


function bigTipper(a) {
    console.log(parseInt(a)+25);
}


var bigTipper2 = function(a) {
    console.log(parseInt(a)+25);
}


bigTipper2("200");


console.log(nam);
var nam = "Shrey";