import React from 'react'
import WorkoutCard from './WorkoutCard'
import {useState, useEffect} from 'react'
import CreateWorkout from './CreateWorkout'

function UserPage({setLoggedIn, setCreateWorkout, userWorkouts, setUserWorkouts, setEditWorkout}) {

    const [popUp, setPopUp] = useState(false)

    const createWorkoutPopUp = () => {setPopUp(true)}

    useEffect(() => {
        fetch("/workout_sessions")
        .then(res => res.json())
        .then(data =>setUserWorkouts(data))
        setLoggedIn(true)
        setEditWorkout(false)
    }, [])

    const workoutList = userWorkouts.map(workouts =>  <WorkoutCard title={workouts.title} workoutId={workouts.id} weekday={workouts.weekday} key={workouts.id} setUserWorkouts={setUserWorkouts}/>)

    return (
        <div>
            <br/>
            <h1 style={{ color: 'white' }}>Sore Today, Strong Tomorrow!</h1>
            
            {workoutList}
            
            <button onClick={createWorkoutPopUp}class="CreateWorkoutBtn"> + Create New Workout</button>
            

            <CreateWorkout open={popUp} onClose={() => setPopUp(false)}setCreateWorkout={setCreateWorkout}/>
            
        </div>
    )
}

export default UserPage
