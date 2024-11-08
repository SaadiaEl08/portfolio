import ContactFormElement from "../components/ContactFormElement";
import HeroHeader from "../components/heroHeader";
import { contacts } from "../constants";

const Contact = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 2xl:gap-6 p-4">
            <HeroHeader text="Contact" />
            <p>Have a question or want to work together? Leave your details and I&apos;ll get back to you as soon as possible.</p>
            <div className="w-full  p-2 flex flex-col justify-center items-start gap-4">
                <div className="w-full flex gap-2 justify-evenly items-center">
                    <ContactFormElement label="Email" type="email" placeholder="Enter your email" icon="at" />
                    <ContactFormElement label="Name" type="text" placeholder="Enter your name" icon="user" />
                </div>
                <textarea className="p-1 rounded-md outline-none text-black w-full max-h-[150px]" name="message" id="" cols="20" rows="10" placeholder="type your message here..."></textarea>
                <div className="w-full flex justify-end items-center pe-3">

                    <button className="CTA-btn rounded-md border-2 2xl:text-3xl ">Send <i className="fa-solid fa-paper-plane"></i></button>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2  ">
                <h2 className="font-bold">You can also contact me through</h2>
                <div className="border rounded-full p-2  bg-[var(--background-color)] flex ">
                    {
                        contacts.map((contact, index) => {
                            return (
                                <div key={index} className=" flex flex-col gap-1 flex-nowrap">
                                    <a href={contact.link} target="_blank" className="p-1 rounded-s-md outline-none text-black w-[89%]">
                                        <img className="w-10 hover:scale-125 transition-transform duration-700" src={contact.image} alt={contact.name} />
                                    </a>
                                </div>);
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Contact;