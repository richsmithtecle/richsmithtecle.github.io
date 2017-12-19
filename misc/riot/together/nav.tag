<nav>
    <ul>
        <li><a href="#/">Home</a></li>
        <li><a href="#/login">Login</a></li>
        <li><a href="#/register">Register</a></li>
        <li><a href="#/products">Products</a></li>
        <li><a href="#">Link5</a></li>
        <li><a href="#">Link6</a></li>
    </ul>

    <style>
        ul {
            display: flex;
            flex-direction: row;
            justify-content: center;
            list-style: none;
            padding: 10px;
            color: whitesmoke;
            background-color: slategrey;
            text-align: center;
        }

        li {
            flex-grow: 1;
        }
        li a,
        li a:visited {
            flex-grow: 1;
            text-decoration: none;
            color: whitesmoke;
        }
        li a:hover {
            text-decoration: underline;
        }

    </style>
</nav>