const title = document.querySelector(".hello")
//querySelector로 code를 찾을때 해당코드가 똑같은 형태로 여러개있을 경우 가장 첮번째 코들 가져온다.  

function handleTitleClick() {
    const currentColor = title.style.color; //function이 시작되면 const currentColor가 할당되고 값은 title.style.color가 할당된다.
    let newColor; //let newColor라는 빈 함수 할당
    if(currentColor === "blue") { //currentColor의 condiction을 확인
        newColor = "tomato"; //currentColor가 blue일경우 let newColor 변수에 tomato를 할당
    } else {
        newColor = "blue"; //currentColor가 blue가 아닐경우 let newColor 변수에 blue를 할당한다.
    }
    title.style.color = newColor; //let newColor에 할당된 값을 title.style.color에 할당해주면서 function을 종료한다.
}

function handleMouseEnter() {
    title.innerText ="Mouse is here!"
}
function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert("copier!");
}
function handleWindowOffline() {
    alert("SOS no WIFI");
}
function handleWindowOnline() {
    alert("ALL GOOOD!");
}



//addEventListener()은 event와 event가 실행됐을때 호출할 function을 작성해준다.
title.addEventListener("click", handleTitleClick);
//click은 마우스가 해당 태그를 click하는 event이다. 위 두개의 코드는 같은 의미이다.
title.addEventListener("mouseenter",  handleMouseEnter);
//mouseenter은 마우스가 해당태그위에 올라가있는 event이다.
title.addEventListener("mouseleave", handleMouseLeave);
//mouseleave는 마우스가 해당태그를 벗어나는 event이다.
window.addEventListener("resize", handleWindowResize);

window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);

window.addEventListener("online", handleWindowOnline);

