/*
console.log('function');


const nuggetizer = (animal) => {
return `nugget ${animal}`;
}



const spamFactory = (kiterallyAnything) => {
    return 'spam (lunch)';
}


const humaneNuggetizer = (animal) => {
    return animal;
}


console.log(nuggetizer('chicken'));
console.log(nuggetizer('octopus'));
console.log(nuggetizer('john wark'));


console.log(humaneNuggetizer('chicken'));
console.log(humaneNuggetizer('octopus'));
console.log(humaneNuggetizer('john wark')0;


console.log(spamFactory('chicken'));
console.log(spamFactory('octopus'));
console.log(spamFactory('john wark'));

*/
const printToDOM = (toPrint) => {
  document.getElementById('output').innerHTML += toPrint
}




let bandNumber = 1

const takeNumber = (bandName) => {
  printToDOM(`<h3>${bandNumber}. ${bandName}</h3>`);
  bandNumber++
  
};

takeNumber("Galactic Scum");
 
takeNumber("Underdogs");
 


/*const printToDOM = (toPrint) => {
  document.getElementById('output').innerHTML += toPrint
}
*/

// printToDOM('John');