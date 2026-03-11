const FabIcon = ({ imageSrc, alt, color }) => {
    return (


        <div className={`flex items-center justify-center cursor-pointer rounded-full border-[1px] border-[#ddd] p-3 w-full gap-2 ${color}`}>
            <img src={imageSrc} alt={alt} className="h-6 w-6 " />
        </div>

    )
}
export default FabIcon