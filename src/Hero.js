import React, { useState, useRef } from "react";
import NavBar from "./Navbar";
import { useSpring, animated, useChain } from "react-spring";

const Hero = () => {
  const [open, set] = useState(false);
  const springRef = useRef();
  const transitionRef = useRef();
  const fade = useSpring({
    ref: springRef,
    config: { friction: 100 },
    from: { opacity: 0, transform: "translate3d(0,40px,0)" },
    to: [
      { opacity: 1, transform: "translate3d(0,0px,0)" },
      { opacity: 0, transform: "translate3d(0, - 40px,0)" }
    ],
    delay: 200
  });

  useChain([springRef, transitionRef]);

  return (
    <div className="heroBackground">
      <NavBar />
      <animated.div style={fade} className="contentWrapper">
        <div className="mainContent">
          <h5 className="openingName">Dermot Boyle</h5>
          <h1 className="openingTitle">Innovative Web</h1>
          <h1 className="openingTitle">Development</h1>
          <h5 className="openingQuote">
            “Websites promote you 24/7: No employee will do that”{" "}
          </h5>
        </div>
      </animated.div>
    </div>
  );
};

export default Hero;
