<products>
    <h1 class="viva">Viva La Flexbox!!</h1>
    <ul class="products">
        <li class="product">
            <img src="https://richsmithtecle.github.io/MentorTV/media/sony_XBR55X930E_250x150.jpg" alt="">
            <h2>SONY</h2>
            <h4>55-inch 4K Ultra HD TV</h4>
            <h5>Model # XBR55X930E</h5>
            <h2>$1499</h2>
        </li>
        <li class="product">
            <img src="https://richsmithtecle.github.io/MentorTV/media/sony_XBR55X930E_250x150.jpg" alt="">
            <h2>SONY</h2>
            <h4>55-inch 4K Ultra HD TV </h4>
            <h5>Model # XBR55X930E</h5>
            <h2>$1499</h2>
        </li>
        <li class="product">
            <img src="https://richsmithtecle.github.io/MentorTV/media/sony_XBR55X930E_250x150.jpg" alt="">
            <h2>SONY</h2>
            <h4>55-inch 4K Ultra HD TV</h4>
            <h5>Model # XBR55X930E</h5>
            <h2>$1499</h2>
        </li>
        <li class="product">
            <img src="https://richsmithtecle.github.io/MentorTV/media/sony_XBR55X930E_250x150.jpg" alt="">
            <h2>SONY</h2>
            <h4>55-inch 4K Ultra HD TV</h4>
            <h5>Model # XBR55X930E</h5>
            <h2>$1499</h2>
        </li>
    </ul>

    <style>
        .viva {
            text-align: center;
            color: tomato;
            text-shadow: 1px 1px 2px black;
            text-transform: uppercase;
        }
    .products {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        background-color: lightgray;
        
    }
    .product {
        flex-grow: 0;
        flex-basis: 250px;
        color: black;
        background-color: white;
        border: 1px solid black;
        border-radius: 5px;
        margin: 10px;
        padding-bottom: 20px;
    }
    .product img {
        margin-top: 20px;
    }
    .product h2,
    .product h3,
    .product h4,
    .product h5 {
        margin: 5px;
    }
    </style>
</products>