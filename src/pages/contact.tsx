import { Mail, MapPin, PhoneCall } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import contact from "../assets/images/file_00000000e5bc71f49199c231580551ec (1).png";

const Contact = () => {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="text-gray-700 bg-gray-100 flex-1">
                <div className="h-80 overflow-hidden relative">
                    <img src={contact} alt="" className="object-center h-full w-full object-cover" />
                    <div className="bg-black w-full h-full absolute top-0 left-0 opacity-40" />
                    <div className="absolute flex justify-center items-center md:text-[2.5rem] text-[2rem] font-bold text-white text-shadow-2xl text-shadow-amber-600 border w-full h-full top-0 left-0">
                        <h2>Contact Us</h2>
                    </div>
                    <p className="absolute bottom-5 left-5 text-white md:text-[1.3rem] text-[1.1rem] font-medium"><a href="./" className="text-white">Home</a> / <span className="text-orange-400">Contact Us</span></p>
                </div>
                <div className="h-full flex md:flex-row flex-col items-center lg:px-30 md:px-10 px-5 *:md:w-[49%] *:w-full justify-between py-15 md:gap-0 gap-10">
                    <section className="space-y-5">
                        <h2 className="font-bold text-black md:text-[2.5rem] text-[2rem]">Contact Us</h2>
                        <p className="md:text-[1.3rem] text-[1.1rem]">Email, call or complete the form to get in touch with AlexBello Charity Foundation.</p>
                        <div className="flex gap-3 items-center md:text-[1.3rem] text-[1.1rem]"><Mail className="text-blue-900" /><a href="mailto:alexbellocharityfoundation@gmail.com">alexbellocharityfoundation@gmail.com</a></div>
                        <div className="flex gap-3 items-center md:text-[1.3rem] text-[1.1rem]"><PhoneCall className="text-blue-900" /><a href="tel:+2349169335195">+2349169335195</a></div>
                        <div className="flex gap-3 items-center md:text-[1.3rem] text-[1.1rem]"><MapPin className="text-blue-900" /><address>No 12 our Lord's street, Ike Ekweremmadu road, independence layout, Enugu, Nigeria</address></div>
                    </section>
                    <section className="bg-white p-10 rounded-3xl shadow-2xl">
                        <h2 className="text-center text-blue-900 font-semibold text-[2rem] mb-5">Get in Touch</h2>
                        <form action="" className="space-y-5 flex flex-wrap justify-between">
                            <div className="*:block space-y-2 shrink-0 lg:w-[49%] w-full">
                                <label htmlFor="name" className="font-medium text-[1.2rem]">Name</label>
                                <input type="text" name="name" id="name" placeholder="Enter your name here" className="w-full border border-gray-300 h-12 p-3 rounded-full focus:outline-1 focus:outline-green-700" />
                            </div>
                            <div className="*:block space-y-2 shrink-0 lg:w-[49%] w-full">
                                <label htmlFor="email" className="font-medium text-[1.2rem]">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="example@mail.com" className="w-full border border-gray-300 h-12 p-3 rounded-full focus:outline-1 focus:outline-green-700" />
                            </div>
                            <div className="*:block space-y-2 shrink-0 lg:w-[49%] w-full">
                                <label htmlFor="phone" className="font-medium text-[1.2rem]">Phone Number</label>
                                <input type="tel" name="phone" id="phone" placeholder="Enter your phone number" className="w-full border border-gray-300 h-12 p-3 rounded-full focus:outline-1 focus:outline-green-700" />
                            </div>
                            <div className="*:block space-y-2 shrink-0 lg:w-[49%] w-full">
                                <label htmlFor="subject" className="font-medium text-[1.2rem]">Subject</label>
                                <input type="text" name="subject" id="subject" placeholder="Subject" className="w-full border border-gray-300 h-12 p-3 rounded-full focus:outline-1 focus:outline-green-700" />
                            </div>
                            <div className="*:block space-y-2 shrink-0 w-full">
                                <label htmlFor="message" className="font-medium text-[1.2rem]">Message</label>
                                <textarea name="message" id="message" placeholder="Type in your message..." className="resize-none w-full rounded-3xl border border-gray-300 h-40 p-3" />
                            </div>  
                            <button className="w-full rounded-full h-12 bg-orange-600 text-white text-[1.2rem] font-semibold">Submit</button>                          
                        </form>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;