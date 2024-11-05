import * as React from "react";
import { useNavigate } from "react-router-dom";

function PersonalInfo() {
    const navigate = useNavigate();

    const profileData = [
        { label: "Name", value: "John Doe", className: "text-blue-400" },
        { label: "Your Unique HASH ID", value: "123ABC4569", className: "text-blue-400" },
        { label: "Email", value: "john.doe@gmail.com", className: "text-blue-400" },
        {
            label: "Public/Private Key Generation Status",
            value: "Successful",
            className: "text-blue-400"
        },
        { label: "Eligible", value: "True", className: "text-blue-400" },
    ];

    const handleVoteClick = () => {
        // Redirect to votingInstructions page when the vote button is clicked
        navigate("/voting-instructions");
    };

    return (
        <main
            className="min-h-screen w-full bg-gradient-to-b from-red-950 via-blue-700 to-blue-600 flex items-center justify-center"
            role="main"
            aria-label="Personal Information Page"
        >
            <div className="flex flex-col items-center px-8 py-12 max-w-4xl w-full">
                <header className="flex justify-between items-center w-full max-w-md">
                    <h1 className="text-2xl font-medium text-white">Personal Info</h1>
                    <button
                        className="px-8 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                        onClick={handleVoteClick} // Handle the Vote button click
                        aria-label="Vote button"
                    >
                        Vote
                    </button>
                </header>

                <div className="mt-16 w-full flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="w-48 h-48 bg-white rounded-full overflow-hidden flex-shrink-0">
                        <img
                            src="https://via.placeholder.com/150" // Placeholder professional image
                            alt="Profile avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col gap-6 flex-grow w-full max-w-md">
                        {profileData.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <span className={`text-sm ${item.className}`}>
                                    {item.label}
                                </span>
                                <span className="text-white text-lg">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default PersonalInfo;
