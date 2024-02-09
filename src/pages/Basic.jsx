import React from 'react'

const Basic = () => {
    const handleSubmit = e => {
        e.preventDefault()
        console.log("submitted");
    }
    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" required />
            <button>submit</button>
        </form>
    </>

}

export default Basic