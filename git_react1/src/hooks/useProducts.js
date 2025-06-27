
import { useEffect , useState} from 'react';
import {api} from '../services/api';

export const useProducts = () => {
    const [ products ,setProducts] = useState([]);
    const [loading ,setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect( ()=>{
         const featchProducts = async () =>{
            try {
                setLoading(true);
                const data = await api.getProducts();
                setProducts(data.products);
            } catch (error) {
                setError(error.message);
            } finally{
                 setLoading(false);
            }
         }
         featchProducts();
    },[]);

    return { products , loading ,error};
}; 