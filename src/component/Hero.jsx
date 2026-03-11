import Photo from "../assets/Images/Photo.avif"
import Dropdowns from "./Dropdowns";

const Hero = () => {
    return (
        <div className="relative w-full h-[80vh] overflow-hidden rounded-b-[70px]">
            <img
                src={Photo}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-20 flex justify-center mt-24">
                <Dropdowns />
            </div>
        </div>
    );
};

export default Hero;
