import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  Download,
  ExternalLink,
  Award,
  Calendar,
  Building,
} from "lucide-react";
import AdvanceC from "../assets/AdvanceC.pdf";
import C from "../assets/C.pdf";
import Java from "../assets/Java.pdf";
import Cpp from "../assets/Cpp.pdf";

const certificates = [
  {
    id: 1,
    title: "C Programming",
    issuer: "IIT Bombay",
    date: "2023",
    description: "Fundamental C programming concepts and advanced techniques",
    pdfUrl: C,
    category: "Programming",
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: 2,
    title: "Advanced C Programming",
    issuer: "Programming Institute",
    date: "2023",
    description:
      "Advanced C programming concepts, data structures, and algorithms",
    pdfUrl: AdvanceC,
    category: "Programming",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: 3,
    title: "Java Programming",
    issuer: "Oracle Academy",
    date: "2023",
    description:
      "Object-oriented programming with Java and enterprise development",
    pdfUrl: Java,
    category: "Programming",
    color: "from-orange-400 to-red-500",
  },
  {
    id: 4,
    title: "C++ Programming",
    issuer: "Programming Academy",
    date: "2023",
    description: "Advanced C++ programming, STL, and modern C++ features",
    pdfUrl: Cpp,
    category: "Programming",
    color: "from-green-400 to-emerald-500",
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleViewCertificate = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  const handleDownloadCertificate = (pdfUrl, title) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${title.replace(/\s+/g, "_")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 pt-32 pb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.04),transparent_50%)] pointer-events-none" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-20 blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-4 tracking-wide relative">
            CERTIFICATES
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that showcase my
            expertise and commitment to continuous learning
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200">
                {/* Certificate Header with Gradient */}
                <div
                  className={`h-32 bg-gradient-to-br ${cert.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-4 right-4">
                    <Award className="w-8 h-8 text-white/80" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
                      {cert.category}
                    </span>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full" />
                  <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white/5 rounded-full" />
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm mb-1">
                        <Building className="w-4 h-4 mr-2" />
                        {cert.issuer}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {cert.date}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleViewCertificate(cert.pdfUrl)}
                      className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group/btn"
                    >
                      <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      View Certificate
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        handleDownloadCertificate(cert.pdfUrl, cert.title)
                      }
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group/btn"
                    >
                      <Download className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-gray-200 inline-block w-full max-w-4xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1">
                  {certificates.length}
                </div>
                <div className="text-gray-600 text-xs md:text-sm">
                  Certifications
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">
                  {new Set(certificates.map((cert) => cert.category)).size}
                </div>
                <div className="text-gray-600 text-xs md:text-sm">
                  Specializations
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">
                  100%
                </div>
                <div className="text-gray-600 text-xs md:text-sm">
                  Completion Rate
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
