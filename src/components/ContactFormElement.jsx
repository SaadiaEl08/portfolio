
const ContactFormElement = ({ label, icon, errMessage = "" ,...props}) => {
    return (
        <div className="flex flex-col gap-1 flex-nowrap">
            <label htmlFor={label}>{label}</label>
            <div className="flex items-center justify-start">
                <input className="p-1 rounded-s-md outline-none text-black w-[89%]"  id={label}  {...props} />
                <div className="p-1 rounded-e-md bg-[var(--background-color)]">
                    <i className={`fa-solid fa-${icon}`} ></i>
                </div>
            </div>
            <span className={`err before:content-['*']  text-red-300 ${errMessage === "" ? "hidden" : "block"} `}>{errMessage}</span>
        </div>
    );
};

export default ContactFormElement;