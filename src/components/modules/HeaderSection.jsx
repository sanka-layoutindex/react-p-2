import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/images/logo.png";

function HeaderSection() {
  const [activeKey, setActiveKey] = useState("#action1");

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <>
      <div className="paddingGlobal headerSection">
        <div className="containerMedium">
        <div className="gridSection">
          <div className="logo">
            <a className="imageWrapper" href="/home">
              <img className="img-fluid" src={logo} alt="logo" />
            </a>
          </div>
          <div className="navSection">
            <Navbar expand="lg" className="">
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body className="content">
                  <Nav className="topNav">
                    <input
                      type="search"
                      placeholder="Search for films, actors, directors etc."
                    />
                    <a href="/redeem">Redeem Membership</a>
                    <a href="/contact">Contact</a>
                    <a className="iconWrapper">
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 10.5H3.5V14.25H12.5V2.25H3.5V6H2V1.5C2 1.30109 2.07902 1.11032 2.21967 0.96967C2.36032 0.829018 2.55109 0.75 2.75 0.75H13.25C13.4489 0.75 13.6397 0.829018 13.7803 0.96967C13.921 1.11032 14 1.30109 14 1.5V15C14 15.1989 13.921 15.3897 13.7803 15.5303C13.6397 15.671 13.4489 15.75 13.25 15.75H2.75C2.55109 15.75 2.36032 15.671 2.21967 15.5303C2.07902 15.3897 2 15.1989 2 15V10.5ZM6.5 7.5V5.25L10.25 8.25L6.5 11.25V9H0.5V7.5H6.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      Sign in
                    </a>
                    <a className="iconWrapper" href="/cart">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_222_385)">
                          <path
                            d="M0.666504 0.916666H3.33317L5.11984 9.84333C5.1808 10.1503 5.34778 10.426 5.59153 10.6222C5.83529 10.8184 6.1403 10.9227 6.45317 10.9167H12.9332C13.246 10.9227 13.551 10.8184 13.7948 10.6222C14.0386 10.426 14.2055 10.1503 14.2665 9.84333L15.3332 4.25H3.99984M6.6665 14.25C6.6665 14.6182 6.36803 14.9167 5.99984 14.9167C5.63165 14.9167 5.33317 14.6182 5.33317 14.25C5.33317 13.8818 5.63165 13.5833 5.99984 13.5833C6.36803 13.5833 6.6665 13.8818 6.6665 14.25ZM13.9998 14.25C13.9998 14.6182 13.7014 14.9167 13.3332 14.9167C12.965 14.9167 12.6665 14.6182 12.6665 14.25C12.6665 13.8818 12.965 13.5833 13.3332 13.5833C13.7014 13.5833 13.9998 13.8818 13.9998 14.25Z"
                            stroke="currentColor"
                            stroke-width="1.67"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_222_385">
                            <rect
                              width="16"
                              height="16"
                              fill="currentColor"
                              transform="translate(0 0.25)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="basket-cart">0</span>
                    </a>
                  </Nav>
                  <Nav
                    className="bottomNav"
                    activeKey={activeKey}
                    onSelect={handleSelect}
                  >
                    <Nav.Link
                      href="#action1"
                      eventKey="#action1"
                      className={activeKey === "#action1" ? "active" : ""}
                    >
                      Home
                    </Nav.Link>
                    <NavDropdown
                      title="What’s on"
                      id="offcanvasNavbarDropdown"
                      className={
                        activeKey.startsWith("#action") &&
                        activeKey !== "#action1"
                          ? "active"
                          : ""
                      }
                    >
                      <NavDropdown.Item
                        href="#action3"
                        eventKey="#action3"
                        className={activeKey === "#action3" ? "active" : ""}
                      >
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action4"
                        eventKey="#action4"
                        className={activeKey === "#action4" ? "active" : ""}
                      >
                        Another action
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link
                      href="#action2"
                      eventKey="#action2"
                      className={activeKey === "#action2" ? "active" : ""}
                    >
                      Memberships
                    </Nav.Link>
                    <Nav.Link
                      href="#action5"
                      eventKey="#action5"
                      className={activeKey === "#action5" ? "active" : ""}
                    >
                      Movie Marathons
                    </Nav.Link>
                    <Nav.Link
                      href="#action6"
                      eventKey="#action6"
                      className={activeKey === "#action6" ? "active" : ""}
                    >
                      Gift Voucher
                    </Nav.Link>
                    <Nav.Link
                      href="#action7"
                      eventKey="#action7"
                      className={activeKey === "#action7" ? "active" : ""}
                    >
                      Cinema Hire
                    </Nav.Link>
                    <Nav.Link
                      href="#action8"
                      eventKey="#action8"
                      className={activeKey === "#action8" ? "active" : ""}
                    >
                      Accessibility
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Navbar>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
