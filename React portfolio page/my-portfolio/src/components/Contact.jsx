import React from "react";

function Contact() {
  return (
    <div class="contact white">
      <h2 id="mgb">Contact Me</h2>
      <div class="pricing-container">
        <div class="pricing-plan">
          <h2>Email Address</h2>
          <a href="mailto:Matthew.bava@gmail.com">
            <p>Matthew.bava@gmail.com</p>
          </a>
        </div>
        <div class="pricing-plan">
          <h2>Phone Number</h2>
          <a href="tel:+1(732) 378-9360">
            <p>(732) 378-9360</p>
          </a>
        </div>
        <div class="pricing-plan">
          <h2>GitHub</h2>
          <a
            href="https://github.com/mattBava"
            target="_blank"
            rel="noreferrer"
          >
            <p>https://github.com/mattBava</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
