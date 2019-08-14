'use strict';
const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];
function findOne(arr,query){
  let result = null;
  for(let i = 0; i < arr.length; i++){
    let counter = 1;
    for (let arg in query) {
      if(arg in arr[i] && query[arg] === arr[i][arg] && counter === Object.keys(query).length){
        result = arr[i];
      } else if (arg in arr[i] && query[arg] === arr[i][arg] && counter !== Object.keys(query).length) {
        counter++;
      } else {
        result = null;
      }
    } 
    if (result !== null) {
      return result;
    }      
  }
  return result;
}

console.log(findOne(HEROES, { squad: 'Justice League', id: 5 }));