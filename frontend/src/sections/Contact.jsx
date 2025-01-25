import { forwardRef, useEffect, useRef, useState } from "react";
import ContactFormElement from "../components/ContactFormElement";
import HeroHeader from "../components/HeroHeader";
import { contacts } from "../constants";
import PersonalImg from "../components/PersonalImg";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = forwardRef((props,ref) => {
  const { t } = useTranslation();
  const [infos, setInfos] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [infosError, setInfosError] = useState({
    name: "",
    email: "",
    message: "",
  });
  const sendBtnRef = useRef();
  const backend_endpoint = useSelector((state) => state.BACKEND_ENDPOINT);
  const isDarkTheme = useSelector((state) => state.isDarkTheme);

  const handleChange = (e) => {
    setInfos({ ...infos, [e.target.name]: e.target.value });
    if (e.target.value === "") {
      sendBtnRef.current.disabled = true;
      setInfosError({ ...infosError, [e.target.name]: "requiredField" });
      return;
    }
    const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (e.target.name === "email" && !emailReg.test(e.target.value)) {
      sendBtnRef.current.disabled = true;
      setInfosError({ ...infosError, [e.target.name]: "invalidEmail" });
      return;
    }
    setInfosError({ ...infosError, [e.target.name]: "" });
  };
  useEffect(() => {
    let emptyInputNumber = Object.keys(infos).filter((key) => {
      return infos[key] === "";
    });
    sendBtnRef.current.disabled = emptyInputNumber.length > 0;
  }, [infos]);

  const sendEmail = async () => {
    try {
      setIsSending(true);
      await axios
        .post(`${backend_endpoint}/send_email`, infos)
        .then(() => {
          setInfos({ name: "", email: "", message: "" });
          toast.success(`${t("EmailSentSuccess")}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            theme: isDarkTheme ? "dark" : "light",
            pauseOnHover: true,
          });
        })
        .catch(() => {
          toast.error(`${t("EmailNotSent")}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            theme: isDarkTheme ? "dark" : "light",
            pauseOnHover: true,
          });
        });
      setIsSending(false);
    } catch (error) {
      alert("Failed to send email.", error);
    }
  };
  return (
    <div
      ref={ref}
      id="contact"
      className="in-view snap-start flex flex-col justify-center items-center gap-1 sm:min-h-screen md:text-lg 2xl:gap-6 sm:p-2 pt-16 animation-fade-in"
    >
      <PersonalImg className="w-[70px] md:w-[150px] lg:w-[100px] xl:w-[150px] 2xl:w-[300px] " />
      <HeroHeader text={t("contact")} />
      <p className=" text-md w-[80%] text-center">{t("contactText")}</p>
      <div className=" w-full md:max-w-[70%]  p-2 flex flex-col justify-center items-start gap-4">
        <div className="w-full flex gap-2 justify-evenly items-center">
          <ContactFormElement
            label={t("email")}
            type="email"
            placeholder={t("enterEmail")}
            icon="at"
            onChange={handleChange}
            name="email"
            errMessage={t(infosError.email)}
            value={infos.email}
          />
          <ContactFormElement
            label={t("name")}
            type="text"
            placeholder={t("enterName")}
            icon="user"
            onChange={handleChange}
            name="name"
            errMessage={t(infosError.name)}
            value={infos.name}
          />
        </div>
        <div className="w-full gap-1">
          <textarea
            className="p-2 rounded-md outline-none text-[var(--input-text-color)] w-full  max-h-[150px] bg-[var(--input-background)]"
            name="message"
            id=""
            cols="20"
            rows="10"
            placeholder={t("enterMessage")}
            onChange={handleChange}
            value={t(infos.message)}
          ></textarea>
          <span
            className={`err before:content-['*'] text-red-300 ${
              infosError.message === "" ? "hidden" : "block"
            } `}
          >
            {infosError.message}
          </span>
        </div>

        <div
          className="w-full flex justify-end items-center pe-3"
          onClick={sendEmail}
        >
          <button
            ref={sendBtnRef}
            className="CTA-btn rounded-md border-2 2xl:text-3xl  disabled:cursor-not-allowed disabled:bg-gray-500"
            disabled={isSending}
            type="submit"
          >
            {isSending ? (
              <>
                {" "}
                {t("sending")}{" "}
                <i className="fa-solid fa-spinner animate-spin"></i>
              </>
            ) : (
              <>
                {" "}
                {t("send")} <i className="fa-solid fa-paper-plane"></i>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-2  ">
        <h2 className="font-bold">{t("contactWithMe")}</h2>
        <div className="border rounded-full p-2  bg-[var(--background-color)] flex">
          {contacts.map((contact, index) => {
            return (
              <div key={index} className=" flex flex-col gap-1 flex-nowrap">
                <a
                  href={contact.link}
                  target="_blank"
                  className="p-1 rounded-s-md outline-none text-black w-[89%]"
                >
                  <img
                    className="w-10 hover:scale-125 transition-transform duration-700"
                    src={contact.image}
                    alt={contact.name}
                    loading="lazy"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
});
Contact.displayName = "Contact";

export default Contact;
