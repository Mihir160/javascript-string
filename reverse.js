// function reverseString(text){
//     let reversed = '';
//     for(let i = text.length - 1; i>=0; i--){
//         const element = text[i];
//         reversed = reversed + element;
//         console.log(element, reversed);
//     }
//     return reversed;
// }

// const myString = 'I am a good boy';
// const reversed = reverseString(myString);
// console.log('reversed output:',reversed);


//-------------------word reverse-------------------
function reveseword(str){
    const words = str.split(' ');
    //[ 'I', 'am', 'a', 'good', 'boy' ]
    console.log(words);
    const result = [];
    for(let i= words.length -1; i>=0; i--){
             const element = words[i];
             result.push(element);
    }
    console.log(result);
    const reversed = result.join(' ');
    return reversed;
}



const myString = 'I am a good boy';
const wordreverse =  reveseword(myString);
console.log(wordreverse);