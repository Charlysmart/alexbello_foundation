import Header from "../components/header";
import empowerment from "../assets/images/empowerment2.png";
import Button from "../components/button";

const EmpowermentSchemes = () => {
    return (
        <div>
            <Header />
            <main className="text-gray-600">
                <div className="h-80 overflow-hidden relative">
                    <img src={empowerment} alt="" className="object-center h-full w-full object-cover" />
                    <div className="bg-black w-full h-full absolute top-0 left-0 opacity-40" />
                    <div className="absolute flex justify-center items-center text-[2.5rem] font-bold text-white text-shadow-2xl text-shadow-amber-600 border w-full h-full top-0 left-0">
                        <h2>Empowerment Schemes</h2>
                    </div>
                    <p className="absolute bottom-5 left-5 text-white text-[1.3rem] font-medium"><a href="./" className="text-white">Home</a> / <span className="text-orange-400">Empowerment Schemes</span></p>
                </div>
                <section className="px-40 m-15">
                    <div className="space-y-5 shadow-2xl rounded-2xl p-10">
                        <h2 className="font-bold text-[2rem]">AlexBello Foundation Empowerment Initiatives</h2>
                        <p className="text-[1.5rem]">
                            At AlexBello Foundation, we believe empowerment is one of the most powerful tools for transforming lives and building stronger communities. Our mission is to create opportunities, restore hope, and equip individuals with the support and resources they need to rise above hardship and reach their full potential.
                        </p>
                        <h3 className="font-bold text-[2rem]">Our Vision</h3>
                        <p className="text-[1.5rem]">
                            We envision a society where every person, regardless of background or circumstance, has access to opportunities that enable growth, self-reliance, and meaningful contribution to their community. Through empowerment, we strive to build a more inclusive, equitable, and prosperous future for all.
                        </p>
                        <h3 className="font-bold text-[2rem]">Our Approach</h3>
                        <h4 className="font-semibold text-[1.5rem]">Education & Skill Development</h4>
                        <p className="text-[1.2rem]">
                            We believe knowledge creates lasting change. Through scholarships, vocational training, mentorship, and educational support programs, we equip individuals with practical skills and opportunities to succeed.
                        </p>
                        <h4 className="font-semibold text-[1.5rem]">Economic Empowerment</h4>
                        <p className="text-[1.2rem]">
                            We support individuals and families in building sustainable livelihoods through entrepreneurship support, financial literacy initiatives, capacity-building programs, and pathways to economic independence.
                        </p>
                        <h4 className="font-semibold text-[1.5rem]">Community Development</h4>
                        <p className="text-[1.2rem]">
                            We partner with communities to drive sustainable progress through initiatives that improve living conditions, strengthen local systems, and promote long-term social development.
                        </p>
                        <h4 className="font-semibold text-[1.5rem]">Youth Empowerment</h4>
                        <p className="text-[1.2rem]">
                            Young people are the future, and investing in them is central to our mission. Through leadership development, mentorship, training, and youth-focused opportunities, we help nurture confident and impactful future leaders.
                        </p>
                        <h3 className="font-bold text-[2rem]">Our Impact</h3>
                        <p className="text-[1.5rem]">
                            Through our empowerment programs, AlexBello Foundation has helped transform lives, strengthen communities, support aspiring entrepreneurs, empower women and youth, and contribute to building resilient, self-sustaining societies.
                        </p>
                        <h3 className="font-bold text-[2rem]">How You Can Support</h3>
                        <p className="text-[1.5rem]">
                            Real change happens through collective action. You can be part of this mission by donating, volunteering, or partnering with us. Your support helps us expand opportunities, uplift more lives, and create lasting impact.

                            Join AlexBello Foundation in empowering individuals, transforming communities, and building a brighter future together.
                        </p>
                        <Button label="Donate Now" />
                        <h3 className="font-bold text-[2rem]">Donate Now</h3>
                        <p className="text-[1.5rem]">
                            You can also reach us through the contact information on our website or visit our Contact Us page to send us a message.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default EmpowermentSchemes;