const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki.bosonto Kale tomi bolte pari ni';
const searchString = 'Pakhi';
// const doestExist = lyrics.includes('Pakhi');
// const doestExist = lyrics.includes('Pakhi');
//  const doestExist = lyrics.includes(searchString);

 const lyricsLowerCase = lyrics.toLocaleLowerCase();
//  const doestExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doestExist = lyricsLowerCase.includes(searchStringLower);
// oneline code
const doestExitoneline = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doestExitoneline);
// console.log(doestExist);



// -----------------------------------------

console.log(lyrics.indexOf('kala'));
if(lyrics.indexOf('ami') !== -1){
    console.log('exists inside the string');

}
else{
    console.log('cannot find it');
}


startwidth
console.log(lyrics.startsWith('Tumi'));

endswith
const filename = 'mybrodata.pdf';
const file = filename.endsWith('.pdf');
 console.log(file);