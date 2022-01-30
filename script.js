var inp = document.getElementById("inp-box")
var todoType = document.getElementById("todo-type")
var addBtn = document.getElementById("addBtn")
var todo_id = document.getElementById("todo-ID")
var deleteBtn = document.getElementById("deleteBtn")
var works = document.getElementById("works")
var table = document.getElementById("table")




var sr = []
var todo = []
var type = []

var srno = 1



function showAdd(){
    addBtn.style.display = "block"
}

function addWork() {
    console.log("AddWOrk")
    inpVal = inp.value;
    typeVal = todoType.value;

    sr.push(srno)
    todo.push(inpVal)
    type.push(typeVal)

    todo_id.style.display = "block"
    deleteBtn.style.display = "block"
    table.style.display = "inline-block"
    renderTodo()
    
    srno += 1

}

function renderTodo(){

    table.innerHTML = " "

    console.log("Render");
    console.log(sr.length);


    for( i=0;i<sr.length;i++){

        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")

        td1.innerHTML = i+1
        td2.innerHTML = todo[i]
        td3.innerHTML = type[i]
        var completeBtn = document.createElement("button")
         completeBtn.innerHTML = "Completed"
         completeBtn.setAttribute('class','btn btn-success completebtn')
         completeBtn.onclick = () =>{
         tr.style.textDecoration = "line-through"
         tr.style.color = "red"
        }
        let deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.setAttribute('class','btn btn-danger deletebtn')
         deleteBtn.onclick = () =>{
        tr.style.display = "none"
        }
        td4.append(completeBtn)
        td4.append(deleteBtn)
    
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)
        table.append(tr)
    }
    
}

function delById() {
    
    let todoIdVal = todo_id.value
    if (todoIdVal.length == 0){
        alert("!!! Enter ID !!!")
    }
    else{
        let idVal = (+todoIdVal) - 1

        sr.splice(idVal,1)
        todo.splice(idVal,1)
        type.splice(idVal,1)
        renderTodo()
    }
   
}
