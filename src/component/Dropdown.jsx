import React from 'react'

const Dropdown = ({ label, firstOption }) => {
    return (

        <div className="flex flex-col gap-1">
            <label className="font-nunitofont font-bold">{label}</label>
            <select className="border border-gray-100 rounded-xl h-10 p-3 focus:outline-none text-gray-500 bg-gray-50">
                <option>{firstOption}</option>
            </select>
        </div>
    )
}

export default Dropdown