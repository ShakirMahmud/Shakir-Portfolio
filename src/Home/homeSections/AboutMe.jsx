import { motion } from "framer-motion";
import { Code2, Target, Trophy, Cpu, Brain, Users } from "lucide-react";

const AboutMe = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const qualities = [
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "MERN Stack Focus",
            description: "Currently mastering MongoDB, Express.js, React, and Node.js to build full-stack applications."
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Detail Oriented",
            description: "Committed to pixel-perfect implementation, ensuring designs match requirements exactly."
        },
        {
            icon: <Trophy className="w-6 h-6" />,
            title: "Sports Enthusiast",
            description: "Passionate about sports, bringing the same competitive spirit to development."
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Tech Explorer",
            description: "Constantly learning new technologies and staying updated with industry trends."
        },
        {
            icon: <Brain className="w-6 h-6" />,
            title: "Problem Solver",
            description: "Enjoy tackling complex challenges and finding innovative solutions."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Team Player",
            description: "Value collaboration and effective communication in development projects."
        }
    ];

    return (
        <div className="py-12 bg-neutral-900">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    {...fadeIn}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 text-transparent bg-clip-text">
                        About <span className="text-primary-400">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto" />
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Journey Text */}
                    <motion.div 
                        className="space-y-6 text-gray-300"
                        {...fadeIn}
                    >
                        <p className="text-lg">
                            My journey into web development began after completing my university education, 
                            where I discovered my passion for creating digital experiences. Currently, 
                            I'm focused on becoming a full-stack MERN developer, combining my problem-solving 
                            skills with technical expertise.
                        </p>
                        <p className="text-lg">
                            What sets me apart is my determination to see projects through to completion. 
                            I take pride in my attention to detail, ensuring every project meets or exceeds 
                            the specified requirements. This perfectionist approach helps me deliver 
                            high-quality, pixel-perfect implementations.
                        </p>
                        <p className="text-lg">
                            Beyond coding, I'm an avid sports enthusiast and tech lover. These interests 
                            complement my development work, fostering a competitive spirit and keeping me 
                            updated with the latest technological advancements.
                        </p>
                    </motion.div>

                    {/* Qualities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {qualities.map((quality, index) => (
                            <motion.div
                                key={quality.title}
                                className="p-6 rounded-xl bg-neutral-800/50 border border-neutral-700 hover:border-primary-500 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="text-primary-400 mb-4">{quality.icon}</div>
                                <h3 className="text-lg font-semibold text-white mb-2">{quality.title}</h3>
                                <p className="text-gray-400">{quality.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;