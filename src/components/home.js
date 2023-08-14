import '../App.css'
import logo from '../../src/pic.png'
import milk from '../../src/milk.png'
import cheese from '../../src/cheese.png'
import ghee from '../../src/ghee.jpeg'
import butter from '../../src/butter.jpeg'
import yogurt from '../../src/yogurt.jpeg'
import cream from '../../src/cream.jpeg'
import paneer from '../../src/paneer.jpeg'
import choco from '../../src/chocolate.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Product from './product'



function Page(){
    const navigate=useNavigate();

    
    return(
        <div className='main'>
            <div className='head'>
                <img id='pic' src={logo}/>
                <div className='searchbar'>
                    <input id='sb' type='text' placeholder='Search products'></input>
                    <i id='search' class="bi bi-search"></i>
                </div>
                <ul className='list'>
                    <button onClick={()=>navigate("/")} type='text' class='button'><i class="bi bi-house-door-fill"></i></button>
                    <button onClick={()=>navigate("/order")} type='text' class='button'><i class="bi bi-clock-history"></i></button>
                    <button onClick={()=>navigate("/cart")} type='text' class='button'><i class="bi bi-cart-fill"></i></button>
                    <button onClick={()=>navigate("/notification")} type='text' class='button'><i class="bi bi-bell-fill"></i></button>
                    <button onClick={()=>navigate("/profile")} type='text' class='button'><i class="bi bi-person-fill"></i></button>
                </ul>
            </div>
            <div className='products'>
                <Product name='MILK' amt='1L' image={milk} price='68'/>
                <Product name='CHEESE' amt='100gm' image={cheese} price='78'/>
                <Product name='BUTTER' amt='100gm' image={butter} price='52'/>
                <Product name='GHEE'  amt='500mL' image={ghee} price='425'/>
            </div>
            <div className='products'>
                <Product name='YOGURT' amt='500gm' image={yogurt} price='24'/>
                <Product name='PANEER' amt='250gm' image={paneer} price='76'/>
                <Product name='CREAM' amt='100gm'image={cream} price='64'/>
                <Product name='CHOCOLATE' amt='150gm' image={choco} price='80'/>
            </div>

            <div className='more'>
                <div className='about'>
                    <font id='ab'>About</font><br/>
                    <p id='para'>Daily Dairy Limited is a private limited company having its registered and corporate office at XYZ city of ABC State in India. The company was incorporated in the year 2022 and production commenced in 2024. Currently, Our procurement is centered in X states and our products are available for purchase in Y states. We have Z milk chilling centers. Some of our plants are ISO 22000:2005 Certified while two are ISO 50001:2011 (EnMS) Certified.</p>
                </div>
                <div className='contact'>
                    <font id='ab'>Contact</font>
                    <div className='logos'>
                        <i id='tw'class="bi bi-twitter"></i>
                        <i class="bi bi-envelope-fill"></i>
                        <i id='wap' class="bi bi-whatsapp"></i>
                        <i id='insta'class="bi bi-instagram"></i>
                        <i id='fb'class="bi bi-facebook"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page;