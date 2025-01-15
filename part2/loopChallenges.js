/*
let sum = 0
let i = 0

while (i <= 5){
    sum += i;
    i++;
}

console.log(sum);
*/

/*
let countdown = [];
let j = 5;
while (j > 0){
    countdown.push(j);
    j--;
}
console.log(countdown);
*/

let teaCollection = [];
let tea

do {
    tea = prompt(`enter the tea you like`);

    if (tea !== "stop"){
        teaCollection.push(tea);
    }
} while (tea !== stop);
