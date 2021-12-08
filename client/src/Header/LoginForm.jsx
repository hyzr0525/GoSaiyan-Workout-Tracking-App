import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'


const FormStyle = {
    position: `fixed`,
    top: `50%`,
    left: '50%',
    transform: `translate(-50%, -50%)`,
    backgroundColor: `#FFF`,
    zIndex: 1000,
    padding: `100px`,
    borderRadius: `10px`,
    
}

const OverLay ={
    position: `fixed`,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `rgba(0, 0, 0, .7)`,
    zIndex: 1000
}

function LoginForm({ open, onClose, formSwitch, setFormSwitch, setCurrentUser, setLoggedIn}) {

    let history = useHistory();

    const [input , setInput] = useState({
        username: "",
        password: "",
    })

    const [signUpInput , setSignUpInput] = useState({
        username: "",
        password: "",
        wieght: "",
    })


    function formFill(e){
        setInput({...input, [e.target.name]: e.target.value})
        
    }

    function formSignUP(e){
        setSignUpInput({...signUpInput, [e.target.name]: e.target.value})
        
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("/login", {
            method : 'POST',
            headers :{"Content-Type":"application/json"},
            body: JSON.stringify(input)
        })
        .then(res=>res.json())
        .then(currentUser => {
            // some conditional logic based on response data
            setCurrentUser(currentUser)
            setLoggedIn(true)
          })
    }

    function handleSignUp(e){
        e.preventDefault()
        fetch("/signup", {
            method : 'POST',
            headers :{"Content-Type":"application/json"},
            body: JSON.stringify(signUpInput)
        })
        .then(res=>res.json())
        .then(currentUser => {
            setCurrentUser(currentUser)
            setLoggedIn(true)
            history.push('/')
        })
    }

    const loginForm = 
    <>
     <form className="Form" onSubmit={handleSubmit}>
        <img src="https://i.pinimg.com/originals/5e/37/d3/5e37d353b188ffdbf1b23b5495061285.jpg"/>
       <input
        type='text'
        name='username'
        placeholder='Input Username'
        onChange={formFill}
        />
       <input
        type='text'
        name='password' 
        placeholder='Input Password'
        onChange={formFill}
        />
       <button
       type='submit'>Sign In</button>
     </form>
       <button onClick={()=>setFormSwitch(false)}>Sign Up</button>
    </>

    const signUpForm =
    <>
      <form className="Form" onSubmit={handleSignUp}>
        <img src="https://i.pinimg.com/originals/5e/37/d3/5e37d353b188ffdbf1b23b5495061285.jpg"/>
        <input
        type='text'
        name='username'
        placeholder='Input Username'
        onChange={formSignUP}
        />
        <input
        type='text'
        name='password' 
        placeholder='Input Password'
        onChange={formSignUP}
        />
        <input
        type='text'
        name='weight' 
        placeholder='Input weight'
        onChange={formSignUP}
        />
        <button type='submit'>Sign Up</button>
        <button onClick={()=>setFormSwitch(true)}>Back</button>
      </form>
    </>

    if (!open) return null

    return (
        <>
     <div style={OverLay}>
       <div style={FormStyle}>
            {formSwitch? loginForm:signUpForm}
            <button className="CloseBtn" onClick={onClose}>X</button>
      </div>
     </div>
        </>
    )
}

export default LoginForm
