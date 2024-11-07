import { skills } from '../constants';
import PersonalImg from './../components/PersonalImg';
const About = () => {
    return (
        <div className="min-h-screen min-w-screen flex flex-col justify-center items-center gap-2 2xl:gap-6">
            <PersonalImg className="w-[70px] lg:w-[100px] xl:w-[200px] 2xl:w-[300px] " />
            <h2 className="text-2xl font-bold text-center 2xl:text-5xl">About Me</h2>
            <p className='text-sm sm:text-center lg:text-lg 2xl:text-2xl text-slate-200'>
                I&apos;m a full-stack developer passionate about React, Laravel and web development.
                <br /> I thrive on learning new things and love the challenge of solving bugs and finding the best solutions.
                <br /> The blend of creativity, logic, and continuous discovery drives my excitement for building impactful applications.
            </p>
            <div className='flex item-center justify-center flex-col gap-4'>
                <h2 className="text-2xl font-bold text-center 2xl:text-5xl">Skills</h2>
                <div className='w-full flex gap-2 flex-wrap flex-row justify-center '>
                    {
                        Object.keys(skills).map((key, index) => {
                            return (
                                <div key={index} className='p-2  '>
                                    <h4 className='uppercase text-center mb-2  2xl:text-2xl'>{key}</h4>
                                    <div className='flex flex-wrap items-center justify-center gap-3 border p-4 bg-[var(--background-color)] rounded-full  ' >
                                        {skills[key].map((skill, index) => {
                                            return (
                                                <img src={skill.Image} alt={skill.name} title={skill.name} key={index} className='w-8 rounded-full bg-slate-100 p-1 lg:w-10 2xl:w-16  ' />
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