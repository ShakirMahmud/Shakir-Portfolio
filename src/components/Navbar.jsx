import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { useContext } from "react";
import { RefContext } from "../context/RefContext";

const getActiveClass = ({ isActive }) => (
    isActive ? "text-primary-400 font-semibold" : "text-white hover:text-primary-300 transition-colors duration-300"
);

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { aboutRef, skillsRef, contactRef } = useContext(RefContext);
    const scrollToSection = (ref) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                if (ref?.current) {
                    ref.current.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        } else if (ref?.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const links = (
        <>
            <li><NavLink className={getActiveClass} to="/">Home</NavLink></li>
            <li><NavLink className={getActiveClass} to="/projects">Projects</NavLink></li>

            <li>
                <button
                    onClick={() => scrollToSection(aboutRef)}
                    className="text-white hover:text-primary-300 transition-colors duration-300 cursor-pointer"
                >
                    About Me
                </button>
            </li>

            <li>
                <button
                    onClick={ () => scrollToSection(skillsRef)}
                    className="text-white hover:text-primary-300 transition-colors duration-300 cursor-pointer"
                >
                    My Skills
                </button>
            </li>

            <li>
                <button
                    onClick={ () => scrollToSection(contactRef)}
                    className="text-white hover:text-primary-300 transition-colors duration-300 cursor-pointer"
                >
                    Contact Me
                </button>
            </li>
        </>
    );

    return (
        <div className="fixed w-full top-0 z-50">
            {/* Gradient background with subtle blur effect */}
            <div className="navbar bg-gradient-to-r from-neutral-900/95 to-neutral-800/95 backdrop-blur-sm border-b border-neutral-800/50 px-2 lg:px-8 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-primary-400 lg:hidden">
                            <Menu className="h-6 w-6" />
                        </div>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-4 shadow-xl bg-neutral-900 rounded-xl w-52 space-y-4">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="flex items-center gap-2">
                        {/* Animated logo/name with gradient effect */}
                        <div className="relative">
                            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 text-transparent bg-clip-text hover:from-primary-300 hover:to-accent-300 transition-all duration-300">
                                Shakir Mahmud
                            </h1>
                            {/* Subtle underline animation on hover */}
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 group-hover:w-full transition-all duration-300" />
                        </div>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="flex space-x-8">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">
                    <a
                        href="/public/Shakir_Cv.pdf"
                        download
                        className="btn btn-primary btn-sm lg:btn-md bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 border-none text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-600/30 transition-all duration-300"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;