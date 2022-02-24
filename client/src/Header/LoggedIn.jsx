import React from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {setLoggedIn, } from '../states/action/actionCreater'

function LoggedIn({setPopUp}) {

    const currentUser = useSelector((state) => state.setCurrentUser)
    const dispatch = useDispatch();
    let history = useHistory();

    function logOut(){
        fetch("/logout", {method: 'DELETE'})
        dispatch(setLoggedIn(false))
        setPopUp(false)
        history.push('/')
    }

    return (
        <div className="Logged-in">
            <p>Welcome, {currentUser.username}!</p>
            <Link exact to="/user">
            <button>My Workout</button>
            </Link>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default LoggedIn
