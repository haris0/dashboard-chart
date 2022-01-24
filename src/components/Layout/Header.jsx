import {
  Navbar,
  Container,
  Nav,
  Form,
  InputGroup,
} from 'react-bootstrap';
import Logo from '../../assets/Logo.png';
import Settings from '../../assets/Settings.png';
import Search from '../../assets/Search.png';
import Notif from '../../assets/Notif.png';
import { convertDate } from '../../mixin';
import './Header.scss';

const Header = () => {
  const today = new Date();

  return (
    <header>
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={Logo} alt="Bareksa" style={{ marginTop: '-10px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <div className="user">
                <div className="avatar">
                  RH
                </div>
                <div className="user-data">
                  <b>Reinhart H.</b>
                  <div className="user-address">Kemang, Jakarta</div>
                </div>
              </div>
            </Nav>
            <Nav>
              <Form className="d-flex">
                <InputGroup>
                  <input
                    type="search"
                    placeholder="Search Text"
                    className="search-input"
                    aria-label="Search"
                  />
                  <button type="button" className="search-button">
                    <img
                      src={Search}
                      alt="settings"
                      width="24"
                      height="24"
                    />
                  </button>
                </InputGroup>
              </Form>
              <button
                type="button"
                className="nav-button"
              >
                <img
                  src={Notif}
                  alt="notification"
                  width="24"
                  height="24"
                />
              </button>
              <button
                type="button"
                className="nav-button"
              >
                <img
                  src={Settings}
                  alt="settings"
                  width="24"
                  height="24"
                />
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="date">
        {convertDate(today)}
      </div>
    </header>
  );
};

export default Header;
