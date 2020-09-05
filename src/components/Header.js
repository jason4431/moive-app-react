import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => (
	<header>
    	<h1><Link to="/">Movie LEEstings</Link></h1>
		<Nav />
	</header>
);


export default Header;