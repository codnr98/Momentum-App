//Return
const age = 50;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
    //함수안에서 return가 실행되면 그함수는 종료된다.
}

const krAge = calculateKrAge(age);

console.log(krAge);

function sayWhat(messege) {
    prompt(messege)
}