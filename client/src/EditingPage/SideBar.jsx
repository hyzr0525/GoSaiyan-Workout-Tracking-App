import React from 'react'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'


function SideBar({exercise}) {

    let history = useHistory();

    const [input , setInput] = useState({
        username: "",
        password: "",
    })

    function formFill(e){
        setInput({...input, [e.target.name]: e.target.value})
        
    }

    function createWorkout(e){
        e.preventDefault()
        fetch("http://localhost:3000/workout_sessions", {
            method : 'POST',
            headers :{"Content-Type":"application/json"},
            body: JSON.stringify(input)
        })
        .then(res=>res.json())
        .then(newWorkout => {
            console.log(newWorkout)
            history.push('/')
        })
    }
    
    return (
      <div>
            <p>{exercise}</p>
      </div>
    )
}

export default SideBar
