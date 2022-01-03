import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/apiCalls";
import ProductBox from "../../components/ProductBox";

const Products = ({ item }) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);

    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);

    return (
        <Container>
            <SectionTitle>Våre Beats</SectionTitle>

            <ProductListContainer>
                {products.map((prod) => (
                    <ProductBox
                        key={prod._id}
                        item={prod}
                        backgroundcolor="color-2"
                        btntext="Velg"
                    />
                ))}
            </ProductListContainer>
        </Container>
    );
};

export default Products;

const Container = styled.div`
    text-align: center;
    background-color: var(--color-dark);
    padding-bottom: 3em;
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

    @media (max-width: 350px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const SectionTitle = styled.h1`
    font-size: 2rem;
    color: var(--color-light);
    padding-top: 4em;

    @media (max-width: 800px) {
        padding-top: 1em;
    } ;
`;
