import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header(){
    return(
        <div className="container-fluids">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{cursor:'default', background: 'rgba(0, 0, 10, 0)' }}>
                <a className="navbar-brand fs-2 fw-bold font-arial " style={{ color:'rgba(201, 196, 177, 0.9)' }} onClick={() => {window.location.reload(false)}}>
                    &nbsp;&nbsp;&nbsp;
                    <i className="bi bi-geo-alt"></i>
                    &nbsp;&nbsp;&nbsp;
                    <a>LocDev</a>
                </a>
            </nav>
        </div>
    );
}