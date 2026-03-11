const SmallCard = ({ image, title, desc }) => {
    return (
        <div className="flex gap-3 items-start">
            <img src={image} alt="logo" className="w-45 h-45 object-fit rounded-md" />

            <div>
                <h3 className="font-bold font-nunitofont">{title}</h3>
                <p className="font-nunitofont ">{desc}</p>
            </div>

        </div>
    )
}

export default SmallCard