import * as React from "react";

const features = [
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ad8fcfd3d291103a73d46f5dc11f5f9201aa8d9c0578ebf2b98e434bdd3a006?placeholderIfAbsent=true&apiKey=856530a2bc8b4fad805f6d030062538d",
        title: "Secured by RSA/HMAC encryption",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e409cdcf65a09d17565b8e94fba9be471a043d7fabf5f64ed19a738f4df8a0f?placeholderIfAbsent=true&apiKey=856530a2bc8b4fad805f6d030062538d",
        title: "Backed by Blockchain based storage of Votes",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e485e469f331ef3f41d920c0a5f215ff3dde6ec675693f60d6209c071cda747?placeholderIfAbsent=true&apiKey=856530a2bc8b4fad805f6d030062538d",
        title: "Verifiable votes using Hash-Ids",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3f61a8dcdb32a6ed96574056e9f9107d0b6dad6c7f55e8a58a4c23a2a24bff2?placeholderIfAbsent=true&apiKey=856530a2bc8b4fad805f6d030062538d",
        title: "Easy to use",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f24d702a06f5aeaa620a9ed0682f4a6b50d77c68a69e6c5500713c3489cac10?placeholderIfAbsent=true&apiKey=856530a2bc8b4fad805f6d030062538d",
        title: "Multiple levels of authentication for votes",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d58901cf1cf700717e8dbf8466818f783d5e25f9dec5e0be5d31061822f4ac3?placeholderIfAbsent=true&apiKey=856530a2bc8b4fad805f6d030062538d",
        title: "Faster voting process",
    },
];

export function Features() {
    return (
        <main
            data-layername="features"
            className="flex overflow-hidden flex-wrap gap-10 items-start pt-40 pr-6 pb-7 pl-20 bg-white max-md:px-5 max-md:pt-24"
        >
            <section className="flex flex-col grow shrink-0 items-start self-start basis-0 w-fit max-md:max-w-full">
                {features.map((feature, index) => (
                    <article
                        key={index}
                        className="flex flex-wrap gap-10 max-w-full text-2xl text-slate-950"
                    >
                        <img
                            loading="lazy"
                            src={feature.icon}
                            alt=""
                            className="object-contain shrink-0 aspect-[0.99] w-[73px]"
                        />
                        <h3 className="flex-auto self-start mt-2.5 w-[477px] max-md:max-w-full">
                            {feature.title}
                        </h3>
                    </article>
                ))}
                <nav className="self-end mt-32 text-2xl text-black max-md:mt-10">
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
            </section>
        </main>
    );
}