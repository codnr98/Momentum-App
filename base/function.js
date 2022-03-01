 //function은 계속 반복해서 사용할 수 있는 코드 조각이라고 생각하자
//return은 function에서 값을 반환시켜줌과 동시에 실행하는 즉시 해당function을 빠져나간다.
function sayHello() {
    return "Hello!";
}

const message =sayHello();
console.log(message);


function plus(a, b) {
    return a + b;
}

console.log(plus(1, 2));




//Function을 Object에 넣어서 활용할 수 있다.


const calculator = {
    plus:function(a, b) {
        console.log(a + b);
    },
    minus:function(a, b) {
        console.log(a - b);
    },
    divide:function(a, b) {
        console.log(a / b);
    },
    powerOf:function(a,b) {
        console.log(a**b);
    },
}


calculator.plus(1,2);
calculator.minus(1,2);
calculator.divide(1,2);
calculator.powerOf(1,2);
