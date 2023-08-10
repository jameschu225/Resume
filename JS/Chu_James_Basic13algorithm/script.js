// 1. Print 1-255
function print1To155(){
    for (i=1; i <= 255; i++){
        console.log(i)
    }
}
// 2. Print odds 1-255
function printOdds1To255(){
    for (i=1; i<=255; i ++){
        if (i % 2 != 0){
            console.log(i)
        }
    }
}
// 3. Print ints and sum 0-255
function printIntsAndSum0To255(){
    let sum = 0;
    for (i=0; i<= 255; i++){
        console.log(`Ints: ${i}`)
        sum += i;
        console.log(`Total: ${sum}`)
    }
}
// 4. Iterate and Print Array
function printArrayVals(arr){
    for (i=0; i< arr.length; i++){
        console.log(arr[i])
    }
}
// 5. Find and Print Max
function printMaxOfArray(arr){
    let max = arr[0];
    for (i=0; i<arr.length; i++){
        if (arr[i] >= max){
            max = arr[i];
        }
    }
    console.log(max);
}
// 6. Get and print average
function printAverageOfArray(arr){
    let sum = 0;
    for (i=0; i<arr.length; i++){
        sum += arr[i];
    }
    let avg = sum / arr.length;
    console.log(avg);
}
// 7. array with Odds
function returnOddsArray1To255(){
    let oddArr = [];
    for (i=1; i<=255; i ++){
        if (i % 2 != 0){
            oddArr.push(i);
        }
    }
    console.log(oddArr);
}
// 8. Square the values
function squareArrayVals(arr){
    let sqr = 0;
    for (i=0; i<arr.length; i++){
        sqr = arr[i]**2;
        arr[i] = sqr;
    }
    console.log(arr)
}
// 9. Greater than Y
function printArrayCountGreaterathanY(arr,y){
    let count = 0;
    let greaterarr = [];
    for (i=0; i<arr.length; i++){
        if (arr[i] > y){
            count += 1;
            greaterarr.push(arr[i]);
        }
    }
    console.log(count, greaterarr)
}
// 10. Zero Out Negative Numbers
function zeroOutArrayNegativeVals(arr){
    for (i=0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i] = 0;
        }
    }
    console.log(arr)
}
// 11. Max, Min, Average
function printMaxMinAverageArrayVals(arr){
    let sum = 0;
    let avg = 0;
    let max = arr[0];
    let min = arr[0];
    for (i=0; i< arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        } else if (arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }
    avg = sum / arr.length;
    console.log(min,max,sum,avg)
}
// 12. Shift Array Values
function shiftArrayValsLeft(arr){
    let moveone = 0;
    for (i=1; i<arr.length; i++){
        if (i < arr.length-1){
            arr[i-1] = arr[i];
        } else {
            arr[i-1] = arr[i];
            arr[i] =0;
        }
    }
    console.log(arr)
}
// 13. Swap String For Array Negative Values
function swapStringForArrayNegativeVals(arr){
    for (i=0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i] ="Dojo";
        }
    }
    console.log(arr)
}