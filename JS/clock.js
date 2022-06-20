const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); // padStart()는 string을 상대로만 적용된다. 그래서 String을 사용해서 getHours를 string으로 변환시켜준다.
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

getClock(); // setInterval만 있으면 웹페이지가 새로고침될때 1초정도 딜레이가 생기는데 그걸 방지하기 위해서
// 페이지 세로고침이 되자마자 시간을 표시할 수 있도록 getClock function을 바로 실행시켜준다.
setInterval(getClock, 1000);
// setInterval(sayHello, 5000); setInterval은 설정시간 간격으로 설정한 function이 실행된다.

// setTimeout(sayHello, 5000); setTimeout은 설정시간이 다 되면 설정한 function이 한번 실행된다.

// "1".padStart(2, "0"); "1"의 문자열 길이를 2로 정하고 해당문자열의 길이가 2가 아닐경우 해당문자열의 앞에 "0"를 붙여준다.
