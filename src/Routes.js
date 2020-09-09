import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Skills from "./components/pages/skills/Skills";
import Experiences from "./components/pages/experiences/Experiences";
import Educations from "./components/pages/educations/Educations";
import Portofolios from "./components/pages/portofolios/Portofolios";
import Certificates from "./components/pages/certificates/Certificates";

export default function Routes() {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Switch>
				<Route exact path="/skills" component={Skills} />
				<Route exact path="/experiences" component={Experiences} />
				<Route exact path="/educations" component={Educations} />
				<Route exact path="/portofolios" component={Portofolios} />
				<Route exact path='/certificates' component={Certificates} />
			</Switch>
		</Router>
	);
}
