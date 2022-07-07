import axios from "axios";

const BASE_URL = "https://one-api.ir/digikala/?token=300917:62ae4b0cace495.44292497&action=category&id=1";



const getProducts = async () => {
    const response = await axios.get(BASE_URL);
    return response.data.result[4].data.products
}



export {getProducts  };

