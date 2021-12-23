import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ProductBox = ({ item, backgroundcolor, btntext, onClickFunction }) => {
    const [selectedProd, setSelectedProd] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);
    const audio = new Audio(item.mp3);
    let path = "";
    const navigate = useNavigate();

    const handleClick = (item) => {
        path = "/products/" + item._id;
        navigate(path);
    };
    const handlePlayPauseSong = () => {
        setSelectedProd(item);
        console.log("File to play: ", item.mp3);
        if (isPlaying) {
            audio.pause();
            audio.currentTime = 0;
            setIsPlaying(false);
        } else {
            audio.play();
            setIsPlaying(true);
        }
    };

    const [BACKGROUND_COLOR, setBACKGROUNDCOLOR] = useState("");
    const [COLOR, setCOLOR] = useState("");
    const [HOVER_COLOR, setHOVERCOLOR] = useState("");
    const BACKGROUND_COLOR_ONE = "#0B1E26";
    const COLOR_ONE = "white";
    const HOVERCOLOR_ONE = "#112a35";
    const BACKGROUND_COLOR_TWO = "#f3f3f3";
    const COLOR_TWO = "BLACK";
    const HOVERCOLOR_TWO = "#FFF";

    useEffect(() => {
        const handleColor = () => {
            if (backgroundcolor === "color-1") {
                setBACKGROUNDCOLOR(BACKGROUND_COLOR_ONE);
                setCOLOR(COLOR_ONE);
                setHOVERCOLOR(HOVERCOLOR_ONE);
            } else if (backgroundcolor === "color-2") {
                setBACKGROUNDCOLOR(BACKGROUND_COLOR_TWO);
                setCOLOR(COLOR_TWO);
                setHOVERCOLOR(HOVERCOLOR_TWO);
            }
        };

        handleColor();
    }, [BACKGROUND_COLOR, COLOR, HOVER_COLOR]);
    return (
        <Container
            backgroundcolor={BACKGROUND_COLOR}
            hover={HOVER_COLOR}
            color={COLOR}
        >
            <Top>
                <Image src={item.img} alt={item.title} />
            </Top>

            <Bottom>
                <Title>{item.title}</Title>
                {/* <Description>{item.description}</Description> */}
                <Price>{item.price} KR</Price>
                <Buttons>
                    <Button
                        text={btntext}
                        bc={backgroundcolor}
                        btnOnClick={() => handleClick(item)}
                    ></Button>
                    {isPlaying && item._id === selectedProd._id ? (
                        <AiOutlinePauseCircle
                            className="ai-outline-pause"
                            fontSize={50}
                            onClick={() => handlePlayPauseSong()}
                        />
                    ) : (
                        <AiOutlinePlayCircle
                            className="ai-outline-play"
                            fontSize={50}
                            onClick={() => handlePlayPauseSong()}
                        />
                    )}{" "}
                </Buttons>
            </Bottom>
        </Container>
    );
};

export default ProductBox;

const Container = styled.div`
    display: flex;
    background-color: ${(prop) => prop.backgroundcolor};
    color: ${(prop) => prop.color};
    flex-direction: column;
    border-radius: 1em;
    min-width: 15em;
    min-height: 20em;
    max-width: 40em;
    max-height: 50em;
    margin: 0.5em;
    transition: all 0.3s ease;
    box-shadow: 1px 2px 19px -1px rgba(0, 0, 0, 0.75);

    &:hover {
        background-color: ${(prop) => prop.hover};
        box-shadow: -1px 0px 37px -1px rgba(0, 0, 0, 0.75);

    }
`;
const Top = styled.div`
height: 20em;
width: 100%;

`;

const Image = styled.img`
   height: 100%;
  width: 100%;
    border-radius: 1em 1em 0 0;
    transition: all 0.3s ease;


`;
const Bottom = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0em 0.5em 0.5em 0.5em;
`;
const Title = styled.h1`
    font-size: 1.6rem;
    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;
// const Description = styled.p`
//     font-size: 1.2rem;

//     @media (max-width: 600px) {
//         font-size: 1.5rem;
//     }
// `;
const Price = styled.p`
    font-size: 1.2rem;

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

const Buttons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
