import React, {useState, useEffect} from "react";
import styled from "styled-components";
import useWindowDimensions from "../../reusableFunctions/Functions";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../../redux/apiCalls";
import Button from "../../components/Button";

const ProcessOfWork = () => {
    const { width } = useWindowDimensions();
    const [processText, setProcessText] = useState("Trykk på sirklene");


const content = useSelector(state => state.content.contents);
const dispatch = useDispatch(); 


const size = content.length;
const contents = content.slice(0, size);

useEffect(() => {
    getContent(dispatch);
}, [dispatch]);

    const handleFirstStepContent = () => {
        setProcessText(content[0].workprocessone);
    };

    const handleSecondStepContent = () => {
        setProcessText(content[0].workprocesstwo);
    };

    const handleThirdStepContent = () => {
        setProcessText(content[0].workprocessthree);
    };

    const handleFourthStepContent = () => {
        setProcessText(content[0].workprocessfour);
    };

    return (
        <Container id="process">
            <Top>
            {contents.map(title => (<Title key={title._id + "mdksds112smk"} >{title.workprocestitle}</Title>))}
            </Top>

            <Center>
                <Text>
                    {width > 1000 ? (
                        <>
                            <Circle
                                hover="#ffffff"
                                value="1"
                                onClick={handleFirstStepContent}
                            >
                                1
                            </Circle>{" "}
                            ____________________{" "}
                            <Circle
                                hover="#ffffff"
                                value="2"
                                onClick={handleSecondStepContent}
                            >
                                2
                            </Circle>{" "}
                            ____________________{" "}
                            <Circle
                                hover="#ffffff"
                                value="3"
                                onClick={handleThirdStepContent}
                            >
                                3
                            </Circle>{" "}
                            ____________________{" "}
                            <Circle
                                hover="#ffffff"
                                value="4"
                                onClick={handleFourthStepContent}
                            >
                                4
                            </Circle>
                        </>
                    ) : (
                        <>
                            <Circle
                                hover="#ffffff"
                                value="1"
                                onClick={handleFirstStepContent}
                            >
                                1
                            </Circle>
                            _____
                            <Circle
                                hover="#ffffff"
                                value="2"
                                onClick={handleSecondStepContent}
                            >
                                2
                            </Circle>
                            _____
                            <Circle
                                hover="#ffffff"
                                value="3"
                                onClick={handleThirdStepContent}
                            >
                                3
                            </Circle>
                            _____
                            <Circle
                                hover="#ffffff"
                                value="4"
                                onClick={handleFourthStepContent}
                            >
                                4
                            </Circle>
                        </>
                    )}
                </Text>
                <ProcessText>{processText}</ProcessText>
            </Center>

            <Bottom>
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
                        text={"Bestill Beat"}
                        bc="color-2"

                        >
        
                        </Button>
                </Link>
            </Bottom>
        </Container>
    );
};

export default ProcessOfWork;

const Container = styled.div`
    transition: all 0.3s ease;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    transition: all 0.3s ease;
    left: 0;
    right: 0;
    width: 100%;
    height: 80vh;
    background-color: var(--color-dark);
    @media (max-width: 800px) {
        flex-direction: column;
        height: auto;
    }
`;

const Top = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
const Title = styled.h1`
    color: var(--color-text);
    font-size: 2rem;
    font-weight: 800;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

const Text = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: var(--color-text);
    font-weight: 400;
    font-size: 1.3rem;
    padding: 3rem 0;
`;

const Circle = styled.h1`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 1em;
    font-size: 1.5rem;
    height: 2em;
    width: 2em;
    color: black;
    border-radius: 100%;
    background-color: var(--color-light);
    padding: 0.5em;
    &:hover {
        border-radius: 0.5em;
        background-color: ${(props) => props.hover};
    }
`;

const Bottom = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

const ProcessText = styled.p`
    color: var(--color-text);
    font-size: 1.2rem;
`;
