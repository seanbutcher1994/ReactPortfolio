import LinkedInIcon from '../assets/linkedin.png'
import GitHubIcon from '../assets/github-mark.png'

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500 object-scale-down h-[30.5px] w-[30.5px] object-fit: scale-down bg-white rounded-sm"
                href="https://github.com/seanbutcher1994"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="github-link"  src={GitHubIcon}/>
            </a>

            <a
                className="hover:opacity-50 transition duration-500 rounded-sm"
                href="https://www.linkedin.com/in/sean-butcher-5066b8104/"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link"  src={LinkedInIcon}/>
            </a>

        </div>
    )
}

export default SocialMediaIcons