import styled from "styled-components";
import { BsPlayBtn } from "react-icons/bs";
import { useEffect } from "react";
// import useWindowDimensions from "../../reusableFunctions/Functions";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const MusicCarouselle = () => {
  const dispatch = useDispatch();
  // const { height, width } = useWindowDimensions();
  // const [slideItem, setSlideItem] = useState({ id: 1, item: {} });
  const products = useSelector((state) => state.product.products);
  const navigate = useNavigate();
  let path = "";
  const playButtonColor = "white";
  const hoverColor = "#767676";

  const handleClick = (item) => {
    path = "/products/" + item._id;
    navigate(path);
  };

  const handlePlaySong = (item) => {
    console.log("Play song ", item.title);
  };

  // const handleRightClick = () => {
  //   if (slideItem.id === 5) {
  //     setSlideItem({ id: 1 });
  //   } else if (slideItem.id < 5) {
  //     setSlideItem({ id: slideItem.id + 1 });
  //   }
  // };

  // const handleLeftClick = () => {
  //   if (slideItem.id === 1) {
  //     setSlideItem({ id: 5 });
  //   } else if (slideItem.id > 1) {
  //     setSlideItem({ id: slideItem.id - 1 });
  //   }
  // };

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const size = 7;
  const items = products.slice(0, size);

  return (
    <Container id="beats">
      <Title>Våre Beats</Title>

      <Carousel>
        {items.map((prod) => (
          <ImageBoxContainer key={prod._id}>
            <Image src={prod.img} />
            <Text>halla</Text>
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
        ))}
      </Carousel>

      {/* 
      <ImageBoxContainer>
        {items.map(prod => (
          <ImageBox opacity="1" hoverColor={hoverColor} key={prod._id}>
            <Image
              padding="10em 8em"
              img={prod.img}
            ></Image>
            <Buttons>
              <Button
                backgroundcolor="#3E768C"
                color="white"
                hover="#558ba0"
                onClick={() =>
                  handleClick(prod)
                }
              >
                Velg
              </Button>
              <BsPlayBtn
                color={playButtonColor}
                fontSize="3.4em"
                fontWeight="100"

                onClick={() => {
                  handlePlaySong(prod)
                }}
              />
            </Buttons>
          </ImageBox>
        ))}
      </ImageBoxContainer> */}
    </Container>
  );
};

export default MusicCarouselle;

const Container = styled.div`
  display: flex;
  height: auto;
  padding: 1em 1em 12em 1em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.5s ease;
  background-color: var(--color-2);

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1em 1em 2em 1em;
  }
`;

const ImageBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2em;
  max-height: 100%;
  max-width: 100%;

`;

const Title = styled.h1`
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 800;
`;

const Image = styled.img`
  height: 30em;
  width: 20em;

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
