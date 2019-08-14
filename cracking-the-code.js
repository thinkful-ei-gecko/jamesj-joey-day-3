'use strict';
let codedWords = 'craft block argon meter bells brown croon droop';

function decode(string){
  const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
  };
  
  
  let firstChar = string[0];
  let decodeChar = cipher[firstChar]-1;
  if(!decodeChar){
    return ' ';
  }
  else{
    return string[decodeChar];
  }
    
}





function decodeWords(string){
  let wordArray = string.split(' ');
  let decodedSentence = '';
  for(let i = 0; i < wordArray.length; i++){
    decodedSentence += decode(wordArray[i]);

  }
  return decodedSentence;
}

console.log(decodeWords(codedWords));