import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Server, 
  Database, 
  GitBranch, 
  Terminal, 
  BarChart3,
  ChevronDown,
  ChevronUp,
  Sparkles
} from "lucide-react";

// Enhanced skill tree data with icons
const skillTree = {
  Frontend: {
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"]
  },
  Backend: {
    icon: Server,
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT", "OAuth"]
  },
  Databases: {
    icon: Database,
    skills: ["MongoDB", "MySQL", "Firebase"]
  },
  "V Control": {
    icon: GitBranch,
    skills: ["Git", "GitHub"]
  },
  Coding: {
    icon: Terminal,
    skills: ["Java", "C", "DSA"]
  },
  Analytics: {
    icon: BarChart3,
    skills: ["Qlik Sense"]
  },
};

// Color schemes for different branches
const branchColors = {
  Frontend: { primary: "#3B82F6", secondary: "#93C5FD", glow: "#DBEAFE" },
  Backend: { primary: "#10B981", secondary: "#6EE7B7", glow: "#D1FAE5" },
  Databases: { primary: "#F59E0B", secondary: "#FCD34D", glow: "#FEF3C7" },
  "V Control": { primary: "#8B5CF6", secondary: "#C4B5FD", glow: "#EDE9FE" },
  Coding: { primary: "#EF4444", secondary: "#FCA5A5", glow: "#FEE2E2" },
  Analytics: { primary: "#06B6D4", secondary: "#67E8F9", glow: "#CFFAFE" },
};

// Interactive skill branch component
const SkillBranch = ({ x, y, label, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const colors = branchColors[label];
  const [isExpanded, setIsExpanded] = useState(true); // Default to expanded
  
  // Get icon component
  const IconComponent = skillTree[label].icon;
  
  // Container dimensions
  const containerWidth = 160;
  const containerHeight = 50;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <g ref={ref}>
      {/* Enhanced root to branch connection */}
      <defs>
        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.primary} stopOpacity="0.8" />
          <stop offset="100%" stopColor={colors.secondary} stopOpacity="0.6" />
        </linearGradient>
        <filter id={`glow-${index}`}>
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Animated connection line with gradient */}
      <motion.path
        d={`M 600 80 C 600 ${y - 120}, ${x} ${y - 120}, ${x} ${y - containerHeight/2}`}
        stroke={`url(#gradient-${index})`}
        strokeWidth="3"
        fill="none"
        filter={`url(#glow-${index})`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ 
          duration: 1.2, 
          delay: index * 0.2,
          ease: "easeInOut"
        }}
      />

      {/* Glow effect behind container */}
      <motion.rect
        x={x - containerWidth/2 - 3}
        y={y - containerHeight/2 - 3}
        width={containerWidth + 6}
        height={containerHeight + 6}
        rx="18"
        fill={colors.glow}
        opacity="0.4"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.4 } : {}}
        whileHover={{ scale: 1.02, opacity: 0.6 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.2 + 0.6,
          type: "spring",
          stiffness: 100
        }}
        style={{ transformOrigin: `${x}px ${y}px` }}
      />

      {/* Clickable container rectangle */}
      <motion.rect
        x={x - containerWidth/2}
        y={y - containerHeight/2}
        width={containerWidth}
        height={containerHeight}
        rx="12"
        stroke={colors.primary}
        strokeWidth="2"
        fill="rgba(255, 255, 255, 0.95)"
        filter={`url(#glow-${index})`}
        style={{ cursor: 'pointer', transformOrigin: `${x}px ${y}px` }}
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        whileHover={{ 
          scale: 1.02,
          fill: colors.glow,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
        onClick={toggleExpanded}
        transition={{ 
          duration: 1, 
          delay: index * 0.2 + 0.5,
          type: "spring",
          stiffness: 150
        }}
      />

      {/* Icon - positioned better to avoid overlap */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        style={{ cursor: 'pointer' }}
        onClick={toggleExpanded}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.2 + 0.8,
          type: "spring",
          stiffness: 200
        }}
      >
        <foreignObject
          x={x - containerWidth/2 + 15}
          y={y - 12}
          width="24"
          height="24"
        >
          <IconComponent 
            size={24} 
            color={colors.primary}
            style={{ filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.1))" }}
          />
        </foreignObject>
      </motion.g>

      {/* Category label with better positioning */}
      <motion.text
        x={x + 8}
        y={y + 5}
        textAnchor="middle"
        fill={colors.primary}
        className="text-sm font-bold tracking-wide select-none"
        style={{ 
          filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.1))",
          cursor: 'pointer'
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        onClick={toggleExpanded}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.2 + 0.8,
          type: "spring",
          stiffness: 150
        }}
      >
        {label}
      </motion.text>

      {/* Dropdown chevron icon - positioned to avoid overlap */}
      <motion.g
        style={{ cursor: 'pointer' }}
        onClick={toggleExpanded}
        animate={{ 
          rotate: isExpanded ? 180 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <foreignObject
          x={x + containerWidth/2 - 35}
          y={y - 10}
          width="20"
          height="20"
        >
          <ChevronDown 
            size={20} 
            color={colors.primary}
            style={{ filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.1))" }}
          />
        </foreignObject>
      </motion.g>

      {/* Collapse hint animation when expanded */}
      <AnimatePresence>
        {isExpanded && isInView && (
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.7, 0],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360]
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5 + 3
            }}
          >
            <foreignObject
              x={x + containerWidth/2 - 15}
              y={y - containerHeight/2 - 15}
              width="20"
              height="20"
            >
              <ChevronUp 
                size={20} 
                color={colors.secondary}
                style={{ filter: "drop-shadow(0 0 4px rgba(0,0,0,0.3))" }}
              />
            </foreignObject>
          </motion.g>
        )}
      </AnimatePresence>

      {/* Dropdown children skills - shown by default */}
      <AnimatePresence>
        {isExpanded && (
          <motion.g
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Dropdown background */}
            <motion.rect
              x={x - containerWidth/2}
              y={y + containerHeight/2 + 8}
              width={containerWidth}
              height={skillTree[label].skills.length * 30 + 10}
              rx="10"
              fill="rgba(255, 255, 255, 0.98)"
              stroke={colors.secondary}
              strokeWidth="2"
              filter={`url(#glow-${index})`}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: `${x}px ${y + containerHeight/2 + 8}px` }}
            />

            {/* Individual skill items */}
            {skillTree[label].skills.map((skill, j) => {
              const skillY = y + containerHeight/2 + 25 + j * 30;
              return (
                <motion.g 
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: j * 0.1,
                    ease: "easeOut"
                  }}
                >
                  {/* Skill item background */}
                  <rect
                    x={x - containerWidth/2 + 10}
                    y={skillY - 10}
                    width={containerWidth - 20}
                    height="20"
                    rx="8"
                    fill={colors.glow}
                    opacity="0.6"
                  />
                  
                  {/* Skill number badge */}
                  <circle
                    cx={x - containerWidth/2 + 25}
                    cy={skillY}
                    r="8"
                    fill={colors.primary}
                  />
                  
                  <text
                    x={x - containerWidth/2 + 25}
                    y={skillY + 3}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="bold"
                    fill="white"
                  >
                    {j + 1}
                  </text>

                  {/* Skill name */}
                  <text
                    x={x - containerWidth/2 + 40}
                    y={skillY + 4}
                    textAnchor="start"
                    fontSize="12"
                    fontWeight="600"
                    fill={colors.primary}
                  >
                    {skill}
                  </text>
                </motion.g>
              );
            })}
          </motion.g>
        )}
      </AnimatePresence>
    </g>
  );
};

