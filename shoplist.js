var buttton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var deleteBtn = document.getElementsByClassName("delete");
var clearBtn = document.getElementById("clear");


function done(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}


for(i = 0;i < deleteBtn.length; i++){
    deleteBtn[i].addEventListener("click", removeParent);
}


function removeParent(event){
    event.target.removeEventListener("click", removeParent);
    console.log(event.target);
    event.target.parentNode.remove();
}

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var newListDiv = document.createElement("div");
    newListDiv.classList.add("listItems");

   
    var btn = document.createElement("button");
        btn.classList.add("delete");
        btn.append("Delete");
        

    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        li.innerHTML = li.innerHTML + " ";
    
        newListDiv.appendChild(li);
        newListDiv.appendChild(btn);

        ul.appendChild(newListDiv);
        input.value = "";
        removeNewItem();
}

function addListAfterClick(){
        if(inputLength() > 0){
            createListElement();
        } 
    }

function addListAfterKeypress(e){
    if (inputLength() > 0 && e.keyCode === 13) {
            createListElement();
        } 
    }


function removeNewItem(){
    for (var i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener("click", removeParent);
    }
}

function clear(){
    ul.innerHTML = "";
}

buttton.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)

ul.addEventListener("click", done)

clearBtn.addEventListener("click", clear)


