import React from 'react'
import WorkoutLog from '../EditingPage/WorkoutLog'


const FormStyle = {
    position: `absolute`,
    top: `50%`,
    left: '20%',
    transform: `translate(-13%, -50%)`,
    backgroundColor: `#FFF`,
    zIndex: 1000,
    padding: `20px`,
    borderRadius: `10px`,
    color: `#252629`
}

const OverLay ={
    position: `fixed`,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `rgba(0, 0, 0, .7)`,
    zIndex: 1000,
}


function CardDetail({setShowDetail, open, name, image, muscle, muscleImg, desc, editWorkout, id, sessionId, setSessionWorkouts}) {

    if (!open) return null

    const onClose = () => {setShowDetail(false)}

    return (
        <div style={OverLay}>
            <div style={FormStyle}>
            <h3 style={{ padding:"20px" }}>{name}</h3>
            <img src={image} />
            <img src={muscleImg} />
            <h5>Muscle Group: {muscle}</h5>
            <p>{desc}</p>
            {editWorkout? <WorkoutLog id ={id} editWorkout={editWorkout} sessionId={sessionId} setSessionWorkouts={setSessionWorkouts} setShowDetail={setShowDetail}/> : null}
        <button className="CloseBtn" onClick={onClose}>X</button>
            </div>
        </div>
        
    )
}

export default CardDetail
