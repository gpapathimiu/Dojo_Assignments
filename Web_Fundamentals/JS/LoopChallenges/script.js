var sum = 0
var multiply = 1

//Using a loop write code that will console.log all of the odd values from 1 up to 20.
function printOdds() {
    for (i=1; i<=20; i++) {
        if (i%2 === 1)
        console.log(i);
    }

}
printOdds();

//Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
function printThree() {
    for(i=100; i>=0; i--) {
        if (i%3 === 0)
        console.log(i);
    }
}
printThree();

//Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
function Sequence() {
    for(i=4; i>=-3.5; i-=1.5) {
    console.log(i);
    }
}
Sequence();

//Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
function Sigma() {
    for(i=1; i<=100; i++) {
        sum += i;
    }
        console.log(sum);

}
Sigma();

//Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
function Factorial () {
    for(i=1; i<=12; i++){
        multiply *= i;
    }
    console.log(multiply);
}

Factorial ();