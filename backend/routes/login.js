const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const login = require('../models/login_model');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

router.post('/', 
  function(request, response) {
    if(request.body.username && request.body.password){
      const username = request.body.username;
      const password = request.body.password;
     // dotenv.config();
     // console.log(process.env.TOKEN)
        login.checkPassword(username, function(dbError, dbResult) {
          if(dbError){
            response.json(dbError.errno);
          }
          else{
            if (dbResult.length > 0) {
              bcrypt.compare(password,dbResult[0].password, function(err,compareResult) {
                if(compareResult) {
                  console.log("succes");
                  //response.send(true);
                  const token = generateAccessToken({username:username})
                  response.send(token); 
                }
                else {
                    console.log("wrong password");
                    response.send("wrong password");
                }			
              }
              );
            }
            else{
              console.log("user does not exists");
              response.send("user does not exists");
            }
          }
          }
        );
      }
    else{
      console.log("username or password missing");
      response.send("username or password missing");
    }
  }
);

function generateAccessToken(username)
{
    dotenv.config();
    return jwt.sign(username, process.env.TOKEN, { expiresIn: '1800s' });
} 

module.exports=router;