import * as React from "react";

const stepsData = [
    {
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c552bce18a369b1620211ac2a43be44185172214c398f8ff6322dd85c9f125d2?placeholderIfAbsent=true&apiKey=856530a2bc8b4fad805f6d030062538d",
        imageAlt: "Registration step icon",
        description: "Register yourself by filling your university issued secret code and E-Mail. Set your username and password"
    },
    {
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a525bf2f4d94246249b8bcd8ba73fd4888b480bae394d6b8c451d4fe4cba5c2?placeholderIfAbsent=true&apiKey=856530a2bc8b4fad805f6d030062538d",
        imageAlt: "Sign in step icon",
        description: "Signin as user, and verify your personal information. Note down your HASH-ID"
    },
    {
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/0481a2e0298cab5b235a94f174484297664f7d872e86e26198d3640c24fd741a?placeholderIfAbsent=true&apiKey=856530a2bc8b4fad805f6d030062538d",
        imageAlt: "Vote option step icon",
        description: "Go to vote option on dashboard"
    },
    {
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc8d18d7914cfb3d0778699d9ac4f86302a2bd34896a59cfed54a459ffa9e41f?placeholderIfAbsent=true&apiKey=856530a2bc8b4fad805f6d030062538d",
        imageAlt: "Cast vote step icon",
        description: "Cast your vote!"
    },
    {
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f89a6a7e345cb0ad3735dcd6f9eecdca5025b607b486aa61864d38f573e80bab?placeholderIfAbsent=true&apiKey=856530a2bc8b4fad805f6d030062538d",
        imageAlt: "Verify vote step icon",
        description: "Verify your vote by checking if the HASH-ID has been marked as voted in the public verification page"
    }
];

function StepItem({ imageUrl, imageAlt, description }) {
    return (
        <div className="flex flex-wrap gap-10 self-center mt-10 w-full max-w-[1008px] max-md:max-w-full">
            <img
                loading="lazy"
                src={imageUrl}
                alt={imageAlt}
                className="object-contain shrink-0 aspect-square w-[93px]"
            />
            <p className="flex-auto self-start mt-4 w-[844px] max-md:max-w-full">
                {description}
            </p>
        </div>
    );
}

export function VotingSteps() {
    return (
        <main className="flex overflow-hidden flex-col pt-28 pr-6 pb-7 pl-20 text-2xl text-black bg-white max-md:px-5 max-md:pt-24">
            <h1 className="self-center text-8xl max-md:max-w-full max-md:text-4xl">
                Follow these easy steps
            </h1>

            {stepsData.map((step, index) => (
                <StepItem
                    key={index}
                    imageUrl={step.imageUrl}
                    imageAlt={step.imageAlt}
                    description={step.description}
                />
            ))}

            <nav className="self-end mt-14 max-md:mt-10">
                <button
                    data-layername="backToHome"
                    className="px-6 py-3 text-lg font-semibold text-blue-900 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all"
                    aria-label="Return to home page"
                >
                    <a href="/">
                        BACK TO HOME
                    </a>
                </button>
            </nav>
        </main>
    );
}