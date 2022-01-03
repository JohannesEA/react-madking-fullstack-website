import React, { useEffect} from "react";
import styled from "styled-components";
import useWindowDimensions from "../../reusableFunctions/Functions";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../../redux/apiCalls";
import Button from "../../components/Button";




const About = () => {
    const { width } = useWindowDimensions();
    const content = useSelector(state => state.content.contents);
    const dispatch = useDispatch(); 

    const size = content.length;
    const contents = content.slice(0, size);


    useEffect(() => {
        getContent(dispatch);
    }, [dispatch]);

    return (
        <Container id="about" >
            <Left>
            {contents.map(title => (<Title key={title._id + "mdksmk"}>{title.abouttitle}</Title>))}
                {width > 800 && (
                    <TextAndButtonContainer>
                            {contents.map(text => (<Text key={text._id + "mdksddmk"}>{text.aboutdesc}</Text>))}

                     
                        <Link
                            to="contact"
                            className="nav-logo"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={300}
                        >
                            {" "}
                            <Button
                        text={"Kontakt Oss"}
                        bc="color-2"

                        >
        
                        </Button>
                        </Link>
                    </TextAndButtonContainer>
                )}
            </Left>

            <Right>
                <Image
                    src={contents.length > 0 ? contents[0].aboutimg : "/assets/images/misuc-images/img5.jpg"}
                    alt="about-img"
                />
                {width < 800 && (
                    <TextAndButtonContainer>
                                          {contents.map(text => (<Text key={text._id + "mdksddmk"}>{text.aboutdesc}</Text>))}

                        <Link
                            to="contact"
                            className="nav-logo"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={300}
                        >
                            {" "}
                            <Button
                        text={"Kontakt Oss"}
                        bc="color-2"

                        >
        
                        </Button>
                        </Link>
                    </TextAndButtonContainer>
                )}
            </Right>
        </Container>
    );
};

export default About;

const Container = styled.div`
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    left: 0;
    right: 0;
    width: 100%;
    height: 80vh;
    background-color: var(--color-light);
    @media (max-width: 800px) {
        flex-direction: column;
        height: auto;
    }
`;

const TextAndButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const Title = styled.h1`
    color: var(--color-dark);
    font-size: 2rem;
    font-weight: 800;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Text = styled.p`
    color: var(--color-dark);
    font-weight: 400;
    font-size: 1.3rem;
    padding: 3rem 0;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

const Image = styled.img`
    max-height: 70vh;
    max-width: 50vh;
    border-radius: 1em;

    @media (max-width: 800px) {
        max-height: 60vh;
        max-width: 50vh;
    }

    @media (max-width: 400px) {
        min-width: 15em;
        max-height: 20em;
    }
`;
