import React from 'react'
import {useState} from 'react'

function UpdateWorkoutLog({id, exerciseId, workoutLogId, setEditLog}) {

    const [logInput , setLogInput] = useState({
        set: "",
        rep: "",
        note: "",
        exercise_id: exerciseId,
        workout_session_id: id
    })

    function formFill(e){
        setLogInput({...logInput, [e.target.name]: e.target.value})
        
    }

    function updateLog(e){
        e.preventDefault()
        fetch(`http://localhost:3000/workout_logs/${workoutLogId}`, {
            method : 'Put',
            headers :{"Content-Type":"application/json"},
            body: JSON.stringify(logInput)
        })
        .then(res=>res.json())
        .then(LogData => {
             setEditLog(false)
            // setLoggedIn(true)
          })
    }

    return (
        <div>
            <form className="Form" onSubmit={updateLog}>
        <input
        type='text'
        name='set'
        placeholder='Input Sets'
        onChange={formFill}
        />
        <input
        type='text'
        name='rep' 
        placeholder='Input Reps'
        onChange={formFill}
        />
        <input
        type='text'
        name='note' 
        placeholder='Any Notes'
        onChange={formFill}
        />
        <button type='submit' class="btn btn-primary">Save</button>
        <button class="btn btn-primary" onclick = {()=>setEditLog(false)}>Back</button>
      </form>
        </div>
    )
}

export default UpdateWorkoutLog
