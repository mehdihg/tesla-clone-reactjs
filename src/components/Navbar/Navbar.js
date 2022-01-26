import React, { useState, useEffect } from "react";
import {
  Nav,
  Logo,
  ProductsMenu,
  Menu,
  MobileMenu,
  RightMenu,
  ListMenu,
  RightMenuClose,
  Backdrop,
  Wrapper,
} from "../styles/Navbar/Nav";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [rightMenuShow, setRightMenuShow] = useState(false);

  useEffect(() => {
    if (rightMenuShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [rightMenuShow]);

  return (
    <Wrapper>
      <Nav>
        <Logo>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Logo>
        <ProductsMenu>
          <li>
            <Link to="/">Model S</Link>
          </li>
          <li>
            <Link to="/">Model 3</Link>
          </li>
          <li>
            <Link to="/">Model X</Link>
          </li>
          <li>
            <Link to="/">Model Y</Link>
          </li>
          <li>
            <Link to="/">Solar Roof</Link>
          </li>
          <li>
            <Link to="/">Solar Panels</Link>
          </li>
        </ProductsMenu>
        <Menu>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/">Account</Link>
          </li>
          <li onClick={() => setRightMenuShow(true)}>Menu</li>
        </Menu>
        <MobileMenu>
          <button onClick={() => setRightMenuShow(true)}>
            <span>Menu</span>
          </button>
        </MobileMenu>
      </Nav>
      <RightMenu show={rightMenuShow}>
        <RightMenuClose>
          <IoMdClose onClick={() => setRightMenuShow(false)} />
        </RightMenuClose>
        <ListMenu>
          <li>
            <Link to="/">Model S</Link>
          </li>
          <li>
            <Link to="/">Model 3</Link>
          </li>
          <li>
            <Link to="/">Model X</Link>
          </li>
          <li>
            <Link to="/">Model Y</Link>
          </li>
          <li>
            <Link to="/">Solar Roof</Link>
          </li>
          <li>
            <Link to="/">Solar Panels</Link>
          </li>
          <li>
            <Link to="/">Model S</Link>
          </li>
          <li>
            <Link to="/">Model 3</Link>
          </li>
          <li>
            <Link to="/">Model X</Link>
          </li>
          <li>
            <Link to="/">Model Y</Link>
          </li>
          <li>
            <Link to="/">Solar Roof</Link>
          </li>
          <li>
            <Link to="/">Solar Panels</Link>
          </li>
          
        </ListMenu>
      </RightMenu>

      <Backdrop show={rightMenuShow}></Backdrop>
    </Wrapper>
  );
};

export default Navbar;
