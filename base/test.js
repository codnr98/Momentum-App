const age = parseInt(prompt("How old are you?"));


if(isNaN(age) || age < 0) {
    console.log("please write a real positive number");
} else if(age < 20) {
    console.log("you are too young.");
} else if(age <= 20 && age <= 50) {
    console.log("you can drink");
} else {
    console.log("you can't drink");
}

// ||은 or이고 양쪽의 값이 어느 하나라도 true가 나오면 true를 출력한다.
// &&은 and이고 양쪽의 값이 둘다 true가 나와야 true를 출력하고 하나라도 false가 나오면 false를 출력한다.