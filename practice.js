// function average(array){
//     let sum = 0; 
//     for(let i=0; i<array.length; i++){
//         sum += array[i];
//     }
//     return sum/array.length;
   
// }

// let aveArray = [3, 4, 6, 8, 10];
// let total = average(aveArray);
// console.log(total);


//------------------------------------------------
function maxInArray(numbers){
    console.log('array inside the array', numbers);
    let largest = numbers[0];
    let secondlargest = 0;
    for(let i=0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element> largest){
            secondlargest = largest;
            largest = element;
            
        }
        else if(element !== largest && element> secondlargest){
            secondlargest = element;
        }
    }
    return secondlargest;
}

const heights = [167, 350, 200, 300, 400];
const tallest = maxInArray(heights);
console.log('second hight number:', tallest)
