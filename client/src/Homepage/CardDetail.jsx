import React from 'react'


const FormStyle = {
    position: `fixed`,
    top: `50%`,
    left: '50%',
    transform: `translate(-50%, -50%)`,
    backgroundColor: `#FFF`,
    zIndex: 1000,
    padding: `20px`,
    borderRadius: `10px`
}

const OverLay ={
    position: `fixed`,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `rgba(0, 0, 0, .7)`,
    zIndex: 1000
}


function CardDetail({setShowDetail, open, name, image, muscle, muscleImg, desc}) {

    if (!open) return null

    const onClose = () => {setShowDetail(false)}

    return (
        <div style={OverLay} onClick={onClose}>
            <div style={FormStyle}>
            <h3>{name}</h3>
            <img src={image} />
            <img src={muscleImg} />
            <h5>Muscle Group: {muscle}</h5>
            <p>{desc}</p>
            <button onClick={onClose} class="btn btn-primary">Close</button>
            </div>
        </div>
    )
}

export default CardDetail
