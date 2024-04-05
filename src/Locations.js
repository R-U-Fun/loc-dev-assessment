import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AllAtOnce from './AllAtOnce';
import OneAtOnce from './OneAtOnce';
import AddLocation from './AddLocation';
import Locations from './Locations'

export default function AllLocations(){
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
                <div className="container text-center">
                    <div className="row gx-3 text-center justify-content-center">
                        <div className="col-lg-1"></div>
                        <div className=" col-lg-9 ">
                            <div className="card  text-white" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none',display: 'flex',  alignItems: 'center'}} id="Box">
                                <a className="btn btn-secondary m-4 fw-bold fs-2" style={{width:"300px", cursor: 'auto'}} onClick={() => ReactDOM.render(<Locations />, document.getElementById('HomeHere'))}>Locations</a>
                                <hr/>
                                {locations.map(location => (
                                    <div key={location._id} className="text-start">
                                        <a className="btn btn-secondary m-2 fw-bold" style={{width:"200px", cursor: 'auto'}} onClick={() => ReactDOM.render(<OneAtOnce Name={location.Name} />, document.getElementById('HomeHere'))}>{location.Name}</a>
                                    </div>
                                ))}
                                <hr/>
                                <a className="btn btn-outline-success m-4 fw-bold" style={{width:"200px", cursor: 'auto'}}  onClick={() => ReactDOM.render(<AddLocation />, document.getElementById('HomeHere'))}><i className="bi bi-file-earmark-plus"></i></a>
                                <hr/>
                                <a className="btn btn-outline-secondary m-4 fw-bold" style={{width:"300px", cursor: 'auto'}} onClick={() => ReactDOM.render(<AllAtOnce />, document.getElementById('HomeHere'))} >All at once</a>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
                <br/><br/>
            </div>
    );
}