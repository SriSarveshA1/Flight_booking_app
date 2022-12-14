

const authController =require("../controllers/auth.controller");
const {signupValidator}=require("../middlewares/index");

module.exports=(app)=>{

    app.post("/flightBooker/api/v1/auth/signup",[signupValidator.validateSignUpRequest],authController.signup);
    app.post("/flightBooker/api/v1/auth/signin",[signupValidator.validateSignInRequest],authController.signin);
}