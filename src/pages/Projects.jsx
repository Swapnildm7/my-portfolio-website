import React, { useState, useRef, useEffect } from "react";
import {
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaAndroid,
  FaNode,
  FaJsSquare,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGoogleplay,
  SiRedux,
} from "react-icons/si";

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
      <FaCss3Alt title="CSS3" />,
      <FaJsSquare title="JavaScript" />,
      <SiExpress title="Express" />,
      <SiMongodb title="MongoDB" />,
    ],
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    accentColor: "blue",
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
      <SiRedux title="Redux Toolkit" />,
      <FaNode title="Node.js" />,
      <SiMongodb title="MongoDB" />,
    ],
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    accentColor: "emerald",
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
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=400&fit=crop&crop=center",
    github: "",
    playstore:
      "https://play.google.com/store/apps/details?id=org.smartgrains.krishimitra",
    techStack: [<FaAndroid title="Android" />, <SiFirebase title="Firebase" />],
    gradient: "from-orange-600 via-red-600 to-pink-600",
    accentColor: "orange",
  },
  {
    title: "E-Commerce Marketplace Platform",
    subtitle: "Enterprise Project",
    description: [
      "Engineered a robust, multi-vendor e-commerce platform using React.js, Redux Toolkit, Node.js, and MongoDB, supporting 500+ products and 1,000+ users.",
      "Integrated advanced features including dynamic search, inventory management, and split payment functionality with Stripe, PayPal, and Razorpay gateways.",
      "Adopted microservices for authentication, payments, and notifications, enhancing modularity and scaling capability by 200%. Achieved a 95+ Lighthouse performance score.",
    ],
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=400&fit=crop&crop=center",
    github: "",
    techStack: [
      <FaReact title="React" />,
      <FaHtml5 title="HTML5" />,
      <FaCss3Alt title="CSS3" />,
      <FaJsSquare title="JavaScript" />,
      <SiRedux title="Redux Toolkit" />,
      <FaNode title="Node.js" />,
      <SiMongodb title="MongoDB" />,
    ],
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    accentColor: "violet",
  },
];

