<now-showing>

    
    <section class="index-hero">
        <h1>
            <i class="fas fa-film fa-3x"></i>
            <br>Riot Theater</h1>
    </section>
    <section class="now-showing">
        <h2>Now Showing &amp; Coming Attractions</h2>
        <ul>
            <li each={film in films}>
                <img src={film.poster} alt="{film.name}">
                <h5>{film.name}</h5>
            </li>
        </ul>
    </section>

    <style>
        .now-showing {
            margin-bottom: 5rem;
        }
    
        .now-showing h2 {
            width: 100%;
            color: white;
            background: var(--theme-background);
            text-align: center;
            margin: 0;
            padding: 1rem 0;
            text-transform: uppercase;
        }
    
        .now-showing ul {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 2fr));
            grid-gap: 20px;
            padding: 0;
            margin: 20px;
        }
    
        .now-showing li {
            list-style: none;
            display: flex;
            flex-direction: column;
            text-align: center;
            border: 1px solid black;
            border-radius: 5px;
            background: black;
            color: white;
        }
    
        .now-showing a,
        .now-showing a:visited {
            text-decoration: none;
            color: white;
        }
    
        .now-showing img {
            display: block;
            width: 100%;
        }
    </style>


    <!-- <script src="theater.js"></script> -->

    
    <script>
            films = [
                {
                    name: 'Avengers : Infinity War',
                    poster: 'assets/avengers-infinity-war-logo-poster-500w.jpg',
                    hero: 'assets/avengers-infinity-war-full-background.jpg',
                    rating: 'PG-13',
                    runtime: '2h 29min',
                    shortDesc: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
                    releaseDate: '04/28/2018'
                },
                {
                    name: 'Deadpool 2',
                    poster: 'assets/deadpool-2-poster-500w.jpg',
                    hero: 'assets/deadpool-2-background.jpg',
                    rating: 'R',
                    runtime: '1h 59min',
                    shortDesc: 'Foul-mouthed mutant mercenary Wade Wilson (AKA. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg, Cable.',
                    releaseDate: '05/18/2018'
                },
                {
                    name: 'Solo : A Star Wars',
                    poster: 'assets/solo-poster-500w.jpg',
                    hero: 'assets/solo-background-v2.jpg',
                    rating: 'PG-13',
                    runtime: '2h 15min',
                    shortDesc: 'During an adventure into the criminal underworld, Han Solo meets his future copilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.',
                    releaseDate: '05/25/2018'
                },
                {
                    name: 'Incredibles 2',
                    poster: 'assets/incredibles-2-poster-lg-v2.jpg',
                    hero: 'assets/incredibles-2-background-v2.jpg',
                    rating: 'PG',
                    runtime: '1h 58min',
                    shortDesc: 'Bob Parr (Mr. Incredible) is left to care for Jack-Jack while Helen (Elastigirl) is out saving the world.',
                    releaseDate: '06/15/2018'
                },
                {
                    name: 'Jurassic World : Fallen Kingdom',
                    poster: 'assets/jurassic-world-fallen-kingdom-poster-v2-500w.jpg',
                    hero: 'assets/jurassic-world-fallen-kingdom-background-v2.jpg',
                    rating: 'PG-13',
                    runtime: '2h 8min',
                    shortDesc: 'When the island\'s dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.',
                    releaseDate: '06/22/2018'
                },
                {
                    name: 'Ant-Man and The Wasp',
                    poster: 'assets/ant-man-wasp-poster.jpg',
                    hero: 'assets/ant-man-wasp-hero-2.jpg',
                    rating: 'PG-13',
                    runtime: '2h 5min',
                    shortDesc: 'As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.',
                    releaseDate: '07/06/2018'
                },
                {
                    name: 'Mission Impossible : Fallout',
                    poster: 'assets/mi-fallout-poster-2.jpg',
                    hero: 'assets/mi-fallout-hero-2.jpg',
                    rating: 'NR',
                    runtime: '0h 0min',
                    shortDesc: 'Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.',
                    releaseDate: '07/27/2018'
                },
                {
                    name: 'The Meg',
                    poster: 'assets/the-meg-poster-2.jpg',
                    hero: 'assets/the-meg-hero-2.jpg',
                    rating: 'PG-13',
                    runtime: '1h 53min',
                    shortDesc: 'After escaping an attack by what he claims was a 70-foot shark, Jonas Taylor must confront his fears to save those trapped in a sunken submersible.',
                    releaseDate: '08/10/2018'
                }
            ];
        </script>

</now-showing>