const date = document.getElementById("date");
const list = document.getElementById("list");
const todo= document.getElementById("todo");

const options = {weekday:"long" , day:"numeric" , month:"long" , year:"numeric"}
const today = new Date();
date.innerHTML = today.toLocaleDateString("en-US" ,options);//English (United States)

const CHECK = "fa-check-square";
const UNCHECK = "fa-square-o";
const LINE_THROUGH ="lineThrough";
const EDIT ="fa-pencil-square-o";