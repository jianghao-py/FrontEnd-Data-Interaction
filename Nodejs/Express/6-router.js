const express = require("express");

const router = express.Router();



router.get("/",(request,response)=>{
    response.send("主页");
});

router.get("/info",(request,response)=>{
    response.send("信息页");
});

module.exports = router;