import { useState , useEffect} from "react";
import styled from "styled-components";
import {updateContent, getContent} from "../../../redux/apiCalls"
import { useDispatch, useSelector } from "react-redux";


const WorkProcess = () => {
    const content = useSelector(state => state.content.contents);

    const size = content.length;
    const contents = content.slice(0, size);

    const [userInput, setUserInput] = useState({
        herotitle: contents[0].herotitle,
        heroimg: contents[0].heroimg,
        abouttitle:  contents[0].abouttitle,
        aboutdesc:  contents[0].aboutdesc,
        aboutimg: contents[0].aboutimg,
        workprocestitle: "",
        workprocessone: "",
        workprocesstwo: "",
        workprocessthree: "",
        workprocessfour: "",
        beatstitle: ""
    });

    const dispatch = useDispatch(); 

    useEffect(() => {
        getContent(dispatch);
    }, [dispatch]);

        //Get input values
        const handleChange = (e) => {
            e.persist();
            let value = e.target.value;
            let name = e.target.name;
            setUserInput({ ...userInput, [name]: value });
        };


    const handleUpdateWorkProcessContent = (e) => {
        e.preventDefault();
        updateContent(contents[0]._id ,userInput, dispatch);
    };


    return (
        <Container>
            <Title>Om Oss</Title>

            <Form>
                <FormTitle>
                    Legg til overskrift og tekst for "Hvordan vi jobber"
                    seksjonen
                </FormTitle>
                <Input
                    type="text"
                    name="workprocestitle"
                    placeholder="overskrift.."
                    onChange={(e) => handleChange(e)}
                />
                <Input
                    type="text"
                    name="workprocessone"
                    placeholder="tekst 1.."
                    onChange={(e) => handleChange(e)}
                />
                <Input
                    type="text"
                    name="workprocesstwo"
                    placeholder="tekst 2.."
                    onChange={(e) => handleChange(e)}
                />
                <Input
                    type="text"
                    name="workprocessthree"
                    placeholder="tekst 3.."
                    onChange={(e) => handleChange(e)}
                />
                <Input
                    type="text"
                    name="workprocessfour"
                    placeholder="tekst 4.."
                    onChange={(e) => handleChange(e)}
                />
                         <Input
                    type="text"
                    name="beatstitle"
                    placeholder="Tittel for våre beats seksjon."
                    onChange={(e) => handleChange(e)}
                />
      
                <Button
                    backgroundcolor="#3E768C"
                    color="white"
                    hover="#558ba0"
                    onClick={(e) => handleUpdateWorkProcessContent(e)}
                >
                    Send
                </Button>{" "}
            </Form>
        </Container>
    );
};

export default WorkProcess;

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
