import { useEffect, useState, useRef } from "react";
import Button from "./Button";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components"


const ProductBox = ({
    item,
    backgroundcolor,
    btntext,
    onClickFunction,
}) => {
    const [selectedProd, setSelectedProd] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);
    let path = "";
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);



    const handleClick = (item) => {
        path = "/products/" + item._id;
        navigate(path);
    };

    const audioPlayer = useRef();

    const handlePlayPauseSong = () => {
        setSelectedProd(item);
        if (isPlaying) {
            audioPlayer.current.pause();
            audioPlayer.current.currentTime = 0;
            setIsPlaying(false);
            setIsActive(false);

        } else {
            audioPlayer.current.play();
            setIsPlaying(true);
            setIsActive(true);

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
            isActive={isActive}
        >
                  <audio ref={audioPlayer} src={item.mp3} preload="metadata"></audio>

            <Top>
                <Image src={item.img} alt={item.title} />
            </Top>

            <Bottom>
            {/* {isActive && <Animation>{audioPlayer.current.currentTime}</Animation>} */}

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
    min-width: 10em;
    min-height: 12em;
    max-width: 40em;
    max-height: 50em;
    margin: 0.5em;
    transition: all 0.3s ease;
    box-shadow: 1px 2px 19px -1px rgba(0, 0, 0, 0.75);
    animation: ${(prop) => prop.isActive ? animationTwo : null} 1s linear infinite;

    &:hover {
        background-color: ${(prop) => prop.hover};
        box-shadow: -1px 0px 37px -1px rgba(0, 0, 0, 0.75);
    }

    @media (max-width: 400px) {
        min-width: 10em;
        max-height: 20em;
    }
`;

const animationTwo = keyframes`
  0% {
    box-shadow: 1px 2px 25px -5px rgba(255, 161, 161, 0.75);
  }

  25% {
    box-shadow: 1px 2px 25px -5px rgba(232, 170, 142, 0.75);
  }

  50% {
    box-shadow: 1px 2px 25px -5px rgba(162, 235, 143, 0.75);
  }

  75% {
    box-shadow: 1px 2px 25px -5px rgba(224, 250, 162, 0.75);
  }

  100% {
    box-shadow: 1px 2px 25px -5px rgba(121, 250, 190, 0.75);
  }
`;

const animation = keyframes`
0%{
    border: 1px solid black;
}
25%{
    border: 1px solid orange;


}
50%{
    border: 1px solid green;

}
100%{
    border: 1px solid blue;

}
`;
const rotate = keyframes`
    100% {
      transform: rotate(360deg);
    }
`;

const Animation = styled.div`
  animation: ${animation} 2s linear infinite, ${rotate} 2s linear infinite ;
  width: 50px;
  height: 50px;
  margin-top: 1em;
  
  & .path {
    stroke: #5652BF;
    stroke-linecap: round;
    animation: rotate 1.5s ease-in-out infinite;
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

    @media (max-width: 400px) {
        height: 9em;
    }
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
