import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "B.E. Information Science & Engineering",
    institution: "MVJ College of Engineering, Bangalore",
    duration: "2018 – 2022",
    details: "CGPA: 7.2 / 10 (Visvesvaraya Technological University)",
    level: "Bachelor's",
    color: "from-blue-500 to-purple-600"
  },
  {
    degree: "PUC 2nd Year (PCMB)",
    institution: "GURUNANAK IND PUC, Bidar",
    duration: "2017 – 2018",
    details: "Percentage: 87% (Karnataka PUC Board)",
    level: "Pre-University",
    color: "from-green-500 to-teal-600"
  },
  {
    degree: "10th Grade",
    institution: "GURUNANAK PUBLIC SCHOOL, Bidar",
    duration: "2015 – 2016",
    details: "CGPA: 9.6 / 10 (CBSE Board)",
    level: "Secondary",
    color: "from-orange-500 to-red-600"
  },
];

// Mobile Component
const MobileEducation = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
          <GraduationCap className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Education</h1>
        <p className="text-gray-300 text-sm">My academic journey</p>
      </motion.div>

      {/* Education Cards */}
      <div className="space-y-4 max-w-md mx-auto">
        {education.map((edu, index) => (
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
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${edu.color} flex items-center justify-center`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  animate={{ rotate: expandedCard === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-300" />
                </motion.div>
              </div>

              {/* Level Badge */}
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs text-white font-medium mb-3">
                {edu.level}
              </div>

              {/* Degree Title */}
              <h3 className="text-white font-semibold text-lg leading-tight mb-2">
                {edu.degree}
              </h3>

              {/* Duration */}
              <div className="flex items-center text-gray-300 text-sm mb-1">
                <Calendar className="w-4 h-4 mr-2" />
                {edu.duration}
              </div>

              {/* Institution (collapsed view) */}
              {expandedCard !== index && (
                <div className="flex items-start text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-2">{edu.institution}</span>
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
                    {/* Institution */}
                    <div className="flex items-start mb-4">
                      <MapPin className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium text-sm mb-1">Institution</p>
                        <p className="text-gray-300 text-sm">{edu.institution}</p>
                      </div>
                    </div>

                    {/* Performance */}
                    <div className="flex items-start">
                      <Award className="w-5 h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium text-sm mb-1">Performance</p>
                        <p className="text-gray-300 text-sm">{edu.details}</p>
                      </div>
                    </div>

                    {/* Achievement Bar */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                        <span>Achievement Level</span>
                        <span>
                          {edu.details.includes('9.6') ? '9.6/10 CGPA' : 
                           edu.details.includes('87%') ? '87%' : '7.2/10 CGPA'}
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ 
                            width: edu.details.includes('9.6') ? '96%' : 
                                   edu.details.includes('87%') ? '87%' : '72%'
                          }}
                          transition={{ delay: 0.5, duration: 1 }}
                          className={`h-2 rounded-full bg-gradient-to-r ${edu.color}`}
                        />
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

// Desktop Component (Clean Timeline Design)
const DesktopEducation = () => {
  return (
    <section
      id="education"
      className="w-full bg-white px-6 py-10 flex flex-col items-center"
    >
      <motion.h2 
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center mb-20 tracking-wide text-gray-800 relative"
      >
        EDUCATION
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 rounded-full" />
      </motion.h2>

      <div className="relative w-full max-w-6xl">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-x-1/2 z-0" />

        {education.map((edu, index) => (
          <div
            key={index}
            className="relative grid grid-cols-[1fr_40px_1fr] gap-4 items-start mb-24"
          >
            {/* Left: Duration & Degree */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-right pr-4"
            >
              <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-2 group-hover:text-green-600 transition-colors duration-300">
                {edu.duration}
              </p>
              <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                {edu.degree}
              </h3>
            </motion.div>

            {/* Center Dot (Animated) */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
              className="z-10 w-3.5 h-3.5 rounded-full bg-gray-800 border-2 border-white shadow-md mx-auto mt-2"
            />

            {/* Right: Institution & Details */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-left pl-4"
            >
              <p className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-3 group-hover:text-green-700 transition-colors duration-300">
                {edu.institution}
              </p>
              <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                {edu.details}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Main Component with Responsive Logic
const Education = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile ? <MobileEducation /> : <DesktopEducation />;
};

export default Education;