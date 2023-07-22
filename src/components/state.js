import { Component } from "react";
class State extends Component{
    constructor(){
        super();
        this.state = {
            count:0
        };
    }
    increase(){
        this.setState({
            count:this.state.count + 1
        })
    }
    render(){
        return(
            <div>
                <h1>VALUE IS: {this.state.count}</h1>
                <button onClick={()=>this.increase()}>CLick to increase</button>
            </div>
        )
    }
}
export default State