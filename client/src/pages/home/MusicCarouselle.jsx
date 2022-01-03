import styled from "styled-components";
import { useEffect } from "react";
import { getProducts, getContent } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
//https://react-slick.neostack.com/docs/get-started/
import useWindowDimensions from "../../reusableFunctions/Functions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductBox from "../../components/ProductBox";

const MusicCarouselle = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const content = useSelector(state => state.content.contents);
    const { width } = useWindowDimensions();

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
        lazyLoad: true
    };

    return (
        <Container id="beats">
            {contents.map(title => (
                <Title key={title._id + "mdkdcdasmk"}>{title.beatstitle}</Title>
            ))}

            <SliderContainer>
                <Slider {...settings}>
                    {items.map(prod => (
                        <ProductBox
                            key={prod._id}
                            item={prod}
                            backgroundcolor="color-1"
                            btntext="Velg"
                        />
                    ))}
                </Slider>
            </SliderContainer>
        </Container>
    );
};

export default MusicCarouselle;

const Container = styled.div`
    text-align: center;
    background-color: var(--color-light);
    height: auto;
    padding-bottom: 2em;
    padding-top: 1em ;
`;

const SliderContainer = styled.div`
    background-color: var(--color-light);
    height: auto;
    width: 100%;
`;

const Title = styled.h1`
    color: var(--color-dark);
`;
