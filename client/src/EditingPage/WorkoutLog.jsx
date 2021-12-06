import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function WorkoutLog({editWorkout, id, sessionId}) {

    let history = useHistory();

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

    function addNewExercise(e){
        fetch("http://localhost:3000/workout_logs", {
            method : 'POST',
            headers :{"Content-Type":"application/json"},
            body: JSON.stringify(logInput)
        })
        .then(res=>res.json())
        .then(newWorkoutLogData => {
            // some conditional logic based on response data
            // setCurrentUser(currentUser)
            // setLoggedIn(true)
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
        <button type='submit' class="btn btn-primary">Save</button>
      </form>
        </div>
    )
}

export default WorkoutLog
