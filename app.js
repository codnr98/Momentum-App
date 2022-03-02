// HTML을 JS에 블러들일떄는 documet.querySelector()사용해서 변수에 넣어 사용한다.
const logninForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event) { //function의 argument에 아무것도 입력하지 않으면 어떤 정보도 받지 않겠다는 뜻 
    event.preventDefault(); // 누군가 form을 submit하면 브라우저는 기본동작(페이지를 새로고침) 하도록 되어있다. preventDefault()을 추가하면서 그 기본동작을 막고있다.
    const username = loginInput.value;
    logninForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username}`; //innerText는 변수라서 =을 사용
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

logninForm.addEventListener("submit", onLoginSubmit);
// loginFormd의 submit event를 감지함
// addEventListener()에서 function을 호출할때 function의 첫ß번째argument에 추가적인 정보를 가진 채로 호출한다.




// preventDefault() 을 추가함으로써 그 기본동작을 막고있다. 그리고 이건 Eventlistener 함수의 첫 번째 argument안에 있는 function이다     preventDefault()은 eventlistener함수의 첫번째 argument안에 있는 function이다
// eventlistener에 어떤 function을 추가하던 간에 JS는 첫번째 argument로 발생한 event에 대한 정보를 줄꺼다.