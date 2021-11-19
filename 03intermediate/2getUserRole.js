function getUserRole(name,role) {
    switch (role) {
        case "admin":
            return `Name of admin is ${name},with full access`;
            break;
        
        case "subAdmin":
            return `Name of sub-admin is ${name},with limited access`;
            break;
        
        case "testprep":
            return `Name of testprep is ${name},with no access`;
            break;
        
        default:
            return `${name} is an invalid user`
            break;
    }
}

var userName = "Shrey";
var role = "testprep";

var getRole = getUserRole(userName,role);

console.log(getRole);