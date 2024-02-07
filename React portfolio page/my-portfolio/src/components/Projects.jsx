import React from "react";

function Projects() {
  return (
    <div className="projects green">
      <h2 id="mgb">Past Projects</h2>
      <div class="pricing-container">
        <div class="pricing-plan">
          <div class="plan-title">Tindog</div>
          <img
            class="prj"
            src={require("../assets/Screenshot 2023-11-14 141214.png")}
            alt=""
          />
          <a
            href="https://mattbava.github.io/tindog/"
            target="_blank"
            rel="noreferrer"
          >
            <button>View Site</button>
          </a>
        </div>
        <div class="pricing-plan">
          <div class="plan-title">Design Agency</div>
          <img
            class="prj"
            src={require("../assets/Screenshot 2023-11-14 141057.png")}
            alt=""
          />

          <a
            href="https://mattbava.github.io/Design-Agency/"
            target="_blank"
            rel="noreferrer"
          >
            <button>View Site</button>
          </a>
        </div>
        <div class="pricing-plan">
          <div class="plan-title">Mondrain Artwork</div>
          <img
            class="prj"
            src={require("../assets/Screenshot 2023-11-14 141014.png")}
            alt=""
          />

          <a
            href="https://mattbava.github.io/Mondrian/"
            target="_blank"
            rel="noreferrer"
          >
            <button>View Site</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
