import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <>
      {/* <h2 style={{ textAlign: "center", marginTop: '5em' }}>Get in contact !</h2> */}
      <div className="contactContainer">
        <ul style={{ marginTop: "3rem" }}>
          <li>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> &nbsp;
            dermotboyled@gmail.com
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon> &nbsp;
            /in/boyledermot
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>&nbsp;
            @dermotboyle
          </li>
        </ul>
      </div>
      <footer style={{ textAlign: "end" }}>
        {" "}
        <p
          style={{
            backgroundColor: "hsl(0, 100%, 88%)",
            margin: "0",
            padding: " 0 2rem"
          }}
        >
          Made with <FontAwesomeIcon icon={faHeart} /> by Dermot Boyle
        </p>
      </footer>
    </>
  );
}
