import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/N2IxYThmYzAt/N2IxYThmYzAt-MjVlNmIyZTUt-w1500._CB407941419_.jpg" alt="" ></img>

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="12345"
                    title="Meller Daren Black Silver Watches for Men and Women"
                    price={87.65}
                    rating={5}
                    image="https://cdn.shopify.com/s/files/1/1479/5572/products/Reloj_04_diagonal_large.jpg?v=1539852198"
                />

                <Product
                    id="12345"
                    title="Meller Daren Black Silver Watches for Men and Women"
                    price={87.65}
                    rating={5}
                    image="https://cdn.shopify.com/s/files/1/0249/9552/8797/products/daren-black-silver_1280x.progressive_159ff79b-ff29-4c9e-a48b-40d38ff32332_1080x.jpg?v=1592316838"
                />



            </div>

            <div className="home__row">
                <Product
                    id="12345"
                    title="Meller Daren Black Silver Watches for Men and Women"
                    price={87.65}
                    rating={5}
                    image="https://cdn.shopify.com/s/files/1/1479/5572/products/Reloj_04_diagonal_large.jpg?v=1539852198"
                />

                <Product
                    id="12345"
                    title="Meller Daren Black Silver Watches for Men and Women"
                    price={87.65}
                    rating={5}
                    image="https://cdn.shopify.com/s/files/1/0249/9552/8797/products/daren-black-silver_1280x.progressive_159ff79b-ff29-4c9e-a48b-40d38ff32332_1080x.jpg?v=1592316838"
                />


                <Product
                    id="12345"
                    title="Meller Daren Black Silver Watches for Men and Women"
                    price={87.65}
                    rating={5}
                    image="https://cdn.shopify.com/s/files/1/0249/9552/8797/products/daren-black-silver_1280x.progressive_159ff79b-ff29-4c9e-a48b-40d38ff32332_1080x.jpg?v=1592316838"
                />



            </div>


            {/* Product */}


        </div>
    )
}

export default Home
