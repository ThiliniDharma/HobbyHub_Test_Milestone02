import React, { useState} from "react";
import {  Link } from "react-router-dom";
import './NavBar.css'
import Logo from '../../img/logo.webp'

const NavBar = () => {

  return (
    <nav>
    <img className="logoImg" src={Logo} alt="HobbyHUB custom logo shout out Ari!" />

    <div>
        <ul>
        <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/blog">Blog</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
      )
    }

export default NavBar