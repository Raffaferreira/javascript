//You can export members one by one. What’s not 
//exported won’t be available directly outside the module:
export const myNumbers = [1, 2, 3, 4];

const animals = ['Panda', 'Bear', 'Eagle']; // Not available directly outside the module

export function myLogger() {
  console.log(myNumbers, animals);
}

export class Alligator {
   constructor() {
     // ...
   }
}