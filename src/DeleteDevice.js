import ReactDOM from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Locations from './Locations'

export default async function DeleteDevice(Name, SerialNumber){
    await fetch(`https://loc-dev-server.onrender.com/Server/Device/Delete/${Name}/${SerialNumber}`, {
        method: 'DELETE',
    })
    .catch((error) => {
        console.log('Error:', error);
    });

    ReactDOM.render(<Locations />, document.getElementById('HomeHere'))
}
