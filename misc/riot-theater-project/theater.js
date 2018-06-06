

const films = [
    {
        name: 'Avengers : Infinity War',
        poster: 'assets/avengers-infinity-war-logo-poster-500w.jpg',
        rating: 'PG-13',
        runtime: '2h 29min',
        shortDesc: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
    },
    {
        name: 'Deadpool 2',
        poster: 'assets/deadpool-2-poster-500w.jpg',
        rating: 'R',
        runtime: '1h 59min',
        shortDesc: 'Foul-mouthed mutant mercenary Wade Wilson (AKA. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg, Cable.'
    },
    {
        name: 'Solo : A Star Wars',
        poster: 'assets/solo-poster-500w.jpg',
        rating: 'PG-13',
        runtime: '2h 15min',
        shortDesc: 'During an adventure into the criminal underworld, Han Solo meets his future copilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.'
    },
    {
        name: 'Incredibles 2',
        poster: 'assets/incredibles-2-poster-lg-v2.jpg',
        rating: 'PG',
        runtime: '1h 58min',
        shortDesc: 'Bob Parr (Mr. Incredible) is left to care for Jack-Jack while Helen (Elastigirl) is out saving the world.'
    },
    {
        name: 'Jurassic World : Fallen Kingdom',
        poster: 'assets/jurassic-world-fallen-kingdom-poster-v2-500w.jpg',
        rating: 'PG-13',
        runtime: '2h 8min',
        shortDesc: 'When the island\'s dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.'
    }
];



console.log(films);
console.log(`${films.map(film => film.name)}`);


// additional film info?

// release date
//     1. allows separation of 'now showing' from 'coming attractions'
//     2. allows sorting of 'now showing' by newest release to oldest
//     3. allows either category to be sorted alpha vs date

// end date - automatically removes from now showing

// rating √ 
// run time √ 
// short description √ 
// long description
// hero or background image and location 

