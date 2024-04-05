import ReactDOM from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Locations from './Locations'

function UpdateLocation(PName, PAddress, PPhone, NewName, NewAddress, NewPhone){

    if(!NewName){
        NewName = PName;
    }
    if(!NewAddress){
        NewAddress = PAddress;
    }
    if(!NewPhone){
        NewPhone = PPhone;
    }


    let UpdatedLocation = {
            Name: NewName,
            Address: NewAddress,
            Phone: NewPhone
        }

    fetch(`https://loc-dev-server.onrender.com/Server/Location/Edit/${PName}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            UpdatedLocation
        ),
    })
    .catch((error) => {
        console.log('Error:', error);
    });

    ReactDOM.render(<Locations />, document.getElementById('HomeHere'));
}

export default function EditLocation(props) {
  
    const NameRef = useRef();
    const AddressRef = useRef();
    const PhoneRef = useRef();

    return (
    <div>
        <div className="text-start">
                <div className="container text-center ">
                    <a className="btn btn-secondary m-4 fw-bold fs-2" style={{width:"300px", cursor: 'auto'}} onClick={() => ReactDOM.render(<Locations />, document.getElementById('HomeHere'))}>Edit Location</a>
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
                                            <td><input type="text" className="btn btn-light m-2 fw-bold text-dark" style={{width:"170px", cursor: 'auto'}} placeholder={props.Name} ref={NameRef}/></td>
                                        </tr>
                                        <tr>
                                            <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Address</a></th>
                                            <td><input type="text" className="btn btn-light m-2 fw-bold text-dark" style={{width:"170px", cursor: 'auto'}} placeholder={props.Address} ref={AddressRef}/></td>
                                        </tr>
                                        <tr>
                                            <th><a className="btn btn-secondary m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Phone</a></th>
                                            <td><input type="text" className="btn btn-light m-2 fw-bold text-dark" style={{width:"170px", cursor: 'auto'}} placeholder={props.Phone} ref={PhoneRef}/></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a className="btn btn-outline-success m-4 fw-bold" style={{width:"300px", cursor: 'auto'}} onClick={() => UpdateLocation(props.Name, props.Address, props.Phone, NameRef.current.value, AddressRef.current.value, PhoneRef.current.value)}><i className="bi bi-file-earmark-plus"></i></a>
                            </div>
                        <br/><hr/>
                        </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
            <hr/><br/>
        </div>
    </div>
    );
}
