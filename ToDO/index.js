let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var postit = document.createElement('div');
    postit.classList.add('postit' , "m", "l");
    var paragraph = document.createElement("p")
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    postit.appendChild(paragraph)
    toDoContainer.appendChild(postit);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    postit.addEventListener('dblclick', function(){
        toDoContainer.removeChild(postit);
    })
})