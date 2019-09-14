import React, { useState, useRef, useEffect, useCallback } from "react";
import NavBar from "./Navbar";
import { animated, useTransition } from "react-spring";

const Hero = () => {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const [button, setButtonState] = useState(true);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6"
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(0deg)", color: "#28d79f" },
      { transform: "perspective(600px) rotateX(0deg)" }
    ],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 }
    ],
    update: { color: "#28b4d7" }
  });

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(
        () =>
          set([
            "Dermot Boyle",
            "Innovative Web Development",
            "Websites promote you 24/7: No employee will do that."
          ]),
        2000
      )
    );
    ref.current.push(
      setTimeout(
        () =>
          set([
            "Dermot Boyle",

            "Websites promote you 24/7: No employee will do that."
          ]),
        5000
      )
    );
    ref.current.push(
      setTimeout(
        () =>
          set([
            "Dermot Boyle",
            "JavaScript Developer",
            "Websites promote you 24/7: No employee will do that."
          ]),
        8000
      )
    );

    ref.current.push(
      setTimeout(() => set(["Dermot Boyle", "JavaScript Developer"]), 10000)
    );
  }, []);

  useEffect(() => void reset(), []);

  return (
    <div className="Container">
      <NavBar />
      <div className="wrapper">
        {setButtonState === false ? (
          <button className="startButton" onClick={() => setButtonState(true)}>
            Click Me!
          </button>
        ) : (
          <button className="startButton" style={{ display: "none" }}></button>
        )}
        <main className="introAnimation">
          {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
            <animated.div
              className="transitions-item"
              key={key}
              style={rest}
              onClick={reset}
            >
              <animated.div style={{ overflow: "hidden", height: innerHeight }}>
                {item}
              </animated.div>
            </animated.div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Hero;
