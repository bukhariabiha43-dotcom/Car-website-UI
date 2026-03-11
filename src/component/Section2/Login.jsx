import { useState } from "react";
import ChakeBox from "./ChakeBox";
import FabIcon from "./FabIcon";
import InputField from "./InputField";
import Button from "./Button";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "", })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, })
    }

    const handleLogin = (e) => {
        e.preventDefault();

    }
    return (
        <div className="w-full flex justify-center mt-6">

            <div className=" bg-white text-[#333] p-[30px] mt-4 rounded-[20px] shadow-xl w-full max-w-[450px]">

                <form onSubmit={handleLogin}>
                    <h1 className="text-[28px] font-bold font-sans text-center mb-8">
                        Login to your  Account
                    </h1>
                    <p className="text-gray-500 text-center font-nunitofont">Enter your details to login</p>

                    <InputField label='Email' type='email' name='email' value={formData.email} onchange={handleChange} />

                    <InputField label='Password' type='password' name='password' value={formData.password} onchange={handleChange} />

                    <ChakeBox label="Remember me" link="Forgot Password" />
                    <div className="flex gap-4 mt-4">

                        <FabIcon imageSrc="/src/assets/Images/google-Icon.webp" alt="Google" />
                        <FabIcon imageSrc="/src/assets/Images/fbIcon.webp" alt="Facebook" color="text-blue-700" />


                    </div>

                    <Button btn='LogIn' />

                </form>
            </div>
        </div>
    );
}

export default Login;
