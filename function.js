//~ Creating To-do list  [ ✔ Git hub] 
// ^ step 1
//  adding new things   ✔❤
//  add in a list ✔❤
//  add in the group of list✔❤
//  empty the input box✔❤

// ^ step 2 
// delete btn  ✔❤
// strikeout btn ✔❤

var input = document.getElementById('input-todo');
var enterbtn = document.getElementById('btn');
var ul = document.querySelector("ul");

//& insert new list element
function addnewelement() {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li)
    removebtn(li);
}

function removebtn(li) {
    var button = document.createElement('button');
    button.textContent = 'remove';
    button.addEventListener('click', function () {
        li.remove();
    });
    li.appendChild(button);
}

function inputlength() {
    return input.value.length
}

function mouseinput() {
    if (inputlength() > 0) {
        addnewelement();
        input.value = "";
    }
}
function keyinput(event) {
    if (inputlength() > 0 && event.key === "Enter") {
        addnewelement();
        input.value = ""
    }
}

enterbtn.addEventListener("click", mouseinput);
input.addEventListener("keydown", keyinput);

//? delete button 

var deletebtn = document.getElementById("deletebtn");
var li = document.querySelectorAll("li");

deletebtn.addEventListener("click", function deleted() {
    ul.lastChild.remove(li)
})

//~  strike out 

var strikeout = document.getElementsByClassName("strike")[0];

strikeout.addEventListener('click', strike)

function strike() {
    ul.classList.toggle('done');
}

//^ strike out each element
    li.forEach(function (li) {
        li.addEventListener("click", function () {
            li.classList.toggle('done');
        })
    })

//* delete the specific list items

// function removebtn() {
//     var btn = document.createElement('button')
//     ul.appendChild(document.createTextNode('delete'));
//     addnewelement.appendChild(btn);
// }





