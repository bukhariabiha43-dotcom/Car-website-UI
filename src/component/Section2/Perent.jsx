import Login from "./Login";
import Register from "./Register";
import bgImage from "../../assets/Images/bgimage.webp"
import PureCar from "../../assets/Images/logodark.svg";

const Parent = ({ isLogin, setIsLogin }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}>

            <nav className=" absolute flex items-center justify-center top-6 left-6 px-8 cursor-pointer">
                <img src={PureCar} alt="Pure Car" />
            </nav>

            <div className="absolute top-6 right-16 text-white font-bold font-nunitofont flex items-center gap-6 cursor-pointer">
                <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
                <button
                    className="text-black font-bold font-nunitofont bg-white px-6 rounded-lg py-2 cursor-pointer"
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? "Register" : "Login"}
                </button>
            </div>


            {isLogin ? <Login /> : <Register />}

        </div>


    );
};

export default Parent;
