import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
    getProductFailure,
    getProductStart,
    getProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess
} from "./productRedux";
import {
    getContentFailure,
    getContentStart,
    getContentSuccess,
    addContentFailure,
    addContentStart,
    addContentSuccess,
    updateContentFailure,
    updateContentStart,
    updateContentSuccess
} from "./contentRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        console.log(user);
        const res = await publicRequest.post("api/auth/login", user);
        dispatch(loginSuccess(res.data));

    } catch (err) {
        dispatch(loginFailure());
        console.log("Login Failed!", err);

    }
};
export const getProducts = async dispatch => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("api/products");
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`api/products/${id}`);
        dispatch(deleteProductSuccess(res.data));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        // update
        dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
        dispatch(updateProductFailure());
    }
};
export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post(`api/products`, product);
        dispatch(addProductSuccess(res.data));
    } catch (err) {
        dispatch(addProductFailure());
    }
};

export const getContent = async dispatch => {
    dispatch(getContentStart());
    try {
        const res = await publicRequest.get("api/contents");
        dispatch(getContentSuccess(res.data));
    } catch (err) {
        dispatch(getContentFailure());
    }
};

export const addContent = async (content, dispatch) => {
    dispatch(addContentStart());
    try {
        const res = await userRequest.post(`api/contents`, content);
        dispatch(addContentSuccess(res.data));
    } catch (err) {
        dispatch(addContentFailure());
    }
};

export const updateContent = async (id, content, dispatch) => {
    dispatch(updateContentStart());
    try {
        // update
        const res = await userRequest.put(`api/contents/${id}`, content);
        console.log(res.data)
        dispatch(updateContentSuccess({ id, content}));
    } catch (err) {
        dispatch(updateContentFailure());
    }
};

export const handlePayment = async (token, cart) => {
    try {
        // update
        const res = await userRequest.post(`api/payment/pay`,{ tokenId: token.id, amount:cart.total} );
        console.log(res.data);
;
    } catch (err) {
       console.log(res);
    }
};

