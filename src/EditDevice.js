import ReactDOM from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Locations from './Locations'

function UpdateDevice(PName, PSerialNumber, PType, PImage, PStatus, NewSerialNumber, NewType, NewImage, NewStatus){

    if(!NewSerialNumber){
        NewSerialNumber = PSerialNumber;
    }
    if(!NewType){
        NewType = PType;
    }
    if(!NewImage){
        NewImage = PImage;
    }
    if(!NewStatus){
        NewStatus = PStatus;
    }


    let UpdatedDevice = {
            SerialNumber: NewSerialNumber,
            Type: NewType,
            Image: NewImage,
            Status: NewStatus
        }

    fetch(`https://loc-dev-server.onrender.com/Server/Device/Edit/${PName}/${PSerialNumber}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            UpdatedDevice
        ),
    })
    .catch((error) => {
        console.log('Error:', error);
    });

    ReactDOM.render(<Locations />, document.getElementById('HomeHere'));
}

export default function EditDevice(props) {
    
    const SerialNumberRef = useRef();
    const TypeRef = useRef();
    const ImageRef = useRef();
    const StatusRef = useRef();

    let [locations, setLocations] = useState([]);

    useEffect(() => {
        let fetchLocations = async () => {
        let res = await fetch(`https://loc-dev-server.onrender.com/Server/Location/${props.Name}`);
        let data = await res.json();
        setLocations(data);
        };

        fetchLocations();
    }, []);

    return (
        <div>
            <div className="text-start">
                    <div className="container text-center ">
                        <a className="btn btn-secondary m-4 fw-bold fs-2" style={{width:"300px", cursor: 'auto'}} onClick={() => ReactDOM.render(<Locations />, document.getElementById('HomeHere'))}>{props.Name}</a>
                                    <table className="text-start"></table>
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
                                </div>
                            <br/><hr/>
                            </div>
                            <div className="col-lg-4 border border-secondary border-3 rounded-4 m-2">
                            <a className="btn btn-secondary m-4 fw-bold" style={{width:"300px", cursor: 'auto'}}>New Devices</a>
                                <div className="card  text-white" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none',display: 'flex',  alignItems: 'center'}} id="Box2">
                                    <table className="text-start">
                                        <tbody>
                                            <div>
                                                <tr>
                                                    <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Serial</a></th>
                                                    <td><input type="text" className="btn btn-light m-2 fw-bold" style={{width:"170px", cursor: 'auto'}} placeholder={props.SerialNumber} ref={SerialNumberRef}/></td>
                                                </tr>
                                                <tr>
                                                    <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Type</a></th>
                                                    <td>
                                                        <select className="btn btn-light m-2 fw-bold" style={{width:"170px", cursor: 'auto'}} ref={TypeRef} defaultValue={props.Type}>
                                                            <option value="pos">pos</option>
                                                            <option value="kisok">kisok</option>
                                                            <option value="signage">signage</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Image</a></th>
                                                    <td><select className="btn btn-light m-2 fw-bold" style={{width:"170px", cursor: 'auto'}} ref={ImageRef} defaultValue={props.Image}>
                                                            <option value="./Images/Type1.jpg">Img1</option>
                                                            <option value="./Images/Type2.jpg">Img2</option>
                                                            <option value="./Images/Type3.jpg">Img3</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Status</a></th>
                                                    <td className="btn btn-light m-2 fw-bold"><input type="checkbox" value="" className="form-check-input" style={{width:"100px", cursor: 'auto'}} ref={StatusRef}/></td>
                                                </tr>
                                                <hr/>
                                            </div>
                                        </tbody>
                                    </table>
                                    <a className="btn btn-outline-success m-4 fw-bold" style={{width:"300px", cursor: 'auto'}} onClick={() => UpdateDevice(props.Name, props.SerialNumber, props.Type, props.Image, props.Status, SerialNumberRef.current.value, TypeRef.current.value, ImageRef.current.value, StatusRef.current.checked)}><i class="bi bi-file-arrow-up"></i></a>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                <hr/><br/>
                </div>
            </div>
        );
    }
