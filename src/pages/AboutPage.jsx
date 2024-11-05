import * as React from "react";

export function AboutPage() {
    const handleBackToHome = () => {
        // Navigation logic would go here
    };

    return (
        <main
            data-layername="about"
            className="flex flex-col items-center pt-32 pb-10 min-h-screen bg-gradient-to-b from-blue-800 to-green-400 text-gray-100"
            role="main"
            aria-label="About SafeVote"
        >
            <section className="flex flex-row w-full max-w-4xl mx-auto">
                {/* Vertical "About" margin line */}
                <div className="flex flex-col items-baseline pr-16 border-r-2 border-gray-300">
                    <span
                        className="text-4xl font-bold text-white tracking-wide transform -rotate-90"
                        style={{ writingMode: "horizontal-tb" }}
                    >
                        About
                    </span>
                </div>

                {/* Content Section */}
                <div className="pl-10 text-lg leading-relaxed text-white">
                    <h1 id="about-title" className="sr-only">
                        About SafeVote
                    </h1>
                    <p className="max-w-[700px]">
                        <span className="font-semibold text-gray-100">SafeVote</span> is an advanced, secure voting platform engineered to uphold
                        the integrity and confidentiality of digital voting. Leveraging robust
                        encryption algorithms and blockchain technology, SafeVote guarantees
                        that each vote is immutably recorded and fully protected from tampering
                        or unauthorized access. The platform employs multi-factor
                        authentication and cryptographic digital signatures to ensure voter
                        identity verification, allowing only authenticated users to participate
                        while maintaining complete anonymity.
                    </p>
                    <p className="mt-6 max-w-[700px]">
                        SafeVote's transparent, auditable system allows for the verification of vote
                        accuracy without compromising voter privacy, making it an ideal solution for
                        secure, high-integrity elections, surveys, and polls in a digital age.
                    </p>
                </div>
            </section>

            {/* Back to Home Button */}
            <div className="flex justify-end w-full max-w-4xl mt-10">
                <button
                    data-layername="backToHome"
                    className="px-6 py-3 text-lg font-semibold text-blue-900 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all"
                    onClick={handleBackToHome}
                    aria-label="Return to home page"
                >
                    <a href="/">BACK TO HOME</a>
                </button>
            </div>
        </main>
    );
}
