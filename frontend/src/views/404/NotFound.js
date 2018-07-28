import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div style={{width: "100%", marginTop: "47vh", color: "red", backgroundColor: "gray"}} className="h1 text-center">
            NOPE :)
            <Link to="/" className="ml-4">
                <img src="konecty2.png" height="100vh" />
            </Link>
        </div>
    );
}