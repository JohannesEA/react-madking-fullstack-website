import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import { removeProduct, resetCart } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/Button";

const KEY =
    "pk_test_51JwS4BDJ6KD8X4jUYGm2VeyofI9YOdonXbCHy3GB12JGM3gPHdY7l3qi9cd7fAvMsTtmiZdu0sjZWy20SxAghpui007JvXEC6j";

const Order = () => {
    const [stripeToken, setStripeToken] = useState(null);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleDelete = (product) => {
        dispatch(removeProduct(product));
    };

    const handleResetCart = () => {
        dispatch(resetCart());
    };

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "https://react-madking-shop.herokuapp.com/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: cart.total,
                    }
                );
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken]);

    return (
        <Container>
            <OrderContainer>
                <Title>Handlekurv</Title>

                <OrderDetailsContainer>
                    {cart.products.map((item, index) => (
                        <OrderDetails key={index}>
                            <Detail>
                                {" "}
                                <Image src={item.img} />
                            </Detail>
                            <Detail>
                                <DetailTitle>Tittel</DetailTitle>
                                <DetailInfo> {item.title}</DetailInfo>
                            </Detail>
                            <Detail>
                                <DetailTitle>Pris</DetailTitle>
                                <DetailInfo> {item.price} Kr</DetailInfo>
                            </Detail>
                            <DeleteArea>
                                <AiOutlineDelete
                                    color="red"
                                    fontSize="1.5rem"
                                    onClick={() => handleDelete(item)}
                                />
                            </DeleteArea>
                        </OrderDetails>
                    ))}
                </OrderDetailsContainer>

                <OrderSummary>
                    <SummaryPrice>Total pris: {cart.total} Kr</SummaryPrice>
                </OrderSummary>
                <Buttons>
                    {" "}
                    <StripeCheckout
                        name="MadKing Music"
                        image="/assets/images/music-images/img1.jpg"
                        billingAddress
                        shippingAddress
                        description={`Total pris er ` + cart.total + ` Kr`}
                        amount={2000}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        {" "}
                        <Button text={"Sjekk Ut"} bc="color-2"></Button>
                    </StripeCheckout>
                    <Button
                        text={"Tilbakestill"}
                        bc="color-3"
                        btnOnClick={handleResetCart}
                    ></Button>
                </Buttons>
            </OrderContainer>
        </Container>
    );
};

export default Order;

const Container = styled.div`
    position: relative;
    display: flex;
    padding-top: 8em;
    padding-bottom: 2em;
    align-items: center;
    justify-content: center;
    min-height: 80vh;

    background-color: white;
`;

const OrderDetailsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 3px 15px 5px var(--color-5);
    border-radius: 1em;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const OrderDetails = styled.div`
    height: auto;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    margin: 0.5em auto;
    box-shadow: 0.1rem 0.1rem 1rem 0.1rem rgba(26, 23, 23, 0.15);
`;

const Detail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    color: white;
    padding: 0.5em;
    font-size: 1.5rem;
    margin: 0 0.5em;
    color: black;
    max-height: 10em;
    max-width: 10em;

    @media (max-width: 800px) {
        min-width: 8vh;
    }

    @media (max-width: 500px) {
        min-width: 6vh;
    } ;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const DetailTitle = styled.h1`
    flex: 1;
    color: ${(props) => props.color};
    font-size: 1.7rem;

    @media (max-width: 500px) {
        font-size: 1.2rem;
    } ;
`;

const DetailInfo = styled.p`
    flex: 1;
    color: black;
    font-size: 1.2rem;

    @media (max-width: 500px) {
        font-size: 1rem;
    } ;
`;

const DeleteArea = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    min-width: 12em;
`;

const OrderSummary = styled.div``;

const SummaryPrice = styled.p`
    font-size: 24px;
`;
