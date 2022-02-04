//leap year -  formula: year % 400 == 0  or year % 4 == 0 && year % 100 != 0;
// odd even - formula: number % 2 == 0 ; even        else the number is odd
// factorial by using for and while loop                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

// new home work
// make function
// 1. celcius to ferenhite function and reverse mean ferenhite to celcius c/5 = (f-32)/9
// 2. grading calculation
// 3. calculate simple interest si = (prt)/100

//* first know all the formula then try to do it by yourself.

function celciusToFerenhite(ferenhite) {
    var celcius = ((ferenhite - 32) * 5) / 9;
    return celcius;
}

function grade(marks) {
    if (marks <= 100 && marks >= 80) {
        return 'A+'
    }
    else if (marks <= 79 && marks >= 70) {
        return 'A'
    }
    else if (marks <= 69 && marks >= 60) {
        return 'A-'
    }
    else if (marks <= 59 && marks >= 50) {
        return 'B'
    }
    else if (marks <= 49 && marks >= 40) {
        return 'C'
    }
    else if (marks <= 39 && marks >= 33) {
        return 'D'
    }
    else {
        return 'F'
    }
}

function simpleInterest(principle, rate, time) {
    var result = (principle * rate * time) / 100;
    return result;
}

// lets test

console.log(celciusToFerenhite(32));
console.log(grade(50));
console.log(simpleInterest(5000, 2, 5));