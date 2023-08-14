import '../header.css'
import logo from '../../src/pic.png'
import { useNavigate } from 'react-router-dom';

function Header({heading}){
    const navigate=useNavigate();
    return(
        <div className='Main'>
                <img id='pic' src={logo}/>
                <font id='Head'>{heading}</font><br/>
                <ul className='List'>
                    <button type='text' onClick={()=>navigate("/")} class='Button'><i class="bi bi-house-door-fill"></i></button>
                    <button type='text' onClick={()=>navigate("/order")} class='Button'><i class="bi bi-clock-history"></i></button>
                    <button type='text' onClick={()=>navigate("/cart")} class='Button'><i class="bi bi-cart-fill"></i></button>
                    <button type='text' onClick={()=>navigate("/notification")} class='Button'><i class="bi bi-bell-fill"></i></button>
                    <button type='text' onClick={()=>navigate("/profile")} class='Button'><i class="bi bi-person-fill"></i></button>
                </ul> 
        </div>
    )
}
export default Header