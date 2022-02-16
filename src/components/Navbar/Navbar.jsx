import React from 'react';
import './navbar.scss';

class Navbar extends React.Component {
    render() {
        return (
            <p className='navbar'>
                <a href='#' className='blogLink'>
                    blog (coming soon...)
                </a>
            </p>
        );
    }
}

export default Navbar;
