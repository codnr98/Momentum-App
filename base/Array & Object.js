//Array
const dayOfWeek = [
    'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun',
];
//Get item to array
console.log(dayOfWeek[1]);
//Edit item to array
dayOfWeek[0] = "hi";
console.log(dayOfWeek[0]);
//Add item to array
dayOfWeek.push('bye');
console.log(dayOfWeek);


//Object
const userInformation = {
    name: 'codnr',
    age: 25,
    points: 2000,
}

console.log(userInformation.name);
//EDIT 
userInformation.age = 17;
//ADD
userInformation.sex = 'male';