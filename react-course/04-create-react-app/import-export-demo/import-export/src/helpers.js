function helpful() {
    console.log('I did a super helpful thing!');
}

function sort() {
    console.log('All sorted!');
}

function sing() {
    console.log('🎵 🎵 🎵')
}

/* We typically will export the most obvious function by default. Let's other developers know what we feel is the most important one. */

/* Export only the 'helpful' function. */ 
// export default helpful;

/* Export all 3 of the above functions. */
// export {helpful, sing, sort};

/* Export 'helpful' as the default function , while 'sort' and 'sing' are options at import. */
export default helpful;
export {sort, sing};

