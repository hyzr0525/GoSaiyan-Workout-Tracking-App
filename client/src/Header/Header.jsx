import React from 'react'
import Logo from './Logo'
import {useState} from 'react'
import LoginForm from './LoginForm'
import LoggedIn from './LoggedIn'
import {useSelector} from "react-redux"

function Header({setCurrentUser, currentUser}) {

    const [popUp, setPopUp] = useState(false)
    const [formSwitch, setFormSwitch] = useState(true)
    const setLoggedIn = useSelector((state) => state.setLoggedIn)
    const togglePopUp = () => {setPopUp(true)}


    return (
        <div className="Header">
            
            <Logo />
            
            { setLoggedIn === false ? <button onClick={togglePopUp}>Login</button> : <LoggedIn currentUser={currentUser} setPopUp={setPopUp}/>}

            {setLoggedIn === false ? <LoginForm
              open={popUp}
              setFormSwitch={setFormSwitch}
              formSwitch={formSwitch}
              setCurrentUser={setCurrentUser} 
              onClose={() => setPopUp(false)} 
            /> : null}

        </div>
    )
}

export default Header
