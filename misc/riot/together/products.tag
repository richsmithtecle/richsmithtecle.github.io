<products>
    <h1 class="viva">Viva La Flexbox!!</h1>
    <ul class="products">
        <li each={items} class="product">
            <img src={img} />
            <h2>{manufacturer}</h2>
            <h4>{description}</h4>
            <h5>Model # {model}</h5>
            <h2>{price}</h2>
        </li>
    </ul>

    <script>
        const tvs = [
            { manufacturer: 'Sony', description: '55-inch 4K ULTRA HD TV', model: 'XBR55X930E', price: '$1999.95', img: 'https://richsmithtecle.github.io/MentorTV/media/sony_XBR55X930E_250x150.jpg' },
            { manufacturer: 'Sony', description: '65-inch 4K ULTRA HD TV', model: 'XBR65X930E', price: '$2499.95', img: 'https://richsmithtecle.github.io/MentorTV/media/sony_XBR55X930E_250x150.jpg' },
            { manufacturer: 'Sony', description: '55-inch 4K ULTRA HD TV', model: 'XBR55X930E', price: '$1999.95', img: 'https://richsmithtecle.github.io/MentorTV/media/sony_XBR55X930E_250x150.jpg' },
            { manufacturer: 'Sony', description: '65-inch 4K ULTRA HD TV', model: 'XBR65X930E', price: '$2499.95', img: 'https://richsmithtecle.github.io/MentorTV/media/sony_XBR55X930E_250x150.jpg' },
            { manufacturer: 'Sony', description: '55-inch 4K ULTRA HD TV', model: 'XBR55X930E', price: '$1999.95', img: 'https://richsmithtecle.github.io/MentorTV/media/sony_XBR55X930E_250x150.jpg' },
            { manufacturer: 'Sony', description: '65-inch 4K ULTRA HD TV', model: 'XBR65X930E', price: '$2499.95', img: 'https://richsmithtecle.github.io/MentorTV/media/sony_XBR55X930E_250x150.jpg' }
        ];

        const audios = [
            { manufacturer: 'Denon', description: 'HT Receiver', model: 'AVRX3400', price: '$1999.95', img: 'https://richsmithtecle.github.io/MentorTV/media/sony_XBR55X930E_250x150.jpg' },
            { manufacturer: 'Denon', description: 'HT Receiver', model: 'AVRX3400', price: '$2499.95', img: 'https://richsmithtecle.github.io/MentorTV/media/sony_XBR55X930E_250x150.jpg' },
            { manufacturer: 'Denon', description: 'HT Receiver', model: 'AVRX3400', price: '$1999.95', img: 'https://richsmithtecle.github.io/MentorTV/media/sony_XBR55X930E_250x150.jpg' },
            { manufacturer: 'Denon', description: 'HT Receiver', model: 'AVRX3400', price: '$2499.95', img: 'https://richsmithtecle.github.io/MentorTV/media/sony_XBR55X930E_250x150.jpg' },
            { manufacturer: 'Denon', description: 'HT Receiver', model: 'AVRX3400', price: '$1999.95', img: 'https://richsmithtecle.github.io/MentorTV/media/sony_XBR55X930E_250x150.jpg' },
            { manufacturer: 'Denon', description: 'HT Receiver', model: 'AVRX3400', price: '$2499.95', img: 'https://richsmithtecle.github.io/MentorTV/media/sony_XBR55X930E_250x150.jpg' }
        ];

        if(opts.category === 'tv') {
            this.items = tvs;
        } else if(opts.category === 'audio') {
            this.items = audios; 
        }

    </script>

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