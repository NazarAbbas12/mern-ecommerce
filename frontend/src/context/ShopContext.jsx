import { createContext, useEffect, useState } from "react";
import { products } from "../assets/forever-assets/assets/frontend_assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = (props)=>{

    const currency = '$';

    const delivery_fee = 150;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemID,size)=>{

        if(!size){
            toast.error('Select Product Size');
            return;
        }
        let cartData = structuredClone(cartItems); // to create copy of this object

        if(cartData[itemID]){
            if(cartData[itemID][size]){
                cartData[itemID][size] += 1;
            }
            else{
                cartData[itemID][size] = 1;
            }
        }
        else{
            cartData[itemID] = {};
            cartData[itemID][size] = 1;
        }

        setCartItems(cartData);
    }

    const getCartCount = ()=>{
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items])//iterate over item size
            {
                try {
                    if(cartItems[items][item]>0)
                    {
                        totalCount+=cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }


    const updateQuantity = async (itemID,size,quantity)=>{
        let cartData = structuredClone(cartItems);

        cartData[itemID][size] = quantity;

        setCartItems(cartData);

    }


    const getCartAmount = ()=>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((prodcut)=>prodcut._id===items); // storing product data
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalAmount += itemInfo.price*cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        
        return totalAmount;
    };


    const value = {
        products,
        currency,
        delivery_fee,
        search, setSearch, showSearch,setShowSearch,
        cartItems,addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider