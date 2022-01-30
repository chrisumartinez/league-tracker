import "./App.css";
import React from "react";
import NavBar from "./components/NavBar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home.js";
import { About } from "./routes/About.js";

const App = () => {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</Router>
	);
};

export default App;
