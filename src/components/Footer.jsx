import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-neutral-900 py-10 border-t border-neutral-700">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
                    {/* Logo and About */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-2xl font-semibold text-primary-400 mb-2">My Website</h2>
                        <p className="text-gray-400 text-sm">
                            Creating innovative solutions and crafting exceptional digital experiences.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h3 className="text-lg font-medium text-primary-400">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#skills"
                                    className="text-gray-300 hover:text-primary-500 transition"
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="text-gray-300 hover:text-primary-500 transition"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-gray-300 hover:text-primary-500 transition"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-medium text-primary-400 mb-2">Follow Me</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-primary-500 transition"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-primary-500 transition"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-primary-500 transition"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="https://github.com"
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
                    &copy; {new Date().getFullYear()} My Website. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
