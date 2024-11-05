import React from 'react';

interface Candidate {
    name: string;
    votes: number;
}

const candidates: Candidate[] = [
    { name: "Ramcharan", votes: 5 },
    { name: "Rahul", votes: 4 },
    { name: "Pragatheesh", votes: 3 },
    { name: "Saipranav", votes: 2 }
];

export function ElectionResults() {
    return (
        <main className="flex overflow-hidden flex-col items-center px-20 pt-28 pb-12 text-2xl text-black max-md:px-5 max-md:pt-24">
            <header>
                <h1 className="text-6xl text-white max-md:max-w-full max-md:text-4xl">
                    ELECTION NAME
                </h1>
            </header>

            <section className="w-full max-w-[1067px]">
                <h2 className="self-start mt-4 ml-20 text-3xl text-white max-md:ml-2.5">Results</h2>

                <div className="flex flex-wrap gap-5 justify-between px-7 py-4 mt-14 ml-8 w-full whitespace-nowrap rounded-md bg-stone-300 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div>Candidate</div>
                    <div>Votes</div>
                </div>

                {candidates.map((candidate, index) => (
                    <div key={index} className="flex flex-wrap gap-5 justify-between px-4 py-3.5 mt-9 ml-8 w-full whitespace-nowrap rounded-md bg-stone-300 max-md:max-w-full">
                        <div>{candidate.name}</div>
                        <div>{candidate.votes}</div>
                    </div>
                ))}
            </section>

            <footer className="self-end mt-32 text-white max-md:mt-10">
                <a href="/" className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                    BACK TO HOME
                </a>
            </footer>
        </main>
    );
}