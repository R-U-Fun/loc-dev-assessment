import ReactDOM from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Locations from './Locations'

export default async function DeleteLocation(Name){
    await fetch(`https://loc-dev-server.onrender.com/Server/Location/Delete/${Name}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .catch((error) => {
        console.log('Error:', error);
    });

    ReactDOM.render(<Locations />, document.getElementById('HomeHere'))
}
