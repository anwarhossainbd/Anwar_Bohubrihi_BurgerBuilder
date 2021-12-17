
import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from "../../Assets/logo.png";
import { NavLink } from 'react-router-dom';
import "../Header/Header.css"
import {connect} from "react-redux";


const Header = () => {

    return (
        <div>

            <Navbar collapseOnSelect expand="lg"  style={{ backgroundColor:"#D70F64"}} variant="dark">
                <Container fluid={true} style={{margin:"0 50px"}}>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="Logo" width="60px" height="50px"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <NavLink exact to="/" className="textDec" activeStyle={{color:"wheat"}} style={{color:"white",fontSize:"18px",paddingRight:"20px",textDecoration:"none"}} className="NavLink">Burger Builder</NavLink>
                            <NavLink exact to="/orders" className="textDec" activeStyle={{color:"wheat"}}  style={{color:"white",fontSize:"18px",textDecoration:"none",paddingRight:"20px"}} className="NavLink">Orders</NavLink>
                            <NavLink exact to="/login" className="textDec" activeStyle={{color:"wheat"}}  style={{color:"white",fontSize:"18px",textDecoration:"none"}} className="NavLink">Login</NavLink>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default connect() (Header);