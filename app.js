const player = {
    name: "codnr",
    points: 250000,
    fat: false,
}

//객체의 구성요소를 수정하거나 더할 수 있다.
player.lastName = "lee";
player.points = player.points + 5;


console.log(player);

console.log(player.name);
//두 코드 다 같은 역할 
console.log(player["name"]);


console.log(player.points);