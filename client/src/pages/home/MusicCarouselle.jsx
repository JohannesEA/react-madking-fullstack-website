import styled from "styled-components";
import { BsPlayBtn } from "react-icons/bs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
///https://www.npmjs.com/package/react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { red } from "color-name";
// import useWindowDimensions from "../../reusableFunctions/Functions";

const MusicCarouselle = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const navigate = useNavigate();
  let path = "";
  const playButtonColor = "white";
  // const hoverColor = "#767676";
  // const { height, width } = useWindowDimensions();

  const handleClick = (item) => {
    path = "/products/" + item._id;
    navigate(path);
  };

  const handlePlaySong = (item) => {
    console.log("Play song ", item.title);
  };

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const size = products.length;
  const items = products.slice(0, size);


  return (
    <Container id="beats">
      <Title>Våre Beats</Title>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={size}
        infinite={true}
      >
        <Slider>
          {items.map((prod, index) => (
            <Slide key={prod._id}>
              <ImageBoxContainer>
                <Image src={prod.img} index={index} />
                <Text>{prod.title}</Text>
                <Buttons>
                  <Button
                    backgroundcolor="#3E768C"
                    color="white"
                    hover="#558ba0"
                    onClick={() => handleClick(prod)}
                  >
                    Velg
                  </Button>
                  <BsPlayBtn
                    color={playButtonColor}
                    fontSize="3.4em"
                    fontWeight="100"
                    onClick={() => {
                      handlePlaySong(prod);
                    }}
                  />
                </Buttons>
              </ImageBoxContainer>
              <ButtonBack style={{
                color: "black", zIndex: 1, padding: "14px 18px", transition: "all 0.2s ease", fontWeight: "600", margin: "1em .5em",
                cursor: "pointer",
                border: "none",
                borderRadius: "1.5em "
              }}>Back</ButtonBack>
              <ButtonNext style={{
                color: "black", zIndex: 1, padding: "14px 18px", margin: "1em .5em", transition: "all 0.2s ease", fontWeight: "600",
                cursor: "pointer",
                border: "none",
                borderRadius: "1.5em "
              }}>Next</ButtonNext>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </Container >
  );
};

export default MusicCarouselle;

const Container = styled.div`
  max-height: 55em;
  padding-top: 3em;
  padding-bottom: 2em;
  text-align: center;
  transition: all 0.5s ease;
  background-color: var(--color-2);

  @media (max-width: 800px) {
    max-height: 45em;
    min-height: 40em;


  }
`;

const ImageBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Image = styled.img`
  max-height: 35em;
  max-width: 40em;
  height: 35em;
  width: 40em;
  border-radius: 1em;

  @media (max-width: 800px) {
    max-height: 25em;
    max-width: 20em;
  }
  @media (max-width: 400px) {
    max-height: 20em;
    max-width: 15em;
  }
`;

const Text = styled.p`
  color: white;
`;

const Title = styled.h1`
  color: white;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  min-width: 8em;
`;

const Button = styled.button`
  z-index: 1;
  padding: 14px 18px;
  transition: all 0.2s ease;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 1.5em;
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};

  &:hover {
    background-color: ${(props) => props.hover};
    border-radius: 0.5em;
    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);
  }
`;
