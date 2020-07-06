import React from 'react'
 

const Person = (props) => {

    console.log(props)

    const {name,age,skill} = props;

    return (
        <div>
            <h1>
                I am {name} I am {age} years old. I know {skill}.
            </h1>
        </div>
    )
}

export default Person
