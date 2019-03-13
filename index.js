const john = 24;
const barbara = 28;
const patrick = 32;
const benjamin = 17;
const sylvie = 36;

let sum = john + barbara + patrick + benjamin + sylvie;

console.log(sum);

let average = sum / 5;

console.log(average);

let ageDifference = sylvie - benjamin;

console.log(ageDifference);

if (ageDifference > 10) {
   console.log(true);
} else {
   console.log(false);
}

if (john < 25 && benjamin < 25) {
   console.log(true);
} else {
   console.log(false);
}

let isSylvie = sylvie < 35 /*condition*/ ? /*if*/ "Il n/y a personne au dessus de 35 ans" : /*else*/ "Au moins une personne a plus de 35 ans";

console.log(isSylvie);
//Hell yeah!!!
