import React from 'react'
import UpdateWorkoutLog from './UpdateWorkoutLog'
import {useState} from 'react'



function ExerciseDetails({note, workoutSets, reps, exerciseName, exerciseImg, desc, muscleName, muscleImg, id, exerciseId, workoutLogId, setLoggedIn}) {

    const [editLog, setEditLog] = useState(false)
    
    function handleEditLog (){setEditLog(true)}
    
    const logDetail =
    <div>
        <p>Sets: {workoutSets}</p>
        <p>Reps: {reps}</p>
        <p>Notes: {note}</p>
        <button onClick={handleEditLog}>Edit Log</button>
    </div>

    

    return (
        <div>
            <h3>{exerciseName}</h3>
            <img src={exerciseImg} />
            <img src={muscleImg} />
            <h5>Muscle Group: {muscleName}</h5>
            <p>{desc}</p>
            <hr />
            {editLog === false ? logDetail: <UpdateWorkoutLog id={id} exerciseId={exerciseId}workoutLogId={workoutLogId}setEditLog={setEditLog} setLoggedIn={setLoggedIn}/>}
            
        </div>
    )
}

export default ExerciseDetails
