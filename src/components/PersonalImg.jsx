const PersonalImg = ({className="",...props}) => {
  return (
    <img src="src/assets/personal_photo.jpg" alt="personal photo" loading="eager"
    className={`w-40 rounded-full img-drop-shadow shadow-[var(--shadow)] -z-10  ${className} `}
    {...props}
     />
  );
};

export default PersonalImg;