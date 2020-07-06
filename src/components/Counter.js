import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
        
        super(props)
        //don't modify the state "directly" anywhere else but here in the constructor
        //state will not be rerendered in the browser if you do
        this.state = {
            count: 0
        }

    }
    
    // increment(){
        
    //     //setState() happens asyncrously
    //     //setState() accepts 2 parameters 
    //     //setState(async call, async callback)
    //     this.setState({
            
    //         count: this.state.count +1
    //         },
    //         ()=> {
    //             console.log('Callback value', this.state.count);
    //         }

    //     )
    //     console.log(this.state.count);

    // }

    increment(){

        this.setState(prevState =>({
            count: prevState.count +1
        }),
        ()=>{
            console.log(this.state.count);
        })
        console.log(this.state.count);
        
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            
            <div>

                <div>count - {this.state.count}</div>
                <button onClick={()=> this.incrementFive()}>Increment</button>

            </div>
        )
    }
}

export default Counter
