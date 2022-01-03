import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import "./index.css";
import GlobalStyles from "./constants/GlobalStyle";
import Productpage from "./pages/product/Productpage";
import Orderpage from "./pages/order/Orderpage";
import Loginpage from "./pages/login/Loginpage";
import ProductListPage from "./pages/productList/ProductListPage";
import Adminpage from "./pages/admin/home/Adminpage";
import AdminProductpage from "./pages/admin/products/AdminProductPage";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "./redux/apiCalls";

const App = () => {
    const user = useSelector((state) => state.user.currentUser);
    const content = useSelector((state) => state.content.contents);
    const dispatch = useDispatch();

    useEffect(() => {
        getContent(dispatch);
    }, [dispatch]);

    return (
        <Router>
            <GlobalStyles />
            {content.length > 0 ? (
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/products/:id" element={<Productpage />} />
                    <Route path="/productlist/" element={<ProductListPage />} />
                    <Route path="/orders/" element={<Orderpage />} />
                    <Route
                        path="/login"
                        element={user ? <Navigate to="/" /> : <Loginpage />}
                    />
                    {/*Protected route*/}
                    <Route
                        path="/admin"
                        element={
                            user ? <Adminpage /> : <Navigate to="/login" />
                        }
                    />
                    {/*Protected route*/}
                    <Route
                        path="/producthandler"
                        element={
                            user ? (
                                <AdminProductpage />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                </Routes>
            ) : (
                <Container>
                    <Image
                        src="/assets/logos/logo.png"
                        alt="loading-logo"
                        width="230"
                        height="230"
                    />
                    <Text>Loading..</Text>
                </Container>
            )}
        </Router>
    );
};

export default App;

const animation = keyframes`
100%{
    transform: rotate(360deg);

}
`;

const Container = styled.div`
    height: 10em;
    width: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    margin: 10em auto;

    @media (max-width: 800px) {
        height: 5em;
        width: 5em;
    }
`;

const Image = styled.img`
    flex-shrink: 0;
    border-radius: 100em;
    animation: ${animation} 2s linear infinite;
    min-width: 100%;
    min-height: 100%;
`;

const Text = styled.p``;
