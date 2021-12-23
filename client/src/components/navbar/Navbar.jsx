import React, { useState } from "react";
import styled from "styled-components";
import { Squash as Hamburger } from "hamburger-react";
// import { mobile } from "../../reusableFunctions/responsive";
import useWindowDimensions from "../../reusableFunctions/Functions";
import { Link } from "react-scroll";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link as DomLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userRedux";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { width } = useWindowDimensions();
    const quantity = useSelector((state) => state.cart.quantity);
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Nav>
            <Logo href="">MadKing</Logo>

            {width < 930 && (
                <HamBurderContainer>   <Hamburger
                    color="white"
                    onToggle={() => {
                        setIsOpen(!isOpen);
                    }}
                />
                   <DomLink to="/orders">
                    <MenuLink href="">
                        <AiOutlineShoppingCart fontSize="1.2rem" />({quantity})
                    </MenuLink>
                </DomLink></HamBurderContainer>
             
                
            )}

            <Menu isOpen={isOpen}>
                <Link
                    to="about"
                    className="nav-logo"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={300}
                >
                    {" "}
                    <MenuLink href="">Om oss</MenuLink>
                </Link>

                {/* <Link
                    to="beats"
                    className="nav-logo"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={300}
                >
                    {" "}
                    <MenuLink href="">Våre Beats</MenuLink>
                </Link> */}

                <DomLink to="/productlist">
                        {" "}
                        <MenuLink href="">Våre Beats</MenuLink>
                    </DomLink>
                <Link
                    to="contact"
                    className="nav-logo"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={300}
                >
                    {" "}
                    <MenuLink href="">Kontakt Oss</MenuLink>
                </Link>

                {!user ? (
                    <DomLink to="/login">
                        {" "}
                        <MenuLink href="">Logg Inn</MenuLink>
                    </DomLink>
                ) : (
                    <MenuLink onClick={handleLogout}>Logg Ut</MenuLink>
                )}

                {user && (
                    <DomLink to="/admin">
                        <MenuLink href="">Admin</MenuLink>
                    </DomLink>
                )}

                <DomLink to="/orders">
                    <MenuLink href="">
                        <AiOutlineShoppingCart fontSize="1.2rem" />({quantity})
                    </MenuLink>
                </DomLink>
            </Menu>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.div`
    z-index: 100;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: var(--color-1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

const MenuLink = styled.p`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: var(--color-text);
    font-size: 1.2rem;
    display: inline-block;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 0.5px;
        bottom: 1vh;
        left: 0;
        background-color: var(--color-text);
        transform-origin: bottom right;
        transition: transform 0.4s ease-out;
    }

    &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

const Logo = styled.p`
    padding: 0.1rem 0;
    color: var(--color-text);
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 930px) {
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
        transition: max-height 0.3s ease-in;
        width: 100%;
    }
`;

const HamBurderContainer = styled.div`
   display: flex;
    justify-content: space-between;
    align-items: center;
`;