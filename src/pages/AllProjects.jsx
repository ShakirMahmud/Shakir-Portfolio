import { AiFillGithub } from "react-icons/ai";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import biteManagerImg from "../assets/bite_manager.png";
import equiSportsImg from "../assets/equiSports.png";
import careerFusionImg from "../assets/careerFusion.png";
import hrNexusImg from "../assets/hrnexus.png";

const AllProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/projects.json")
            .then((res) => res.json())
            .then((data) => {
                const updatedProjects = data.map((project) => {
                    if (project.id === 1) project.screenshot = hrNexusImg;
                    if (project.id === 2) project.screenshot = biteManagerImg;
                    if (project.id === 3) project.screenshot = equiSportsImg;
                    if (project.id === 4) project.screenshot = careerFusionImg;
                    return project;
                });
                setProjects(updatedProjects);
            });
    }, []);

    const animations = [
        { x: "-100%", opacity: 0 }, // From left
        { x: "100%", opacity: 0 },  // From right
        { y: "50%", opacity: 0 },   // From bottom
    ];

    return (
        <div className="py-16 pt-24 bg-neutral-900 text-white">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-400 to-accent-400 text-transparent bg-clip-text">
                My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={animations[index % animations.length]}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden flex flex-col"
                    >
                        <img
                            src={project.screenshot}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6 flex flex-col flex-1 space-y-6">
                            {/* Title and Description */}
                            <div>
                                <h3 className="text-2xl font-semibold text-primary-400 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-neutral-400">{project.description}</p>
                            </div>

                            {/* Features Section */}
                            <div className="flex flex-col h-full">
                                <h4 className="font-semibold mb-2">Features:</h4>
                                <ul className="list-disc pl-6 text-sm text-neutral-400 mb-4">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies Section */}
                            <div className="flex flex-col">
                                <h4 className="font-semibold mb-2">Technologies:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 rounded-full bg-primary-600 text-xs text-white"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Live Demo and View Details */}
                            <div className="grid grid-cols-2 gap-4 items-center">
                                <a
                                    href={project.liveSite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 text-center bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300"
                                >
                                    Live Demo
                                </a>
                                <Link
                                    to={`/projects/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, "-"))}`}
                                    className="px-4 py-2 text-center bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold shadow-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-300"
                                >
                                    View Details
                                </Link>
                            </div>

                            {/* GitHub Links */}
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href={project.githubRepo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 flex items-center justify-center gap-2 bg-neutral-800 text-gray-300 border border-neutral-600 rounded-full hover:bg-primary-500 hover:text-white hover:border-primary-600 transition-all duration-300"
                                >
                                    <AiFillGithub /> Client
                                </a>
                                {project.githubServer && (
                                    <a
                                        href={project.githubServer}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 flex items-center justify-center gap-2 bg-neutral-800 text-gray-300 border border-neutral-600 rounded-full hover:bg-accent-500 hover:text-white hover:border-accent-600 transition-all duration-300"
                                    >
                                        <AiFillGithub /> Server
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AllProjects;