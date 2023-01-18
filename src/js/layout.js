import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import Planet from "./views/planets"
import People from "./views/characters";
import Detail from "./views/detail";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Vehiculos from "./views/vehiculos";
import Peliculas from "./views/films";
import Starships from "./views/starships";
import Species from "./views/species";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/planets" element={<Planet />} />
						<Route path="/people" element={<People />} />
						<Route path="/vehicles" element={<Vehiculos />} />
						<Route path="/films" element={<Peliculas />} />
						<Route path="/starships" element={<Starships />} />
						<Route path="/species" element={<Species />} />
						<Route path="/:element/:id" element={<Detail />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
