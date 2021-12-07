import React from 'react'
import {Link} from 'react-router-dom'

function Logo() {
    return (
        <div className="Logo">
            <Link exact to="/">
                <img src ="https://pbs.twimg.com/media/ExxrX7DVgAIEIQy?format=png&name=large" />
            <h1>GoSaiyan</h1>
            
            </Link>
        </div>
    )
}

export default Logo
