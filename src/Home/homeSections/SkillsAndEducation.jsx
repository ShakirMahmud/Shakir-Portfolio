import { motion, AnimatePresence } from "framer-motion";
import { Book, GraduationCap, School } from "lucide-react";
import { useState } from "react";

const SkillsEducation = () => {
    const skills = [
        {
            category: "Frontend Development",
            skills: [
                {
                    name: "HTML5 & CSS3",
                    level: 90,
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                    details: "Built semantic websites with responsive layouts, animations, and modern CSS features like Grid and Flexbox. Implemented media queries and mobile-first design principles."
                },
                {
                    name: "JavaScript (ES6+)",
                    level: 85,
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                    details: "Developed interactive features using modern JS, including async/await, promises, and DOM manipulation. Implemented event handling and API integrations."
                },
                {
                    name: "React.js",
                    level: 88,
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                    details: "Created SPAs using hooks, context API, and React Router. Built reusable components and managed complex state logic."
                },
                {
                    name: "Next.js",
                    level: 82,
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                    details: "Implemented SSR and SSG for optimized performance. Used API routes and dynamic routing for enhanced functionality."
                },
                {
                    name: "Tailwind CSS",
                    level: 90,
                    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
                    details: "Developed responsive UIs using utility-first approach. Customized themes and integrated with DaisyUI for enhanced components."
                }
            ]
        },
        {
            category: "Backend Development",
            skills: [
                {
                    name: "Node.js",
                    level: 75,
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                    details: "Built server-side applications with Express.js, handling routing and middleware integration."
                },
                {
                    name: "Express.js",
                    level: 78,
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                    details: "Created RESTful APIs with proper routing, middleware, and error handling. Implemented MVC architecture."
                },
                {
                    name: "MongoDB",
                    level: 80,
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                    details: "Designed schemas, performed CRUD operations, and implemented data relationships. Experience with aggregation pipelines."
                },
                {
                    name: "Firebase",
                    level: 85,
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                    details: "Implemented authentication, real-time database, and cloud functions. Managed user sessions and security rules."
                },
                {
                    name: "JWT & Security",
                    level: 82,
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                    details: "Implemented secure authentication using JWT tokens, middleware protection, and Axios interceptors."
                }
            ]
        }
    ];

    const [activeSkill, setActiveSkill] = useState(null);

    const SkillTooltip = ({ skill, isVisible }) => (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute z-50 left-0 right-0 mt-2"
                >
                    <div className="bg-neutral-800 rounded-xl p-4 shadow-xl border border-primary-500/20 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
                            <h4 className="text-lg font-semibold text-primary-400">{skill.name}</h4>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{skill.details}</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
    const education = [
        {
            institution: "Ahsanullah University of Science and Technology",
            degree: "Bachelor of Science in Computer Science and Engineering",
            duration: "July 2019 – December 2023",
            grade: "CGPA: 3.08/4.00",
            icon: <GraduationCap className="w-6 h-6" />
        },
        {
            institution: "Milestone College, Dhaka",
            degree: "Higher Secondary School Certificate",
            duration: "2017",
            grade: "CGPA: 5.00/5.00",
            icon: <Book className="w-6 h-6" />
        },
        {
            institution: "Annada Govt. High School, BrahmanBaria",
            degree: "Secondary School Certificate",
            duration: "2015",
            grade: "CGPA: 5.00/5.00",
            icon: <School className="w-6 h-6" />
        }
    ];

    return (
        <div className="py-20 bg-neutral-900">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                        Technical <span className="text-primary-400">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-12" />

                    <div className="grid md:grid-cols-2 gap-8">
                        {skills.map((category, idx) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-primary-400">
                                    {category.category}
                                </h3>
                                <div className="space-y-6">
                                    {category.skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="relative"
                                            onMouseEnter={() => setActiveSkill(`${category.category}-${index}`)}
                                            onMouseLeave={() => setActiveSkill(null)}
                                        >
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-8 h-8 rounded-full bg-neutral-700/50 p-1.5 backdrop-blur-sm">
                                                    <img 
                                                        src={skill.logo} 
                                                        alt={skill.name} 
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div className="flex-1 flex justify-between">
                                                    <span className="text-gray-300">{skill.name}</span>
                                                    <span className="text-primary-400">{skill.level}%</span>
                                                </div>
                                            </div>
                                            <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                />
                                            </div>
                                            <SkillTooltip 
                                                skill={skill} 
                                                isVisible={activeSkill === `${category.category}-${index}`}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                        Education <span className="text-primary-400">Journey</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-12" />

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 lg:left-1/2 h-full w-0.5 bg-primary-500/20" />

                        {/* Education cards */}
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.institution}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className={`flex items-center gap-8 ${
                                        index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                    }`}
                                >
                                    <div className="flex-1" />
                                    <div className="flex-shrink-0 relative z-10">
                                        <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
                                            {edu.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="bg-neutral-800/50 p-6 rounded-xl border border-neutral-700 hover:border-primary-500 transition-all duration-300">
                                            <h3 className="text-xl font-semibold text-primary-400 mb-2">
                                                {edu.institution}
                                            </h3>
                                            <p className="text-gray-300 mb-2">{edu.degree}</p>
                                            <p className="text-gray-400">{edu.duration}</p>
                                            <p className="text-primary-400 font-medium">{edu.grade}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SkillsEducation;