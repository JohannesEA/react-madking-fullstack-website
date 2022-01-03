


import styled from "styled-components";
import { Link } from "react-scroll";
import {
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import getWindowDimensions from "../../reusableFunctions/Functions";

const Footer = () => {
  const { width } = getWindowDimensions();
  return (
    <Container>
      <Top>


          <Left>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              <Image src="/assets/logos/logo7.png" alt="footer-img" />{" "}
            </Link>
          </Left>

          <Right>
            <Right>
                <Title>Våre betalingsløsninger</Title>
                <Payment className="payment-logo" src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Right>

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
  background-color: var(--color-light);


`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-light);
  width: 100%;
  height: 42vh;
  @media (max-width: 800px){
    flex-direction: column;
    height: 60vh;

  }

`;

const Image = styled.img`
  max-height: 40vh;
`;

const Left = styled.div`
  background-color: var(--color-light);
  width: 50%;
  color: var(--color-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;

const Right = styled.div`
  background-color: var(--color-light);
  width: 60%;
  height: 50%;
  color: var(--color-dark);
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
  background-color: var(--color-light);
  height: 5vh;
  width: 100%;
  color: var(--color-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;

const Bottom2 = styled.div`
  cursor: pointer;
  background-color: var(--color-dark);
  height: 5vh;
  width: 100%;
  color: var(--color-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  padding: 0.8rem;

`;
