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
                    <FontAwesomeIcon icon={faTv}></FontAwesomeIcon>
                    <span>&nbsp;Website</span>
                  </div>
                  <div className="gitIcon">
                    <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon>
                    <span>&nbsp;Code</span>
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
        <h2 className="titleofproject">Liimbio - A text 2 speech App</h2>
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
                    <FontAwesomeIcon icon={faTv}></FontAwesomeIcon>
                    <span>&nbsp;Website</span>
                  </div>
                  <div className="gitIcon">
                    <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon>
                    <span>&nbsp;Code</span>
                  </div>
                </div>
                <div className="info">
                  <p>
                    This is a text to speech app that utilises an API for its
                    funcitonality. Other notable things is the fun use of
                    JS-Particles as a background and that it can tweet the quote
                    from your account. It was built in React and style with
                    bootstrap.
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
                    <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon>
                    <span>&nbsp;Code</span>
                  </div>
                </div>
                <div className="info">
                  <p>
                    A mobile To Do App I built in React Native. Runs with the
                    json server DB and has create/delete funcitonality. Willing
                    to sell for around 30 million Euro...
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
