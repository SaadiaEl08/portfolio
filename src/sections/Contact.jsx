import { t } from "i18next";
import ContactFormElement from "../components/ContactFormElement";
import HeroHeader from "../components/heroHeader";
import { contacts } from "../constants";
import PersonalImg from './../components/PersonalImg';

const Contact = () => {
    return (
        <div className="md:text-lg sm:min-h-screen flex flex-col justify-center items-center gap-1 2xl:gap-6 p-2">
            <PersonalImg className="w-[70px] md:w-[150px] lg:w-[100px] xl:w-[150px] 2xl:w-[300px] " />
            <HeroHeader text={t("contact")} />
            <p className="text-md w-[80%] text-center">{t("contactText")}</p>
            <div className="w-full md:max-w-[70%]   p-2 flex flex-col justify-center items-start gap-4">
                <div className="w-full flex gap-2 justify-evenly items-center">
                    <ContactFormElement label={t("email")} type="email" placeholder={t("enterEmail")} icon="at" />
                    <ContactFormElement label={t("name")} type="text" placeholder={t("enterName")} icon="user" />
                </div>
                <textarea className="p-1 rounded-md outline-none text-black w-full  max-h-[150px]" name="message" id="" cols="20" rows="10" placeholder={t("enterMessage")}></textarea>
                <div className="w-full flex justify-end items-center pe-3">
                    <button className="CTA-btn rounded-md border-2 2xl:text-3xl ">{t("send")} <i className="fa-solid fa-paper-plane"></i></button>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2  ">
                <h2 className="font-bold">{t("contactWithMe")}</h2>
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