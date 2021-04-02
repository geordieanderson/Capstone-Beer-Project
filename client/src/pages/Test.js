import React, { useRef } from "react";
import "./Test.scss";
import { Link } from 'react-router-dom';
import { useDetectOutsideClick } from './useDetectOutsideClick';
import IBU from '../assets/images/IBU_logo.png';
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function Test() {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
  
    return (
      <div className="container">
        <div className="menu-container">
          <button onClick={onClick} className="menu-trigger">
            <img src={IBU} alt="User avatar"/>
          </button>
          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              <li>
                <Link to='/about'>Messages</Link>
              </li>
              <li>
                <a href="#">Trips</a>
              </li>
              <li>
                <a href="#">Saved</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }