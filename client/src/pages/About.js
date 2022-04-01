const About = () => {
  return (
    <div className="about">
      <div className="left-container">
        <h1>About</h1>
        <p>
          This site was created by Brad Lewis, full stack developer and head
          wrestling coach at Excel Academy high school. The site uses MongoDB,
          Express, React.js, and Node.js and was developed as part of the
          General Assembly Software Engineering Immersive course in March 2022.
        </p>
        <div className="social-links">
          <h3>External Links</h3>
          <a href="https://github.com/BLewis739">Brad's GitHub</a>
          <a href="https://www.linkedin.com/in/brad-lewis-8b110a100/">
            Brad's LinkedIn
          </a>
          <a href="https://www.excelacademy.org/network-athletics/">
            Excel Academy Athletics
          </a>
        </div>
      </div>
      <div className="right-container">
        <h2>Team Photos</h2>
        <img
          className="top-banner"
          src="https://imgur.com/Vce3H6G.jpg"
          alt="Banner"
        ></img>
        <div>
          <img
            className="smaller"
            src="https://imgur.com/CqYy4uj.jpg"
            alt="Team"
          ></img>
          <img
            className="smaller"
            src="https://imgur.com/tEqq3Ig.jpg"
            alt="Team"
          ></img>
          <img
            className="smaller"
            src="https://imgur.com/wE7QIah.jpg"
            alt="Team"
          ></img>
        </div>
        <img
          className="smaller"
          src="https://imgur.com/8AheVZm.jpg"
          alt="Team"
        ></img>
        <img
          className="smaller"
          src="https://imgur.com/dgtdIN4.jpg"
          alt="Team"
        ></img>
      </div>
    </div>
  )
}

export default About
