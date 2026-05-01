import { ArrowRight } from "lucide-react";
import outreach from "../assets/images/IMG-20260422-WA0043.jpg";
import events from "../assets/images/file_0000000091b471f4adbb80141415295c.png";
import Header from "../components/header";
const Events = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="h-80 overflow-hidden relative">
                    <img src={events} alt="" className="object-center h-full w-full object-cover" />
                    <div className="bg-black w-full h-full absolute top-0 left-0 opacity-40" />
                    <div className="absolute flex justify-center items-center  md:text-[2.5rem] text-[2rem] font-bold text-white text-shadow-2xl text-shadow-amber-600 border w-full h-full top-0 left-0">
                        <h2>Events/Blogs</h2>
                    </div>
                    <p className="absolute bottom-5 left-5 text-white md:text-[1.3rem] text-[1.1rem] font-medium"><a href="./" className="text-white">Home</a> / <span className="text-orange-400">Events</span></p>
                </div>
                <h2 className="text-center font-bold text-orange-600 md:text-[2rem] text-[1.5rem] mt-10">Stay Updated with AlexBello Charity Foundation</h2>
                <div className="flex w-full *:md:w-[48%] *:w-full py-15 lg:px-50 md:px-10 px-5 text-gray-700 justify-between lg:gap-10 gap-5 *:shrink-0 flex-wrap">
                    <section className="border h-120 rounded-3xl overflow-hidden border-gray-300 bg-white">
                        <div className="h-[50%] overflow-hidden border-b border-b-gray-300">
                            <img src={outreach} alt="" className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-125" />
                        </div>
                        <div className="py-5 px-5 space-y-5 h-[50%]">
                            <p className="md:text-[1.2rem] text-[1rem] max-h-[90%] lg:line-clamp-6 md:line-clamp-5 line-clamp-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, quam consectetur assumenda aliquam deserunt ut, repudiandae eaque enim eum quibusdam, odit harum. Ullam fuga ipsam incidunt consequuntur officiis maxime.</p>
                            <button className="flex text-[1.2rem] items-center-safe gap-2">Learn More <ArrowRight /></button>
                        </div>
                    </section>
                    <section className="border h-120 rounded-3xl overflow-hidden border-gray-300 bg-white">
                        <div className="h-[50%] overflow-hidden border-b border-b-gray-300">
                            <img src={outreach} alt="" className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-125" />
                        </div>
                        <div className="py-5 px-5 space-y-5 h-[50%]">
                            <p className="md:text-[1.2rem] text-[1rem] max-h-[90%] lg:line-clamp-6 md:line-clamp-5 line-clamp-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, quam consectetur assumenda aliquam deserunt ut, repudiandae eaque enim eum quibusdam, odit harum. Ullam fuga ipsam incidunt consequuntur officiis maxime.</p>
                            <button className="flex text-[1.2rem] items-center-safe gap-2">Learn More <ArrowRight /></button>
                        </div>
                    </section>
                    <section className="border h-120 rounded-3xl overflow-hidden border-gray-300 bg-white">
                        <div className="h-[50%] overflow-hidden border-b border-b-gray-300">
                            <img src={outreach} alt="" className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-125" />
                        </div>
                        <div className="py-5 px-5 space-y-5 h-[50%]">
                            <p className="md:text-[1.2rem] text-[1rem] max-h-[90%] lg:line-clamp-6 md:line-clamp-5 line-clamp-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, quam consectetur assumenda aliquam deserunt ut, repudiandae eaque enim eum quibusdam, odit harum. Ullam fuga ipsam incidunt consequuntur officiis maxime.</p>
                            <button className="flex text-[1.2rem] items-center-safe gap-2">Learn More <ArrowRight /></button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Events;