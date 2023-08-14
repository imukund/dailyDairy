import '../input.css'
function Input({placeholder}){
    return(
        <div className='input'>
            <input id='input-text' type='text' required></input>
            <div className='underline'></div>
            <label>{placeholder}</label> 
        </div>
    )
}
export default Input