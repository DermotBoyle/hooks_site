import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";

function Portfolio2() {
  return (
    <div className="flexWrapper">
      <article className="cardWrapper">
        <h2 className="titleofproject">A progress component with animations</h2>
        <div className="card">
          <input
            type="checkbox"
            id="card4"
            class="more"
            aria-hidden="true"
          ></input>

          <div className="content">
            <div className="front4 front">
              <div className="inner">
                <label for="card4" class="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="logos">
                  <div className="tvIcon">
                    <a
                      href="https://controlcenter.netlify.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faTv}></FontAwesomeIcon>

                      <span>&nbsp;Website</span>
                    </a>
                  </div>
                  <div className="gitIcon">
                    <a
                      href="https://github.com/DermotBoyle/waavicontrolcentre"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon>
                      <span>&nbsp;Code</span>
                    </a>
                  </div>
                </div>
                <div className="info">
                  <p>
                    A component built to practice my skills using flexbox, React
                    Hooks and animations. The main idea was to create a ReactJS
                    component as pixel perfect to the original sketch file as
                    possible.
                  </p>
                </div>
                <label for="card4" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left">&larr;</i>
                </label>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="cardWrapper">
        <h2 className="titleofproject">Limbiio - A text 2 speech App</h2>
        <div className="card">
          <input
            type="checkbox"
            id="card5"
            class="more"
            aria-hidden="true"
          ></input>

          <div className="content">
            <div className="front5 front">
              <div className="inner">
                <label for="card5" class="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="logos">
                  <div className="tvIcon">
                    <a
                      href="https://dermotstripesocks.netlify.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faTv}></FontAwesomeIcon>
                      <span>&nbsp;Website</span>
                    </a>
                  </div>
                  <div className="gitIcon">
                    <a
                      href="https://github.com/DermotBoyle/speech2text"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon>
                      <span>&nbsp;Code</span>
                    </a>
                  </div>
                </div>
                <div className="info">
                  <p>
                    This is a text to speech app that utilises an API for its
                    functionality. Other notable things are the fun use of
                    JS-Particles as a background and that it can tweet! It was
                    built in React and styled with bootstrap.
                  </p>
                </div>
                <label for="card5" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left">&larr;</i>
                </label>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="cardWrapper">
        <h2 className="titleofproject">Mobile App - To Do ! (React Native)</h2>
        <div className="card">
          <input
            type="checkbox"
            id="card6"
            class="more"
            aria-hidden="true"
          ></input>

          <div className="content">
            <div className="front6 front">
              <div className="inner">
                <label for="card6" class="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="logos">
                  <div className="tvIcon">
                    <FontAwesomeIcon icon={faTv}></FontAwesomeIcon>
                    <span>&nbsp;Website</span>
                  </div>
                  <div className="gitIcon">
                    <a
                      href="https://github.com/DermotBoyle/nativeTodoAPP"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon>
                      <span>&nbsp;Code</span>
                    </a>
                  </div>
                </div>
                <div className="info">
                  <p>
                    A mobile To Do App I built in React Native. Runs with the
                    JSON-server DB and has create/delete functionality. Willing
                    to sell for around 30 million Euro...contact details below.
                  </p>
                </div>
                <label for="card6" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left">&larr;</i>
                </label>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Portfolio2;
