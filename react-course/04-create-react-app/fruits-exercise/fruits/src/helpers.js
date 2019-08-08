/* This file should export two array helper functions:

choice(items): returns a randomly selected item from array of items
remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined. */

function choice(items) {
    // return items[Math.floor(Math.random()*items.length)];
    
    let idx = [Math.floor(Math.random()*items.length)];
    return items[idx];
}

function remove(items, item) {
    let index = items.indexOf(item);
    // console.log("fruit position in the array has an index of " + index);
    if ( index !== -1 ) {
        return items.splice(index, 1);
    } else {
        console.log("undefined")
    }
     
}

export {choice, remove};