import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ toggle, show }) => {
	const scrollTo = (id) => {
		const element = document.getElementById(id);

		toggle();
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};
	return (
		<div className={`sideContainer ${show ? 'show' : ''}`}>
			<div className="close" onClick={toggle}>
				Close
			</div>
			<div className="sideMenu">
				<Link to="/" className="sideLink" onClick={() => scrollTo('menu')}>
					Menu
				</Link>
				<Link to="/" className="sideLink" onClick={() => scrollTo('staff')}>
					Our Baristas
				</Link>
				<Link to="/" className="sideLink" onClick={() => scrollTo('favourite')}>
					Special Cakes
				</Link>
				<a href="mailto:hello@tarpitcoffee.com" className="sideLink">
					Contact
				</a>

				<div className="btnWrap">
					<div className="sideRoute"><a href = "https://goo.gl/maps/eHzaoVGLv9i6wkRS9">Visit Tar Pit</a></div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;