import foods from './foods';
import {choice, remove} from './helpers';

/* This file should import the fruits and both array helpers. It should then:

Randomly draw a fruit from the array
Log the message “I’d like one RANDOMFRUIT, please.”
Log the message “Here you go: RANDOMFRUIT”
Log the message “Delicious! May I have another?”
Remove the fruit from the array of fruits
Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.” */

let RANDOMFRUIT = choice(foods);
console.log(`"I'd like one ${RANDOMFRUIT}, please."`);
console.log(`"Here you go:${RANDOMFRUIT}"`);
console.log('"Delicious! May I have another?"');
console.log(remove(foods, RANDOMFRUIT));
console.log(`'"I'm sorry, we're all out. We have ${foods.length} other foods left."'`);


