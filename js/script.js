// Copyright (c) 2023 Skelton All rights reserved
//
// Created by: Remy Skelton
// Created on: April 2023
// This file contains the JS functions for index.html
"use strict";

function enterClicked () {
  // create a variable for the price of ticket for if statment text
  let result = "";

  // Use age and day user has entered for results
  let day = document.getElementById('day').value;
  let age = parseInt(document.getElementById('age').value);
  
  //Statement to display if user can get in for free
  if (age <= 5 || age >= 95)  {
    result = "The age you have given means that you will be able to enter for free."
  }
    
  //Statement to display if user can get in for the student fee
  else if (day == "Tuesday" || day == "Thurday" ||  age >= 12 && age <= 21) {
  result = "The age you have given means that you will have to pay the student discounted fee."
  }
    
  //Statement for the full price to enter
  else if  (age >=0 && age <=120)  {
    result = "The age you have given means that you will have to pay the full price to enter."
  }
    //Statement if the user does not enter a age
  else {
    result = "Please enter valid age"
  }
  
  // Display Results back to User
  document.getElementById("result").innerHTML = result
}
