import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/about"
						element={
							<>
								<Header />
								<About />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
