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

      <article className="cardWrapper">
        <h2 className="titleofproject">
          Website for Veterinary service(full-stack)
        </h2>
        <div className="card">
          <input
            type="checkbox"
            id="card2"
            class="more"
            aria-hidden="true"
          ></input>

          <div className="content">
            <div className="front2 front">
              <div className="inner">
                <label for="card2" class="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="info">
                  <p>
                    A website built for a start-up in Madrid. It was a
                    full-stack project that used the MERN stack. It has the
                    ability to create users and authenticate them. It has data
                    for veterinaries in the whole of Spain and displays them on
                    a map using leaflet. I worked a alot with API data calls for
                    this project on the front-end.
                  </p>
                </div>
                <label for="card2" className="button return" aria-hidden="true">
                  <i className="fas fa-arrow-left">&larr;</i>
                </label>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="cardWrapper">
        <h2 className="titleofproject">
          My blog built with Gatsby and GraphQL
        </h2>
        <div className="card">
          <input
            type="checkbox"
            id="card3"
            class="more"
            aria-hidden="true"
          ></input>

          <div className="content">
            <div className="front3 front">
              <div className="inner">
                <label for="card3" class="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="info">
                  <p>
                    This blog was built to learn more about Gatsby and GraphQL.
                    I really enjoyed this project and hope to work much more
                    with both of those techologies in future builds.
                  </p>
                </div>
                <label for="card3" className="button return" aria-hidden="true">
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
