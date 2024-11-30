import PropTypes from 'prop-types';
import { Github, Linkedin, Mail } from 'lucide-react';
const Hero = () => {
  return (
    <section id="home" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src="/placeholder.svg?height=300&width=300" 
            alt="Profile" 
            className="rounded-full mx-auto w-64 h-64 object-cover"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Saqib Hussain</h2>
          <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">Full Stack Developer</p>
          <p className="mb-8 text-gray-600 dark:text-gray-300">
            Passionate about creating beautiful and functional web applications. 
            Experienced in React, Node.js, and cloud technologies.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <SocialLink href="https://github.com" icon={<Github />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
            <SocialLink href="mailto:john@example.com" icon={<Mail />} />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
  >
    {icon}
  </a>
);
SocialLink.propTypes = {
    href: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired
  };
  
export default Hero;

