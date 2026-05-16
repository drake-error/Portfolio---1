import { useState } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    name: "JeevanCare",
    category: "AI • IoT • Hardware",
    tools: "NATIONAL LEVEL WINNING PROJECT",
    desc: "AI-integrated system for real-time vitals monitoring and emergency alerts. FOUNDER - DARWIN PK",
    image: "/images/project_jeevancare_1778607545653.png"
  },
  {
    name: "Nyaya Mitra",
    category: "NLP • EdTech • Python",
    tools: "AI Education Tool",
    desc: "AI-driven legal education assistant answering 200+ complex queries.",
    image: "/images/project_nyayamitra_1778607562228.png"
  },
  {
    name: "Data Cleaning Tool",
    category: "Python • Pandas",
    tools: "Automated Data Pipeline",
    desc: "Detects nulls, duplicates, and format inconsistencies.",
    image: "/images/project_dataclean_1778607617684.png"
  },
  {
    name: "Chemical Waste Detection",
    category: "Hardware • Embedded C",
    tools: "Sensor-based Alert System",
    desc: "Detects chemical waste in industrial water sources.",
    image: "/images/project_chemicalwaste_1778607636584.png"
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        
        {/* Navigation Arrows */}
        <button className="carousel-btn prev-btn" onClick={handlePrev}>&#8249;</button>
        <button className="carousel-btn next-btn" onClick={handleNext}>&#8250;</button>

        <div className="carousel-window" style={{ overflow: "hidden", width: "100%" }}>
          <div 
            className="work-flex" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div className="work-box" key={index}>
                <div className="work-info" style={{ flex: 1 }}>
                  <div className="work-title" style={{ justifyContent: "flex-start", gap: "30px", alignItems: "center" }}>
                    <h3 style={{ fontSize: "100px", color: "var(--accentColor)", margin: 0, lineHeight: 1 }}>0{index + 1}</h3>

                    <div style={{ textAlign: "left" }}>
                      <h4 style={{ fontSize: "35px", margin: 0 }}>{project.name}</h4>
                      <p style={{ fontSize: "18px", marginTop: "10px" }}>{project.category}</p>
                    </div>
                  </div>
                  <div style={{ marginTop: "40px" }}>
                    <h4 style={{ textTransform: "uppercase", letterSpacing: "2px", color: "#adacac" }}>TOOLS & FEATURES</h4>
                    <p style={{ fontSize: "20px", color: "#fff", marginTop: "10px" }}>{project.tools}</p>
                    <p style={{ marginTop: "20px", maxWidth: "80%", fontSize: "16px", color: "#adacac" }}>
                      {project.desc.includes("DARWIN PK") ? (
                        <>
                          {project.desc.split("DARWIN PK")[0]}
                          <strong style={{ color: "#fff", fontWeight: 900, fontSize: "18px" }}>DARWIN PK</strong>
                          {project.desc.split("DARWIN PK")[1]}
                        </>
                      ) : project.desc}
                    </p>
                  </div>
                </div>
                <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
                  <WorkImage image={project.image} alt={project.name} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="carousel-pagination">
          {projects.map((_, idx) => (
            <span 
              key={idx} 
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
