var input = document.querySelector("input[type='text']");
var ul = document.querySelector("ul");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var pencil = document.querySelector("#pencil");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var lists = document.querySelectorAll("li");
var tipsBtn = document.querySelector(".tipBtn");
var closeBtn = document.querySelector(".closebtn");
var overlay = document.getElementById("overlay");

// Delete todo if delete span clicked
function deleteTodos() {
    for(let span of spans) {
        span.addEventListener("click", function() {
            console.log(span.parentElement);
            span.parentElement.remove();
        });
    }
}

function loadTodo() {
    console.log(localStorage.getItem("todoList"));
    if (localStorage.getItem("todoList")) {
        ul.innerHTML = localStorage.getItem("todoList");
    }
}

// Add todo element to todo list
input.addEventListener("keypress", function(key) {
    if (key.which === 13) {
        var li = document.createElement("li");
        var spanElement = document.createElement("span");
        var icon = document.createElement("i");

        var newTodo = this.value;
        this.value = "";

        icon.classList.add("fas", "fa-trash-alt");
        console.log(icon.classList);
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTodo);

        deleteTodos();
    }
});

pencil.addEventListener("click", function() {
    input.classList.toggle("display");
});

ul.addEventListener("click", function(e) {
    if (e.target.tagName === "LI");
    e.target.classList.toggle("checked");
});

tipsBtn.addEventListener("click", function() {
    overlay.style.height = "100%";
});

closeBtn.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.style.height = "0";
});

// Clear all todos on click Clear button
clearBtn.addEventListener("click", function() {
    ul.innerHTML = "";
});

saveBtn.addEventListener("click", function() {
    localStorage.setItem("todoList", ul.innerHTML);
    console.log(localStorage);
});

loadTodo();

deleteTodos();