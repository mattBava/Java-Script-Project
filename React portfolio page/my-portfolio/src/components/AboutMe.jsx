import React from "react";

function AboutMe() {
  return (
    <div class="about white">
      <div class="pricing-container">
        <div class="text pricing-plan">
          <h2>About me</h2>
          <p>
            A self-taught web developer with a passion for learning and
            improving my skills. I have a degree in IT Management and hands on
            expertise in the tech world.
          </p>
        </div>
        <div class="img pricing-plan">
          <img
            id="me"
            src={require("../assets/Photo of m e.jpg")}
            alt="Pic of me"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
