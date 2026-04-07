import React from 'react'

const Spinner = ({ text = 'Loading...' }) => {
    return (
        <main className='loading-screen'>
            <div className='spinner' />
            <p className='loading-screen__text'>{text}</p>
        </main>
    )
}

export default Spinner
