import React from 'react'
import {Link} from 'react-router-dom'

function Logo() {
    return (
        <div className="Logo">
            <img src="https://pbs.twimg.com/media/ExxrX7DVgAIEIQy?format=png&name=large"/>
            <Link exact to="/">
            <h1>GoSaiyan</h1>
            </Link>
        </div>
    )
}

export default Logo

{/* <img src ="https://pbs.twimg.com/media/ExxrX7DVgAIEIQy?format=png&name=large" /> */}

// https://www.netclipart.com/pp/m/315-3152190_dragon-ball-black-and-white-transparent-png-goku.png