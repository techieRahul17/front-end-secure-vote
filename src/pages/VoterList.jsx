import React from 'react';

const voterData = [
    { hashId: 'ABC123', status: 'VOTED' },
    { hashId: 'BEC344', status: 'NOT VOTED' },
    { hashId: 'HSJB223', status: 'NOT VOTED' },
    { hashId: 'DEF223', status: 'VOTED' }
];

function VoterRow({ hashId, status }) {
    return (
        <div className="flex flex-wrap gap-5 justify-between px-4 py-3.5 mt-9 ml-8 w-full whitespace-nowrap rounded-md bg-stone-300 max-md:max-w-full">
            <p>{hashId}</p>
            <p>{status}</p>
        </div>
    );
}

function VoterList() {
    return (
        <main className="flex overflow-hidden flex-col items-center px-20 pt-28 pb-12 text-2xl text-black max-md:px-5 max-md:pt-24">
            <header>
                <h1 className="text-6xl text-white max-md:max-w-full max-md:text-4xl">
                    ELECTION NAME
                </h1>
                <p className="mt-4 text-3xl text-white max-md:max-w-full">
                    These details are fetched in real time from the database.
                </p>
            </header>

            <section className="w-full max-w-[1067px]">
                <div className="flex flex-wrap gap-5 justify-between px-7 py-4 mt-14 ml-8 whitespace-nowrap rounded-md bg-stone-300 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <h2>HASH-ID</h2>
                    <h2>Status</h2>
                </div>

                {voterData.map((voter) => (
                    <VoterRow
                        key={voter.hashId}
                        hashId={voter.hashId}
                        status={voter.status}
                    />
                ))}
            </section>

            <nav className="self-end mt-32 max-md:mt-10">
                <button
                    data-layername="backToHome"
                    className="px-6 py-3 text-lg font-semibold text-blue-900 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all"
                    aria-label="Return to home page"
                >
                    <a href="/">BACK TO HOME</a>
                </button>
            </nav>
        </main>
    );
}

export default VoterList;