import styled, { keyframes } from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/apiCalls";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";

const Product = ({ item }) => {
    const location = useLocation();
    const [product, setProduct] = useState({});
    const id = location.pathname.split("/")[2];
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const [isPlaying, setIsPlaying] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState("");
    const [productAdded, setProductAdded] = useState(false);

    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);

    const audioPlayer = useRef();

    const handlePlayPauseSong = () => {
        if (isPlaying) {
            audioPlayer.current.pause();
            audioPlayer.current.currentTime = 0;
            setIsPlaying(false);
        } else {
            audioPlayer.current.play();
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        const getProduct = () => {
            try {
                const res = products.filter((x) => x._id === id);
                setProduct(res[0]);
            } catch (e) {
                console.log(e);
            }
        };
        getProduct();
    }, [id, products]);

    const handleClick = () => {
        dispatch(addProduct({ ...product }));
        setProductAdded(true);
        setConfirmationMessage("Beat lagt til i handlekurven");
    };

    return (
        <Container>
            <ImageContainer isActive={isPlaying}>
                <Image src={product.img} alt={product.title} />
            </ImageContainer>
            <audio
                ref={audioPlayer}
                src={product.mp3}
                preload="metadata"
            ></audio>
            <ProductInformationContainer>
                <Title color="black">{product.title}</Title>
                <Desctiption>{product.description}</Desctiption>
                <Price>Pris: {product.price} KR</Price>
                <Buttons>
                    <Button
                        backgroundcolor="#3E768C"
                        color="white"
                        hover="#558ba0"
                        onClick={handleClick}
                    >
                        Legg Til I Handlekurv
                    </Button>
                    {!isPlaying ? (
                        <AiOutlinePlayCircle
                            color="black"
                            fontSize={50}
                            onClick={() => handlePlayPauseSong()}
                        />
                    ) : (
                        <AiOutlinePauseCircle
                            color="black"
                            fontSize={50}
                            onClick={() => handlePlayPauseSong()}
                        />
                    )}
                </Buttons>
                {productAdded && (
                    <ConfirmationMessage>
                        {confirmationMessage}
                    </ConfirmationMessage>
                )}
            </ProductInformationContainer>
        </Container>
    );
};

export default Product;

const animationTwo = keyframes`
  0% {
    box-shadow: -1px 1px 51px 23px rgba(255, 161, 161, 0.75);
  }

  25% {
    box-shadow: -1px 1px 51px 23px rgba(232, 170, 142, 0.75);
  }

  50% {
    box-shadow:-1px 1px 51px 23px rgba(162, 235, 143, 0.75);
  }

  75% {
    box-shadow:-1px 1px 51px 23px rgba(224, 250, 162, 0.75);
  }

  100% {
    box-shadow: -1px 1px 51px 23pxrgba(121, 250, 190, 0.75);
  }
`;

const animationOne = keyframes`
  10% {
    height: 50vh;
    width: 40vh;  }

  20% {
    height: 48vh;
    width: 38vh;  }

  30% {
    height: 46vh;
    width: 36vh;  }

  40% {
    height: 44vh;
    width: 34vh;  }

  50% {
    height: 42vh;
    width: 32vh;  }

  60% {
    height: 42vh;
    width: 32vh;  }

  70% {
    height: 44vh;
    width: 34vh;  }

  80% {
    height: 46vh;
    width: 36vh;  }

  90% {
    height: 48vh;
    width: 38vh;  }

  100% {
    height: 50vh;
    width: 40vh;  }
`;


const rotate = keyframes`
    100% {
      transform: rotate(360deg);
    }
`;

const Container = styled.div`
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    min-height: 80vh;
    padding: 5em 0 0 1em;
    height: auto;

    @media (max-width: 800px) {
        flex-direction: column;
        padding-top: 7em;
    } ;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    color: ${(props) => props.color};
`;

const ImageContainer = styled.div`
    justify-content: center;
    height: 50vh;
    width: 40vh;
    align-items: center;
    text-align: center;
    border-radius: 1em;
    box-shadow: 1px 2px 19px -1px rgba(0, 0, 0, 0.75);
    animation: ${(prop) => (prop.isActive ? animationTwo : null)} 4s linear infinite, ${(prop) => (prop.isActive ? animationOne : null)} 2s linear infinite, ${(prop) => (prop.isActive ? rotate : null)} 5s linear infinite;

    &:hover {
        box-shadow: -1px 0px 37px -1px rgba(0, 0, 0, 0.75);
    }
`;

const Image = styled.img`
    border-radius: 1em;
    height: 100%;
    width: 100%;
`;

const ProductInformationContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em;
    height: 50vh;
    max-width: 50vh;
`;

const Desctiption = styled.p`
    font-size: 1.2rem;
    color: black;
`;

const Price = styled.p`
    font-size: 1.2rem;
    font-weight: 800;
    color: black;
`;

const ConfirmationMessage = styled.p`
    font-size: 1.2rem;
    font-weight: 800;
    color: green;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    padding: 14px 18px;
    transition: all 0.2s ease;
    font-weight: 600;
    cursor: pointer;
    border: none;
    border-radius: 1.5em;
    margin: 0 5px;
    background-color: ${(props) => props.backgroundcolor};
    color: ${(props) => props.color};

    &:hover {
        background-color: ${(props) => props.hover};
        border-radius: 0.5em;
        box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);
    }
`;
