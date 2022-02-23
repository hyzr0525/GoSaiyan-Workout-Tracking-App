import React from 'react'
import {useDispatch} from "react-redux"
import {filterByMuscles} from "../states/action/actionCreater"

function NavBar({name}) {

    const dispatchFilter = useDispatch()

    return (
        <div onClick={() => dispatchFilter(filterByMuscles(name))}>
            <h4>{name}</h4>
        </div>
    )
}

export default NavBar
