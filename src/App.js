import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaEnvelope,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import abdiPhoto from "./assets/abdiPhoto.jpg";

export default function App() {
  return (
    <main className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <motion.img
          src={abdiPhoto}
          alt="Abdi Dawud profile"
          className="w-32 h-32 rounded-full shadow-lg mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Hi, I'm Abdi Dawud
        </motion.h1>
        <p className="text-gray-400 max-w-xl">
          AI & ML Enthusiast • Aspiring AI Engineer
        </p>
      </section>

      {/* About Me */}
      <Section title="About Me">
        <p className="text-gray-300 leading-relaxed">
          I'm a Computer Science and Engineering student at ASTU, passionate about Artificial Intelligence and Machine Learning.
          I believe in the power of math-driven systems to solve real-world problems and make technology more human-centered.
          I'm sharpening my skills through hands-on projects and certified in Data Science from WQU.
        </p>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center text-gray-300">
          <Skill icon={<FaHtml5 className="text-4xl text-orange-500 mx-auto" />} label="HTML" />
          <Skill icon={<FaCss3Alt className="text-4xl text-blue-500 mx-auto" />} label="CSS" />
          <Skill icon={<FaJs className="text-4xl text-yellow-400 mx-auto" />} label="JavaScript" />
          <Skill icon={<FaPython className="text-4xl text-green-400 mx-auto" />} label="Python" />
          <Skill label="Scikit-learn" />
          <Skill label="Streamlit" />
         
        </div>
      </Section>

      {/* Projects */}
      <Section title="Projects">
        <div className="space-y-6">
          <Project
            title="Hate Speech Detection"
            description="Classifies text into Hate Speech, Offensive Language, or Neither. Achieved 89% accuracy."
            link="https://github.com/Abdataa"
          />
          <Project
            title="House Price Prediction"
            description="Used regression models to predict housing prices. Best model: Random Forest + GridSearchCV."
            link="https://github.com/Abdataa"
          />
          <Project
            title="Student Performance AI"
            description="Includes grade predictor, risk classifier, and personalized recommendations. In progress."
            link="https://github.com/Abdataa/student-performance-dashboard"
          />
          <Project
            title="QUIZWHIZ Web App"
            description="A web-based quiz platform under development."
            link="https://github.com/Abdataa/QuizWhiz-web-app"
          />
        </div>
      </Section>

      {/* Contact */}
      <Section title="Contact Me" center>
        <p className="text-gray-300">Feel free to reach out!</p>
        <div className="mt-4 flex justify-center gap-6">
          <ContactIcon href="mailto:abdetadawud123@gmail.com" icon={<FaEnvelope />} />
          <ContactIcon href="https://github.com/Abdataa" icon={<FaGithub />} />
        </div>
      </Section>

      {/* Footer */}
      <footer className="text-center text-gray-600 text-sm py-6">
        © {new Date().getFullYear()} Abdi Dawud. All rights reserved.
      </footer>
    </main>
  );
}

/** Section Component */
function Section({ title, children, center = false }) {
  return (
    <section className={`max-w-4xl mx-auto px-6 py-12 ${center ? "text-center" : ""}`}>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}

/** Skill Block */
function Skill({ icon, label }) {
  return (
    <div>
      {icon}
      <p className="mt-2">{label}</p>
    </div>
  );
}

/** Project Card */
function Project({ title, description, link }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-gray-400">{description}</p>
      {link && (
        <a
          href={link}
          className="text-blue-400 mt-2 inline-block hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      )}
    </div>
  );
}

/** Contact Icon Link */
function ContactIcon({ href, icon }) {
  return (
    <a
      href={href}
      className="text-white hover:text-blue-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-2xl">{icon}</div>
    </a>
  );
}
