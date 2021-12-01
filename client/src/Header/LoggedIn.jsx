import React from 'react'

function LoggedIn({currentUser, setLoggedIn, setPopUp}) {

    function logOut(){
        fetch("/logout", {method: 'DELETE'})
        setLoggedIn(false)
        setPopUp(false)
    }

    return (
        <div>
            <p>Welcome, {currentUser.username}</p>
            <button>My Workout</button>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default LoggedIn
