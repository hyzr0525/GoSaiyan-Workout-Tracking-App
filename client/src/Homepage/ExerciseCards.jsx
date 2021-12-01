import React from 'react'
import CardDetail from './CardDetail'

function ExerciseCards({name, image}) {

    return (
        <div>
            <img src={image} />
            <p>{name}</p>
            <CardDetail />
        </div>
    )
}

export default ExerciseCards
