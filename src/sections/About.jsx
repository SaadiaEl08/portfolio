import HeroHeader from '../components/heroHeader';
import { skills } from '../constants';
import PersonalImg from './../components/PersonalImg';
import { useTranslation } from 'react-i18next';
const About = () => {
    const { t } = useTranslation();

    return (
        <div className="min-w-screen flex flex-col justify-center items-center gap-2 pt-2 sm:min-h-screen md:text-lg 2xl:gap-6">
            <PersonalImg className="w-[70px] md:w-[150px] lg:w-[100px] xl:w-[150px] 2xl:w-[300px] " />
            <HeroHeader text={t("about")} />
            <p className='text-sm text-center  text-slate-200 2xl:text-2xl'> 
                {t("about1")}
                <br /> 
                {t("about2")}
                <br /> 
                {t("about3")}
            </p>
            <div className='flex item-center justify-center flex-col gap-4'>
                <HeroHeader text={t("skills")} />
                <div className='w-full flex gap-2 flex-wrap flex-row justify-center '>
                    {
                        Object.keys(skills).map((key, index) => {
                            return (
                                <div key={index} className='p-2  '>
                                    <h4 className='uppercase text-center mb-2  2xl:text-2xl'>{t(key)}</h4>
                                    <div className='flex flex-wrap items-center justify-center gap-3 border p-4 bg-[var(--background-color)] rounded-full  ' >
                                        {skills[key].map((skill, index) => {
                                            return (
                                                <img src={skill.Image} alt={skill.name} title={t(skill.name)} key={index} className='w-8 rounded-full bg-slate-100 p-1 lg:w-10 2xl:w-16  ' />
                                            );

                                        })}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default About;;