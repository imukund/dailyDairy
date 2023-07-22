import '../App.css'
import { Link, useNavigate } from "react-router-dom";
function Hello(){
    return(
        <div className="login"><label id='log'>LOGIN</label>
            <form>
              <div className='form'>
                <div className='usnm'>
                  <i id='icon' class="bi bi-person-fill"></i>
                  <input id='un' type='text' placeholder='Enter Username'></input>
                </div>
                <div className='usnm'>
                  <i id='icon' class="bi bi-lock-fill"></i>
                  <input id='un' type='password' placeholder='Enter Password'/>
                </div>
                <button id='submit'>Login</button><br/>
                <label id='continue'>or continue with</label>
                <div className='google'>
                <i id='goo' class="bi bi-google"></i>
                <i id='goo' class="bi bi-instagram"></i>
                </div>
              </div>
            </form>
        </div>
    )
}

export default Hello 