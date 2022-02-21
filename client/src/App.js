import './App.css';
import {useEffect, useState} from "react"
import {Route, Switch} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getExercisesList } from './states/action/actionCreater';
import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import UserPage from './UserPage/UserPage';
import EditingPage from './EditingPage/EditingPage';
import WorkoutPage from './WorkoutPage/WorkoutPage';

function App() {
  
  const [exercisesList, setExercisesList] = useState([])
  const [filterCategory, setFilterCategory] = useState("All")
  const [musclesList, setMusclesList] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [createWorkout, setCreateWorkout] = useState([])
  const [userWorkouts, setUserWorkouts] = useState([])
  const [sessionWorkouts, setSessionWorkouts] = useState([])
  const [editWorkout, setEditWorkout] = useState(false)
  const exerciseList = useSelector((state) => state)
  const dispatchExerciseList = useDispatch();

  console.log(exerciseList)

  

  function filterExercises(){
    if (filterCategory !== "All"){
      const filteredExercises = exercisesList.filter(exercises => exercises.muscle.name.includes(filterCategory))
      return filteredExercises
    }else{
      return exercisesList
    }
  }


  // const id = useParams().id

  useEffect(() => {
    fetch("http://localhost:3000/muscles")
    .then(res => res.json())
    .then(data => setMusclesList(data))

    fetch("http://localhost:3000/exercises")
    .then(res => res.json())
    .then(data => setExercisesList(data))

    fetch("http://localhost:3000/exercises")
    .then(res => res.json())
    .then(data => dispatchExerciseList(getExercisesList(data)))
         

  }, [])

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(user => {
      setCurrentUser(user)
      if (user) {
      setLoggedIn(false)}
      else {
      setLoggedIn(true)}
    })
      
  }, []) 


  return (
    <div className="App">
  
        <Header setCurrentUser={setCurrentUser} currentUser={currentUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        

    <Switch>
       <Route exact path="/">
          <Homepage musclesList={musclesList} exercisesList={filterExercises()} setFilterCategory={setFilterCategory}/>
       </Route>

       <Route exact path="/user">
          <UserPage setLoggedIn={setLoggedIn} setCreateWorkout={setCreateWorkout} userWorkouts={userWorkouts} setUserWorkouts={setUserWorkouts} setEditWorkout={setEditWorkout}/>
       </Route>

       <Route exact path="/edit/:id">
       <EditingPage musclesList={musclesList} exercisesList={filterExercises()} sessionWorkouts={sessionWorkouts} setSessionWorkouts={setSessionWorkouts} setLoggedIn={setLoggedIn} setEditWorkout={setEditWorkout} editWorkout={editWorkout} setFilterCategory={setFilterCategory}/>
       </Route>
       
       <Route exact path="/WorkoutSessions/:id">
        <WorkoutPage sessionWorkouts={sessionWorkouts} setSessionWorkouts={setSessionWorkouts} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} editWorkout={editWorkout} setEditWorkout={setEditWorkout}/>
       </Route>

    </Switch>
    </div>
  );
}

export default App;