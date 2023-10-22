/*09.25.2023*/

/*CODEWARS CHALLENGES*/

//1. Array Plus Array
function arrayPlusArray(arr1, arr2) {
    let arr = arr1.concat(arr2);
    let result = arr.reduce((a, b) => a+ b);
    console.log(result)
}
arrayPlusArray([1, 2, 3], [4])


//2. ATM
function ATM(withdrawl) {
    //declare the bank notes
    let banknotes = [5, 10, 20, 50, 100];
    //declare the starting value of the function result
    let result = 0;

    //itterate through the banknotes
    for(let i = 0; i < banknotes.length; i++) {
        //if the withdrawl is equal to or greater than an individual bank note
        if(withdrawl >= banknotes[i]) {
            //add 1 to the result variable
            result++
            //and deduct the value of the note from the withdrawl total
            withdrawl -= banknotes[i]
        }
        else {
            console.log(-1)
        }
    }
    //return/log the value of the result
    console.log(result)
}
ATM(300)


//3. Count Sheep
function countSheep(num) {
    let result = ''
    for(let i = 1; i <= num; i++) {
        result += i + ' sheep ... '
    }
    console.log(result)
}
countSheep(10)
//4. Pipe Problem

function pipeFix(numbers){
    var first = numbers[0];
    var last = numbers[numbers.length-1];
    
    var arr = [];
    for(var i = first; i <= last; i++) {
      arr.push(i);
    }
    return arr;
  }
console.log(pipeFix(10))
//5. Sum of Positive

function sum(num) {
    let positive = 0
    for(let i = 0; i < num.length; i++) {
        if(num[i] >= 0) {
            positive += num[i]
        }
        
    }
    console.log(positive)
}

sum([-1, 1, 2])
