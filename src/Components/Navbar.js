import React from 'react'
import logo from '../Asset/logo.png'
export default function Navbar() {
    return (
        <nav className="navbar border-bottom border-secondary navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img src={logo} width="30" height="30" alt="" />
            </a>
            <a className="navbar-brand" href="/"><span className='text-warning'>E-</span>Shop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active p-2 mx-2">
                        <a className="nav-link" href="/">Man <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item p-2 mx-2">
                        <a className="nav-link" href="/">Women</a>
                    </li>
                    <li className="nav-item p-2 mx-2">
                        <a className="nav-link" href="/">Kids</a>
                    </li>

                </ul>
                <ul className='navbar-nav ml-auto'>
                    <li className="nav-item ">
                        <a className="nav-link" href="/"><i className="fa fa-search"></i>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="/"><i className="fa fa-shopping-cart"></i>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="/"><i className='fas fa-user-alt' ></i>
                        </a>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}
