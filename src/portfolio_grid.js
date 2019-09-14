import React from "react";

function Portfolio() {
  return (
    <div className="flexWrapper">
      <article className="cardWrapper">
        <h2 className="titleofproject">BootStrap site & Photogallery</h2>
        <div className="card">
          <input
            type="checkbox"
            id="card1"
            class="more"
            aria-hidden="true"
          ></input>

          <div className="content">
            <div className="front1 front">
              <div className="inner">
                <label for="card1" class="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="info">
                  <p>
                    A website built for a photo blogger. Things of note: it was
                    built to practice using HTML5, CSS3 andd BootStrap for
                    styling. It was also important for it to be responsive.{" "}
                  </p>
                </div>
                <label for="card1" className="button return" aria-hidden="true">
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

export default Portfolio;
