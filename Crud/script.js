const tasks = []


const add = document.getElementById("add");
const del = document.getElementById("delete");


let counter = 0;

function ListTasks(){

    for(counter; counter < tasks.length; counter++){
        const list = document.createElement("li");
        list.innerHTML = tasks[counter];
        document.getElementById("output").append(list);

        list.addEventListener("click", ()=>{
            list.style.textDecoration = "line-through";
         
        })

        list.addEventListener("contextmenu", (e)=>{
            e.preventDefault()
            list.style.textDecoration = "none";
         
        })

        list.ondblclick = ()=>{
            list.remove();
        }
    }
}

ListTasks()

document.addEventListener("DOMContentLoaded", ()=>{

    document.querySelector("form").onsubmit = (e)=>{
        e.preventDefault();

        const text = document.getElementById("text").value;    
        
        if(text){
            if(text.length<3){
                alert("Submit a valid task");
            }

           else{
                const list = document.createElement("li");   
                tasks.push(text);
                ListTasks()
                document.getElementById("text").value='';


           } 
        }
             

    }

});


function update(){

}

