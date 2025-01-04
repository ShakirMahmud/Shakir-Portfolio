import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import biteManagerImg from "../assets/bite_manager.png";
import equiSportsImg from "../assets/equiSports.png";
import careerFusionImg from "../assets/careerFusion.png";
import { AiFillGithub } from "react-icons/ai";

const SingleProject = () => {
  const { title } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const clickedProject = data.find(
          (project) =>
            project.title.toLowerCase().replace(/\s+/g, "-") === title
        );
        if (clickedProject) {
          if (clickedProject.id === 1) clickedProject.screenshot = biteManagerImg;
          if (clickedProject.id === 2) clickedProject.screenshot = equiSportsImg;
          if (clickedProject.id === 3) clickedProject.screenshot = careerFusionImg;
        }
        setProject(clickedProject);
      });
  }, [title]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white">
        <p>Loading project...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 py-12 bg-neutral-900 text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-primary-400 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {project.description}
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <img
            src={project.screenshot || "/fallback-image.jpg"}
            alt={project.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Features */}
          <div>
            <h2 className="text-2xl font-semibold text-primary-400 mb-4">
              Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-2xl font-semibold text-accent-400 mb-4">
              Technologies
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Details */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-primary-400 mb-4">
            Detailed Description
          </h2>
          <p className="text-gray-300 mb-8">
            {project.detailedDescription}
          </p>

          {/* Challenges */}
          <h2 className="text-2xl font-semibold text-accent-400 mb-4">
            Challenges Faced
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-8">
            {project.challengesFaced.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>

          {/* Future Improvements */}
          <h2 className="text-2xl font-semibold text-primary-400 mb-4">
            Future Improvements
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {project.futureImprovements.map((improvement, index) => (
              <li key={index}>{improvement}</li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap gap-4">
          {project.liveSite && (
            <a
              href={project.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-500 text-white rounded-full font-semibold shadow-lg hover:bg-primary-600 transition-all duration-300"
            >
              Live Demo
            </a>
          )}
          {project.githubRepo && (
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 flex items-center justify-center gap-2 bg-neutral-800 text-gray-300 border border-neutral-600 rounded-full hover:bg-primary-500 hover:text-white hover:border-primary-600 transition-all duration-300"
            >
              <AiFillGithub />  Client
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
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
