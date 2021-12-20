import styled from "styled-components";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts, getContent } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
//https://react-slick.neostack.com/docs/get-started/
import useWindowDimensions from "../../reusableFunctions/Functions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import audio from "../../mixaund-inspiring-happy-morning.mp3";
import { useRef } from "react";
const audiotoplay = new Audio(audio);


const MusicCarouselle = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const content = useSelector(state => state.content.contents);
    const [selectedProd, setSelectedProd] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);
    const { height, width } = useWindowDimensions();
    let path = "";
    const navigate = useNavigate();

    const handleClick = item => {
        path = "/products/" + item._id;
        navigate(path);
    };

    const handlePlaySong = (prod) => {
        setSelectedProd(prod);
        if (isPlaying) {
            audiotoplay.pause();
            setIsPlaying(false);
        }else{
            audiotoplay.play();
            setIsPlaying(true);
        }
        console.log("Selected prod: ", selectedProd);
    }
    // useEffect(() => {
    //     isPlaying ? audiotoplay.play() : audiotoplay.pause();
    // }, [isPlaying]);

    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);

    useEffect(() => {
        getContent(dispatch);
    }, [dispatch]);

    const size = products.length;
    const items = products.slice(0, size);

    const contsize = content.length;
    const contents = content.slice(0, contsize);

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: width > 800 ? 3 : 1,
        speed: 500,
        arrows: false,
        lazyLoad: true,
    };

    return (
        <Container id="beats">
            {contents.map(title => (
                <Title key={title._id + "mdkdcdasmk"}>{title.beatstitle}</Title>
            ))}

            <SliderContainer>
                <Slider {...settings}>
                    {items.map((prod, index) => (
                        <SliderItem key={index}>
                            <ImageContainer>
                                <Image alt={prod._id} src={prod.img} />
                            </ImageContainer>
                            <Text>{prod.title}</Text>
                            <Buttons>
                                <Button
                                    backgroundcolor="#e1e1e1"
                                    color="black"
                                    hover="#fff"
                                    onClick={() => handleClick(prod)}
                                >
                                    Velg
                                </Button>
                                
                                    {isPlaying && prod._id === selectedProd._id ?   <AiOutlinePauseCircle color="white" fontSize={50} onClick={() => handlePlaySong(prod)} /> : <AiOutlinePlayCircle color="white" fontSize={50} onClick={() => handlePlaySong(prod)}/>}
                            
                            </Buttons>
                        </SliderItem>
                    ))}
                </Slider>
            </SliderContainer>
        </Container>
    );
};

export default MusicCarouselle;

const Container = styled.div`
    text-align: center;
    background-color: var(--color-2);
    height: auto;
    padding-bottom: 2em;
`;

const SliderContainer = styled.div`
    background-color: var(--color-2);
    height: auto;
    width: 100%;
`;

const SliderItem = styled.div`
    justify-content: center;
    width: 100%;
    height: 75vh;
    align-items: center;
    text-align: center;
    margin: 1em;
    padding: 1em;
    border-radius: 1em;

    box-shadow: 1px 2px 19px -1px rgba(0, 0, 0, 0.75);
    @media (max-width: 500px) {
        height: auto;
    }

    &:hover {
        box-shadow: -1px 0px 37px -1px rgba(0, 0, 0, 0.75);
    }
`;

const ImageContainer = styled.div`
    justify-content: center;
    height: 48vh;
    align-items: center;
    text-align: center;

    @media (max-width: 500px) {
        height: 35vh;
    }
`;

const Image = styled.img`
    border-radius: 1em;
    height: 100%;
    width: 100%;
`;

const Text = styled.p`
    font-size: 1.5rem;
    color: white;
`;

const Title = styled.h1`
    color: white;
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 15em;
    margin: 0 auto;
`;

const Button = styled.button`
    z-index: 1;
    padding: 14px 18px;
    transition: all 0.2s ease;
    font-weight: 600;
    cursor: pointer;
    border: none;
    border-radius: 1.5em;
    background-color: ${props => props.backgroundcolor};
    color: ${props => props.color};
    &:hover {
        background-color: ${props => props.hover};
        border-radius: 0.5em;
        box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);
    }

    @media (max-width: 400px) {
        padding: 10px 14px;
    }
`;
