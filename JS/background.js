const images = [
    "pexels-francesco-ungaro-1525041.jpg",
    "pexels-francesco-ungaro-2835436.jpg",
    "pexels-john-cahil-rom-2170473.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // createElement()는 html tag를 만든다 만들고자 하는 tag의 이름을 괄호안에 문자열 방식으로 입력하면 된다.

bgImage.src = `img/${chosenImage}`; // 위에서 만든 tag에 src를 넣는다.

document.body.appendChild(bgImage); //JS에서 만든 html tag를 html의 <body>로 보낸다.