const SkillTree = () => {
  const maxChildren = Math.max(
    ...Object.values(skillTree).map((category) => category.skills.length)
  );

  // Dynamic SVG height calculation - increased to accommodate expanded skills by default
  const svgHeight = 500;

  return (
    <section
      id="skills"
      className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-16 flex flex-col items-center relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.05),transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.05),transparent_40%)] pointer-events-none" />
      
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold text-gray-800 mb-4 tracking-wide">
          SKILLS
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-full mx-auto" />
        <p className="text-gray-600 mt-4 text-lg font-medium">
          Click on any skill category to collapse/expand
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full max-w-[1400px]"
      >
        <svg
          viewBox={`0 0 1200 ${svgHeight}`}
          className="overflow-visible w-full h-auto"
          style={{ filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.1))" }}
        >
          {/* Enhanced center root with pulsing effect */}
          <defs>
            <radialGradient id="rootGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1F2937" />
              <stop offset="100%" stopColor="#374151" />
            </radialGradient>
            <filter id="rootGlow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Root glow effect */}
          <motion.circle
            cx="600"
            cy="80"
            r="15"
            fill="url(#rootGradient)"
            opacity="0.3"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Main root node */}
          <motion.circle
            cx="600"
            cy="80"
            r="10"
            fill="url(#rootGradient)"
            filter="url(#rootGlow)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          />

          {/* Root label */}
          <motion.text
            x="600"
            y="65"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#1F2937"
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 65 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            CORE
          </motion.text>

          {/* Render all skill branches */}
          {Object.keys(skillTree).map((branch, i) => {
            const spacing = 170;
            const startX =
              600 - ((Object.keys(skillTree).length - 1) * spacing) / 2;
            const branchX = startX + i * spacing;
            const branchY = 220;

            return (
              <SkillBranch
                key={branch}
                x={branchX}
                y={branchY}
                label={branch}
                index={i}
              />
            );
          })}
        </svg>
      </motion.div>

      {/* Interactive instruction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="mt-8 text-center"
      >
        <div className="flex justify-center items-center space-x-2 text-gray-500 text-sm">
          <ChevronUp size={16} className="animate-bounce" />
          <span>Skills are expanded by default - click to collapse</span>
          <ChevronUp size={16} className="animate-bounce" />
        </div>
      </motion.div>

      {/* Enhanced bottom decoration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 2 }}
        className="mt-8 text-center"
      >
        <div className="flex justify-center space-x-4 text-sm text-gray-500">
          <span className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            Frontend
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            Backend
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            Database
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
            Tools
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillTree;