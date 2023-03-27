import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/">
            <Link
              activeClass="active"
              to="first"
              spy={true}
              smooth={true}
              duration={500}
            >
              First
            </Link>
          </a>
        </li>
        <li>
          <a href="/">
            <Link
              activeClass="active"
              to="second"
              spy={true}
              smooth={true}
              duration={500}
            >
              Second
            </Link>
          </a>
        </li>
        <li>
          <a href="/">
            <Link
              activeClass="active"
              to="third"
              spy={true}
              smooth={true}
              duration={500}
            >
              Third
            </Link>
          </a>
        </li>
        <li>
          <a href="/">
            <Link
              activeClass="active"
              to="fourth"
              spy={true}
              smooth={true}
              duration={500}
            >
              Fourth
            </Link>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
