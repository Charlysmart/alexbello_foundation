import { Mail, MapPin, PhoneCall } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/IMG-20260422-WA0027.jpg";

const Footer = () => {
    return (
        <>
            <div className="w-full footer-bg text-white md:p-10 py-10 px-10 flex flex-wrap space-y-10 justify-between">
                <section className="space-y-5 lg:w-[40%] md:w-[33%] w-full lg:px-10">
                    <div className="w-25 h-25 border mx-auto overflow-hidden rounded-full">
                        <img src={Logo} alt="" />
                    </div>
                    <p>
                        AlexBello Foundation is a nonprofit organization dedicated to empowering individuals and transforming communities through education, skill development, and sustainable support initiatives.
                    </p>
                    <b>Follow us on:</b>
                    <div>
                        <></>
                    </div>
                </section>
                <section className="lg:w-[30%] md:w-[33%] w-full">
                    <b className="text-[1.7rem] italic underline mb-3">Useful Links</b>
                    <ul className="lg:text-[1.2rem] text-[1.1rem] space-y-3">
                        <li><NavLink to={"../empowerment_schemes"}>Empowerment schemes</NavLink></li>
                        <li><NavLink to={"../events"}>News & Events</NavLink></li>
                        <li><NavLink to={"../donate"}>Donate</NavLink></li>
                        <li><NavLink to={"../contact_us"}>Contact us</NavLink></li>
                    </ul>
                </section>
                <section className="space-y-3 lg:w-[30%] md:w-[33%] w-full">
                    <b className="text-[1.7rem] block italic underline">Contact Us</b>
                    <div className="flex gap-3 items-center lg:text-[1.2rem] text-[1rem]"><Mail /><a href="mailto:alexbellocharityfoundation@gmail.com">alexbellocharityfoundation@gmail.com</a></div>
                    <div className="flex gap-3 items-center lg:text-[1.2rem] text-[1rem]"><PhoneCall /><a href="tel:+2349169335195">+2349169335195</a></div>
                    <div className="flex gap-3 items-center lg:text-[1.2rem] text-[1rem]"><MapPin /><address>No 12 our Lord's street, Ike Ekweremmadu road, independence layout, Enugu, Nigeria</address></div>
                </section>
                <hr className="w-full border-2 border-gray-500" />
                <section className="w-full text-center">
                    <p>&copy; {new Date().getFullYear()} AlexBello Charity Foundation | Designed and Developed by <Link to={"https://chiemerie.vercel.app"} target="_blank" className="text-orange-600 font-semibold">Chi_Emerie🔥</Link></p>
                </section>
            </div>
        </>
    );
}

export default Footer;