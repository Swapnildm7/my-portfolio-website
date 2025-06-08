import React from "react";
import resumePage1 from "../assets/resume_page-01.jpg";
import resumePage2 from "../assets/resume_page-02.jpg";
import resumePdf from "../assets/resume.pdf";

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen bg-white px-4 py-20 flex flex-col items-center scroll-mt-24"
    >
      {/* Heading with right-aligned button */}
      <div className="w-full max-w-6xl mb-8 px-2">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold text-gray-800">My Resume</h2>
          <a
            href={resumePdf}
            download="Swapnil Matkatte Resume.pdf"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium shadow transition duration-200"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Resume Images */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6 justify-center items-center">
        <img
          src={resumePage1}
          alt="Resume Page 1"
          className="w-full md:w-1/2 object-contain border shadow-md rounded-md"
        />
        <img
          src={resumePage2}
          alt="Resume Page 2"
          className="w-full md:w-1/2 object-contain border shadow-md rounded-md"
        />
      </div>
    </section>
  );
};

export default Resume;
