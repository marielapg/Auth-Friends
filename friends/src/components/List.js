import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getFriends } from '../actions/actions';
import Friend from './Friend';
import AddFriendForm from './AddForm';

const List = (props) => {
    const { data, getFriends } = props

    useEffect(() => {
        getFriends()
    }, [getFriends])

    return (
        <div>
            <h1> Hello Friends! </h1>
            <AddFriendForm/>
            {data.map(friend => (
                <Friend
                    key={friend.id}
                    name={friend.name}
                    age={friend.age}
                    email={friend.email} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { data: state.FriendsReducer.friendData }
}
export default connect(mapStateToProps, { getFriends })(List)