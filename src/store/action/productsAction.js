import api from "../../boot/axios";
import { productRequest, productSuccess, productsFail } from "../slice/productsSlice";

export const getAllProducts = async (dispatch) => {
    try {
        dispatch(productRequest())
        const { data } = await api.get('api/products');
        dispatch(productSuccess(data));
    } catch (error) {
        dispatch(productsFail(error.response.data.message));
    }
}