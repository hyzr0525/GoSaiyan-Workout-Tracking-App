import React from 'react'

function ExerciseCards({name, image}) {

    return (
        <div>
            <img src={image} />
            <p>{name}</p>
        </div>
    )
}

export default ExerciseCards
