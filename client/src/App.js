import './App.css';
import {useEffect, useState} from "react"
import {Route, Switch} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { getExercisesList, getMuscleList, setLoggedIn, setCurrentUser } from './states/action/actionCreater';
import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import UserPage from './UserPage/UserPage';
import EditingPage from './EditingPage/EditingPage';
import WorkoutPage from './WorkoutPage/WorkoutPage';

function App() {
  
  const [sessionWorkouts, setSessionWorkouts] = useState([])
  const [editWorkout, setEditWorkout] = useState(false)
  const dispatch = useDispatch();


  useEffect(() => {
    
    fetch("http://localhost:3000/exercises")
    .then(res => res.json())
    .then(data => dispatch(getExercisesList(data)))

    fetch("http://localhost:3000/muscles")
    .then(res => res.json())
    .then(data => dispatch(getMuscleList(data)))
    
    fetch('/me')
    .then(res => res.json())
    .then(user => {
      dispatch(setCurrentUser(user))
      if (user.error) {
      dispatch(setLoggedIn(false))
      console.log(user.error)}
      else {
      dispatch(setLoggedIn(true))}
    })

  }, [])


  return (
    <div className="App">

        <Header />
    <Switch>
       <Route exact path="/">
          <Homepage />
       </Route>

       <Route exact path="/user">
          <UserPage />
       </Route>

       <Route exact path="/edit/:id">
       <EditingPage  sessionWorkouts={sessionWorkouts} setSessionWorkouts={setSessionWorkouts} setEditWorkout={setEditWorkout} editWorkout={editWorkout}/>
       </Route>
       
       <Route exact path="/WorkoutSessions/:id">
        <WorkoutPage editWorkout={editWorkout} setEditWorkout={setEditWorkout}/>
       </Route>
    
    </Switch>
    </div>
  );
}

export default App;