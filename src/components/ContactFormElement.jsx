
const ContactFormElement = ({label, type, placeholder, icon}) => {
    return (
        <div className="flex flex-col gap-1 flex-nowrap">
            <label htmlFor={label}>{label}</label>
            <div className="flex items-center justify-start">
                <input className="p-1 rounded-s-md outline-none text-black w-[89%]" type={type} placeholder={placeholder} id={label} />
                <div className="p-1 rounded-e-md bg-[var(--background-color)]">
                    <i className={`fa-solid fa-${icon}`	} ></i>
                </div>
            </div>
        </div>
    );
};

export default ContactFormElement;