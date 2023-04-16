const regExP = /(?=.*[a-zA-Z])(?=.*[0-9])/;
const regExS = /[<>{}()[\]]/;
const regExN = /^[A-z0-9-_]*$/;

export function checkUsersInput(username, password) {

    if (username.length > 20) return "The maximum length of the username is 20 characters";

    if (username.length < 3) return "The miminum length of the username is 3 characters";

    if(!regExN.test(username)) return "Username must not contain spaces or special characters";
  
    if (password.length > 20) return "The maximum password length is 20 characters";

    if (password.length < 6) return "The minimum password length is 6 characters";

    if(!regExP.test(password)) return "The password must contain at least 1 character and 1 number";

    if(regExS.test(password)) return "Prohibited characters in the password are: <>{}[]()";

    return "";

}; 