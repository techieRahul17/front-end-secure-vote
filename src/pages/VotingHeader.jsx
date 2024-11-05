import * as React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ContactInfo({ title, lines }) {
    return (
        <section className="text-lg text-white">
            <span className="text-sky-500">{title}:</span>
            <br />
            {/* eslint-disable-next-line react/prop-types */}
            {lines.map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}
        </section>
    );
}

// eslint-disable-next-line react/prop-types
function ActionButton({ children, variant = "primary", to }) {
    const baseStyles = "py-3.5 rounded-2xl";
    const variants = {
        primary: "bg-sky-600 text-gray-200",
        secondary: "bg-sky-700 text-white"
    };

    return (
        <Link to={to}>
            <button
                className={`${baseStyles} ${variants[variant]} px-14 max-md:px-5`}
                type="button"
                aria-label={children}
            >
                {children}
            </button>
        </Link>
    );
}

export function VotingHeader() {
    return (
        <header className="flex overflow-hidden flex-col items-end px-20 pt-14 pb-6 max-md:px-5 bg-gradient-to-t from-sky-800 to-sky-450">
            <div className="flex flex-col items-center w-full max-w-[1189px] max-md:max-w-full">
                <nav className="flex gap-5 justify-between self-end mr-20 max-w-full text-2xl text-white w-[440px] max-md:mr-2.5">
                    <Link to="/about" className="self-start hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500">
                        ABOUT
                    </Link>
                    <Link to="/features" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500">
                        OUR FEATURES
                    </Link>
                    <Link to="/voting-steps" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500">
                        STEPS
                    </Link>
                </nav>

                <main className="self-stretch mt-40 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae3f1ffd6b04fb4abb5330372a6148eab57c23d6fad408e4bc1f2257f77a7346?placeholderIfAbsent=true&apiKey=856530a2bc8b4fad805f6d030062538d"
                                alt="Voting illustration"
                                className="object-contain grow mt-9 w-full aspect-square max-md:mt-10 max-md:max-w-full"
                            />
                        </section>

                        <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                                <h1 className="mr-10 ml-2.5 text-5xl text-white max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
                                    Be a part of the decision
                                </h1>
                                <h2 className="gap-2.5 p-2.5 text-8xl text-black w-[540px] max-md:max-w-full max-md:text-4xl">
                                    Vote Today
                                </h2>
                                <div className="flex flex-col pr-11 pl-3.5 mt-8 w-full text-2xl whitespace-nowrap max-md:pr-5 max-md:max-w-full">
                                    <div className="flex flex-wrap gap-5 justify-between">
                                        <ActionButton variant="secondary" to="/registration">REGISTER</ActionButton>
                                        <ActionButton variant="secondary" to="/voting-instructions">INSTRUCTIONS</ActionButton>
                                        <ActionButton variant="secondary" to="/login">LOGIN</ActionButton>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>

                <div className="flex gap-10 mt-9 max-w-full w-[447px]">
                    <ContactInfo
                        title="Contact"
                        lines={["1800 9090 32", "1800 9000 64"]}
                    />
                    <ContactInfo
                        title="Email"
                        lines={[
                            "complaint@electionindia.gov.in",
                            "info@electionindia.gov.in"
                        ]}
                    />
                </div>

                <footer className="flex flex-col items-center mt-20 max-md:mt-10">
                    <p className="text-lg text-sky-500">
                        SSN COLLEGE OF ENGINEERING, KALAVAKKAM
                    </p>
                    <p className="mt-7 text-base text-white max-md:max-w-full">
                        Made with ❣️ by Saipranav M, Rahul V S and Pragadish
                    </p>
                </footer>
            </div>
        </header>
    );
}
