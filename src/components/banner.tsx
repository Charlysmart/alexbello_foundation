import { ArrowRight } from "lucide-react";

const Banner = () => {
    return (
        <>
            <div className="banner-bg w-full text-white flex justify-center items-center py-30">
                <div className="lg:w-[50%] md:w-[60%] w-[90%] flex flex-col justify-center items-center gap-2">
                    <h1 className="font-bold text-[2rem]">One Donation</h1>
                    <i className="font-semibold text-orange-400 text-[2rem]">One life transformed</i>
                    <p className="text-[1.1rem] text-center text-gray-300">With over three years of dedicated impact, we’ve mastered the art of stretching every naira to create real change. Join our community of thousands and help us bring hope to the next 1.6 million people.</p>
                    <div className="flex md:flex-row flex-col gap-5 mt-10">
                        <button className="bg-orange-400 shadow-lg shadow-orange-400 rounded-full px-7 py-4 font-medium md:text-[1.2rem] text-[1rem]">Donate Now</button>
                        <button className="flex items-center-safe gap-1 border border-orange-400 rounded-full px-7 py-4 font-medium text-[1.2rem]">Donate Now <ArrowRight /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;