/* Import the 'helpful' function from 'helpers.js' */
// import helpful from './helpers';

/* Import all three functions from 'helpers.js'; */
// import {helpful, sort, sing} from './helpers';

/* Import the default 'helpful' function AND the optional 'sort" and 'sing' functions from 'helpers.js'; */
import helpful, {sort, sing} from './helpers';

/* Call our imported functions */
helpful();
sort();
sing();

