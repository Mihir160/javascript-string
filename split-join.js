const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki.bosonto Kale tomi bolte pari ni';
//poti ta word ke split korbe
const parts = lyrics.split(' ');
// console.log(parts);
//dot er pore gap dibe
const sentence = lyrics.split('.');
 console.log(sentence);
//poti ta word ke gap dibe
const chars = lyrics.split('');
// console.log(chars);

const partial = lyrics.slice(6, 9);
console.log(partial); 
const partial2 = lyrics.substring(7,8);
console.log(partial2);


const line = [
    'Tumi bondhu kala Pakhi ami jeno ki',
    'bosonto Kale tomi bolte pari ni'
  ];

  const newsong = line.join('. ');
  console.log(newsong);