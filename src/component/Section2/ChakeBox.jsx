import React from 'react'

const ChakeBox = ({ label, link, type = "checkbox" }) => {
    return (
        <div className='flex justify-between items-center mt-4 mb-5 text-[14px]'>
            <div className='min-h-[1.5em] mb-0.5 text-[14px] flex gap-2'>


                <input type={type} className='bg-blue-800 border-blue-800 cursor-pointer flex gap-2 items-center justify-center' />
                <label>{label}</label>
            </div>
            <a href='' className='font-bold'>{link} </a>
        </div>
    )
}

export default ChakeBox