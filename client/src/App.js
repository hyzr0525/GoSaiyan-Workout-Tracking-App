import './App.css';
import {useEffect, useState} from "react"
import {Route, Switch} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getExercisesList, getMuscleList, setLoggedIn } from './states/action/actionCreater';
import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import UserPage from './UserPage/UserPage';
import EditingPage from './EditingPage/EditingPage';
import WorkoutPage from './WorkoutPage/WorkoutPage';

function App() {
  
  const [currentUser, setCurrentUser] = useState([])
  const [createWorkout, setCreateWorkout] = useState([])
  const [userWorkouts, setUserWorkouts] = useState([])
  const [sessionWorkouts, setSessionWorkouts] = useState([])
  const [editWorkout, setEditWorkout] = useState(false)


  const dispatch = useDispatch();


  // const id = useParams().id

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
      setCurrentUser(user)
      if (user.id) {
      dispatch(setLoggedIn(true))}
      else {
      dispatch(setLoggedIn(false))}
    })

  }, [])

  console.log(currentUser)



  return (
    <div className="App">
  
        <Header setCurrentUser={setCurrentUser} currentUser={currentUser}/>
        

    <Switch>
       <Route exact path="/">
          <Homepage />
       </Route>

       <Route exact path="/user">
          <UserPage setLoggedIn={setLoggedIn} setCreateWorkout={setCreateWorkout} userWorkouts={userWorkouts} setUserWorkouts={setUserWorkouts} setEditWorkout={setEditWorkout}/>
       </Route>

       <Route exact path="/edit/:id">
       <EditingPage  sessionWorkouts={sessionWorkouts} setSessionWorkouts={setSessionWorkouts} setLoggedIn={setLoggedIn} setEditWorkout={setEditWorkout} editWorkout={editWorkout}/>
       </Route>
       
       <Route exact path="/WorkoutSessions/:id">
        <WorkoutPage sessionWorkouts={sessionWorkouts} setSessionWorkouts={setSessionWorkouts} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} editWorkout={editWorkout} setEditWorkout={setEditWorkout}/>
       </Route>

    </Switch>
    </div>
  );
}

export default App;