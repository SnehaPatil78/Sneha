import React from "react";
import vpn from '../assets/vpn1.png';  // Replace with the correct image path if needed
import copeople from '../assets/copeople1.png';  // Replace with the correct image path if needed
import Footer from './Footer';

const ProjectCard = ({ title, description, git, technologies }) => {
    // Determine the image based on the title
    const imageSrc = title === 'House Finder Application' ? vpn : title === 'IMRS' ? copeople : null;

    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {imageSrc && (
                <a href="#">
                    <img className="w-full rounded-t-lg h-auto object-cover" src={imageSrc} alt={title} />
                </a>
            )}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p key={`${index}-${tag}`} className='text-[14px] text-blue-500'>#{tag}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        //git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export const project = [
    {
        title: 'House Finder Application',
        description: 'Engineered a web application with user and owner modules, enabling users to register, browse properties, and make purchases, while owners can manage listings. Utilized HTML, CSS, and JavaScript for the frontend, with PHP for backend logic and MySQL on a WAMP server for database management.',
        //git: 'https://github.com/yourusername/HouseFinderApp',  // Replace with the actual GitHub link
        technologies: ['HTML', 'CSS', 'JS', 'PHP', 'SQL']
    },
    {
        title: 'IMRS',
        description: 'Designed an intelligent medication remainder system leveraging HTML, CSS, JavaScript, PHP, and MySQL on a WAMP server. The system facilitates efficient patient data collection, streamlined doctor prescription management, and automated medication reminders, with real-time tracking of patient visits and prescription schedules.',
        //git: "https://github.com/yourusername/IMRS",  // Replace with the actual GitHub link
        technologies: ['TWILIO', 'HTML', 'CSS', 'JS', 'PHP', 'SQL']
    }
];

export default Projects;
