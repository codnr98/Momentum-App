const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos)); //localStorage에 toDos array추가      JSON.stringify()를 사용하면 localstorage에 문자열형태로 저장해준다.
}

function deleteToDo(event) {
  const li = event.target.parentElement; //click한 버튼의 event정보에서 target.parentElement를 li함수에 입력
  li.remove(); //해당 li 삭제
  toDos = toDos.filter((item) => item.id !== +li.id);
  //filter를 사용해서 지운 li와 id가 같은 item은 제외하고 나머지 item을 toDos array에 재입력한다.
  saveToDos(); // saveToDos function을 사용해서 localstorage에 다시 저장한다.
}

function paintToDo(newToDo) {
  const li = document.createElement("li"); // li Element를 만들어준다
  li.id = newToDo.id; //li tag에 id 할당
  const span = document.createElement("span"); // span Element를 만들어준다.
  span.innerText = newToDo.text; //span에 innerText로 newToDo에 담긴 text를 넣는다.
  const button = document.createElement("button"); // button를 만들고
  button.innerText = "❌"; // button안에 x이모지 삽입
  button.addEventListener("click", deleteToDo); // x버튼 click을 감지하면 deleteToDo실행
  // append는 마지막에 정리
  li.appendChild(span); // li에 appendChild를 사용해서 span을 마지막 자식으로 붙인다.
  li.appendChild(button); // li에 button을 마지막 자식으로 붙인다.
  toDoList.appendChild(li); //toDolist에 li를 마지막 자식으로 붙인다.
}

function handleToDoSubmit(evnet) {
  evnet.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = ""; //Enter를 치면 toDoInput에 text를 지워준다.
  const newToDoOj = {
    text: newToDo,
    id: Date.now(), //Date.now()는 밀리초(1000분의 1초)를 주는 함수이다. 이함수로 랜덤한 id를 object에 준다.
  };
  toDos.push(newToDoOj);
  paintToDo(newToDoOj); //paintToDo함수에 newToDoOj를 넣어서 실행시킨다.
  saveToDos(); //saveToDos 실행
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos", toDos); //localStorage에서 getItem으로 가져온 toDos를 변수 savedToDo에 입력

if (savedToDos) {
  // savedToDos에 값이 있으면 true로 나오는듯
  const parsedToDo = JSON.parse(savedToDos); //JSON.parse()를 사용해서 일반적인 string type의 savedToDos를 object type로 바꿔서 parsedToDo에 입력해준다.

  toDos = parsedToDo; // savedToDos에 값이 있으면 toDos Array에 parsedToDo값을 넣어줌
  parsedToDo.forEach(paintToDo);
} //forEach함수를 사용했을때 인수에 array의 각 item들이 한번씩 들어간다.

//array이라서 forEach 라는걸 갖고있어
//그리고 forEach는 내가 말한 것처럼,function을 실행시켜주는데 그 array에 있는 각각의 Item에 대해서 실행해줌
