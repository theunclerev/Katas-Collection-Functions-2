console.log("hi.")
let answer = 0

function add(a, b) {
    return (a + b)
// console.log("roof")
}
answer = add(2, 4)
console.log(answer)

answer = add(10, 2)
console.log(answer)

answer = add(6, 4)

function multiply(a, b) {
    let answer = 0;
    let count = 0;
    while (count < b) {
        answer = add(a, answer)
        count += 1;
    }
return answer;
}

let a = add(2, 2);
let m = multiply(4, 4);

console.log(m)

function power(a, b) {
    let answer = 1;
    let count = 0;
    while (count < b) {
        answer = multiply(a, answer)
        count += 1;
    }
    return answer; 
 }
 a = power(2, 8);
 console.log(a)

a = power(3, 4);
console.log(a)

function factorial(a, b, c, d) {
    let answer = 1;
    let count = 0;
    while (count < b, c, d) {
        answer = factorial(a, answer)
        count += 1
    }

    while (count < c, d) {
        answer = factorial(b, answer)
        count += 1
}
    while (count < d){
        answer = factorial(c, answer)
        count += 1
    }

    return answer;
}
 a = factorial(4, 3, 2)
 console.log(a)