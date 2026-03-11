import logodark from "../public/Cars/logodark.svg";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="w-full bg-black text-white py-10 mt-20 rounded-t-[70px]">
            <div className="max-w-7xl mx-auto text-center px-6 flex flex-col items-center gap-6 mt-4">

                <img src={logodark} alt="PureCar" className="max-w-full h-auto" />
                <p className="max-w-2xl font-nunitofont">
                    PureCar is your ultimate community for all things cars. We connect buyers, sellers, and enthusiasts in one place, making it easy to find your next ride, sell your car, or share your passion for automobiles. Join our vibrant community today and be part of the conversation!
                </p>

                <ul className="flex flex-wrap justify-center gap-20 text-sm font-nunitofont mt-10 cursor-pointer">
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Refund</li>
                    <li>Prices</li>
                    <li>Sitemap</li>
                    <li>Forum</li>
                    <li>Blogs</li>
                    <li>FAQs</li>
                </ul>
                <hr className="w-full border-t border-white my-4" />

            </div>
            <div className="flex items-center justify-between pl-20 pr-20 pt-4">
                <p className="text-white font-sans">© 2025 Purecar. All rights reserved.</p>

                <div className="flex gap-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                        <FaYoutube size={20} />
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <FaTiktok size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
