import { useState } from 'react';

import './App.css';
import { Header, Footer } from './components/index.jsx';
import {Contact, About, Portfolio} from './components/pages/index.jsx';

function App() {
	const [theme, setTheme] = useState(true);


	const handleToggleTheme = () => {
		console.log('clicked handleToggleTheme');
		setTheme(!theme);

	};

	return (
		<div
			className="App flex flex-col min-h-screen  "
			data-theme = { theme ? 'night' : 'light'}
		>
			<Header handleToggleTheme={handleToggleTheme}/>
			<About />
			
			<Footer />
		</div>
	);
}

export default App;

