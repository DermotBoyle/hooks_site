import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Navbar";
import Frontend from "./frontend";
import Contact from "./contact";
import Home from "./home";

export default class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<Nav />
					<Home />
					<div className="everything">
						<Switch>
							<Route path="/frontend">
								<Frontend />
							</Route>
							<Route path="/contact">
								<Contact />
							</Route>
						</Switch>
					</div>
				</Router>
			</>
		);
	}
}
