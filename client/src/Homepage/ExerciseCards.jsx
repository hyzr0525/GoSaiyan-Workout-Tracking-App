import React from 'react'
import CardDetail from './CardDetail'
import {useState} from 'react'


function ExerciseCards({name, image, muscle, muscleImg, desc, editWorkout, id, sessionId}) {

    const [showDetail, setShowDetail] = useState(false)

    const toggleShowDetail = () => {setShowDetail(true)}
    

    return (
     <>
        <div onClick={toggleShowDetail}>
            <img src={image} />
            <p>{name}</p>
        </div>

        <div >
            <CardDetail open={showDetail} name={name} image={image} muscle={muscle} muscleImg={muscleImg} desc={desc} setShowDetail={setShowDetail} editWorkout={editWorkout} id={id} sessionId={sessionId}/>
        </div>
     </>
        
    )
}

export default ExerciseCards
