import javascriptImg from '../assets/javascript.png'
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css-alt.png'
import mongoImg from '../assets/mongodb.png'
import expressImg from '../assets/express.png'
import reactImg from '../assets/react.png'
import nodeImg from '../assets/node-js.png'

const SkillsIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
           
            <img className="hover:opacity-50 transition duration-500 rounded-sm" src={javascriptImg} alt="javascript-icon" />
        
            <img className="hover:opacity-50 transition duration-500 rounded-sm" src={htmlImg} alt="html-icon" />
           
            <img className="hover:opacity-50 transition duration-500 rounded-sm" src={cssImg} alt="css-icon" />
     
            <img className="hover:opacity-50 transition duration-500 rounded-sm" src={mongoImg} alt="mongodb-icon" />
       
            <img className="hover:opacity-50 transition duration-500 rounded-sm bg-white" src={expressImg} alt="express-icon" />
        
            <img className="hover:opacity-50 transition duration-500 rounded-sm" src={reactImg} alt="react-icon" />
        
            <img className="hover:opacity-50 transition duration-500 rounded-sm" src={nodeImg} alt="node-icon" />

        </div>
    )
}

export default SkillsIcons