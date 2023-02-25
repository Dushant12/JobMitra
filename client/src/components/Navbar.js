import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--nav);
  color: var(--white);
  position: relative;
  z-index: 500;
  @media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;
  img {
    margin-right: 0.5rem;
  }
`;

const Nav = styled.nav`
  width: 50rem;
  max-width: 90rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  @media only Screen and (max-width: 48em) {
    display: none;
  }
  a {
    font-weight: 600;
    line-height: 1.5;
    color: var(--white);
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.5s;
    }
    &:hover::after {
      width: 100%;
      background: var(--purple);
    }
    /* &:not(:last-child) {
      margin-right: 2rem;
    } */
    /* @media only Screen and (max-width: 48em) {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    } */
  }
`;

const CustomNav = styled.nav`
  width: 15rem;
  max-width: 60rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  @media only Screen and (max-width: 48em) {
    display: none;
  }
  a {
    font-weight: 600;
    line-height: 1.5;
    color: var(--white);
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.5s;
    }
    &:hover::after {
      width: 100%;
      background: var(--purple);
    }
    /* &:not(:last-child) {
      margin-right: 2rem;
    } */
    /* @media only Screen and (max-width: 48em) {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    } */
  }
`;

const Button = styled.button`
  background-color: var(--purple);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
  @media only Screen and (max-width: 40em) {
    font-size: 1.2rem;
    &:hover {
      transform: none;
    }
    &:focus {
      transform: none;
    }
  }
`;
const HamburgerBtn = styled.button`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: inline-block;
  }
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 2px;
  margin-top: 0rem;
  transition: all 0.3s;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;

    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const MobileMenu = styled.nav`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: flex;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 0;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  transition: all 0.5s;
  z-index: -10;
  background-color: rgb(53 53 63 / 95%);
  border-radius: 20px;
  margin: 0.2rem;
  a {
    color: var(--white);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1rem;
    cursor: pointer;
  }
`;
const Navbar = () => {
  const [click, setClick] = useState(false);
  //const handleClick = () => setClick(!click);
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const handleClick = (id, e) => {
    setClick(!click);
    scrollUp(id, e);
  };

  return (
    <Headers ref={ref}>
      <Logo>
        <img src={logo} alt="JobMitra" />
        <h3>JobMitra</h3>
      </Logo>
      <>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <Nav>
              <a href="/">Home</a>
              <a href="/addjob">Add Jobs</a>
              <a href="/myjobs">My Jobs</a>
              <a href="/employees">Employees</a>
              <a href="/profile">Profile</a>
              <a href="/logout">Logout</a>
            </Nav>
          ) : (
            <Nav>
              <a href="/">Home</a>
              <a href="/jobs">Jobs</a>
              <a href="/applications">Applications</a>
              <a href="/resumebuilder">Resume Builder</a>
              <a href="/schemes">Schemes</a>
              <a href="/skilltraining">Skill Training</a>
              <a href="http://127.0.0.1:5173/" target = "_blank" rel="noreferrer">Bot</a>
              <a href="/profile">Profile</a>
              <a href="/logout">Logout</a>
            </Nav>
          )
        ) : (
          <CustomNav>
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
          </CustomNav>
        )}
     </>
      <HamburgerBtn clicked={click} onClick={() => setClick(!click)}>
        <span></span>
      </HamburgerBtn>
      <MobileMenu clicked={click}>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <a href="/">Home</a>
              <a href="/addjob">Add Jobs</a>
              <a href="/myjobs">My Jobs</a>
              <a href="/employees">Employees</a>
              <a href="/profile">Profile</a>
              <a href="/logout">Logout</a>
            </>
          ) : (
            <>
              <a href="/">Home</a>
              <a href="/home">Jobs</a>
              <a href="/applications">Applications</a>
              <a href="/profile">Profile</a>
              <a href="/logout">Logout</a>
            </>
          )
        ) : (
          <>
            <a href="/=">Home</a>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
          </>
        )}
      </MobileMenu>
    </Headers>
  );
};

export default Navbar;
