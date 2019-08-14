'use strict';

function createMyObject () {
  let obj = {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello() {
      return 'hello';
    }
  };
  return obj;
}

console.log(createMyObject());