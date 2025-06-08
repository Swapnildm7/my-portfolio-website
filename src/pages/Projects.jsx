import React from "react";
import {
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaAndroid,
  FaJsSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { SiExpress, SiMongodb, SiFirebase, SiGoogleplay } from "react-icons/si";

const projects = [
  {
    title: "Bank Website Optimization & Support",
    subtitle: "Client Project",
    description: [
      "Enhanced performance of banking website by optimizing backend queries and reducing average page load time by 40% and implemented real-time data validation mechanisms, cutting form submission errors by 30%, improving customer satisfaction.",
      "Resolved over 50+ technical issues, ranging from UI inconsistencies to server-side inefficiencies, improving system uptime.",
      "Contributed to enhanced website security and responsiveness, leading to a 15% increase in active user sessions and greater trust in online banking platforms.",
    ],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop&crop=center",
    github: "",
    techStack: [
      <FaReact title="React" />,
      <FaNodeJs title="Node.js" />,
      <SiExpress title="Express" />,
      <SiMongodb title="MongoDB" />,
    ],
  },
  {
    title: "Real Estate Website Development",
    subtitle: "Client Project",
    description: [
      "Revamped outdated real estate websites into modern, responsive platforms using React.js, HTML, CSS, and JavaScript, improving user engagement by 35%.",
      "Integrated interactive features such as search filters, location-based listings, and inquiry forms, resulting in higher lead generation and customer engagement.",
      "Collaborated with clients to tailor content strategy and SEO, resulting in a 3x boost in organic traffic within two months of deployment.",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=400&fit=crop&crop=center",
    github: "",
    techStack: [
      <FaReact title="React" />,
      <FaHtml5 title="HTML5" />,
      <FaCss3Alt title="CSS3" />,
      <FaJsSquare title="JavaScript" />,
    ],
  },
  {
    title: "Krishi Mitra",
    subtitle: "Android App",
    description: [
      "Developed an intuitive Android application aimed at bridging the gap between farmers and traders to facilitate transparent and efficient crop procurement.",
      "Integrated Firebase for real-time database management, enabling seamless user registration, crop listings, and transaction tracking.",
      "Optimized app performance by 25% through strategic use of API call minimization, state management techniques, and clean UI design.",
    ],
    image:
      "https://images.unsplash.com/photo-1574691250077-03a929faece5?w=400&h=400&fit=crop&crop=center",
    github: "",
    playstore:
      "https://play.google.com/store/apps/details?id=org.smartgrains.krishimitra",
    techStack: [<FaAndroid title="Android" />, <SiFirebase title="Firebase" />],
  },
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.02,
        rotateX: 2,
        rotateY: isEven ? 2 : -2,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className={`relative group overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 via-white/70 to-white/50 backdrop-blur-xl border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } flex flex-col lg:flex lg:items-center lg:gap-8 p-8 lg:p-12`}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.5) 100%)",
      }}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 delay-100"></div>
      </div>

      {/* Project Image */}
      <motion.div
        className="relative flex-shrink-0 mb-6 lg:mb-0"
        whileHover={{
          scale: 1.1,
          rotate: [0, 2, -2, 0],
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
      >
        <div className="relative w-48 h-48 lg:w-56 lg:h-56 mx-auto">
          {/* Animated ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          ></motion.div>

          {/* Glowing effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-md opacity-0 group-hover:opacity-100 scale-110 transition-all duration-500"></div>

          {/* Image container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/50 shadow-2xl bg-white">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </motion.div>

      {/* Project Content */}
      <div className="flex-1 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-500">
            {project.title}
          </h3>
          <p className="text-lg text-blue-600 font-semibold mb-6 opacity-80">
            {project.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-4 mb-8"
        >
          {project.description.map((desc, i) => (
            <p
              key={i}
              className="text-gray-700 leading-relaxed text-base lg:text-lg group-hover:text-gray-800 transition-colors duration-300"
            >
              {desc}
            </p>
          ))}
        </motion.div>

        {/* Tech Stack & Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6"
        >
          {/* Tech Stack */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Tech Stack:
            </span>
            <div className="flex gap-3">
              {project.techStack.map((icon, i) => (
                <motion.span
                  key={i}
                  whileHover={{
                    scale: 1.3,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.4 },
                  }}
                  className="text-2xl lg:text-3xl text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-300 p-2 rounded-lg hover:bg-white/50"
                >
                  {icon}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
              >
                <FaGithub className="text-lg group-hover/btn:rotate-12 transition-transform duration-300" />
                <span>GitHub</span>
              </motion.a>
            )}

            {project.playstore && (
              <motion.a
                href={project.playstore}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
              >
                <SiGoogleplay className="text-lg group-hover/btn:rotate-12 transition-transform duration-300" />
                <span>Play Store</span>
              </motion.a>
            )}

            {!project.github && !project.playstore && (
              <div className="text-gray-400 italic text-sm py-3">
                Private Project
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 px-6 pt-32 pb-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative solutions and technical excellence across
            diverse domains
          </p>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;