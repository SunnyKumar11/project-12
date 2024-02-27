import PropTypes from "prop-types";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import AppBuilder from "./AppBuilder";
import Blog from "./Blog";
import Contact from "./Contact";
import Login from "./Login";
import Logo from "./Logo";
import Pricing from "./Pricing";
import Sigup from "./Sigup";
import Software from "./Software";

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <BrowserRouter>
          <div className="navbar bg-base-100 sticky top-0 p-5 px-9 text-lg font-semibold z-40">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/">No-Code App Builder</Link>
                  </li>
                  <li>
                    <Link to="/Software">ERP CRM Software</Link>
                  </li>
                  <li>
                    <Link to="/Pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/Blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>

                  <li>
                    <Link to="/Login">Log In</Link>
                  </li>
                  <li>
                    <Link to="/Sigup">Sign Up</Link>
                  </li>
                </ul>
              </div>
              <div>
                <NavLink to="/" className="navbar-item">
                  <img src="https://www.idurarapp.com/Theme/idurar-no-code-app/assets/img/idurar-ai-no-code-app-logo.svg" alt="" />
                </NavLink>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="gap-9 font-semibold menu-horizontal px-1 pr-56 text-base">
                <li>
                  <NavLink className={(e)=>e.isActive?"text-rose-800 font-black underline underline-offset-8 decoration-2 decoration-rose-500":""} to="/">No-Code App Builder</NavLink>
                </li>
                <li>
                  <NavLink className={(e)=>e.isActive?"text-rose-800 font-black underline underline-offset-8 decoration-2 decoration-rose-500":""} to="/Software">ERP CRM Software</NavLink>
                </li>
                <li>
                  <NavLink className={(e)=>e.isActive?"text-rose-800 font-black underline underline-offset-8 decoration-2 decoration-rose-500":""} to="/Pricing">Pricing</NavLink>
                </li>
                <li>
                  <NavLink className={(e)=>e.isActive?"text-rose-800 font-black underline underline-offset-8 decoration-2 decoration-rose-500":""} to="/Blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink className={(e)=>e.isActive?"text-rose-800 font-black underline underline-offset-8 decoration-2 decoration-rose-500":""} to="/Contact">Contact</NavLink>
                </li>

                <li>
                  <NavLink className={(e)=>e.isActive?"text-rose-800 font-black underline underline-offset-8 decoration-2 decoration-rose-500":""} to="/Login">Log In</NavLink>
                </li>
                <li>
                  <NavLink className={(e)=>e.isActive?"text-rose-800 font-black underline underline-offset-8 decoration-2 decoration-rose-500":""} to="/Sigup">Sign Up</NavLink>
                </li>
              </ul>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<AppBuilder />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Sigup" element={<Sigup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Software" element={<Software />} />
            <Route path="/Logo" element={<Logo />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default Navbar;
