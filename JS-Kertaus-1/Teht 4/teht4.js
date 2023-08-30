"use strict"

const score = prompt("Enter your score");

let grade;

if (score => 0 && score <= 100){
  if(0 <= score && score <= 39){
    grade = "0";
    }else if(40 <= score && score <= 51){
    grade = "1";
    }else if(52 <= score && score <= 63){
    grade = "2";
    }else if(64 <= score && score <= 75){
    grade = "3";
    }else if(76 <= score && score <= 87){
    grade = "4";
    }else if(88 <= score && score <= 100){
    grade = "5";
    }else grade = "wrong number";
}

//print in HTML
document.getElementById("vastaus").innerHTML = `Your score is ${score} and given grade is ${grade}`
