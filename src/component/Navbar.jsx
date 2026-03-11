import logodark from "../assets/Images/logodark.svg";
function Navbar({ setShowAuth, setIsLogin }) {
    return (
        <header className="w-full bg-black text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 font-nunitofont">
                <img src={logodark} alt="PureLogo" className="max-w-full h-7 pl-10" />

                <ul className="flex gap-6 text-[15px] pt-2">
                    <li className="hover:text-red-600 cursor-pointer">Home</li>
                    <li className="hover:text-red-600 cursor-pointer">Forum</li>
                    <li className="hover:text-red-600 cursor-pointer">Events</li>
                    <li className="hover:text-red-600 cursor-pointer">Blogs</li>
                    <li className="hover:text-red-600 cursor-pointer">Businesses</li>
                    <li className="hover:text-red-600 cursor-pointer">FAQs</li>
                    <li className="hover:text-red-600 cursor-pointer">Contact US</li>
                </ul>
                <div className="flex gap-3 font-nunitofont">
                    <button onClick={() => { setShowAuth(true); setIsLogin(false); }} className="bg-white text-black rounded-full py-2 px-3 h-[36px] text-sm hover:bg-red-500 hover:text-white transition">Login</button>
                    <button className="bg-white text-black rounded-full text-sm hover:bg-red-500 hover:text-white transition px-4 py-2">Sell Your Car →</button>
                </div>
            </div>
        </header>
    );
}
export default Navbar