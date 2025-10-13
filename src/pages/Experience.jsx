import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase, Calendar, MapPin, Award, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Virtusky IT Solutions, Pune",
    duration: "Mar 2023 – Present",
    description: `
• Developed and optimized multiple web applications, improving system efficiency by 30%.
• Built RESTful APIs and integrated third-party services, improving backend data flow and security.
• Designed and implemented React.js UI components, leading to a 15% increase in user engagement.
• Optimized SQL and NoSQL database queries, reducing response time by 40% through indexing and query tuning.
• Collaborated with cross-functional teams using Agile methodology, ensuring on-time project delivery.
    `,
    type: "Full-time",
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Software Engineer Intern",
    company: "SmartGrains, Bangalore",
    duration: "Apr 2022 – Feb 2023",
    description: `
• Built and optimized responsive web applications using React.js, HTML/CSS, and JavaScript, enhancing user experience and performance.
• Designed and integrated RESTful APIs with Node.js and Express.js, ensuring seamless data exchange between frontend and backend systems.
• Streamlined data operations by crafting efficient queries in MongoDB and MySQL, resulting in faster data retrieval and improved backend performance.
• Explored and applied business intelligence concepts by learning Qlik Sense to build interactive dashboards and visualize data trends, complementing Python-based analysis to support informed decision-making.
    `,
    type: "Internship",
    color: "from-green-500 to-teal-600"
  },
];

// Mobile Component
const MobileExperience = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
          <Briefcase className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Experience</h1>
        <p className="text-gray-300 text-sm">My professional journey</p>
      </motion.div>

      {/* Experience Cards */}
      <div className="space-y-4 max-w-md mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <motion.div
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 cursor-pointer transition-all duration-300 ${
                expandedCard === index ? 'bg-white/15' : 'hover:bg-white/15'
              }`}
              onClick={() => toggleCard(index)}
              whileTap={{ scale: 0.98 }}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center`}>
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  animate={{ rotate: expandedCard === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-300" />
                </motion.div>
              </div>

              {/* Type Badge */}
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs text-white font-medium mb-3">
                {exp.type}
              </div>

              {/* Job Title */}
              <h3 className="text-white font-semibold text-lg leading-tight mb-2">
                {exp.title}
              </h3>

              {/* Duration */}
              <div className="flex items-center text-gray-300 text-sm mb-1">
                <Calendar className="w-4 h-4 mr-2" />
                {exp.duration}
              </div>

              {/* Company (collapsed view) */}
              {expandedCard !== index && (
                <div className="flex items-start text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-2">{exp.company}</span>
                </div>
              )}
            </motion.div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedCard === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl mt-2 p-5 border border-white/10">
                    {/* Company */}
                    <div className="flex items-start mb-4">
                      <MapPin className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium text-sm mb-1">Company</p>
                        <p className="text-gray-300 text-sm">{exp.company}</p>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="flex items-start">
                      <Award className="w-5 h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium text-sm mb-3">Key Achievements</p>
                        <div className="space-y-2">
                          {exp.description
                            .trim()
                            .split("\n")
                            .filter((line) => line.trim() !== "")
                            .map((point, i) => (
                              <div key={i} className="flex items-start space-x-2">
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`} />
                                <p className="text-gray-300 text-xs leading-relaxed">
                                  {point.trim().replace(/^•\s*/, "")}
                                </p>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-12"
      >
        <p className="text-gray-400 text-sm">
          Tap on any card to view details
        </p>
      </motion.div>
    </div>
  );
};

// Desktop Component (Your Original Design)
const DesktopExperience = () => {
  return (
    <section
      id="experience"
      className="w-full bg-white px-6 py-10 flex flex-col items-center"
    >
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center mb-20 tracking-wide text-gray-800 relative"
      >
        EXPERIENCE
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
      </motion.h2>

      <div className="relative w-full max-w-6xl">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-x-1/2 z-0" />

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative grid grid-cols-[1fr_40px_1fr] gap-4 items-start mb-24"
          >
            {/* Left side */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-right pr-4"
            >
              <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-2 group-hover:text-green-600 transition-colors duration-300">
                {exp.duration}
              </p>
              <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                {exp.title}
              </h3>
            </motion.div>

            {/* Animated Dot */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
              className="z-10 w-3.5 h-3.5 rounded-full bg-gray-800 border-2 border-white shadow-md mx-auto mt-2"
            />

            {/* Right side */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-left pl-4"
            >
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-3 group-hover:text-green-700 transition-colors duration-300">
                {exp.company}
              </h3>
              <ul className="text-gray-700 text-sm leading-relaxed font-medium bg-gray-50 px-4 py-2 rounded-lg group-hover:bg-green-50 transition-colors duration-300">
                {exp.description
                  .trim()
                  .split("\n")
                  .filter((line) => line.trim() !== "")
                  .map((point, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { x: 30, opacity: 0 },
                        visible: { x: 0, opacity: 1 },
                      }}
                      whileHover={{
                        x: 4,
                        color: "#1f2937",
                        transition: { duration: 0.2 },
                      }}
                      className="flex items-start space-x-3 transition-all duration-200 cursor-pointer"
                    >
                      <motion.span
                        className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"
                        whileHover={{ scale: 1.5, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.span
                        whileHover={{ scale: 1.01 }}
                        className="relative"
                      >
                        {point.trim().replace(/^•\s*/, "")}
                      </motion.span>
                    </motion.li>
                  ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Main Component with Responsive Logic
const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile ? <MobileExperience /> : <DesktopExperience />;
};

export default Experience;