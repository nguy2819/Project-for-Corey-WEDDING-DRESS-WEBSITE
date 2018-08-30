import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
    render(){
        return(
            <div class="container">
                <div class="header">
                    <h1><a href="/">Liancarlo</a></h1>
                    <div class="header-right">
                        <p>Need Help? 1-305-591-7332 Sign Up | Log in</p>
                    </div>
                </div>

                {/* Navigation Bar */}
                <div class="container-fluid">
                <button><Link to="/bridal">Bridal</Link></button>
                <button><Link to="/azul">Azul</Link></button>
                <button><Link to="/evening">Evening</Link></button>
                <button><Link to="/accessories">Accessories</Link></button>
                <button><Link to="/stores">Stores</Link></button>
                <button><Link to="/events">Events</Link></button>
                <button><Link to="/press">Press</Link></button>
                <button><Link to="/about">About</Link></button>
                <button><Link to="/contact">Contact</Link></button>
                </div>

                {/* Breadcrumb Navigation */}
                <ul class="breadcrumb">
                    <li><a href="/">Home</a></li>
                </ul>
            </div>
        )
    }
}

export default Home;