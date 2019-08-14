'use strict';
let people = [
  { 
    name: 'Joey',
    jobTitle: 'unemployed',
    boss: 'Kevin'

  },
  {
    name: 'Kevin',
    jobTitle: 'Entrepruneur'

  },
  {
    name: 'James',
    jobTitle: 'hobo',
    boss: 'Kevin'
  },

];
people.forEach(person => {
  if (person.boss) {
    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}`);
  } else {
    console.log(`${person.jobTitle} ${person.name} doesn't report to anybody`);
  }

});

