import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='tech'>
                            Technology
                        </Link>
                    </li>
                    <li>
                        <Link to='about'>
                            About Me
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navigation;
