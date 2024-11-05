import * as React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function InputField({ label, type = "text", value, onChange }) {
    return (
        <label className="flex flex-col text-xl text-black mt-3">
            <span className="mb-2">{label}</span>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="flex shrink-0 self-stretch w-full bg-white h-[43px] px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={label}
                required
            />
        </label>
    );
}

function LoginForm() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate(); // Initialize navigate

    const handleChange = (field) => (event) => {
        setFormData((prev) => ({
            ...prev,
            [field]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log("Logging in with", formData);

        // Navigate to another page after successful login
        navigate("/personal-info"); // Redirect to the desired page
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start text-xl text-white max-md:mt-10"
        >
            <h1 className="text-5xl max-md:text-4xl">Login</h1>

            <InputField
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
            />

            <InputField
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange("password")}
            />

            <p className="mt-9 text-white">
                Not a user?{" "}
                <a
                    href="/registration"
                    className="text-blue-400 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                    Register now
                </a>
            </p>

            <button
                type="submit"
                className="px-6 py-3 text-lg font-semibold text-blue-900 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all"
            >
                LOGIN
            </button>
        </form>
    );
}

function LoginIllustration() {
    return (
        <section
            className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full"
            aria-label="Login illustration"
        >
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6221094fe2c7c8ad2a39e4d14fce6f10acddd7c0a340bec06c10c8831a8c6af3?placeholderIfAbsent=true&apiKey=856530a2bc8b4fad805f6d030062538d"
                alt="Login page illustration"
                className="object-contain grow mt-9 w-full aspect-[1.38] max-md:mt-10 max-md:max-w-full"
            />
        </section>
    );
}

export function LoginPage() {
    return (
        <main
            className="flex overflow-hidden flex-col justify-center items-start py-56 max-md:py-24 max-md:pr-5 bg-gradient-to-b from-[#FF4E6E] via-[#DA5F9C] to-[#2E33D1]"
            role="main"
        >
            <div className="w-full max-w-[1150px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <LoginIllustration />
                    <section
                        className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"
                        aria-label="Login form"
                    >
                        <LoginForm />
                    </section>
                </div>
            </div>
        </main>
    );
}
