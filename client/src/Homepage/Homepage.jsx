import React from 'react'
import CardContainer from './CardContainer'
import NavBar from './NavBar'

function Homepage({musclesList, exercisesList, setFilterCategory}) {

    const muscleGroups = musclesList.map(muscles => <div className="MuscleList"><NavBar key={muscles.id} name={muscles.name} muscleId={muscles.id} setFilterCategory={setFilterCategory} exercisesList={exercisesList}/></div> )

    

    return (
        <div>
            <div className="NavBar">
            <div className="MuscleList" onClick={() => setFilterCategory("All")}>
                <h4>All</h4>
            </div>
            {muscleGroups}
            </div>
            <CardContainer exercisesList={exercisesList}/>
        </div>
    )
}

export default Homepage
// https://i.pinimg.com/originals/28/05/bc/2805bc111fec6a91621cf902d965a0cd.png

// https://cdn.pixabay.com/photo/2017/04/13/14/55/man-2227804_960_720.jpg