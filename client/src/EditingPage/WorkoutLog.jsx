import React from 'react'
import {useState} from 'react'

function WorkoutLog({setSessionWorkouts, id, sessionId, setShowDetail}) {


    const [logInput , setLogInput] = useState({
        set: "",
        rep: "",
        note: "",
        exercise_id: id,
        workout_session_id: sessionId
    })

    function formFill(e){
        setLogInput({...logInput, [e.target.name]: e.target.value})
    }

    function addNewExercise(){
       
        fetch("/workout_logs", {
            method : 'POST',
            headers :{"Content-Type":"application/json"},
            body: JSON.stringify(logInput)
        })
        .then(res=>res.json())
        .then(newSessionWorkouts => {
            setSessionWorkouts(newSessionWorkouts)
            setShowDetail(false)
        })
    }

    return (
        <div>
    <form className="Form" onSubmit={addNewExercise}>
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
        <button type='submit'>Save</button>
      </form>
        </div>
    )
}

export default WorkoutLog
