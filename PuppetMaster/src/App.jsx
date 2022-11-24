import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationTop from './Components/NavigationTop/NavigationTop';
import Dashboard from './Pages/Dashboard/Dashboard';
import LoadingScreen from './Pages/LoadingScreen/LoadingScreen';
import Logs from './Pages/Logs/Logs';
import Scrape from './Pages/Scrape/Scrape';
import Settings from './Pages/Settings/Settings';

function App() {
	const [Loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<div className="App">
			{Loading ? (
				<LoadingScreen />
			) : (
				<>
					<NavigationTop />
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/scrape" element={<Scrape />} />
						<Route path="/logs" element={<Logs />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</>
			)}
		</div>
	);
}

export default App;
