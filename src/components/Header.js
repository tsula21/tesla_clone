import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "../close.svg";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [menuStatus, setMenuStatus] = useState(false);
  const cars = useSelector(selectCars);

  const goNext = () => {
    window.scrollTo({
      top: "740",
      behavior: "smooth",
    });
  };
  return (
    <Container>
      {menuStatus ? <SidebarBack /> : ""}
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {/* {cars &&
          cars.map((car, index) => (
            <a className="menuList" key={index} href="#">
              {car}
            </a>
          ))} */}

        <a className="menuList" href="#">
          Model S
        </a>
        <a className="menuList" href="#">
          Model 3
        </a>
        <a className="menuList" href="#">
          Model X
        </a>
        <a className="menuList" href="#">
          Model Y
        </a>
        <a className="menuList" href="#">
          Solar Roof
        </a>
        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a className="rightmenuList" href="#">
          Shop
        </a>
        <a className="rightmenuList" href="#">
          Account
        </a>
        <a
          className="rightmenuList"
          href="#"
          onClick={() => setMenuStatus(true)}
        >
          Menu
        </a>
      </RightMenu>
      <BurgerNav show={menuStatus}>
        <CloseWrapper>
          <img
            className="CloseIcon"
            onClick={() => setMenuStatus(false)}
            src={CloseIcon}
            alt=""
          />
          {/* <CustomClose /> */}
        </CloseWrapper>

        <li className="sidebarmenuList">
          <a href="#">Existing Inventory</a>
        </li>
        <li className="sidebarmenuList">
          <a href="#">Used Inventory</a>
        </li>
        <li className="sidebarmenuList">
          <a href="#">Trade-in</a>
        </li>
        <li className="sidebarmenuList">
          <a href="#">Test Drive</a>
        </li>
        <li className="sidebarmenuList">
          <a href="#">Insurance</a>
        </li>
        <li className="sidebarmenuList">
          <a href="#">Cybertruck</a>
        </li>
        <li className="sidebarmenuList">
          <a href="#">Roadster</a>
        </li>
        <li className="sidebarmenuList">
          <a href="#">Charging</a>
        </li>
        <li className="sidebarmenuList">
          <a href="#">Powerwall</a>
        </li>
        <li className="sidebarmenuList">
          <a href="#">Commercial Energy</a>
        </li>
        <li className="sidebarmenuList">
          <a href="#">Utilities</a>
        </li>
        <li className="sidebarmenuList">
          <a href="#">Find Us</a>
        </li>
        <li className="sidebarmenuList">
          <a href="#">Support</a>
        </li>
        <li className="sidebarmenuList">
          <a href="#">Investor Relations</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-left: 160px;
  a {
    color: #171a20;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    /* padding: 0 10px; */
    padding: 6px 14px;
    border-radius: 12px;
    flex-wrap: nowrap;
    letter-spacing: 0.2px;
  }

  /* @media (max-width: 768px) { */
  @media (max-width: 1199px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    margin-right: 10px;
    /* letter-spacing: 0.2px; */
  }

  @media (max-width: 1199px) {
    .rightmenuList:nth-child(1) {
      display: none;
    }
    .rightmenuList:nth-child(2) {
      display: none;
    }
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 311px;
  z-index: 100;
  list-style: none;
  padding: 40px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  text-align: start;
  transition: transform 0.4s ease-in-out;

  /* ss */
  li {
    /* padding: 15px 0; */
    padding: 12px 20px;
    a {
      font-weight: 500;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// const CustomClose = styled.div``;

const SidebarBack = styled.div`
  backdrop-filter: blur(4px);
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  bottom: 0;
`;
