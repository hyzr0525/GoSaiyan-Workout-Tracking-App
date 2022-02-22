import React from 'react'
import CardContainer from './CardContainer'
import NavBar from './NavBar'
import { useDispatch, useSelector } from 'react-redux'
import {filterByMuscles} from '../states/action/actionCreater'

function Homepage() {

    const dispatchFilter = useDispatch()
    const musclesList = useSelector((state)=>state.musclesList)
    
    const muscleGroups = musclesList.map(muscles => <div className="MuscleList"><NavBar key={muscles.id} name={muscles.name} muscleId={muscles.id}/></div> )

    
    return (
        <div>
            <div className="NavBar">
            <div className="MuscleList" onClick={() => dispatchFilter(filterByMuscles("All"))}>
                <h4>All</h4>
            </div>
            {muscleGroups}
            </div>
            <CardContainer/>
        </div>
    )
}

export default Homepage
