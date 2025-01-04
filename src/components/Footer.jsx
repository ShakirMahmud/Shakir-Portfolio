import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { useContext } from "react";
import { RefContext } from "../context/RefContext";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
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
    return (
        <footer className="bg-neutral-900 py-10 border-t border-neutral-700">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
                    {/* Logo and About */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 text-transparent bg-clip-text hover:from-primary-300 hover:to-accent-300 transition-all duration-300">
                            Shakir Mahmud
                        </h1>
                        <p className="text-gray-400 text-sm mt-2">
                            Creating innovative solutions and crafting exceptional digital experiences.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h3 className="text-lg font-medium text-primary-400">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    onClick={() => scrollToSection(aboutRef)}
                                    className="text-gray-300 hover:cursor-pointer hover:text-primary-500 transition"
                                >
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => scrollToSection(skillsRef)}
                                    className="text-gray-300 hover:cursor-pointer hover:text-primary-500 transition"
                                >
                                    My Skills
                                </a>
                            </li>
                            
                            <li>
                                <a
                                    onClick={() => scrollToSection(contactRef)}
                                    className="text-gray-300 hover:cursor-pointer hover:text-primary-500 transition"
                                >
                                    Contact Me
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-medium text-primary-400 mb-2">Follow Me</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/shakir.mahmud.9/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-primary-500 transition"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                            
                            <a
                                href="https://www.linkedin.com/in/shakirmahmud9/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-primary-500 transition"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="https://github.com/ShakirMahmud"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-primary-500 transition"
                                aria-label="GitHub"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Shakir Mahmud. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
