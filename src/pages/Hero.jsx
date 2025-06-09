// Hero.js
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import profileImg from "../assets/profileimg.png";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(x * 20);
      mouseY.set(y * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -30,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingElements = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
      animate={{
        x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
        y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
      }}
      transition={{
        duration: Math.random() * 20 + 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
      style={{
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
      }}
    />
  ));

  return (
    <section 
      id="home" 
      className="relative h-screen w-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30 overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements}
      </div>

      {/* Animated Background Grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(59,130,246)_1px,transparent_0)] bg-[size:50px_50px]"></div>
      </motion.div>

      <motion.div 
        className="flex flex-col md:flex-row items-center justify-center w-full h-full px-6 md:px-16 gap-x-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Profile Image */}
        <motion.div 
          className="w-full md:w-[45%] flex justify-center mb-8 md:mb-0"
          variants={imageVariants}
        >
          <motion.div 
            className="relative w-64 h-64 md:w-[320px] md:h-[320px]"
            whileHover={{ 
              scale: 1.1,
              rotateY: 15,
              transition: { duration: 0.3 }
            }}
            style={{
              x: mouseXSpring,
              y: mouseYSpring,
            }}
          >
            {/* Glowing backdrop */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
              <motion.img
                src={profileImg}
                alt="Swapnil Matkatte"
                className="w-full h-full object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Orbiting elements */}
            <motion.div
              className="absolute -inset-12 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: '0 0',
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-120px)`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={textVariants}
          className="w-full md:w-[55%] text-center md:text-left relative"
        >
          {/* Hello Animation */}
          <motion.h1 
            className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 mb-6 leading-tight"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            {"Hello".split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
                whileHover={{ 
                  scale: 1.2,
                  color: "#3b82f6",
                  transition: { duration: 0.2 }
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
              <motion.span 
                className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                I'm Swapnil,
              </motion.span>
              <br />
              A passionate Full Stack Developer experienced in building scalable MERN applications. I enjoy solving real-world problems through clean, elegant UI & logic.
            </p>

            {/* Animated underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 1 }}
            />
          </motion.div>

          {/* Floating tech icons */}
          <div className="absolute -right-16 top-0 hidden lg:block">
            {['⚛️', '🚀', '💻', '🎨'].map((emoji, i) => (
              <motion.div
                key={i}
                className="absolute text-3xl"
                animate={{
                  y: [0, -20, 0],
                  x: [0, Math.sin(i) * 10, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  top: `${i * 80}px`,
                  left: `${Math.sin(i) * 20}px`,
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;