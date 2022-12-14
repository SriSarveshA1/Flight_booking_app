
const airLineController=require("../controllers/airLine.controller");
const {airLineValidator,authValidator}=require("../middlewares/index");
module.exports=(app) => {
    

    /*
     Middlewares
       1.So when ever someone wants to create a airline the name should be unique and not be used by any others after creation.(create a middleware for that)
       2.Only logged in users should be allowed to access these routes.
       3.Implementing the middleware that allowes only admin to access certain routes.
    */


    //This route will help us to create the airLine (Only ADMIN should be able to access this route)
    app.post("/flightBooker/api/v1/airLine/",[authValidator.tokenValidator,authValidator.isAdmin,airLineValidator.validateAirLineRequest],airLineController.createAirline);

    //This route will help us to delete the airline (the particular airLine that we want to delete) (Only ADMIN should be able to access this route)
    app.delete("/flightBooker/api/v1/airLine/:id",[authValidator.tokenValidator,authValidator.isAdmin],airLineController.destroyAirLine);

    //This route will help us to get the particular airLine that we want to get 
    app.get("/flightBooker/api/v1/airLine/:id",[authValidator.tokenValidator],airLineController.getAirLine);

    //This route will help us to get the all the airlines details that are available
    app.get("/flightBooker/api/v1/airLine/",[authValidator.tokenValidator],airLineController.getAllAirLines);

    //This route will help us to update the airline details that are available (Only ADMIN should be able to access this route)
    app.put("/flightBooker/api/v1/airLine/:id",[authValidator.tokenValidator,authValidator.isAdmin],airLineController.updateAirLine);


}