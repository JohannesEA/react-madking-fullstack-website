import { useState , useEffect} from "react";
import styled from "styled-components";
import {updateContent, getContent} from "../../../redux/apiCalls"
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
    const content = useSelector(state => state.content.contents);

    const size = content.length;
    const contents = content.slice(0, size);

    const [userInput, setUserInput] = useState({
        herotitle: "",
        heroimg: "",
        abouttitle: contents[0].abouttitle,
        aboutdesc: contents[0].aboutdesc,
        aboutimg: contents[0].aboutimg,
        workprocestitle: contents[0].workprocestitle,
        workprocessone: contents[0].workprocessone,
        workprocesstwo: contents[0].workprocesstwo,
        workprocessthree:contents[0].workprocessthree,
        workprocessfour: contents[0].workprocessfour,
        beatstitle: contents[0].beatstitle
    });

    const dispatch = useDispatch(); 

    //Get input values
    const handleChange = (e) => {
        e.persist();
        let value = e.target.value;
        setUserInput({ ...userInput, [e.target.name]: value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        updateContent( contents[0]._id, userInput, dispatch);
     
    };



    useEffect(() => {
        getContent(dispatch);
    }, [dispatch]);


    return (
        <Container>
            <Title>Hero</Title>

            <Form>
                <FormTitle>
                    Legg til overskrift og tekst for "Hero" seksjonen
                </FormTitle>
                <Input
                    type="text"
                    name="herotitle"
                    placeholder="overskrift.."
                    onChange={(e) => handleChange(e)}
                />
                <Input
                    type="text"
                    name="heroimg"
                    placeholder="bilde.."
                    onChange={(e) => handleChange(e)}
                />
                <Button
                    backgroundcolor="#3E768C"
                    color="white"
                    hover="#558ba0"
                    onClick={(e) => handleClick(e)}
                >
                    Send
                </Button>{" "}
            </Form>
        </Container>
    );
};

export default Hero;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5em;
    flex-direction: column;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 2rem;
    color: black;
`;

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0px 0px 15px 5px #000000;
    width: 80%;
    padding: 1em;
    border-radius: 1em;
`;
const FormTitle = styled.h1`
    font-size: 1.5rem;
    color: black;
`;
const Input = styled.input`
    flex: 1;
    width: 90%;
    padding: 1.5em;
    margin: 0.5em 0 0.5em 0;
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
