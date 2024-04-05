import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AddDevice from './AddDevice';
import Locations from './Locations'
import DeleteLocation from './DeleteLocation';
import EditLocation from './EditLocation';
import DeleteDevice from './DeleteDevice';
import EditDevice from './EditDevice';

import Type1 from './Images/Type1.jpg'
import Type2 from './Images/Type2.jpg'
import Type3 from './Images/Type3.jpg'

export default function OneAtOnce(props) {
    let [locations, setLocations] = useState([]);

    useEffect(() => {
        let fetchLocations = async () => {
        let res = await fetch(`http://localhost:3214/Server/Location/${props.Name}`);
        let data = await res.json();
        setLocations(data);
        };

        fetchLocations();
    }, []);

    console.log(locations.Devices);

    let Device = [];

    if (locations.Devices) {
    for(let L=0; L < parseInt(locations.Devices.length); L++){
        Device.push(
            <div>
                <tr>
                    <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Serial</a></th>
                    <td><a className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}>{locations.Devices[L].SerialNumber}</a></td>
                </tr>
                <tr>
                    <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Type</a></th>
                    <td><a className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}>{locations.Devices[L].Type}</a></td>
                </tr>
                <tr>
                    <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Image</a></th>
                    <td><a className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}>{locations.Devices[L].Image}</a>
                    {locations.Devices[L].Image === './Images/Type1.jpg' ? <img src={Type1} width="100px" className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}/> : locations.Devices[L].Image === './Images/Type2.jpg' ? <img src={Type2} width="100px" className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}/> : locations.Devices[L].Image === './Images/Type3.jpg' ? <img src={Type3} width="100px" className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}/> : <img src='./Images,jpg' width="100px" className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}/> }
                    </td>
                </tr>
                <tr>
                    <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Status</a></th>
                    <td><a className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}>{locations.Devices[L].Status ? 'Active' : 'Inactive'}</a></td>
                </tr>
                <a className="btn btn-outline-info m-4 fw-bold" style={{width:"300px", cursor: 'auto'}} onClick={() => ReactDOM.render(<EditDevice Name={locations.Name} SerialNumber={locations.Devices[L].SerialNumber} Type={locations.Devices[L].Type} Image={locations.Devices[L].Image} Status={locations.Devices[L].Status} />, document.getElementById('HomeHere'))}><i className="bi bi-pencil"></i></a>
                <a className="btn btn-outline-danger m-4 fw-bold" style={{width:"300px", cursor: 'auto'}}  onClick={() => DeleteDevice(props.Name, locations.Devices[L].SerialNumber)}><i className="bi bi-trash3"></i></a>
                <hr/>
            </div>
        );
    }
        }
  
  return (
    <div>
        <div className="text-start">
                <div className="container text-center ">
                    <a className="btn btn-secondary m-4 fw-bold fs-2" style={{width:"300px", cursor: 'auto'}} onClick={() => ReactDOM.render(<Locations />, document.getElementById('HomeHere'))}>{props.Name}</a>
                    <div className="row gx-3 text-center justify-content-center">
                        <div className=" col-lg-1"></div>
                        <div className=" col-lg-4">
                            <div className="card  text-white border border-secondary border-3 rounded-4 m-2" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none',display: 'flex',  alignItems: 'center'}} id="Box">
                                <a className="btn btn-secondary m-4 fw-bold" style={{width:"300px", cursor: 'auto'}} >Details</a>
                                <table className="text-start">
                                    <tbody>
                                        <tr>
                                            <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Name</a></th>
                                            <td><a className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}>{locations.Name}</a></td>
                                        </tr>
                                        <tr>
                                            <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Address</a></th>
                                            <td><a className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}>{locations.Address}</a></td>
                                        </tr>
                                        <tr>
                                            <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Phone</a></th>
                                            <td><a className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}>{locations.Phone}</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a className="btn btn-outline-info m-4 fw-bold" style={{width:"300px", cursor: 'auto'}}  onClick={() => ReactDOM.render(<EditLocation Name={locations.Name} Address={locations.Address} Phone={locations.Phone} />, document.getElementById('HomeHere'))}><i className="bi bi-pencil"></i></a>
                                <a className="btn btn-outline-danger m-4 fw-bold" style={{width:"300px", cursor: 'auto'}} onClick={() => DeleteLocation(props.Name)}><i className="bi bi-trash3"></i></a>
                            </div>
                        <br/><hr/>
                        </div>
                        <div className="col-lg-4 border border-secondary border-3 rounded-4 m-2">
                            <table className="text-start">
                                <a className="btn btn-secondary m-4 fw-bold" style={{width:"300px", cursor: 'auto'}}>Devices</a>
                                <div className="card  text-white" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none',display: 'flex',  alignItems: 'center'}} id="Box2">
                                    <tbody>
                                        {Device}
                                        <a className="btn btn-outline-success m-4 fw-bold" style={{width:"300px", cursor: 'auto'}} onClick={() => ReactDOM.render(<AddDevice Name={locations.Name}/>, document.getElementById('HomeHere'))}><i className="bi bi-file-earmark-plus"></i></a>
                                    </tbody>
                                </div>
                            </table>
                            <hr/>
                        </div>
                    </div>
                </div>
                <hr/><br/>
            </div>
        </div>
    );
}
