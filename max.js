// const jim = 69;
// const dela = 97;
// const chinku = 99;

// if(jim> dela && jim> chinku){
//     console.log('jim will get the cake');
// }
// else if(dela> jim && dela> chinku){
//     console.log('dela will get the cake');
// }
// else{
//     console.log('chinku will get the cake');
// }

//-------------------------------------------------------------------------------------------------------
//write a function that will take 3 numbers will return the max number

// function getArraymax(array){
//    return Math.max.apply(Math, array);
// }

// let ages=[11, 54, 32, 92];
// let maxNumber = getArraymax(ages);
// console.log(maxNumber);

//if-else

// function maxnumber(x, y, z){
//     if(x>y && x>z){
//          console.log(x);
//     }
//     else if(y>x && y>z){
//         console.log(y)
//     }
//     else{
//         console.log(z);
//     }
// }


 
// let num1 = 40;
// let num2 = 60;
// let num3 = 30;

// let  maxnumberof = maxnumber(num1, num2, num3);

function mathmax(x, y, z){
    return Math.max(x, y, z);
}

let minofmath = mathmax(10, -5, 0);
console.log(minofmath);

//----------------------------
// console.log(Math.max(1,2,3,4,5,6));

//---------------------------------------------------------------------------------------------------

// write a function that will take 3 parameters and will return the min number
// function getArraymin(array){
//     return Math.min.apply(Math, array);
//  }
 
//  let ages1=[11, 54, 32, 92];
//  let minNumber = getArraymin(ages1);
//  console.log(minNumber);

//  console.log(Math.min(1,2,3,4,5,6));


// function minnumber(x, y, z){
//     if(x<y && x<z){
//          console.log(x);
//     }
//     else if(y<x && y<z){
//         console.log(y)
//     }
//     else{
//         console.log(z);
//     }
// }

// function mathmin(x, y, z){
//     return Math.min(x, y, z);
// }

// let minofmath = mathmin(10, -5, 0);
// console.log(minofmath);

 
// let num1 = -40;
// let num2 = 10;
// let num3 = 30;

// let  minumberof = minnumber(num1, num2, num3);




//first time do it using if-else
// second time do it using math.min or math.max