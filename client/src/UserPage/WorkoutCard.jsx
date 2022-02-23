import React from 'react'
import {Link} from 'react-router-dom'

function WorkoutCard({title, weekday, workoutId}) {

    function DeleteWorkoutSession(){
        fetch(`/workout_sessions/${workoutId}`, {
        method: "DELETE"
    })}

    
    
    return (
    <div className="WorkoutSessionContainer">
        <Link to={`/WorkoutSessions/${workoutId}`}>
        <div className="WorkoutList">
            <h3>{title}</h3>
            <h3>{weekday}</h3>
        </div>
        </Link>
            <button onClick={DeleteWorkoutSession}className="DeleteSessionBtn">X</button>
    </div>
    )
}

export default WorkoutCard

