import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import Button from "../../components/Button";

const Login = () => {
    const [username, setUsername] = useState({});
    const [password, setPassword] = useState({});
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.user);

    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };

    return (
        <Container>
            <LoginContainer>
                <Title>Logg inn!</Title>
                <Input
                    type="text"
                    name="username"
                    placeholder="Brukernavn"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Passord"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    text="Log Inn"
                    bc="color-2"
                    btnOnClick={handleLogin}
                ></Button>{" "}
                {error && <Error>Innlogging feilet..</Error>}
            </LoginContainer>
        </Container>
    );
};

export default Login;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10em 1em 5em 1em;
    background-color: var(--color-dark);
`;

const LoginContainer = styled.div`
    background-color: var(--color-light);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: 2px 3px 15px 5px var(--color-5);
    border-radius: 1em;
    padding: 1em;
    min-height: 30em;
    min-width: 25em;

    @media (max-width: 800px) {
        min-height: 20em;
        min-width: 20em;
    }
`;

const Title = styled.h1`
    font-size: 1.5rem;
`;

const Input = styled.input`
    border: none;
    padding: 2em;
    box-shadow: 1px 2px 10px 1px var(--color-5);
    width: 100%;
    color: #b8b8b8;

    @media (max-width: 800px) {
        padding: 1.5em;
    }
`;

const Error = styled.p`
    font-size: 1.1rem;
    color: red;
`;
