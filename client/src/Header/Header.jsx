import React from 'react'
import Logo from './Logo'
import {useState, useEffect} from 'react'
import LoginForm from './LoginForm'
import LoggedIn from './LoggedIn'

function Header({setUserWorkouts, setCurrentUser, currentUser, setLoggedIn, loggedIn}) {

    const [popUp, setPopUp] = useState(false)
    const [formSwitch, setFormSwitch] = useState(true)
    
    console.log(loggedIn);
    const togglePopUp = () => {setPopUp(true)}

    // useEffect(() => {
    //     fetch('/me')
    //     .then(res => res.json())
    //     .then(user => {
    //         setCurrentUser(user)
    //         if (user = {error: "no active session"}) {
    //         setLoggedIn(false)}
    //         else {
    //         setLoggedIn(true)}
    //     }) 
    //  }, [])


    return (
        <div className="Header">
            
            <Logo />
            
            { loggedIn === false ? <button onClick={togglePopUp}>Login</button> : <LoggedIn setLoggedIn={setLoggedIn} currentUser={currentUser} setUserWorkouts={setUserWorkouts} setPopUp={setPopUp}/>}

            {loggedIn === false ? <LoginForm
              open={popUp}
              setFormSwitch={setFormSwitch}
              formSwitch={formSwitch}
              setCurrentUser={setCurrentUser} 
              setLoggedIn={setLoggedIn}
              onClose={() => setPopUp(false)} 
            /> : null}

        </div>
    )
}

export default Header
