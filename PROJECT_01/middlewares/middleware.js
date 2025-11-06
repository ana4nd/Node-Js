

function logReqRes (req,res,next){
    console.log("Hello from middleware");
    next();
}

export default logReqRes;
