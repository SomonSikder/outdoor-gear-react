import React from "react";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  // const activestyle = {
  //   borderBottom: "1px solid dark",
  // };
  // console.log(admin);
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Nav.Link href="/" className="text-warning fw-bold font-style">
              Outdoor Gear Store
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" variant="light" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                as={Link}
                to={"/home"}
                // activeStyle={activestyle}
                className="text-warning"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/explore"}
                // activeStyle={activestyle}
                className="text-warning"
              >
                explore
              </Nav.Link>
              <div>
                {user.role === "admin" ? (
                  <Nav.Link as={Link} to={"/admin"} className="text-warning">
                    Admin
                  </Nav.Link>
                ) : (
                  ""
                )}
              </div>
            </Nav>
            <Navbar.Text>
              <div className="d-flex">
                <div className="d-flex mx-2 align-items-center">
                  <div className="mx-2">
                    {user.email && (
                      <small className="text-warning">{user.displayName}</small>
                    )}
                  </div>
                  <div>
                    {user.email ? (
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="outline-none text-light"
                          id="dropdown-basic"
                        >
                          <img
                            className="rounded-circle bg-light"
                            src={
                              user.photoURL
                                ? user.photoURL
                                : "https://i.ibb.co/2sSgMJr/account.png"
                            }
                            alt=""
                            width="30px"
                            height="30px"
                          />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            as={Link}
                            to={"/myOrder"}
                            className="text-dark"
                          >
                            My Order
                          </Dropdown.Item>
                          <Dropdown.Item
                            as={Link}
                            to={"/review"}
                            className="text-dark"
                          >
                            Review
                          </Dropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            to={"/payment"}
                            className="text-dark"
                          >
                            Payment{" "}
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item>
                            <button
                              onClick={logOut}
                              className="btn outline-none text-danger"
                            >
                              Log out
                            </button>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </Navbar.Text>
            <Navbar.Text>
              {
                <div>
                  {!user.email && (
                    <NavLink to="/login" className="text-decoration-none">
                      <h6 className="text-warning">Login</h6>
                    </NavLink>
                  )}
                </div>
              }
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
