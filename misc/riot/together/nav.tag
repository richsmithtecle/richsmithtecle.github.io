<nav>
    <ul>
        <li><a href="#">Link1</a></li>
        <li>Link2</li>
        <li>Link3</li>
        <li>Link4</li>
        <li>Link5</li>
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
        }

        li {
            flex-grow: 1;
        }
        li a {
            text-decoration: none;
        }

    </style>
</nav>