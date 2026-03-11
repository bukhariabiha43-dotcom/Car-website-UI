import React from 'react'

const InputField = ({ label, type, placeholder, value, onchange, name, }) => {
    return (
        <div className='flex flex-col gap-1'>
            <label className='font-bold text-sm font-sans text-gray-800 block pt-3 pb-2'>{label}</label>
            <input type={type} name={name} placeholder={placeholder} value={value} onChange={onchange}
                className='h-12 border border-[#ddd] rounded-[50px] px-2.5 py-3.75 w-100 outline-none focus:ring-4 focus:ring-blue-200' />

        </div>


    )
}

export default InputField