import React from 'react'
import NavBar from '../Homepage/NavBar'
import ExerciseDisplay from './ExerciseDisplay'
import SideBar from './SideBar'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'

function EditingPage({musclesList, sessionWorkouts, exercisesList, setSessionWorkouts, setLoggedIn}) {

     const id = useParams().id

     useEffect(() => {
         fetch(`/workout_sessions/${id}`)
         .then(res => res.json())
         .then(data =>{
            setSessionWorkouts(data)
            setLoggedIn(true)})
     }, [])

    const muscleGroups = musclesList.map(muscles => <NavBar key={muscles.id} name={muscles.name}/>)

      const userWorkoutSession = sessionWorkouts.map(workouts => <SideBar key={workouts.id} exercise={workouts.title}/>)

    console.log(sessionWorkouts)

    
    return (
     <div>
        <div className="NavBar">
            {muscleGroups}
        </div>
        <div>
            <ExerciseDisplay exercisesList={exercisesList}/>
        </div>
        <div className="SideBar">
        {userWorkoutSession}
            <button class="btn btn-primary">SAVE</button>
        </div>
     </div>
    )
}

export default EditingPage
