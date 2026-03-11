

const StateCard = ({ number, label }) => {
    return (
        <div className="text-center cursor-pointer">
            <h3 className="text-3xl font-semibold text-gray-700">{number}</h3>
            <p className="text-gray-600 mt-1">{label}</p>
        </div>
    );
}

export default StateCard