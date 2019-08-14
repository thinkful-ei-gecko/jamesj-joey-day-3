'use strict';
let people = [
{ 
    name: 'Joey',
    jobTitle: 'unemployed'

},
{
    name: 'Kevin',
    jobTitle: 'Entrepruneur'

},
{
    name: 'James',
    jobTitle: 'hobo',
},

];
people.forEach(person => console.log(`name: ${person.name} job: ${person.jobTitle}`));
