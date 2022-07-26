import React from 'react';
import './Cakes.css';
import './Baristas.css';
import { baristas } from '../data/baristas';
import Slide from 'react-reveal/Reveal';

const Baristas = ({ id }) => {
	return (
		<div className="baristaContainer" id={id}>
			<h1 className="cakeHeading">Our Baristas</h1>
			<div className="cakeWrapper">
				{baristas.map((barista, index) => (
					<Slide
						key={(barista, index)}
						right={index % 2 === 1 ? true : false}
						left={index % 2 === 0 ? true : false}
					>
						<div className="cakeCard">
							<img src={barista.img} className="baristaImg" alt={barista.alt} />
							<div className="cakeInfo">
								<div className="protTitle">{barista.name}</div>
								<div className='protDescription'>{barista.detail}</div>
							</div>
						</div>
					</Slide>
				))}
			</div>
		</div>
	);
};

export default Baristas;