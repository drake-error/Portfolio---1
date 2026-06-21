import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Motion Designer</h4>
                <h5>Freelance / Academic Projects</h5>
              </div>
              <h3>6+ Months</h3>
            </div>
            <p>
              Produced motion graphics and explainer videos for project demos, college events, and client briefs. Proficient in Canva for rapid brand design, poster creation, and presentation decks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Project-Based</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed and deployed 5+ end-to-end software projects spanning mobile apps, AI tools, and web interfaces. Managed full development lifecycle: ideation → design → development → testing → presentation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hardware Circuiting and BMS</h4>
                <h5>EEE Student & Hardware Developer</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Hands-on Electrical and Electronics Engineering student with a strong foundation in circuit design, Arduino prototyping, and sensor integration (MQ-135, LM358). Proven track record of building real-world IoT systems and competing at national-level events like IIT Bombay Techfest. Driven to bridge the gap between robust embedded hardware and intelligent software solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Excel Accounting & Bill Quotations</h4>
                <h5>Assisted Family Business</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Maintained accounts, generated bill quotations, and tracked income/expenses using advanced Excel functions. Streamlined invoicing workflow, reducing turnaround time for client billing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
