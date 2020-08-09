const date = document.getElementById("date");
const list = document.getElementById("list");
const todo= document.getElementById("todo");

const options = {weekday:"long" , day:"numeric" , month:"long" , year:"numeric"}
const today = new Date();
date.innerHTML = today.toLocaleDateString("en-US" ,options);//English (United States)

//these const takes values of font awesome icons
const CHECK = "fa-check-square";
const UNCHECK = "fa-square-o";
const LINE_THROUGH ="lineThrough";
const EDIT ="fa-pencil-square-o";

function addToDo(toDo){
   const item  =  `<p class="item">
                        <span class="fa fa-square-o complete" job="complete" id ="${id}"></span>
                        <i class="text ${LINE}">${toDo}</i> 
                        <span class = " fa fa-pencil-square-o" job="replace" id="${id}"></span>
                        <span class= "fa fa-trash-o delete" job="delete" id="${id}"></span>
                    </p>
                    `;
    const position = "afterend";//item should be placed before the end of the element
    list.insertAdjacentHTML(position,item);//add new items into the list and keep all nodes
}




