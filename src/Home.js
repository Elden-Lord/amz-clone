import React from 'react'
import './Home.css'
import Product from './Product.js'

function Home() {
  return (
    <div className = "home">
        <div className = "home__container">
            <img 
                className = "home__image"
                src="https://m.media-amazon.com/images/I/71Z0Z8dGwWL._SX3000_.jpg" 
                alt="" 
            />
        
            <div className = "home__row">
                <Product 
                    id="56234675"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                    price={19.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                    rating={3}
                />
                <Product 
                    id="85311751"
                    title='Baby Boy Winter Jacket Down Cotton Windproof Warm Winter Coats With Cute Printed'
                    price={29.99} 
                    image="https://m.media-amazon.com/images/I/71VdSHAC8DS._AC_SY170_.jpg" 
                    rating={4}
                />
            </div>

            <div className = "home__row">
                <Product 
                    id="45176571"
                    title='Leather Travel Bag with Shoe Pouch, Waterproof Weekender Overnight Bag, Large Carry On Duffel Bag for Men Women-Brown'
                    price={39.99} 
                    image="https://m.media-amazon.com/images/I/712O0KR3-tL._AC_SY170_.jpg" 
                    rating={4}
                />
                <Product 
                    id="98761535"
                    title='Google Nest Learning Thermostat - Programmable Smart Thermostat for Home - 3rd Generation Nest Thermostat - Works with Alexa - Stainless Steel'
                    price={217.99} 
                    image="https://m.media-amazon.com/images/I/71GIRQHecXL._AC_SY200_.jpg" 
                    rating={5}
                />
                <Product 
                    id="31855315"
                    title='Purple Hair Mask for Blonde, Platinum & Silver Hair - Banish Yellow Hues: Blue Masque to Reduce Brassiness & Condition Dry Damaged Hair - Sulfate Free Toner'
                    price={19.95} 
                    image="https://m.media-amazon.com/images/I/41cQAxi06hL._AC_SY230_.jpg" 
                    rating={5}
                />
            </div>

            <div className = "home__row">
                <Product 
                    id="18651344"
                    title='Elden Ring - PlayStation 5'
                    price={59.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81goNGEYm6L._AC_UL604_SR604,400_.jpg" 
                    rating={4}
                />
            </div>
        </div>
    </div>
  );
}

export default Home