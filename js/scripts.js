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


let LIST,id;

function addToDo(toDo,id,done,edit,trash){
    if(edit){return;
    }else if (trash){return; }//if false no return and if true,no code runs since the list is empty

    const DONE = done ? CHECK : UNCHECK;// if done is set to true,use the const CHECK value and if false,use UNCHECK value
    const LINE = done ? LINE_THROUGH: "";//if done is true,put through line and if false ""
    const item  =  `<p class="item">
                        <span class="fa fa-square-o complete" job="complete" id ="${id}"></span>
                        <i class="text ${LINE}">${toDo}</i> 
                        <span class = " fa fa-pencil-square-o" job="replace" id="${id}"></span>
                        <span class= "fa fa-trash-o delete" job="delete" id="${id}"></span>
                    </p>
                    `;
    const position = "beforeend";//tells postion of item in the element
    list.insertAdjacentHTML(position,item);//to add new items to the list
}

document.addEventListener("keyup",function(event){//whenever user presses the key the function will be executed
    if(event.keyCode ==13){//key code for enter
        const toDo = todo.value;

        //if the todo is not empty the function addToDo is called 
        if(toDo){
            addToDo(toDo,id,false,false,false);  
            
            LIST.push({// it will push the new object to the list
                name: toDo,
                id:id,
                done:false,//not yet complete
                trash:false,  //item has not been removed   
                edit:false,//item not editted
            });
        }
        todo.value ="";//make todo empty
    }
});
//create  a function completeToDo
function completeToDo(element){//runs when user clicks the buttons 
    element.classlist.toggle(CHECK);//if check is in classlist  remove and add uncheck to the classlist
    element.classlist.toggle(UNCHECK);//if uncheck is in classlist remove and add check
    element.parentNode.querySelector(".text").classlist.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id].done ? false :true;
}
// create a function replaceToDo
/*
function replaceToDo(element){
    element.parentNode.querySelector(".text").classList.toggle(EDIT);
    LIST[element.id].edit = true; 
}*/

//create a function removeToDo
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);//removes the child from the node
    LIST[element.id].trash = true;
}
list.addEventListener("click",function(event){
    const element = event.target;//return clicked element eg if you hit delete button it will remove the object from  the list
    const elementJob = element.attributes.job.value;

    if (elementJob == "complete"){
        completeToDo(element);
    }else if (elementJob == "replace"){
        editToDo(element);
    }else if(elementJob =="delete"){
        removeToDo(element);
    }
});

// save to do list to local storage
let data = localStorage.getItem("TODO");




