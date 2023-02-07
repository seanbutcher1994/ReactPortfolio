import LineGradient from "../components/LineGradient";
import {motion} from "framer-motion";
//import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import project1image from '../assets/project-1.jpeg'
import project2image from '../assets/project-2.jpeg'
import project3image from '../assets/project-3.jpeg'

const projectImages = [
    {key:1, img:project1image, alt:"Project-1", description: "Project-1", title:"Project 1", href: "https://www.google.com"},
    {key:2, img:project2image, alt:"Project-2", description: "Project-2", title:"Project 2"},
    {key:3, img:project3image, alt:"Project-3", description: "Project-3", title:"Project 3"}
    
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {opacity: 1, scale: 1 }
}

const Project = ({title, description, href, img, alt}) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    //const projectTitle = title.split(" ").join("-").toLowerCase();
    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                    {description}
                </p>
            </div>
           <a href={href}>
           <img src={img} alt={alt} />
            </a> 
        </motion.div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div
                    className="md:w-2/5 mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div>
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                    <LineGradient width="w-1/3"/>
                    </div>

                    </div>
                    <p className="mt-10 mb-10">
                    Stuff and things and stuff and things and stuff and things and stuff and things and stuff and things and stuff and things and stuff and things and stuff and things and stuff and things and stuff and things and stuff and things.
                    </p>
                </motion.div>
                {/* PROJECTS */}
                <div className="flex justify-center">
                    <motion.div
                        className="sm:grid sm:grid-cols-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        
                        variants={container}
                    >
                     
                        {projectImages.map(({key, title, img, description, alt}) => {
                           return <Project key={key} title={title} img={img} description={description} alt={alt} /> 

                        })}
                       
                        
                        
                    </motion.div>
                </div>
        </section>
    )
}
export default Projects;