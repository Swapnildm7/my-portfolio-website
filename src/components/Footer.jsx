import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const contactInfo = [
    {
      icon: "📞",
      label: "Phone",
      value: "+91 7619118165",
      href: "tel:+917619118165",
      color: "text-green-600",
    },
    {
      icon: "📧",
      label: "Email",
      value: "swapnildm777@gmail.com",
      href: "mailto:swapnildm777@gmail.com",
      color: "text-blue-600",
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/swapnildm",
      color: "text-blue-600",
      hoverColor: "hover:text-blue-800",
      bgColor: "hover:bg-blue-50",
      name: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/Swapnildm7",
      color: "text-gray-700",
      hoverColor: "hover:text-black",
      bgColor: "hover:bg-gray-50",
      name: "GitHub",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-r from-white/80 via-blue-50/50 to-purple-50/50 backdrop-blur-xl shadow-2xl border-t border-white/30 text-gray-800 py-12"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-4 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Swapnil Matkatte
            </h3>
            <p className="text-gray-600 font-medium">Full Stack Developer</p>
            <p className="text-sm text-gray-500 mt-1">
              Building digital experiences that matter
            </p>
          </motion.div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </span>
                <div className="text-center">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    {contact.label}
                  </p>
                  <a
                    href={contact.href}
                    className={`${contact.color} hover:underline font-semibold text-sm transition-colors duration-300`}
                  >
                    {contact.value}
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/30 shadow-lg"
            >
              <span className="text-lg">🌐</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.4 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full ${social.color} ${social.hoverColor} ${social.bgColor} transition-all duration-300 shadow-md hover:shadow-lg relative group`}
                  >
                    <social.icon size={20} />

                    {/* Tooltip */}
                    <AnimatePresence>
                      {hoveredSocial === social.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.8 }}
                          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap shadow-lg"
                        >
                          {social.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"
        ></motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Swapnil Matkatte. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Crafted with ❤️ 
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
