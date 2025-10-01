/**
 *
 *
 *
 */

function lemonadeChange(bills) {
    let sum = 0;

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            sum += 5;
        } else if (bills[i] === 10) {
            let change = 5; // need one 5 back
            if (sum >= change) sum -= change;
            else return false;
            sum += 10; // add the 10 bill
        } else {
            // 20
            let change = 15; // need 15 back
            if (sum >= change) sum -= change;
            else return false;
            sum += 20; // add the 20 bill
        }
    }

    return true;
}

function lemonadeChange_(bills) {
    let five = 0;
    let ten = 0;
    let twenty = 0;

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            five++;
        } else if (bills[i] === 10) {
            ten++;
            if (five > 0) five--;
        } else {
            twenty++;
            if (five > 0) five--;
            else return false;
            if (ten > 0) ten--;
            else return;
        }
    }

    return true;
}

const bills = [5, 5, 5, 10, 20];
const bills2 = [5, 5, 10, 10, 20];

const check = lemonadeChange(bills);
const check_ = lemonadeChange(bills2);

const check1 = lemonadeChange_(bills);
const check2_ = lemonadeChange_(bills2);

console.log(check);
console.log(check_);

console.log(check1);
console.log(check2_);
