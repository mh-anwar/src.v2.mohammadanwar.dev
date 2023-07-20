import { useState } from 'react';
import Header from './Sections/Header';
import Introduction from './Sections/Introduction';
import Projects from './Sections/Projects';
import Loader from './Components/Loader';
import About from './Sections/About';
import TechStack from './Sections/TechStack';
import Contact from './Sections/Contact';

function App() {
	const [isLoading, setLoading] = useState(true);
	setTimeout(() => {
		setLoading(false);
	}, '3500');

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					<Header />
					<Introduction />
					<About />
					<TechStack />
					<Projects />
					<Contact />
				</div>
			)}
		</>
	);
}

export default App;
