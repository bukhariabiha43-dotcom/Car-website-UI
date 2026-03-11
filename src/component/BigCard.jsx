const BigCard = ({ image, title, desc }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden flex-1">
            <img src={image} alt="Morgans" className="rounded-xl object-cover w-full" />
            <div className="p-4">
                <h2 className="text-xl font-nunitofont">{title}</h2>

                <p className="text-gray-500 text-sm mt-2">{desc}</p>
            </div>

        </div>
    )
}

export default BigCard