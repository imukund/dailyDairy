import '../profile.css'
import Address from './address';
import Header from './header';
import Input from './input';
import prophoto from '../profile-photo.jpg'

function Profile(){
    return(
        <div className='promain'>
            <Header/>
            <div className='profile-box'>
                <div className='photo-box'>
                    <img src={prophoto}/>
                    <button id='pro-button'>Change photo</button><br/>
                    <button id='pro-password'>Change Password </button>
                </div>
                <div className='data-box'>
                    <div id='pro-heading'>
                        <label>MY PROFILE</label>
                    </div>
                    <div className='line'>
                        <Input placeholder='FIRST NAME'/>
                        <Input placeholder='LAST NAME'/>
                    </div>
                    <div className='line'>
                        <Input placeholder='PHONE'/>
                        <Input placeholder='EMAIL'/>
                    </div>
                    <div>
                        <Address/>
                    </div>
                </div>
            </div>
        </div>
    )
}
 export default Profile;