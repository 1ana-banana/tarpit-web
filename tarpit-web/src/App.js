import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';
import Favorite from './components/Favorite';
import Cakes from './components/Cakes';
import Baristas from './components/Baristas';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<Main></Main>
			<Cakes id="menu"></Cakes>
			<Favorite></Favorite>
			<Baristas id="staff"></Baristas>
			<Footer></Footer>
		</Router>
	);
}

export default App;