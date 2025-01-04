import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import biteManagerImg from "../../assets/bite_manager.png";
import equiSportsImg from "../../assets/equiSports.png";
import careerFusionImg from "../../assets/careerFusion.png";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        
        fetch("/projects.json")
            .then((res) => res.json())
            .then((data) => {
                const updatedProjects = data.map((project) => {
                    if (project.id === 1) project.screenshot = biteManagerImg;
                    if (project.id === 2) project.screenshot = equiSportsImg;
                    if (project.id === 3) project.screenshot = careerFusionImg;
                    return project;
                });
                setProjects(updatedProjects);
            });
    }, []);

    // Framer Motion Variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const hoverAnimation = {
        scale: 1.05,
        transition: { duration: 0.3 },
    };

    return (
        <div id="projects" className="lg:py-24 py-16 bg-neutral-900">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="bg-gradient-to-r from-primary-400 to-accent-400 text-transparent bg-clip-text text-3xl lg:text-4xl font-bold text-center mb-4">
                        My <span className="text-primary-400">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-12" />
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-neutral-800/50 rounded-xl overflow-hidden border border-neutral-700 hover:border-primary-500 transition-all duration-300 shadow-lg"
                        >
                            {/* Project Image */}
                            <motion.div
                                whileHover={hoverAnimation}
                                className="relative group"
                            >
                                <img
                                    src={project.screenshot || "/fallback-image.jpg"}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                    <a
                                        href={project.liveSite}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-primary-500 text-white rounded-full font-semibold shadow-lg hover:bg-primary-600"
                                    >
                                        Live Site
                                    </a>
                                </div>
                            </motion.div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-primary-400 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    {project.description}
                                </p>

                                {/* Buttons */}
                                <div className="flex gap-4 flex-wrap">
                                    {project.githubRepo && (
                                        <a
                                            href={project.githubRepo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 flex items-center justify-center gap-2 bg-neutral-800 text-gray-300 border border-neutral-600 rounded-full hover:bg-primary-500 hover:text-white hover:border-primary-600 transition-all duration-300"
                                        >
                                           <AiFillGithub/> Client
                                        </a>
                                    )}
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
                                    <Link
                                        to={`/projects/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, "-"))}`}
                                        className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold shadow-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-300"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="mt-16 text-center">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <a
                            href="/projects"
                            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold shadow-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-300"
                        >
                            View All Projects
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
