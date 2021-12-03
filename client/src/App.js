import './App.css';
import {useEffect, useState} from "react"
import {Route, Switch} from 'react-router-dom'
import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import UserPage from './UserPage/UserPage';
import EditingPage from './EditingPage/EditingPage';
import {useParams} from 'react-router-dom'

function App() {
  
  const [exercisesList, setExercisesList] = useState([])
  const [musclesList, setMusclesList] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [createWorkout, setCreateWorkout] = useState([])
  const [userWorkouts, setUserWorkouts] = useState([])
  const [sessionWorkouts, setSessionWorkouts] = useState([])


  // const id = useParams().id

  useEffect(() => {
    fetch("http://localhost:3000/muscles")
    .then(res => res.json())
    .then(data => setMusclesList(data))

    fetch("http://localhost:3000/exercises")
    .then(res => res.json())
    .then(data => setExercisesList(data))

    fetch('/me')
    .then(res => res.json())
    .then(user => {
      setCurrentUser(user)
      if (user = {error: "no active session"}) {
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
          <Homepage musclesList={musclesList} exercisesList={exercisesList}/>
       </Route>

       <Route exact path="/user">
          <UserPage setLoggedIn={setLoggedIn} setCreateWorkout={setCreateWorkout} userWorkouts={userWorkouts} setUserWorkouts={setUserWorkouts}/>
       </Route>

       <Route exact path="/edit/:id">
       <EditingPage musclesList={musclesList} exercisesList={exercisesList} sessionWorkouts={sessionWorkouts} setSessionWorkouts={setSessionWorkouts} setLoggedIn={setLoggedIn}/>
       </Route>
    </Switch>
    </div>
  );
}

export default App;