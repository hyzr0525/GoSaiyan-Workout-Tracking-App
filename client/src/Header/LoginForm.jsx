import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLoggedIn, setCurrentUser } from '../states/action/actionCreater'

function LoginForm({ open, onClose, formSwitch, setFormSwitch}) {

    const dispatch = useDispatch();
    let history = useHistory();
    const [validUser, setValidUser] = useState(true)
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
            if(currentUser.error){
                setValidUser(false)
            }else{
            dispatch(setCurrentUser(currentUser))
            dispatch(setLoggedIn(true))
            }
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
            dispatch(setCurrentUser(currentUser))
            dispatch(setLoggedIn(true))
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
        type='password'
        name='password' 
        placeholder='Input Password'
        onChange={formFill}
        />
       <button
       type='submit'>Sign In</button>
     </form>
       <button className='SignUpBtn' onClick={()=>setFormSwitch(false)}>Sign Up</button>
       {validUser? null: <p style={{color: "red"}}>please input valid Username and Password</p>}
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
        type='password'
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
     <div className='OverLay'>
       <div className='FormStyle'>
            {formSwitch? loginForm:signUpForm}
            <button className="CloseBtn" onClick={onClose}>X</button>
      </div>
      </div>
        </>
    )
}

export default LoginForm