const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out infinite ${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isEven = index % 2 === 0;

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-3xl transition-all duration-700 transform hover:scale-[1.02] ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } flex flex-col lg:flex lg:items-center lg:gap-12 p-8 lg:p-16`}
      style={{
        background: `
          linear-gradient(145deg, 
            rgba(255,255,255,0.95) 0%, 
            rgba(255,255,255,0.8) 50%, 
            rgba(255,255,255,0.7) 100%
          )
        `,
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: `
          0 25px 50px -12px rgba(0, 0, 0, 0.25),
          0 0 0 1px rgba(255, 255, 255, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.4)
        `,
      }}
    >
      {/* Animated gradient overlay */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-br ${project.gradient}`}
      />

      {/* Dynamic light effect following mouse */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            width: "200px",
            height: "200px",
            background: `radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)`,
            borderRadius: "50%",
          }}
        />
      )}

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-6 -right-6 w-32 h-32 opacity-0 group-hover:opacity-20 transition-all duration-1000 delay-100">
          <div className={`w-full h-full bg-gradient-to-br ${project.gradient} rounded-full blur-xl animate-pulse`} />
        </div>
        <div className="absolute -bottom-6 -left-6 w-24 h-24 opacity-0 group-hover:opacity-25 transition-all duration-1000 delay-200">
          <div className={`w-full h-full bg-gradient-to-br ${project.gradient} rounded-lg rotate-45 blur-lg animate-spin-slow`} />
        </div>
      </div>

      {/* Project Image with enhanced effects */}
      <div className="relative flex-shrink-0 mb-8 lg:mb-0">
        <div className="relative w-56 h-56 lg:w-72 lg:h-72 mx-auto">
          {/* Animated gradient ring */}
          <div className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 blur-md animate-spin-slow`} />
          
          {/* Pulsing glow effect */}
          <div className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-full opacity-0 group-hover:opacity-40 transition-all duration-500 blur-lg animate-pulse`} />

          {/* Main image container */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white shadow-2xl group-hover:shadow-4xl transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            />

            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
            </div>
          </div>

          {/* Floating tech icons */}
          <div className="absolute -inset-8 opacity-0 group-hover:opacity-100 transition-all duration-700">
            {project.techStack.slice(0, 3).map((icon, i) => (
              <div
                key={i}
                className={`absolute w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-${project.accentColor}-600 text-lg animate-bounce`}
                style={{
                  top: `${20 + i * 30}%`,
                  right: i % 2 === 0 ? '-10%' : 'auto',
                  left: i % 2 === 1 ? '-10%' : 'auto',
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Project Content */}
      <div className="flex-1 relative z-10">
        <div className="mb-6">
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold mb-4 shadow-lg`}>
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
            {project.subtitle}
          </div>
          
          <h3 className={`text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:animate-pulse transition-all duration-300`}>
            {project.title}
          </h3>
        </div>

        <div className="space-y-5 mb-10">
          {project.description.map((desc, i) => (
            <p
              key={i}
              className="text-gray-700 leading-relaxed text-base lg:text-lg group-hover:text-gray-800 transition-colors duration-300 pl-4 border-l-4 border-transparent group-hover:border-gradient-to-b group-hover:from-blue-400 group-hover:to-purple-400"
              style={{
                borderImage: isHovered ? `linear-gradient(to bottom, #60a5fa, #a855f7) 1` : 'none',
              }}
            >
              {desc}
            </p>
          ))}
        </div>

        {/* Enhanced Tech Stack & Links */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
          {/* Tech Stack with improved styling */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
              Technologies Used
            </span>
            <div className="flex gap-3 flex-wrap">
              {project.techStack.map((icon, i) => (
                <div
                  key={i}
                  className={`relative p-3 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group/icon hover:scale-110 hover:-rotate-3 border border-white/50`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover/icon:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  <span className={`text-2xl lg:text-3xl text-gray-600 group-hover/icon:text-${project.accentColor}-600 transition-colors duration-300 relative z-10`}>
                    {icon}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/btn flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                <FaGithub className="text-xl group-hover/btn:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">GitHub</span>
                <FaExternalLinkAlt className="text-sm opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300 relative z-10" />
              </a>
            )}

            {project.playstore && (
              <a
                href={project.playstore}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/btn flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                <SiGoogleplay className="text-xl group-hover/btn:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Play Store</span>
                <FaExternalLinkAlt className="text-sm opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300 relative z-10" />
              </a>
            )}

            {!project.github && !project.playstore && (
              <div className={`flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${project.gradient} bg-opacity-10 rounded-2xl border border-gray-200`}>
                <div className={`w-3 h-3 bg-gradient-to-r ${project.gradient} rounded-full animate-pulse`} />
                <span className="text-gray-600 font-medium">Private Project</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, 
            #f8fafc 0%,
            #f1f5f9 25%,
            #e2e8f0 50%,
            #f8fafc 75%,
            #f1f5f9 100%
          )
        `,
      }}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/10 via-teal-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Geometric patterns */}
        <div className="absolute top-1/3 right-10 w-32 h-32 border border-purple-200/30 rounded-3xl rotate-45 animate-spin-very-slow" />
        <div className="absolute bottom-1/3 left-10 w-24 h-24 border border-blue-200/30 rounded-full animate-bounce-slow" />
      </div>

      <FloatingParticles />

      <div className="max-w-7xl mx-auto relative z-10 px-6 pt-32 pb-20">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold mb-8 shadow-xl">
            <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse" />
            Portfolio Showcase
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover innovative solutions and cutting-edge technical implementations 
            that push the boundaries of modern development
          </p>
          
          {/* Decorative line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full" />
          </div>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
          75% { transform: translateY(-15px) rotate(0.5deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 20s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s ease-in-out; }
      `}</style>
    </section>
  );
};

export default Projects;