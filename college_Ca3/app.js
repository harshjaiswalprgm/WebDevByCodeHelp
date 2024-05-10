
import React from 'react';

function AnimatedCards() {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Animated Responsive Card</title>
                <link rel="stylesheet" href="index.css" />
                <style>
                    {`
                        /* Style for the navbar */
                        .navbar {
                            background-color: #000000;
                            overflow: hidden;
                            width: 100%; /* Occupy full width */
                        }

                        .navbar a {
                            float: left;
                            display: block;
                            color: #f2f2f2;
                            text-align: center;
                            padding: 14px 20px;
                            text-decoration: none;
                        }

                        .navbar a:hover {
                            background-color: #ddd;
                            color: black;
                        }
                        .h1{
                            background-color: #ddd;
                        }
                    `}
                </style>
            </head>
            <body background="https://i.pinimg.com/564x/3d/0c/4e/3d0c4e2b1c0d013be182f3879c2abcaa.jpg">
                {/* Navbar */}
                <div>
                    <div class="navbar">
                        <a href="#">Home</a>
                        <a href="#">Animation</a>
                        <a href="#">Movie</a>
                        <a href="#">Series</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </div>

                    <div style={{ backgroundColor: "rgb(12, 12, 12)" }}>
                        <div class="container">
                            <div class="card" style={{ "--clr": "#009688" }}>
                                <div class="img-box">
                                    <img src="https://i.pinimg.com/originals/1f/d4/73/1fd47353db7017b7759862a47d557dcb.png" />
                                </div>
                                <div class="content">
                                    <h2>Doremon</h2>
                                    <p>
                                        "Doraemon, robotic cat, aids Nobita with futuristic gadgets in adventures."
                                    </p>
                                    <a href="">Read More</a>
                                </div>
                            </div>
                            <div class="card" style={{ "--clr": "#FF3E7F" }}>
                                <div class="img-box">
                                    <img src="https://i.pinimg.com/originals/68/a6/c4/68a6c450b0ee9bda786dee81830221f3.jpg" />
                                </div>
                                <div class="content">
                                    <h2>Movie</h2>
                                    <p>
                                        "Shinchan's mischief, humor, family antics, a beloved anime for all."
                                    </p>
                                    <a href="">Read More</a>
                                </div>
                            </div>
                            <div class="card" style={{ "--clr": "#03A9F4" }}>
                                <div class="img-box">
                                    <img src="https://i.pinimg.com/originals/00/34/bd/0034bdfac39ce83009e01bbfa7862279.jpg" />
                                </div>
                                <div class="content">
                                    <h2>Series</h2>
                                    <p>
                                        "Trainers, Pokémon battles, friendship, adventures, Pikachu's electrifying charm captivates audiences worldwide."
                                    </p>
                                    <a href="">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}

export default AnimatedCards;
