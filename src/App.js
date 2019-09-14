import React from "react";
import Hero from "./Hero";
import Portfolio from "./portfolio_grid";

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="everything">
          <Hero />
          <Portfolio></Portfolio>
        </div>
      </>
    );
  }
}
