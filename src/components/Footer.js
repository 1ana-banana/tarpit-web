import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className="footerContainer">
			<div className="footerColumn">
				<h4>Social Media</h4>
				<div><a href ="https://www.facebook.com/tarpitcafe">Facebook</a></div>
				<div><a href = "https://www.instagram.com/tarpit/">Instagram</a></div>
			</div>
			<div className="footerColumn">
				<h4>About</h4>
				<div><a href="mailto:careers@tarpit.com">Join the Crew</a></div>
			</div>
			<div className="footerColumn">
				<h4>Location</h4>
				<div><a href = "https://goo.gl/maps/eHzaoVGLv9i6wkRS9">Brooklyn</a></div>
			</div>
		</div>
	);
};

export default Footer;