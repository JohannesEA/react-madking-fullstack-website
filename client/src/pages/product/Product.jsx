import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useWindowDimensions from "../../reusableFunctions/Functions";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/apiCalls";
import audio from "../../mixaund-inspiring-happy-morning.mp3";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
const audiotoplay = new Audio(audio);

const Product = ({ item }) => {
    const { width } = useWindowDimensions();
    const location = useLocation();
    const [product, setProduct] = useState({});
    const id = location.pathname.split("/")[2];
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const [isPlaying, setIsPlaying] = useState(false);
    const [url, setUrl] = useState();
    const [audio, setAudio] = useState(new Audio(url));

    console.log("ID: ", id);

    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);

    const handlePlaySong = (prod) => {
        setAudio(product.mp3)
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play();
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        const getProduct = () => {
            try {
                const res = products.filter((x) => x._id === id);
                console.log("Result: ", res);
                setProduct(res[0]);
            } catch (e) {
                console.log(e);
            }
        };
        getProduct();
    }, [id, products]);

    const handleClick = () => {
        dispatch(addProduct({ ...product }));
    };

    return (
        <Container>
            <ImageContainer>
                <Image src={product.img} alt={product.title} />
            </ImageContainer>

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
                            onClick={() => handlePlaySong(product)}
                        />
                    ) : (
                        <AiOutlinePauseCircle
                            color="black"
                            fontSize={50}
                            onClick={() => handlePlaySong(product)}
                        />
                    )}
                </Buttons>
            </ProductInformationContainer>
        </Container>
    );
};

export default Product;

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
