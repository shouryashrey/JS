// Types of Users
// admin
// subAdmin
// testprep

var user = "subAdmin";

switch (user) {
    case "admin": {
        console.log("Admin Rights enabled : Can access everything");
        break;
    }
    case "subAdmin" : {
        console.log("Sub-Admin Rights enabled : Limited Access");
        break;
    }
    case "testprep" : {
        console.log("Testprep Rights enabled : No Access");
        break;
    }

    default: {
        console.log("Invalid User");
        break;
    }
}