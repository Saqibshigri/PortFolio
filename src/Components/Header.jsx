import  { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">My Portfolio</h1>
        <nav className="hidden md:flex space-x-4">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 px-4 py-2">
          <NavLink href="#home" mobile>Home</NavLink>
          <NavLink href="#projects" mobile>Projects</NavLink>
          <NavLink href="#contact" mobile>Contact</NavLink>
        </nav>
      )}
    </header>
  );
};

const NavLink = ({ href, children, mobile }) => (
  <a 
    href={href} 
    className={`text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white ${mobile ? 'block py-2' : ''}`}
  >
    {children}
  </a>
);

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  mobile: PropTypes.bool
};

NavLink.defaultProps = {
  mobile: false
};

export default Header;

