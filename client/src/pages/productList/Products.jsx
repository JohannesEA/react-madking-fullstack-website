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
                        <Title>{prod.title}</Title>
                        <Image src={prod.img} alt={index} />
                        <Price>{prod.price} kr</Price>
                        <Buttons>
                            {" "}
                            <Button
                                backgroundcolor="#3E768C"
                                color="white"
                                hover="#558ba0"
                                onClick={() => handleClick(prod)}
                            >
                                Velg
                            </Button>
                            <BsPlayBtn
                                color="white"
                                fontSize="3.4em"
                                fontWeight="100"

                                // onClick={() => {
                                //   handlePlaySong(musicCarouselleDummyData[slideItem.id - 1])
                                // }}
                            />
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

    @media (max-width: 800px) {
        flex-direction: column;
        padding-top: 7em;
    } ;
`;

const ProductListContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 1em;

    @media (max-width: 800px) {
        grid-template-columns: auto auto;
    }

    @media (max-width: 600px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    } ;
`;

const ProductContainer = styled.div`
    text-align: center;
    margin: 1em 5px;
    border-radius: 1em;
    background-color: #00a27f4b;
    background-color: var(--color-1);
    max-width: 20em;
    max-height: 40em;
    height: auto;

    &:hover {
        box-shadow: 0px -8px 20px 1px #767676;
    }

    @media (max-width: 800px) {
        padding-bottom: 2em;
    } ;
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
    color: white;
`;

const Image = styled.img`
    width: 100%;
    height: 60%;
    max-width: 20em;
    max-height: 35em;

    @media (max-width: 600px) {
        max-width: 15em;
        max-height: 25em;
    } ;
`;

const Price = styled.p`
    color: white;
    font-size: 1.2rem;
    font-weight: 200;
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
