//Factorial

function factorial(n) {
    var fact = 1;
    for (i = 1; i <= n; i++)
        fact = fact * i;
    return (fact);
} {
    var x = prompt("Enter value for factorial");
    var y = factorial(x);
    if (x >= 0) {
        alert("Factorial " + x + " is " + y);

    } else
    if (x < 0) {
        alert("No result");

    }
}

// Fibonachi

var n = prompt("Enter Fibonachi number");

var fib = [0, 1]; // First two values of Fibonachi
for (i = 2; i < n; i++) {
    // i is sum of previous values
    fib[i] = fib[i - 1] + fib[i - 2];
}

alert(fib);


// Simple numbers
var n = prompt("Enter value");
var simpmass = [];
smpnmb:
    for (var i = 2; i <= n; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue smpnmb;
        }
        simpmass.push(i);

    }
alert(simpmass); // simple number