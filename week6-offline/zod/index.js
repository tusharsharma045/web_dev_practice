const jwt = require("jsonwebtoken");

const jwtPassword = "HARKIRATSINGHBASSI";

const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(8).max(20);


function signjwt(username, password) {
    const usernameValidation = emailSchema.safeParse(username);
    const passwordValidation = passwordSchema.safeParse(password);

    if (!usernameValidation.success) {
       return null;
    }

    const signature = jwt.sign({ username }, jwtPassword)
    return signature;
}

function verifyjwt(token) {
    const verifiedData = jwt.verify(token, "secret");

    if (!verifiedData) {
        return true;
    }   
    else {
        return false;
    }
};
    const ans = verifyjwt(token);
    console.log(ans);

function decodejwt(token) {
    const decodedData = jwt.decode(token);


    if (!decodedData) {
        return true;
    }
    else {
        return false;
    }   
};

const ans2 = decodejwt(token);
console.log(ans2);