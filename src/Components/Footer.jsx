import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Contact Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-semibold text-white mb-3">Contact Me</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Feel free to reach out for collaborations or just a friendly hello. <p>Let&apos;s connect!</p>
              connect!
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              {/* Social Media Icons */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          
          {/* Email Link */}
          <div className="text-center">
            <a
              href="mailto:john@example.com"
              className="text-blue-400 hover:text-blue-300 text-lg font-medium transition duration-300 ease-in-out"
            >
              SaqibShigri5465@gmail.com
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Saqib Hussain. All rights reserved;&#39;</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
