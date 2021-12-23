import React, { useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../../redux/apiCalls";
import Button from "../../components/Button";


const Hero = () => {
    const content = useSelector(state => state.content.contents);
    const dispatch = useDispatch();

    const size = content.length;
    const contents = content.slice(0, size);

    useEffect(() => {
        getContent(dispatch);
    }, [dispatch]);

    

    return (
        <Container id="hero">
            <Left>
                {contents.map(title => (<Title key={title._id + "mdks22mk"}>{title.herotitle}</Title>))}
                <ButtonContainer>
                    <Link
                        to="about"
                        className="nav-logo"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={300}
                    >
                        {" "}
                        <Button
                         text={"Om Oss"}
                         bc="color-2"
                        >
                        </Button>
                    </Link>
                    <Link
                        to="beats"
                        className="nav-logo"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={300}
                    >
                        {" "}
                        <Button
                        text={"Våre Beats"}
                        bc="color-1"

                        >
        
                        </Button>
                    </Link>
                </ButtonContainer>
            </Left>

            <Right>
                {/* <Image /> */}
                {/* <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus totam a eum voluptates molestias sint asperiores pariatur ex tenetur!</Text> */}
            </Right>
        </Container>
    );
};

export default Hero;

const Container = styled.div`
    padding: 5rem 1rem 2rem 1rem;
    display: flex;
    transition: all 0.3s ease;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    background: url("/assets/images/music-images/img4.jpg") no-repeat;
    background-size: cover;
    background-position: 100%;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--color-1);

    @media (max-width: 800px) {
        flex-direction: column;
        height: 70vh;
    }
`;

const Title = styled.h1`
    color: var(--color-text);
    font-size: 2.8em;
    font-weight: 300;
    font-family: "Montserrat", cursive;
`;

const Left = styled.div`
    z-index: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: rgba(200, 200, 200, 0.05);
    backdrop-filter: blur(5px);
    padding: 1rem;
    border-radius: 1em;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

    @media (max-width: 800px) {
        background-color: transparent;
        backdrop-filter: blur(3px);
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;


const Right = styled.div`
    flex: 1;
    min-height: 36vh;
    flex-direction: column;
    display: flex;
    align-items: center;
    text-align: center;
`;

