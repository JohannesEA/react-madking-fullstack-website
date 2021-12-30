


import styled from "styled-components";
import { Link } from "react-scroll";
import {
  AiOutlineCopyrightCircle,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import getWindowDimensions from "../../reusableFunctions/Functions";

const Footer = () => {
  const { width } = getWindowDimensions();
  return (
    <Container>
      <Top>
        <Right>
            <Right>
                <Title>Våre betalingsløsninger</Title>
                <Payment className="payment-logo" src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Right>
        {width > 800 && (
          <Left>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              <Image src="/assets/logos/logo.png" alt="footer-img" />{" "}
            </Link>
          </Left>
        )}
      </Top>

      <Bottom>
      madkingmusic.com&nbsp;<AiOutlineCopyrightCircle  fontSize={15}  />&nbsp;2021
      </Bottom>
      <Bottom2 onClick={() => window.location.href="https://mojo-websites.no/"}>
Website Created By mojo-websites.no  
      </Bottom2>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  margin-top: 3em;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-1);
  width: 100%;
  height: 42vh;


`;

const Image = styled.img`
  max-height: 40vh;
`;

const Left = styled.div`
  background-color: var(--color-1);
  width: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;

const Right = styled.div`
  background-color: var(--color-1);
  width: 60%;
  height: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.5rem;

  @media (max-width: 800px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const Title = styled.h3`
    margin-bottom: 30px;
    font-size: 1.2rem;

`;




const Payment = styled.img`
    
`;


const Bottom = styled.div`
  background-color: var(--color-1);
  height: 5vh;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;

const Bottom2 = styled.div`
  background-color: var(--color-2);
  height: 5vh;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;
