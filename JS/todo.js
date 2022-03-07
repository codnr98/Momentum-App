const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list")

function paintToDo(newToDo) {
    const li = document.createElement("li"); // li Element를 만들어준다
    const span = document.createElement("span");// span Element를 만들어준다.
    li.appendChild(span); // li에 appendChild를 사용해서 span을 마지막 자식으로 붙인다.
    span.innerText = newToDo; //span에 innerText로 newToDo에 담긴 text를 넣는다.
    toDoList.appendChild(li);//toDolist에 li를 마지막 자식으로 붙인다.
}

function handleToDoSubmit(evnet) {
    evnet.preventDefault();
    const newToDo = toDoInput.value
    toDoInput.value = ""; //Enter를 치면 toDoInput에 text를 지워준다.
    paintToDo(newToDo); //paintToDo함수에 newToDo를 넣어서 실행시킨다.
}

toDoForm.addEventListener("submit", handleToDoSubmit);
