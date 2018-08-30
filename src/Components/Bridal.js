import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Bridal extends Component {
    render(){
        return(
            <div class="container">
                <header>
                    <h1><a href="/">Liancarlo</a></h1>
                    <div class="header-right">
                        <p>Need Help? 1-305-591-7332 Sign Up | Log in</p>
                    </div>
                </header>

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
                <ul class="breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li><a href="/bridal">Bridal</a></li>
                </ul>

                {/* Accordion sidebar */}
                <button class="accordion">Explore</button>
                <div class="panel">
                <ul>
                    <li>Spring 2019 </li>
                    <li>Fall 2018 </li>
                    <li>Spring 2018 </li>
                    <li>Fall 2017 </li>
                </ul>
                </div>

                <button class="accordion">Shop</button>
                <div class="panel">
                <ul>
                    <li>Regular</li>
                    <li>Plus</li>
                    <li>Petite</li>
                    <li>Tall</li>
                    <li>Sample Sale</li>
                </ul>
                </div>

                <button class="accordion">Filter by</button>
                <div class="panel">
                
                </div>

            </div>
        )
    }
}

export default Bridal;