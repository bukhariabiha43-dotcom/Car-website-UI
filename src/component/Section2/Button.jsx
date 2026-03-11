import React from 'react'

const Button = ({ btn }) => {
    return (
        <div className='pt-4 text-white'>
            <button type="submit" className="w-full bg-black font-bold py-3 rounded-full hover:bg-gray-900 transition duration-500 cursor-pointer">{btn} </button>

        </div>
    )
}

export default Button;
