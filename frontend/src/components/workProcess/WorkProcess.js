import React from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaChartLine, FaClipboardCheck, FaRocket } from "react-icons/fa";
import work from "../../assets/workProcess.png";

const steps = [
  { id: 1, icon: <FaProjectDiagram size={30} />, title: "Select a Project", details: "Choose the right project to work on." },
  { id: 2, icon: <FaChartLine size={30} />, title: "Project Analysis", details: "Analyze the requirements and scope." },
  { id: 3, icon: <FaClipboardCheck size={30} />, title: "Plan & Execute", details: "Develop and implement the plan effectively." },
  { id: 4, icon: <FaRocket size={30} />, title: "Deliver Result", details: "Ensure timely delivery with quality output." },
];

const WorkProcess = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-20 px-10">
      <img className="absolute inset-0 w-full h-full object-cover opacity-25" src={work} alt="Work Process" />
      
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 z-10">
        {steps.map((step) => (
          <div key={step.id} className="relative bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center max-w-xs">
            {/* Animated Circle */}
            <motion.div
              className="absolute top-[-10px] left-[-10px] w-10 h-10 flex items-center justify-center bg-blue-500 text-white text-lg font-bold rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              {step.id}
            </motion.div>
            {/* Icon */}
            <div className="text-blue-500 mb-3">{step.icon}</div>
            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            {/* Details */}
            <p className="text-gray-600 text-sm">{step.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
