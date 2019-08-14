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
  let result = {};
  for(let i = 0; i < arr.length; i++){
    for( let j = 0; j < query.length; j++) { 
      console.log(query);
      if(!(query[j] in arr[i])){
        result = 'null';

      }
      else{ return result = arr[i]; }
    }
  }

}
console.log(findOne(HEROES, { id: 1}));

//work in progress