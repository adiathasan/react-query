import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
	return (
		<div className='navbar'>
			<h3>
				<NavLink to='/' exact>
					Home
				</NavLink>
			</h3>
			<ul>
				<li>
					<NavLink to='/planets'>Planets</NavLink>{' '}
				</li>
				<li>
					<NavLink to='/people'>People</NavLink>{' '}
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
