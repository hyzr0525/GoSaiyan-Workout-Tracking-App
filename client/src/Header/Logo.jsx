import React from 'react'
import {Link} from 'react-router-dom'

function Logo() {
    return (
        <div>
            <Link exact to="/">
            <h1>GoSaiyan</h1>
            </Link>
        </div>
    )
}

export default Logo
