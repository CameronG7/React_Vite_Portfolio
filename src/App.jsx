import { useEffect, useState } from 'react';

import './App.css';
import { Header, Footer, Shell } from './components/index.jsx';
// import Logic from './Logic';



function App() {
	// const logic = new Logic();
	const [theme, setTheme] = useState(true);
	const [currentPage, setCurrentPage] = useState('About');
	

	const handlePageChange = (page) => {
		console.log('was this clicked')
		setCurrentPage(page)
	};

	const handleToggleTheme = () => {
		console.log('clicked handleToggleTheme');
		setTheme(!theme);
	};

	useEffect(() => {
		console.log('I am app')},[]);
	return (
		<div
			className="App flex flex-col min-h-screen  "
			data-theme={theme ? 'night' : 'emerald'}
		>
			<Header
				handlePageChange={handlePageChange}
				handleToggleTheme={handleToggleTheme}
			/>
			<Shell
				handlePageChange={handlePageChange}
				currentPage={currentPage}
			/>

			<Footer />
		</div>
	);
}

export default App;

