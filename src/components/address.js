import '../address.css'
function Address(){
    return(
        <div className='add-input'>
            <input id='add-input-text' type='text' required></input>
            <div className='add-underline'></div>
                <label>ADDRESS</label> 
        </div>
    )
}
 export default Address;