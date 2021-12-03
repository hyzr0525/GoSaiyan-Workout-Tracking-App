import React from 'react'
import {useHistory} from 'react-router-dom'
import {useState} from "react"

const FormStyle = {
    position: `fixed`,
    top: `50%`,
    left: '50%',
    transform: `translate(-50%, -50%)`,
    backgroundColor: `#FFF`,
    zIndex: 1000,
    padding: `200px`,
    borderRadius: `10px`
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

function CreateWorkout({open, onClose, setCreateWorkout}) {

    let history = useHistory();

    const [newWorkout , setNewWorkout] = useState({
        title: "",
        weekday: "",
    })

    function Workoutform(e){
        setNewWorkout({...newWorkout, [e.target.name]: e.target.value})
    }

    function createNewWorkout(e){
        e.preventDefault()
        fetch("/workout_sessions", {
            method : 'POST',
            headers :{"Content-Type":"application/json"},
            body: JSON.stringify(newWorkout)
        })
        .then(res=>res.json())
        .then(newWorkoutData => {
            setCreateWorkout(newWorkoutData)
            console.log(newWorkoutData)
            history.push(`/edit/${newWorkoutData.id}`)
        })
    }
    
    if (!open) return null

    return (
    <div style={OverLay}>
      <div style={FormStyle}>
        <form className="Form" onSubmit={createNewWorkout}>
        <input
        type='text'
        name='title'
        placeholder='Name Your Workout'
        onChange={Workoutform}
        />
        <input
        type='text'
        name='weekday' 
        placeholder='Days Of The Week'
        onChange={Workoutform}
        />
        <button type='submit' class="btn btn-primary">Create</button>
        </form>
        <button class="btn btn-primary" onClick={onClose}>Close</button>
      </div>
    </div>
    )
}

export default CreateWorkout
