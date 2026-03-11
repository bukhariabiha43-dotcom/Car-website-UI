import { useState } from "react";
import ChakeBox from "./ChakeBox";
import FabIcon from "./FabIcon";
import Button from "./Button";
import InputField from "./InputField";

const Register = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, });

    }
    const handleRegister = (e) => {
        e.preventDefault();


    };

    return (
        <div className="w-full flex justify-center mt-18">

            <div className=" bg-white text-[#333] p-[30px] shadow-white mt-4 rounded-[20px] w-full max-w-[450px]">

                <form onSubmit={handleRegister}>

                    <h1 className="text-[28px] font-bold font-sans text-center mb-2 ">Create a new account </h1>

                    <p className="text-gray-500 text-center">Enter your details to register</p>

                    <InputField label='Name' type='text' name='fullName' value={formData.fullName} onchange={handleChange} />

                    <InputField label='Email' type='email' name='email' value={formData.email} onchange={handleChange} />

                    <InputField label='Password' type='password' name='password' value={formData.password} onchange={handleChange} />
                    <ChakeBox label="Remember me" link="Forgot Password" />

                    <div className="flex gap-4 mt-4">

                        <FabIcon imageSrc="/src/assets/Images/google-Icon.webp" alt="Google" />
                        <FabIcon imageSrc="/src/assets/Images/fbIcon.webp" alt="Facebook" color="text-blue-700" />


                    </div>
                    <Button btn="Sing Up" />


                </form>
            </div>
        </div >
    );
};

export default Register;
