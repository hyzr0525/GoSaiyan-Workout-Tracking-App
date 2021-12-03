import React from 'react'

function WorkoutCard({title, weekday}) {
    
    return (
        <div className="WorkoutList">
            <h3>{title}</h3>
            <h3>{weekday}</h3> 
        </div>
    )
}

export default WorkoutCard
