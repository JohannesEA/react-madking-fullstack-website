import { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
    addProduct,
    getProducts,
    deleteProduct,
} from "../../../redux/apiCalls";
// import { publicRequest } from "../../../requestMethods";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import app from "../../../firebase";

const ProductHandler = () => {
    const [userInput, setUserInput] = useState({
        title: "",
        img: "",
        description: "",
        categories: [],
        price: 0,
        mp3: "",
    });
    const [productToEditId, setProductToEditId] = useState();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const [isLoading, setIsLoading] = useState(false);
    const [imgError, setImgError] = useState(false);
    const [mp3Error, setMp3Error] = useState(false);
    const [success, setSuccess] = useState(false);

    //Get input values
    const handleChange = (e) => {
        e.persist();
        let value = e.target.value;
        let name = e.target.name;

        switch (name) {
            case "price":
                setUserInput({ ...userInput, [name]: Number(value) });
                break;
            case "categories":
                setUserInput({ ...userInput, [name]: value.split(",") });
                break;
            case "img":
                setUserInput({ ...userInput, [name]: e.target.files[0] });
                break;
            default:
                setUserInput({ ...userInput, [name]: value });
        }
    };

    const handleMp3Upload = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime() + e.target.files[0].name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        setIsLoading(false);
                        break;
                    case "running":
                        console.log("Upload is running");
                        setIsLoading(true);
                        break;
                    default:
                        setIsLoading(false);
                }
            },
            (error) => {
                setMp3Error(true);
                setIsLoading(false);
                console.log(error);
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUserInput({ ...userInput, mp3: downloadURL });
                });
                setMp3Error(false);
                setIsLoading(false);
            }
        );
    };

    const handleImageUpload = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime() + e.target.files[0].name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        setIsLoading(false);
                        break;
                    case "running":
                        console.log("Upload is running");
                        setIsLoading(true);
                        break;
                    default:
                        setIsLoading(false);
                }
            },
            (error) => {
                setImgError(true);
                setIsLoading(false);
                console.log(error);
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUserInput({ ...userInput, img: downloadURL });
                });
                setImgError(false);
                setIsLoading(false);
            }
        );
    };

    const handleAddNewProduct = (e) => {
        e.preventDefault();
        console.log("Product: ", userInput);
        addProduct(userInput, dispatch);
        setSuccess(true)
    };

    const handleDelete = (prod) => {
        const id = prod._id;
        deleteProduct(id, dispatch);
    };

    const handleEdit = (prod) => {
        setProductToEditId(prod._id);
        console.log(productToEditId);
    };

    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);

    return (
        <Container>
            <Title>Legg til, endre, slett produkter. </Title>

            <Form encType="multipart/form-data">
                <FormTitle>Legg til nytt produkt</FormTitle>
                <Input
                    type="text"
                    name="title"
                    placeholder="tittel.."
                    onChange={(e) => handleChange(e)}
                />
                <Input
                    type="file"
                    name="img"
                    placeholder="bilde.."
                    onChange={(e) => handleImageUpload(e)}
                />
                {isLoading && <p>Laster opp bilde...</p>}
                {imgError && <p>Feil ved opplasting av bilde</p>}
                <Input
                    type="text"
                    name="description"
                    placeholder="beskrivelse.."
                    onChange={(e) => handleChange(e)}
                />
                <Input
                    type="text"
                    name="categories"
                    placeholder="kategori.."
                    onChange={(e) => handleChange(e)}
                />
                <Input
                    type="text"
                    name="price"
                    placeholder="pris.."
                    onChange={(e) => handleChange(e)}
                />
                <Input
                    type="file"
                    name="mp3"
                    placeholder="mp3.."
                    onChange={(e) => handleMp3Upload(e)}
                />
                {isLoading && <p>Laster opp musikk...</p>}
                {mp3Error && <p>Feil ved opplasting av musikk</p>}

                <Button
                    backgroundcolor="#3E768C"
                    color="white"
                    hover="#558ba0"
                    onClick={(e) => handleAddNewProduct(e)}
                >
                    Legg Til
                </Button>{" "}
                {success && <p>Produkt er lastet opp!</p>}
            </Form>

            <Table>
                <TBody>
                    <TableRoW>
                        <TableHead>Bilde</TableHead>
                        <TableHead>Tittel</TableHead>
                        <TableHead>Beskrivelse</TableHead>
                        <TableHead>Kategorier</TableHead>
                        <TableHead>Pris</TableHead>
                        <TableHead>Endre/Slett</TableHead>
                    </TableRoW>

                    {products.map((prod, index) => (
                        <TableRoW key={index}>
                            <TableD>
                                <Image src={prod.img} />
                            </TableD>
                            <TableD>{prod.title}</TableD>
                            <TableD>{prod.description}</TableD>
                            <TableD>{prod.categories}</TableD>
                            <TableD>{prod.price} kr</TableD>
                            <TableD>
                                {" "}
                                <Buttons>
                                    <Button
                                        backgroundcolor="green"
                                        color="white"
                                        hover="#4cbd35"
                                        onClick={() => handleEdit(prod)}
                                    >
                                        Endre
                                    </Button>
                                    <Button
                                        backgroundcolor="red"
                                        color="white"
                                        hover="#ed6c6c"
                                        onClick={() => handleDelete(prod)}
                                    >
                                        Slett
                                    </Button>
                                </Buttons>{" "}
                            </TableD>
                        </TableRoW>
                    ))}
                </TBody>
            </Table>
        </Container>
    );
};

export default ProductHandler;

const Table = styled.table`
    margin-top: 3em;
    width: 80%;
    margin-bottom: 3em;
`;

const TBody = styled.tbody``;

const TableRoW = styled.tr`
    min-width: 100%;
    padding: 1em;
`;

const TableHead = styled.th`
    background-color: var(--color-1);
    color: white;
    padding: 1em;
    width: 100%;
`;

const TableD = styled.td`
    background-color: var(--color-4);
    color: white;
    padding: 1em;
    min-width: 8em;
    width: 100%;
`;

const Image = styled.img`
    max-width: 10em;
    max-height: 20em;
`;

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

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;
