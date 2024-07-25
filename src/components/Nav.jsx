import React, { useContext } from 'react';
import Mycontext from './Mycontext';

const Nav = () => {
    const { count, setcount } = useContext(Mycontext);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 d-flex position-relative justify-content-evenly gy-3">
                    <button className="position-static border-0 bg-transparent">
                        <h3>Start Bootstrap</h3>
                    </button>
                    <span>
                        <button className="border-0  bg-transparent">
                            <h5>Home</h5>
                        </button>
                    </span>
                    <span>
                        <button className="border-0  bg-transparent">
                            <h5>About</h5>
                        </button>
                    </span>
                    <span className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle    fs-5 fw-medium bg-transparent border-0 text-black"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Shop
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                    All Products
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Popular Items
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    New Arrivals
                                </a>
                            </li>
                        </ul>
                    </span>
                    <button className="fs-5 pe-3">
                        Cart
                        <span className="position-absolute mt-1 text-black material-symbols-outlined">
                            shopping_cart
                        </span>
                        <span className="ms-4 badge bg-white text-black">{count}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Nav;
