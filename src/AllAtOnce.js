import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Locations from './Locations'

import Type1 from './Images/Type1.jpg'
import Type2 from './Images/Type2.jpg'
import Type3 from './Images/Type3.jpg'

export default function AllAtOnce() {
  let [locations, setLocations] = useState([]);

  useEffect(() => {
    let fetchLocations = async () => {
      let res = await fetch('http://localhost:3214/Server/AllLocations');
      let data = await res.json();
      setLocations(data);
    };

    fetchLocations();
  }, []);

  return (
    <div>
      {locations.map(location => (
        <div key={location._id} className="text-start">
                <div className="container text-center ">
                    <a className="btn btn-secondary m-4 fw-bold fs-2" style={{width:"300px", cursor: 'auto'}} onClick={() => ReactDOM.render(<Locations />, document.getElementById('HomeHere'))}>{location.Name}</a>
                    <div className="row gx-3 text-center justify-content-center">
                        <div className=" col-lg-1"></div>
                        <div className=" col-lg-4">
                            <div className="card  text-white border border-secondary border-3 rounded-4 m-2" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none',display: 'flex',  alignItems: 'center'}} id="Box">
                                <a className="btn btn-secondary m-4 fw-bold" style={{width:"300px", cursor: 'auto'}} >Location</a>
                                <table className="text-start">
                                    <tbody>
                                        <tr>
                                            <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Name</a></th>
                                            <td><a className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}>{location.Name}</a></td>
                                        </tr>
                                        <tr>
                                            <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Address</a></th>
                                            <td><a className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}>{location.Address}</a></td>
                                        </tr>
                                        <tr>
                                            <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Phone</a></th>
                                            <td><a className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}>{location.Phone}</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        <br/><hr/>
                        </div>
                        <div className="col-lg-4 border border-secondary border-3 rounded-4 m-2">
                        <a className="btn btn-secondary m-4 fw-bold" style={{width:"300px", cursor: 'auto'}}>Devices</a>
                        {location.Devices.map(device => (
                            <div key={device._id} className="card  text-white" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none',display: 'flex',  alignItems: 'center'}} id="Box2">
                                <table className="text-start">
                                    <tbody>
                                            <tr>
                                                <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Serial</a></th>
                                                <td><a className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}>{device.SerialNumber}</a></td>
                                            </tr>
                                            <tr>
                                                <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Type</a></th>
                                                <td><a className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}>{device.Type}</a></td>
                                            </tr>
                                            <tr>
                                                <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Image</a></th>
                                                <td><a className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}>{device.Image}</a>
                                                {device.Image === './Images/Type1.jpg' ? <img src={Type1} width="100px" className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}/> : device.Image === './Images/Type2.jpg' ? <img src={Type2} width="100px" className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}/> : device.Image === './Images/Type3.jpg' ? <img src={Type3} width="100px" className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}/> : <img src='./Images,jpg' width="100px" className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}/> }</td>
                                            </tr>
                                            <tr>
                                                <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Status</a></th>
                                                <td><a className="btn btn-secondary m-2 fw-bold" style={{width:"170px", cursor: 'auto'}}>{device.Status ? 'Active' : 'Inactive'}</a></td>
                                            </tr>
                                    </tbody>
                                </table>
                            <hr/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr/><br/>
        </div>
    ))}
    </div>
    );
}
