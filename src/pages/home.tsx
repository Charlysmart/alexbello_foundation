import Header from "../components/header";
import alex from "../assets/images/IMG-20260422-WA0049.jpg";
import founder from "../assets/images/1738188328106.jpg"
import Button from "../components/button";
import { ArrowUpRight, Building2, Goal, Handshake, HeartHandshake, Megaphone, Quote, TrendingUp } from "lucide-react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

type CardProps = {
  image: string;
  text: string;
};

const MarqueeItem = ({ image, text } : CardProps) => (
    <div className="h-100 rounded-4xl overflow-hidden relative lg:w-[25%] md:w-[50%] w-full shrink-0">
        <img src={image} alt={text} className="object-cover w-full h-full" />
        <div className="absolute bottom-0 backdrop-blur-md w-full h-15 flex border-t border-t-white flex-col justify-center px-3 z-100">
            <p className="text-[1.2rem] font-medium text-white">{text}</p>
        </div>
        <div className="w-fit h-fit p-2 rounded-full border border-white backdrop-blur-4xl z-100 absolute top-2 left-70">
            <ArrowUpRight size={25} color="white" />
        </div>
        <div className="bg-black absolute w-full h-full opacity-20 top-0 left-0" />
    </div>
);

const Home = () => {
    return (
        <div>
            <Header />
            <main className="text-gray-700 space-y-15 md:px-15 px-3 overflow-hidden">
                <section className="flex lg:flex-row flex-col mt-15 gap-5 items-center h-fit">
                    <div className="space-y-5 lg:w-[50%] w-full">
                        <h2 className="md:text-[2rem] text-[1.5rem] font-semibold text-green-700">Alexbello Foundation</h2>
                        <h1 className="md:text-[2.5rem] text-[2rem] font-bold text-black">Restoring Hope. Transforming Lives.</h1>
                        <p className="text-[1.3rem] font-md">
                            At Alexbello Foundation, we are committed to uplifting the less privileged and creating opportunities where they are needed most. We envision a society free from poverty, where every individual, regardless of background, has access to affordable education, quality healthcare, clean water, and the support they need to achieve their dreams.
                        </p>
                        <Button label="Donate Now" />
                    </div>
                    <div className="lg:w-[50%] w-full flex justify-center gap-5">
                        <div className="w-[50%] rounded-tl-[30%] overflow-hidden rounded-br-[30%] relative">
                            <img src={alex} alt="alex foundation" className="w-full rounded-xl shadow-lg h-full object-cover rounded-tl-[30%] rounded-br-[30%]" />
                            <div className="bg-black w-full h-full opacity-20 top-0 absolute" />
                            <span className="border border-white w-[98%] h-[98%] top-[2.5px] left-[2.5px] absolute rounded-tl-[30%] rounded-br-[30%]" />
                        </div>
                        <div className="w-[45%] md:h-100 h-70 space-y-5">
                            <div className="h-[47%] rounded-tl-[30%] overflow-hidden rounded-br-[30%] relative">
                                <img src={alex} alt="alex foundation" className="w-full rounded-xl shadow-lg h-full object-cover rounded-tl-[30%] rounded-br-[30%]" />
                                <div className="bg-black w-full h-full opacity-20 top-0 absolute" />
                                <span className="border border-white w-[98%] h-[98%] top-[2.5px] left-[2.5px] absolute rounded-tl-[30%] rounded-br-[30%]" />
                            </div>
                            <div className="h-[47%] rounded-tl-[30%] overflow-hidden rounded-br-[30%] relative">
                                <img src={alex} alt="alex foundation" className="w-full rounded-xl shadow-lg h-full object-cover rounded-tl-[30%] rounded-br-[30%]" />
                                <div className="bg-black w-full h-full opacity-20 top-0 absolute" />
                                <span className="border border-white w-[98%] h-[98%] top-[2.5px] left-[2.5px] absolute rounded-tl-[30%] rounded-br-[30%]" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex lg:flex-row flex-col w-full gap-5 *:lg:w-1/2">
                    <div className="space-y-5">
                        <h2 className="md:text-[2rem] text-[1.5rem] font-semibold text-black">About <span className="text-green-700">Alexbello Foundation</span></h2>
                        <p className="font-md md:text-[1.3rem] text-[1.1rem]">
                            The Alexbello Foundation, established in 2023, is a purpose-driven non-governmental organization committed to reducing poverty and addressing critical humanitarian challenges such as poor healthcare, hunger, and social inequality.

                            Founded by Alexander Okenwa, the foundation was built on a vision to restore hope, uplift the less privileged, and create opportunities for a better future. It focuses on empowering underserved individuals and communities through meaningful support and sustainable initiatives.

                            By providing access to essential resources, financial assistance, and life-changing opportunities, Alexbello Foundation helps people from all walks of life improve their living conditions and pursue their dreams.

                            Though relatively new, the foundation is driven by compassion, impact, and a strong commitment to positive change. Through acts of generosity and service, Alexbello Foundation strives to build a society where everyone has equal opportunities to thrive.
                        </p>
                        <div>
                            <section className="flex items-start md:text-[1.3rem] text-[1.1rem]">
                                <Handshake size={30} className="w-[40%]" />
                                <div>
                                    <h2 className="font-semibold text-blue-900">Our Mission</h2>
                                    <p>
                                        We are committed to empowering individuals by combating poverty, hunger, and inequality, providing the support and opportunities needed to build better lives and stronger communities.
                                    </p>
                                </div>
                            </section>
                            <section className="flex items-start md:text-[1.3rem] text-[1.1rem]">
                                <Goal size={30} className="w-[40%]" />
                                <div>
                                    <h2 className="font-semibold text-blue-900">Our Vision</h2>
                                    <p>
                                        We envision a world where every individual regardless of background, has the opportunity to reach their full potential, live with dignity, and contribute positively to their community and society at large.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="flex items-center justify-end overflow-hidden">
                        <img src={founder} alt="founder" className="rounded-3xl shadow-lg w-[95%]" />
                    </div>
                </section>
                <section className="space-y-10">
                    <div className="flex justify-center">
                        <div className="section-header">
                            <h2 className="font-bold">What we do at <span className="text-green-500">AlexBello Foundation</span></h2>
                            <span className="section-border" />
                        </div>
                    </div>
                    <div className="flex lg:flex-nowrap flex-wrap *:lg:w-1/4 *:md:w-[49%] *:w-full gap-2 *:transform *:hover:-translate-y-5 *:transition-transform *:duration-700 *:ease-in-out">
                        <section className="rounded-2xl p-3 flex flex-col gap-3 items-center justify-center shadow-2xl">
                            <div className="w-fit h-fit p-2 rounded-full bg-gray-300">
                                <HeartHandshake size={50} />
                            </div>
                            <h3 className="font-semibold text-black text-[1.5rem]">We Cater for the Needy</h3>
                            <p className="text-[1.1rem] text-center">
                                We provide essential support to individuals and communities facing hardship. From food assistance to basic necessities, our goal is to ensure that no one is left behind in times of need. We respond with compassion, dignity, and urgency to improve lives.
                            </p>
                            <a href="#" className="flex gap-1 items-center text-orange-600 font-semibold text-[1.3rem]">Explore <ArrowUpRight /></a>
                        </section>
                        <section className="rounded-2xl p-3 flex flex-col gap-3 items-center justify-center shadow-2xl">
                            <div className="w-fit h-fit p-2 rounded-full bg-gray-300">
                                <TrendingUp size={50} />
                            </div>
                            <h3 className="font-semibold text-black text-[1.5rem]">We Empower</h3>
                            <p className="text-[1.1rem] text-center">
                                We equip people with the tools, knowledge, and opportunities they need to become self-reliant. Through skill development, education, and financial support, we help individuals unlock their potential and create sustainable futures.
                            </p>
                            <a href="#" className="flex gap-1 items-center text-orange-600 font-semibold text-[1.3rem]">Explore <ArrowUpRight /></a>
                        </section>
                        <section className="rounded-2xl p-3 flex flex-col gap-3 items-center justify-center shadow-2xl">
                            <div className="w-fit h-fit p-2 rounded-full bg-gray-300">
                                <Building2 size={50} />
                            </div>
                            <h3 className="font-semibold text-black text-[1.5rem]">We Build</h3>
                            <p className="text-[1.1rem] text-center">
                                We are committed to building stronger communities by supporting initiatives that foster growth and development. From infrastructure to community programs, we invest in solutions that create lasting impact and improve quality of life.
                            </p>
                            <a href="#" className="flex gap-1 items-center text-orange-600 font-semibold text-[1.3rem]">Explore <ArrowUpRight /></a>
                        </section>
                        <section className="rounded-2xl p-3 flex flex-col gap-3 items-center justify-center shadow-2xl">
                            <div className="w-fit h-fit p-2 rounded-full bg-gray-300">
                                <Megaphone size={50} />
                            </div>
                            <h3 className="font-semibold text-black text-[1.5rem]">We Agitate</h3>
                            <p className="text-[1.1rem] text-center">
                                We advocate for change by speaking up against injustice, inequality, and societal challenges. Through awareness campaigns and strategic action, we push for policies and systems that protect and uplift every individual.
                            </p>
                            <a href="#" className="flex gap-1 items-center text-orange-600 font-semibold text-[1.3rem]">Explore <ArrowUpRight /></a>
                        </section>
                    </div>
                </section>
                <section className="flex h-30 justify-center w-full *:w-1/3">
                    <div className="flex">
                        <p className="text-center m-auto lg:text-[2rem] md:text-[1.5rem] text-[1rem]">
                            <span className="font-bold lg:text-[2.5rem] md:text-[2rem] text-[1.">1.5k</span> <br />Lives Touched
                        </p>
                        <div className="w-px h-full bg-orange-600 ml-auto" />
                    </div>
                    <div className="flex">
                        <p className="text-center m-auto lg:text-[2rem] md:text-[1.5rem] text-[1rem]">
                            <span className="font-bold lg:text-[2.5rem] md:text-[2rem] text-[1.">3+</span> <br />Years of Experience
                        </p>
                        <div className="w-px h-full bg-orange-600 ml-auto" />
                    </div>
                    <div className="flex">
                        <p className="text-center m-auto lg:text-[2rem] md:text-[1.5rem] text-[1rem]">
                            <span className="font-bold lg:text-[2.5rem] md:text-[2rem] text-[1.">50</span> <br />Teams
                        </p>
                    </div>
                </section>
                <section className="space-y-10">
                    <div className="flex justify-center">
                        <div className="section-header">
                            <h2 className="font-bold">Our Recent <span className="text-green-500">Event</span></h2>
                            <span className="section-border" />
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col bg-gray-100 justify-between items-center md:p-10 p-3 lg:mx-10 md:mx-5 mx-2 shadow-2xl">
                        <div className="w-[40%] h-80">

                        </div>
                        <div className="lg:w-[55%] w-full md:text-[1.3rem] text-[1.1rem]">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsum aut sed aperiam distinctio minus illo. Explicabo eum natus tempora fugit culpa est dolore laudantium sint nihil, praesentium ab odit harum aperiam? Sunt aspernatur, ipsum architecto harum qui repellat, consequuntur accusamus autem obcaecati odit asperiores non? Error praesentium ut ab?</p>
                        </div>
                    </div>
                    <NavLink to={"../events"}><b className="text-blue-900 inline-flex items-center gap-1 justify-center w-full md:text-2xl text-xl">Explore More Videos<ArrowUpRight /></b></NavLink>
                </section>
                <section className="space-y-10">
                    <div className="section-header">
                        <h3 className="font-medium text-green-700 text-[1.5rem]">Testimonials</h3>
                        <h2 className="font-bold">What People Say <span className="text-green-500">About Us</span></h2>
                        <span className="section-border" />
                    </div>
                    <Swiper spaceBetween={30}
                        slidesPerView={window.innerWidth > 1280 ? 3 : window.innerWidth > 768 ? 2 : 1}
                        pagination={{clickable : true}} 
                        autoplay={{delay: 3000}}
                        loop={true}
                        modules={[Pagination, Autoplay]}
                        className="h-110">

                        <SwiperSlide className="rounded-4xl bg-white overflow-hidden h-110 relative shadow-xl transition duration-2000 hover:scale-105">
                            <div className="h-[40%] overflow-hidden border-b-10 border-b-gray-500">
                                <img src={alex} alt="" className="w-full h-full" />
                            </div>
                            <div className="h-[50%] flex items-center p-6 md:text-[1.2rem] text-[1rem]">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, saepe quasi assumenda quaerat repellat consectetur enim laudantium architecto modi reiciendis neque veniam illo asperiores odit vero ad quae libero officia?</p>
                            </div>
                            <div className="absolute w-fit p-3 bg-blue-900 text-white rounded-full lg:top-[34%] top-[31%] left-2">
                                <Quote size={30} className="rotate-180" />
                            </div>
                            <div className="absolute w-fit p-3 bg-blue-900 text-white rounded-full bottom-5 right-2">
                                <Quote size={30} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-4xl bg-white overflow-hidden h-110 relative shadow-xl transition duration-2000 hover:scale-105">
                            <div className="h-[40%] overflow-hidden border-b-10 border-b-gray-500">
                                <img src={alex} alt="" className="w-full h-full" />
                            </div>
                            <div className="h-[50%] flex items-center p-6 md:text-[1.2rem] text-[1rem]">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, saepe quasi assumenda quaerat repellat consectetur enim laudantium architecto modi reiciendis neque veniam illo asperiores odit vero ad quae libero officia?</p>
                            </div>
                            <div className="absolute w-fit p-3 bg-blue-900 text-white rounded-full lg:top-[34%] top-[31%] left-2">
                                <Quote size={30} className="rotate-180" />
                            </div>
                            <div className="absolute w-fit p-3 bg-blue-900 text-white rounded-full bottom-5 right-2">
                                <Quote size={30} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-4xl bg-white overflow-hidden h-110 relative shadow-xl transition duration-2000 hover:scale-105">
                            <div className="h-[40%] overflow-hidden border-b-10 border-b-gray-500">
                                <img src={alex} alt="" className="w-full h-full" />
                            </div>
                            <div className="h-[50%] flex items-center p-6 md:text-[1.2rem] text-[1rem]">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, saepe quasi assumenda quaerat repellat consectetur enim laudantium architecto modi reiciendis neque veniam illo asperiores odit vero ad quae libero officia?</p>
                            </div>
                            <div className="absolute w-fit p-3 bg-blue-900 text-white rounded-full lg:top-[34%] top-[31%] left-2">
                                <Quote size={30} className="rotate-180" />
                            </div>
                            <div className="absolute w-fit p-3 bg-blue-900 text-white rounded-full bottom-5 right-2">
                                <Quote size={30} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-4xl bg-white overflow-hidden h-110 relative shadow-xl transition duration-2000 hover:scale-105">
                            <div className="h-[40%] overflow-hidden border-b-10 border-b-gray-500">
                                <img src={alex} alt="" className="w-full h-full" />
                            </div>
                            <div className="h-[50%] flex items-center p-6 md:text-[1.2rem] text-[1rem]">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, saepe quasi assumenda quaerat repellat consectetur enim laudantium architecto modi reiciendis neque veniam illo asperiores odit vero ad quae libero officia?</p>
                            </div>
                            <div className="absolute w-fit p-3 bg-blue-900 text-white rounded-full lg:top-[34%] top-[31%] left-2">
                                <Quote size={30} className="rotate-180" />
                            </div>
                            <div className="absolute w-fit p-3 bg-blue-900 text-white rounded-full bottom-5 right-2">
                                <Quote size={30} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>
                <section className="bg-gray-100 p-5 relative w-full overflow-hidden space-y-10 shadow-2xl">
                    <div className="section-header">
                        <h3 className="font-medium text-green-700 text-[1.5rem]">Gallery</h3>
                        <h2 className="font-bold">A peak at our events <span className="text-green-500">images</span></h2>
                        <span className="section-border" />
                    </div>
                    <div className="w-full relative slide flex gap-5">
                        <MarqueeItem image={alex} text ="Outreach at Ngwo layout" />
                        <MarqueeItem image={alex} text ="Outreach at Ngwo layout" />
                        <MarqueeItem image={alex} text ="Outreach at Ngwo layout" />
                        <MarqueeItem image={alex} text ="Outreach at Ngwo layout" />
                        <MarqueeItem image={alex} text ="Outreach at Ngwo layout" />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;