import React from 'react';

const Hello = () => {
    
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Boss</h1>    
    //     </div>
    // )

    // in javascript class is a key word so css attribute is refered to as className
    return  React.createElement('div', {id: 'hello', className: 'dummyClass'}, 
            React.createElement('h1', null, 'Hello Boss')
    );

}

export default Hello;