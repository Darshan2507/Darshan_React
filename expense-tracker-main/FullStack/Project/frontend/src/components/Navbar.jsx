import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark ">
            <div className="container-fluid ">
                <a className="navbar-brand fw-bolder fst-italic fs-2 text-light" href="#">Diary</a>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center ">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => 
                                isActive ? "nav-link text-black bg-white rounded mx-3" : "nav-link text-light  mx-3"
                            } to="/add">Add</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => 
                                isActive ? "nav-link text-black bg-white rounded mx-3" : "nav-link text-light mx-3"
                            } to="/overview">Overview</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => 
                                isActive ? "nav-link text-black bg-white rounded mx-3" : "nav-link text-light mx-3"
                            } to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
