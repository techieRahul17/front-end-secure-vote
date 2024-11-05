import * as React from "react";

export function VotingInstructions() {
    const votingSteps = [
        {
            title: "Vote Freely",
            content: [
                "Make your voting decision independently.",
                "Do not let anyone pressure or intimidate you.",
                "If you feel threatened, please contact the provided helpline numbers."
            ]
        },
        {
            title: "Prepare for Voting",
            content: [
                "Have your Unique HASH-ID. Read through manifestos thoroughly and select your candidate carefully."
            ]
        },
        {
            title: "Voting Guidelines",
            content: [
                "You are allowed only one vote per election.",
                "You may choose only one candidate per vote.",
                "Candidate information is available on the voting page for your reference."
            ]
        },
        {
            title: "Selecting Your Candidate",
            content: [
                "Carefully select your desired candidate by confirming their name and symbol displayed on the screen."
            ]
        },
        {
            title: "Submitting Your Vote",
            content: [
                "After selecting your candidate, ensure you submit your vote to finalize the process."
            ]
        },
        {
            title: "Results Announcement",
            content: [
                "Election results will be announced automatically after the election concludes."
            ]
        },
        {
            title: "Vote Verification",
            content: [
                "You will have the opportunity to verify your vote status after you finish voting"
            ]
        }
    ];

    const handleCancel = () => {
        // Handle cancel logic here
    };

    const handleProceed = () => {
        // Handle proceed logic here
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-red-950 via-blue-950 to-blue-600 flex justify-center items-center p-8">
            <section className="w-full max-w-4xl text-white">
                <header className="text-xl font-normal mb-4 text-white">
                    This election is being conducted by the election commission of SSN.
                </header>

                <article className="border-2 border-blue-400 rounded p-8 bg-blue-900/40">
                    <h1 className="text-2xl mb-4">
                        Voting Instructions for College Election
                    </h1>
                    <p className="mb-6">
                        As a member of the college community, you are eligible to vote. Please follow these steps to cast your vote:
                    </p>

                    <div className="space-y-6">
                        {votingSteps.map((step, index) => (
                            <section key={index}>
                                <h2 className="font-normal">
                                    {index > 0 && `${index}. `}{step.title}:
                                </h2>
                                <ul className="list-disc pl-8 space-y-1">
                                    {step.content.map((item, itemIndex) => (
                                        <li key={itemIndex} className="text-white/90">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>

                    <p className="mt-6">
                        Thank you for participating in your college's democratic process!
                    </p>
                </article>

                <nav className="flex justify-end gap-4 mt-4">
                    <button
                        className="px-6 py-3 text-lg font-semibold text-blue-900 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all"
                        aria-label="Return to home page"
                    >
                        <a href="/">
                            CANCEL
                        </a>
                    </button>
                    <button
                        className="px-6 py-3 text-lg font-semibold text-blue-900 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all"
                    >
                        <a href="/voting-panel">
                            PROCEED
                        </a>
                    </button>
                </nav>
            </section>
        </main>
    );
}

export default VotingInstructions;