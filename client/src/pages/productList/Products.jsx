import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsPlayBtn } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/apiCalls";

const Products = ({ item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);

    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);

    let path = "";
    const handleClick = (item) => {
        path = "/products/" + item._id;
        navigate(path);
    };

    return (
        <Container>
            <SectionTitle> Alle Våre Produkter</SectionTitle>

            <ProductListContainer>
                {products.map((prod, index) => (
                    <ProductContainer key={index}>
                        <ImageContainer>
                            <Image alt={prod._id} src={prod.img} />
                        </ImageContainer>
                        <Title>{prod.title}</Title>
                        <Price>{prod.price} KR</Price>
                        <Buttons>
                            <Button
                                backgroundcolor="#3E768C"
                                color="white"
                                hover="#558ba0"
                                onClick={() => handleClick(prod)}
                            >
                                Velg
                            </Button>
                            <Button
                                backgroundcolor="#3E768C"
                                color="white"
                                hover="#558ba0"
                            >
                                Spill Av
                            </Button>
                        </Buttons>
                    </ProductContainer>
                ))}
            </ProductListContainer>
        </Container>
    );
};

export default Products;

const Container = styled.div`
    text-align: center;
    background-color:white;

    @media (max-width: 800px) {
        flex-direction: column;
        padding-top: 7em;
    } ;
`;

const ProductListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 300px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const ProductContainer = styled.div`
    border-radius: 1em;
    justify-content: center;
    margin: 1em;
    height: 53vh;
    align-items: center;
    text-align: center;
    box-shadow: 1px 2px 19px -1px rgba(0, 0, 0, 0.75);
    background-color: white;

    &:hover {
        box-shadow: 1px 2px 19px -1px #636363;
    }

    @media (max-width: 500px) {
        height: auto;
        min-height: 37vh;
    }
`;

const ImageContainer = styled.div`
    justify-content: center;
    height: 35vh;
    align-items: center;
    text-align: center;

    @media (max-width: 500px) {
        height: 20vh;

    }
`;

const SectionTitle = styled.h1`
    font-size: 2rem;
    color: black;
    padding-top: 4em;

    @media (max-width: 800px) {
        padding-top: 1em;
    } ;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    color: black;
`;

const Image = styled.img`
    border-radius: 1em 1em 0 0;
    height: 100%;
    width: 100%;
`;

const Price = styled.p`
    color: black;
    font-size: 1.2rem;
    font-weight: 200;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
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

    @media (max-width: 500px) {
        height: auto;
        padding: 10px 14px;

    }
`;
