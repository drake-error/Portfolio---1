import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Motivated 1st-year EEE engineering student and Hackathon Winner with 6+ months of hands-on project experience spanning AI-powered applications, hardware systems, and creative design. Proven ability to ideate, build, and ship solutions across healthcare, legal-tech, fintech, and data domains. Combines technical depth in Java & C with strong visual communication skills to deliver impactful, user-centric products.
        </p>
        <h3 className="title" style={{ marginTop: '2rem' }}>Education</h3>
        <p className="para">
          <strong>Bachelor of Engineering – Electrical & Electronics Engineering (EEE)</strong><br />
          BMS Institute of Technology and Management, Avalahalli, Towards Doddaballapura • 2024 – 2028 (1st Year)<br />
          <br />
          <em>Relevant coursework:</em> Circuit Theory, Programming in C, Engineering Mathematics, Basic Electronics
        </p>
      </div>
    </div>
  );
};

export default About;
