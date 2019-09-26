import React from "react";
import Hero from "./Hero";
import Portfolio from "./portfolio_grid";
import Portfolio2 from "./portfolio_grid2";

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="everything">
          <Hero />
          <Portfolio />
          <Portfolio2 />
        </div>
      </>
    );
  }
}
