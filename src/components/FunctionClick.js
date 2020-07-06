import React from 'react'

function FunctionClick() {
    
    function clickHandler(){
        console.log("Button clicked");
    }

    return (
        <div>
            {/* clickHandler should be a function and not a function call ([clickHandler()]) */}
            <button onClick={clickHandler}>Click</button>          
        </div>
    )

}

export default FunctionClick
