import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Download } from "lucide-react";
import myImg from '../../assets/shakir.png';

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="py-12 pt-24 bg-gradient-to-b from-neutral-900 to-neutral-950">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div 
          className="flex-1 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name and Title */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 text-transparent bg-clip-text">
                Shakir Mahmud
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-primary-300 font-semibold">
              Frontend Developer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-xl"
          >
            Crafting beautiful and responsive web experiences with modern technologies.
            Passionate about creating intuitive user interfaces and delivering exceptional
            digital solutions.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex gap-4"
          >
            {[
              { Icon: Github, href: "https://github.com/yourusername" },
              { Icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
              { Icon: Facebook, href: "https://facebook.com/yourusername" }
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-800 hover:bg-primary-500 text-white transition-all duration-300 hover:scale-110"
              >
                <Icon size={24} />
              </a>
            ))}
          </motion.div>

          {/* Resume Button */}
          <motion.div variants={itemVariants}>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full font-semibold shadow-lg shadow-primary-500/20 hover:shadow-primary-600/30 transition-all duration-300 hover:-translate-y-1"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            {/* Background shape */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Image */}
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <img
                src={myImg}
                alt="Shakir Mahmud"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl border-4 border-neutral-800/50"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;