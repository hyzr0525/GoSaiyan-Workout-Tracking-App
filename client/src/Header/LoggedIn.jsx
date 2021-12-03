import React from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

function LoggedIn({currentUser, setLoggedIn, setPopUp}) {

    let history = useHistory();

    function logOut(){
        fetch("/logout", {method: 'DELETE'})
        setLoggedIn(false)
        setPopUp(false)
        history.push('/')
    }


    return (
        <div>
            <p>Welcome, {currentUser.username}!</p>
            <Link exact to="/user">
            <button>My Workout</button>
            </Link>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default LoggedIn
