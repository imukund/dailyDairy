import '../App.css'
import logo from '../../src/pic.png'
import img from '../../src/milk.png'
import g from '../../src/ghee.jpeg'
import b from '../../src/butter.jpeg'
import y from '../../src/yogurt.jpeg'
import c from '../../src/cream.jpeg'
import p from '../../src/paneer.jpeg'
import ch from '../../src/chocolate.jpg'
import {Link} from 'react-router-dom';



function Page(){
    return(
        <div className='main'>
            <div className='head'>
                <img id='pic' src={logo}/>
                <div className='searchbar'>
                    <input id='sb' type='text' placeholder='Search products'></input>
                    <i id='search' class="bi bi-search"></i>
                </div>
                <ul className='list'>
                    <li><i class="bi bi-house-door-fill"></i></li>
                    <li><i class="bi bi-clock-history"></i></li>
                    <li><i class="bi bi-cart-fill"></i></li>
                    <li><i class="bi bi-bell-fill"></i></li>
                    <li><i class="bi bi-person-fill"></i></li>
                </ul>
            </div>
            <div className='products'>
                <div className='box'>
                    <img id='mi' src={img}></img>
                    <div className='textbox'>
                        <label id='text'>MILK </label>
                        <div id='qty'>
                        <label >QTY:</label>
                        <span class="minus">-</span>
                        <span class="num">01</span>
                        <span class="plus">+</span>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <img id='ch' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkt0KLnYatQZrdemzny7-cbLJGPSQyI7Jfw&usqp=CAU'></img>
                    <div className='textbox'>
                        <label id='text'>CHEESE</label>
                        <div id='qt'>
                            <label >QTY:</label>
                                <span class="minus">-</span>
                                <span class="num">01</span>
                                <span class="plus">+</span>
                        </div>
                    </div>    
                </div>
                <div className='box'>
                    <img id='ch' src={b}></img>
                    <div className='textbox'>
                        <label id='text'>BUTTER</label>
                        <div id='qt'>
                            <label >QTY:</label>
                            <span class="minus">-</span>
                            <span class="num">01</span>
                            <span class="plus">+</span>
                        </div>
                    </div>    
                </div>
                <div className='box'>
                    <img id='ghee' src={g}></img>
                    <div className='textbox'>
                        <label id='text'>GHEE</label>
                        <div id='qt'>
                            <label >QTY:</label>
                            <span class="minus">-</span>
                            <span class="num">01</span>
                            <span class="plus">+</span>
                        </div>
                    </div>    
                </div>
            </div>
            <div className='products'>
            <div className='box'>
                    <img id='ch' src={y}></img>
                    <div className='textbox'>
                        <label id='text'>YOGURT</label>
                        <div id='qt'>
                            <label >QTY:</label>
                            <span class="minus">-</span>
                            <span class="num">01</span>
                            <span class="plus">+</span>
                        </div>
                    </div>    
                </div>
                <div className='box'>
                    <img id='ch' src={p}></img>
                    <div className='textbox'>
                        <label id='text'>PANEER</label>
                        <div id='qt'>
                            <label >QTY:</label>
                            <span class="minus">-</span>
                            <span class="num">01</span>
                            <span class="plus">+</span>
                        </div>
                    </div>    
                </div>
                <div className='box'>
                    <img id='ch' src={c}></img>
                    <div className='textbox'>
                        <label id='text'>CREAM</label>
                        <div id='qt'>
                            <label >QTY:</label>
                            <span class="minus">-</span>
                            <span class="num">01</span>
                            <span class="plus">+</span>
                        </div>
                    </div>    
                </div>
                <div className='box'>
                    <img id='ch' src={ch}></img>
                    <div className='textbox'>
                        <label id='text1'>CHOCOLATE</label>
                        <div id='qt'>
                            <label >QTY:</label>
                            <span class="minus">-</span>
                            <span class="num">01</span>
                            <span class="plus">+</span>
                        </div>
                    </div>    
                </div>
            </div>
            <div className='carousel'>
                
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