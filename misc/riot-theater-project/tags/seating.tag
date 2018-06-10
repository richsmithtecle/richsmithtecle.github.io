<seating>
    
    <nav>
        <top-nav></top-nav>
    </nav>

    <section class="seats">
        <h3>Choose your seats</h3>
        <hr>
        <!-- Need to create availabilty legend -->

        <h4 class="screen">Screen</h4>

        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li class="reserved"><a href=""></a></li>
            <li class="reserved"><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li class="reserved"><a href=""></a></li>
            <li class="reserved"><a href=""></a></li>
        </ul>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li class="reserved"><a href=""></a></li>
            <li class="reserved"><a href=""></a></li>
            <li class="reserved"><a href=""></a></li>
            <li class="reserved"><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </section>

    <style>
        .seats {
            margin: 5rem 0;
        }
        .screen {
            color: white;
            background: rgb(11, 11, 126);
            margin: 3rem 3rem 10rem 3rem;
            padding: 10px 0;
            border-radius: 45px 45px 0 0;
        }
    
        .seats {
            grid-column: 2 / 4;
            grid-row: 5 /6;
            text-align: center;
            text-transform: capitalize;
        }
    
        .seats ul {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-around;
            padding: 0;
            margin: 0px 10rem;
        }
    
        .seats li {
            /* flex-grow: 1; */
            list-style: none;
            align-self: center;
            width: 5vw;
            height: 5vh;
            background: cornflowerblue;
            margin: 1vw;
        }
    
        .seats li.reserved {
            background: grey;
        }
    </style>

</seating>