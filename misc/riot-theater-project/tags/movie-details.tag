<movie-details>

    <script>riot.mount('top-nav')</script>
    <nav>
        <top-nav></top-nav>
    </nav>

    <div class="wrapper">

        <!-- Placeholders with first item in array 
        Need to pass value from item clicked on "now-showing.tag" -->

        <section class="feature-image">
            <img src={movies[0].hero} alt="{movies[0].name}">
        </section>

        <section class="feature-poster">
            <img src={movies[0].poster} alt="{movies[0].name}">
        </section>

        <main class="feature-details">
            <section>
                <h2 class="feature-title">{movies[0].name}</h2>
                <p class="feature-sub-details">{movies[0].rating} | {movies[0].runtime}</p>
                <p class="feature-desc">{movies[0].shortDesc}</p>
            </section>
        </main>


        <!-- Determine if showtimes should be separate tag -->
        <section class="showtimes">
            <h3 class="text-center">
                Select a movie time to buy tickets and reserve seats
            </h3>
            <hr>
            <ul>
                <li><a href="">11:15a</a></li>
                <li><a href=""> 1:15p</a></li>
                <li><a href=""> 3:15p</a></li>
                <li><a href=""> 5:15p</a></li>
                <li><a href=""> 7:15p</a></li>
                <li><a href=""> 9:15p</a></li>
            </ul>
        </section>
    </div>

    <style>
        .wrapper {
            display: grid;
            grid-template-columns: 50px 1fr 6fr 50px;
            grid-template-rows: auto;
            grid-gap: 20px;
        }
        .feature-image {
            grid-column: 1 / -1;
            grid-row: 1 / 1;
            background: red;
            height: 70vh;
        }

        .feature-image img {
            object-fit: cover;
            max-height: 100%;
            width: 100%;
            display: block;
        }

        .feature-poster {
            grid-column: 2/3;
            grid-row: 3/4;
        }

        .feature-poster img {
            display: block;
            width: 100%;
        }

        .feature-details {
            grid-column: 3/4;
            grid-row: 3 / 4;
            align-self: center;
        }



        .showtimes {
            grid-column: 2 / 4;
            grid-row: 4/5;
        }

        .showtimes h3 {
            text-align: center;
        }

        .showtimes ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 0px;
            padding: 0px;
        }

        .showtimes li {
            flex-grow: 1;
            list-style: none;
            text-align: center;
            border: 1px solid black;
            border-radius: 5px;
            align-self: center;
            margin: 20px;
            padding: 15px;
            color: white;
            background: rgb(168, 9, 9);
            /* background: rgb(51, 107, 211); */
            font-size: 1.15rem;
            letter-spacing: .15rem;
        }

        .showtimes a {
            text-decoration: none;
            color: white;
        }
    </style>
    
    <!-- Used same array from "now-showing.tag" but renamed to movies to avoid using "this.film.whatever" each time. -->
    <script>
        movies = [
                {
                    name: 'Avengers : Infinity War',
                    poster: 'assets/avengers-infinity-war-logo-poster-500w.jpg',
                    hero: 'assets/avengers-infinity-war-full-background.jpg',
                    rating: 'PG-13',
                    runtime: '2h 29min',
                    shortDesc: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
                },
                {
                    name: 'Deadpool 2',
                    poster: 'assets/deadpool-2-poster-500w.jpg',
                    hero: 'assets/deadpool-2-background.jpg',
                    rating: 'R',
                    runtime: '1h 59min',
                    shortDesc: 'Foul-mouthed mutant mercenary Wade Wilson (AKA. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg, Cable.'
                },
                {
                    name: 'Solo : A Star Wars',
                    poster: 'assets/solo-poster-500w.jpg',
                    hero: 'assets/solo-background-v2.jpg',
                    rating: 'PG-13',
                    runtime: '2h 15min',
                    shortDesc: 'During an adventure into the criminal underworld, Han Solo meets his future copilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.'
                },
                {
                    name: 'Incredibles 2',
                    poster: 'assets/incredibles-2-poster-lg-v2.jpg',
                    hero: 'assets/incredibles-2-background-v2.jpg',
                    rating: 'PG',
                    runtime: '1h 58min',
                    shortDesc: 'Bob Parr (Mr. Incredible) is left to care for Jack-Jack while Helen (Elastigirl) is out saving the world.'
                },
                {
                    name: 'Jurassic World : Fallen Kingdom',
                    poster: 'assets/jurassic-world-fallen-kingdom-poster-v2-500w.jpg',
                    hero: 'assets/jurassic-world-fallen-kingdom-background-v2.jpg',
                    rating: 'PG-13',
                    runtime: '2h 8min',
                    shortDesc: 'When the island\'s dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.'
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

</movie-details>