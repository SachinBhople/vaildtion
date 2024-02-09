import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>

        <p><Link to="/">Basic</Link></p>
        <p><Link to="/advance">Advance</Link></p>
    </>
}

export default Navbar