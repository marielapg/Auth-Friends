import React, { useState } from 'react'
import { connect } from 'react-redux'

import { postFriend } from '../actions/actions'

const AddForm = (props) => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = event => {
       event.target.name === "age" 
       ? setNewFriend({ ...newFriend, [event.target.name]: Number(event.target.value) }) 
       : setNewFriend({ ...newFriend, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.postFriend(newFriend)
        setNewFriend({
            name: '',
            age: '',
            email: ''
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type='text' name='name' onChange={handleChange} value={newFriend.name} />
                <label>Age</label>
                <input type='text' name='age' onChange={handleChange} value={newFriend.age} />
                <label>Email</label>
                <input type='text' name='email' onChange={handleChange} value={newFriend.email} />
                <button type='submit'>Add New Friend</button>
            </form>
        </div>
    )
}

export default connect(state => state, { postFriend })(AddForm);