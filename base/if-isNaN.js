const age = parseInt(prompt("How old are you?"));
//if( 1condition ) {
//     1condition is true
// } *1condition is false * ==> else if ( 2condition ){
//     2condition is true
// } else {
//    2condition is false
//}


if(isNaN(age)) {
    console.log("please write a number");
} else if(age < 20) {
    console.log("you are too young.");
} else {
    console.log("welcom!");
}
//isNaN은 괄호안의 코드가 NaN이면 true를 아니면 false를 출력한다.
