// Movie App
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import About from '../components/About';
import Single from '../components/Single';
// Pages
import Home from '../pages/Home';
import Favouriteslist from '../components/Favouriteslist';




const AppRouter = () => (
	<Router basename={'/movie-app'}>
		<div className="wrapper">
			<Header />
			{/* <Nav /> */}
			<div className="body-content">
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/about" component={About} />
				<Route path="/single/:id" exact component={Single} />
				<Route path="/favourites" exact component={Favouriteslist}/>
			</Switch>
			</div>
			<Footer />
		</div>
	</Router>
);

export default AppRouter;