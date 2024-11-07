
const PersonalImg = (props) => {
  return (
    <img src="src/assets/personal_photo.jpg" alt="personal photo" 
    className="w-40 rounded-full img-drop-shadow shadow-[var(--shadow)] "
    {...props}
     />
  );
};

export default PersonalImg;