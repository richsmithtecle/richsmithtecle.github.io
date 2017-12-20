<products>
    <h1 class="viva">Viva La Flexbox!!</h1>
    <ul class="products">
        <li each={item in items} class="product" onclick= { click }>
            <img src={item.img} />
            <h2>{item.manufacturer}</h2>
            <h4>{item.description}</h4>
            <h5>Model # {item.model}</h5>
            <h2>{item.price}</h2>
        </li>
    </ul>

    <detail product={product}></detail><!-- binds the product property to a variable called product -->

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

        const self = this;
        self.product = null;

        click(e) { 
            console.log(e);
            self.product = e.item.item;     //update the product property so the detail page can "refresh"
            
            

        }

        
        if(opts.category === 'tv') {
            this.items = tvs;
            //this.product = this.items[0];

        } else if(opts.category === 'audio') {
            this.items = audios; 
            //this.product = this.items[0];

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