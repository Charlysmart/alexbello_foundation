import Header from "../components/header";
import donate from "../assets/images/donate.png";

const Donate = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="h-80 overflow-hidden relative">
                    <img src={donate} alt="donate_banner" className="object-center h-full w-full object-cover" />
                    <div className="bg-black w-full h-full absolute top-0 left-0 opacity-40" />
                    <div className="absolute flex justify-center items-center  md:text-[2.5rem] text-[2rem] font-bold text-white text-shadow-2xl text-shadow-amber-600 border w-full h-full top-0 left-0">
                        <h2>Donate and Save Lives</h2>
                    </div>
                    <p className="absolute bottom-5 left-5 text-white md:text-[1.3rem] text-[1.1rem] font-medium"><a href="./" className="text-white">Home</a> / <span className="text-orange-400">Donate</span></p>
                </div>
                <div className="lg:px-40 md:px-10 px-2 lg:m-15 md:m-10 my-10 mx-2">
                    <section className="shadow-2xl rounded-3xl md:p-15 p-5 space-y-5">
                        <h2 className="font-bold md:text-[2.5rem] text-[1.8rem]">Donate and Save Lives</h2>
                        <p className="md:text-[1.3rem] text-[1.1rem]">
                            At AlexBello Charity Foundation, every donation is an opportunity to transform lives, restore hope, and support those in need. Through your generosity, we are able to provide relief, empower vulnerable individuals, and sustain initiatives that create lasting impact in communities.

                            Every contribution whether big or small is stewarded responsibly and used to support meaningful programs that uplift the less privileged and drive positive change.
                        </p>
                        <h3 className="md:text-[2rem] text-[1.5rem] font-semibold">Support Our Mission</h3>
                        <p className="md:text-[1.3rem] text-[1.1rem]">
                            When you give to AlexBello Charity Foundation, you become part of a mission dedicated to compassion, empowerment, and life-changing impact.
                        </p>
                        <h3 className="text-[2rem] font-semibold">Ways to Donate</h3>
                        <h4  className="md:text-[1.3rem] text-[1.1rem] font-medium">Bank Transfer</h4>
                        <div className="md:text-[1.2rem] text-[1rem] space-y-5">
                            <p>
                                You can support our work through direct bank transfer using the details below:
                            </p>
                            <p><b>Account Name:</b> AlexBello Charity Foundation</p>
                            <p><b>Account Number:</b> 009384556</p>
                            <p><b>Bank:</b> KeyStone Bank</p>
                            <h4>Cheque or Money Order</h4>
                            <p>You may also support us by sending a cheque or money order payable to AlexBello Charity Foundation.</p>
                            <b>Mail To:</b>
                            <address>No 12 our Lord's street, Ike Ekweremmadu road, independence layout, Enugu, Nigeria</address>
                            <h4>In-Person Donations</h4>
                            <p>You are welcome to visit our office during business hours to make your donation in person.</p>
                            <b>Office Address:</b>
                            <address>No 12 our Lord's street, Ike Ekweremmadu road, independence layout, Enugu, Nigeria</address>
                        </div>
                    </section>
                    <section className="shadow-2xl rounded-3xl md:text-[1.2rem] text-[1rem] md:p-15 py-10 p-5 space-y-5">
                        <h3 className="font-semibold md:text-[2rem] text-[1.5rem]">Why Your Support Matters</h3>
                        <p>Your donation helps us:</p>
                        <ul>
                            <li>Expand sustainable community impact initiatives</li>
                            <li>Provide relief to those in need</li>
                            <li>Fund empowerment and outreach programs</li>
                            <li>Support vulnerable individuals and families</li>
                        </ul>
                        <p>Together, we can bring hope, improve lives, and build a more equitable future.</p>
                        <h3 className="font-semibold md:text-[2rem] text-[1.5rem]">Thank You</h3>
                        <p>
                            We deeply appreciate your support and generosity. By choosing to give through AlexBello Charity Foundation, you are helping change lives for good.

                            <b>Join us in making a difference, Donate Today.</b>
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Donate;