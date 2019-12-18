import React from 'react'

const Friend = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default Friend;