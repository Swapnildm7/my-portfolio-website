import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import resumePdf from "../assets/resume.pdf";

// Smooth, polished animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const formVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.05,
    },
  },
};

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const About = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);
    
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setFeedback({
            type: "success",
            message: "✅ Message delivered successfully!",
          });
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setFeedback({
            type: "error",
            message: `❌ Failed to send message: ${error.text}`,
          });
        }
      );
  };

  return (
    <motion.section
      id="about"
      className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-gray-800 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0)_1px,transparent_0)] bg-[size:20px_20px]"></div>
      </div>

      {/* Main container with proper spacing for navbar/footer */}
      <div className="relative z-10 pt-28 pb-16 min-h-screen">
        {/* Container with max-width */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="space-y-16" variants={containerVariants}>
            {/* Professional Summary */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Modern Download Button - Responsive positioning */}
              <motion.div
                className="flex justify-center sm:justify-end mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.a
                  href={resumePdf}
                  download="Swapnil Matkatte Resume.pdf"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 text-sm lg:text-base overflow-hidden"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                    y: -4,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute top-4 right-6 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
                    <div className="absolute bottom-3 left-8 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-3">
                    <motion.div
                      className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-xl backdrop-blur-sm"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg
                        className="w-4 h-4 lg:w-5 lg:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </motion.div>
                    <div className="flex flex-col">
                      <span className="font-bold text-white">
                        Download Resume
                      </span>
                      <span className="text-xs text-white/80 -mt-1">
                        PDF • 2.4MB
                      </span>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-pulse"></div>
                </motion.a>
              </motion.div>

              {/* Section header */}
              <div className="relative">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Professional Summary
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              </div>

              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100"
                whileHover={{
                  y: -2,
                  shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-base lg:text-lg leading-relaxed text-gray-700">
                  I'm a Full Stack Developer with 2.5 years of hands-on
                  experience in building scalable and efficient web applications
                  using the MERN stack. I enjoy solving complex problems and
                  creating clean, user-friendly interfaces that enhance user
                  experience and performance. I've worked on both frontend and
                  backend development, developed and optimized RESTful APIs,
                  implemented secure authentication (JWT, OAuth), and fine-tuned
                  database queries for better performance. I'm comfortable
                  working in cross-platform teams and collaborating with
                  designers, developers, and stakeholders to deliver quality
                  software on time.
                </p>
              </motion.div>
            </motion.div>

            {/* Key Achievements */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Key Achievements & Contributions
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
              </div>

              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100"
                whileHover={{
                  y: -2,
                  shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid gap-4 lg:gap-6">
                  {[
                    {
                      title: "Architected and Executed Legacy Modernization:",
                      description:
                        "Migrated monolithic apps to React.js + Node.js improving modularity and dev velocity by 40%.",
                      icon: "🏗️",
                    },
                    {
                      title: "Backend Performance Optimization:",
                      description:
                        "Reduced average API response times by 60% through query optimization, caching (Redis), and load balancing.",
                      icon: "⚡",
                    },
                    {
                      title: "Security:",
                      description:
                        "Implemented JWT & OAuth2.0, plus regular scans using OWASP ZAP.",
                      icon: "🔐",
                    },
                    {
                      title: "Agile Collaboration:",
                      description:
                        "Delivered features in multi-disciplinary Agile teams.",
                      icon: "🤝",
                    },
                    {
                      title: "Scalable Component Libraries:",
                      description:
                        "Created reusable React components using Tailwind and Storybook.",
                      icon: "🧩",
                    },
                    {
                      title: "Real-Time Integration:",
                      description:
                        "Enabled live chat and notifications using Socket.IO.",
                      icon: "💬",
                    },
                  ].map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 lg:gap-4 p-3 lg:p-4 rounded-xl hover:bg-gray-50/50 transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <span className="text-xl lg:text-2xl flex-shrink-0 mt-1">
                        {achievement.icon}
                      </span>
                      <div className="text-sm lg:text-base">
                        <strong className="text-gray-900">
                          {achievement.title}
                        </strong>{" "}
                        <span className="text-gray-700">
                          {achievement.description}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Extracurricular Activities */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Extracurricular Activities
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-green-600 to-teal-600 rounded-full"></div>
              </div>

              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100"
                whileHover={{
                  y: -2,
                  shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4 lg:space-y-6">
                  <div className="flex items-start gap-3 lg:gap-4">
                    <span className="text-xl lg:text-2xl">🌟</span>
                    <div className="text-sm lg:text-base">
                      <strong className="text-gray-900">
                        Hacktoberfest Contributor – Open Source Advocate:
                      </strong>{" "}
                      <span className="text-gray-700">
                        Contributed PRs across frontend/backend projects
                        globally.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 lg:gap-4">
                    <span className="text-xl lg:text-2xl">🌾</span>
                    <div className="text-sm lg:text-base">
                      <strong className="text-gray-900">
                        Krishi Mitra App Volunteer:
                      </strong>{" "}
                      <span className="text-gray-700">
                        Educated rural farmers on digital tools for
                        agri-productivity and inclusion.
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Languages */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Languages
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full"></div>
              </div>

              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100"
                whileHover={{
                  y: -2,
                  shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  {[
                    { lang: "English", level: "Fluent", flag: "🇺🇸" },
                    { lang: "Hindi", level: "Fluent", flag: "🇮🇳" },
                    { lang: "Kannada", level: "Native", flag: "🏠" },
                    { lang: "Marathi", level: "Native", flag: "🏠" },
                  ].map((language, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-3 lg:p-4 rounded-xl bg-gray-50/50 hover:bg-gray-100/50 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-xl lg:text-2xl mb-2">
                        {language.flag}
                      </div>
                      <div className="font-semibold text-gray-900 text-sm lg:text-base">
                        {language.lang}
                      </div>
                      <div className="text-xs lg:text-sm text-gray-600">
                        {language.level}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Get in Touch
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto"></div>
                <p className="text-gray-600 mt-4 text-base lg:text-lg">
                  Let's discuss your next project or opportunity
                </p>
              </div>

              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100"
                variants={formVariants}
              >
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
                >
                  <motion.input
                    variants={inputVariants}
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    required
                    className="bg-white/50 border-2 border-gray-200 px-4 py-3 lg:px-6 lg:py-4 rounded-xl placeholder:text-gray-500 transition-all duration-200 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 hover:border-gray-300 text-sm lg:text-base"
                    disabled={loading}
                  />
                  <motion.input
                    variants={inputVariants}
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    className="bg-white/50 border-2 border-gray-200 px-4 py-3 lg:px-6 lg:py-4 rounded-xl placeholder:text-gray-500 transition-all duration-200 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 hover:border-gray-300 text-sm lg:text-base"
                    disabled={loading}
                  />
                  <motion.input
                    variants={inputVariants}
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    required
                    className="bg-white/50 border-2 border-gray-200 px-4 py-3 lg:px-6 lg:py-4 rounded-xl placeholder:text-gray-500 transition-all duration-200 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 hover:border-gray-300 text-sm lg:text-base"
                    disabled={loading}
                  />
                  <motion.input
                    variants={inputVariants}
                    type="text"
                    name="phone"
                    placeholder="Phone Number*"
                    required
                    className="bg-white/50 border-2 border-gray-200 px-4 py-3 lg:px-6 lg:py-4 rounded-xl placeholder:text-gray-500 transition-all duration-200 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 hover:border-gray-300 text-sm lg:text-base"
                    disabled={loading}
                  />
                  <motion.textarea
                    variants={inputVariants}
                    name="message"
                    placeholder="Tell me about your project or opportunity*"
                    rows="6"
                    required
                    className="col-span-full bg-white/50 border-2 border-gray-200 px-4 py-3 lg:px-6 lg:py-4 rounded-xl placeholder:text-gray-500 transition-all duration-200 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 hover:border-gray-300 resize-none text-sm lg:text-base"
                    disabled={loading}
                  />

                  <div className="col-span-full flex flex-col sm:flex-row justify-between items-center gap-4">
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className={`bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 lg:px-8 lg:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none text-sm lg:text-base`}
                      whileHover={!loading ? { scale: 1.05 } : {}}
                      whileTap={!loading ? { scale: 0.95 } : {}}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-4 w-4 lg:h-5 lg:w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message ✈️"
                      )}
                    </motion.button>

                    {feedback && (
                      <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`font-semibold text-base lg:text-lg ${
                          feedback.type === "success"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {feedback.message}
                      </motion.p>
                    )}
                  </div>
                </form>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
