import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/Logo4-2B.svg";
import navIcon1 from "../images/nav-icon1.svg";
import navIcon2 from "../images/nav-icon2.svg";
import navIcon3 from "../images/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contactus"
                className={
                  activeLink === "blogs" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("blogs")}
              >
                Contact Us
              </Nav.Link>
              {/* <Nav.Link
                href="#theteam"
                className={
                  activeLink === "blogs" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("blogs")}
              >
                The Team
              </Nav.Link> */}
            </Nav>
            <span className="navbar-text">
              {/* <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/liliane-uwase-907830163/"
                  target="_blank"
                >
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://www.instagram.com/lil_wase/"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/lil_wase/" target="_blank">
                  <img src={navIcon3} alt="" />
                </a>
              </div> */}
              <HashLink to="#contactus">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
