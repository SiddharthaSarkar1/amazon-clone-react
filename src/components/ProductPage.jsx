import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { callAPI } from '../utils/CallApi';
import { IN_CURRENCY } from '../utils/Constants';
import { ProductDetails } from './';
import { addToCart } from '../redux/cartSlice';


const ProductPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState("1");
    const dispatch = useDispatch();

    const getProduct = () => {
        callAPI('data/products.json')
        .then((productResults) => {
            setProduct(productResults[id]);
        })
    }

    const addQuantityToProduct = () => {
        setProduct(product.quantity = quantity);
        return product;
    }

    useEffect(() => {
        getProduct();
    }, [])
    

  return ( product &&
    <div className='bg-amazonClone-background bg-[#EAEDED]'>
        <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
            <div className="grid grid-cols-10 gap-2">
                {/* Left */}
                <div className="col-span-3 p-8 rounded bg-white m-auto">
                    <img src={product.image} alt="" />
                </div>
                {/* Middle */}
                <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
                    <div className="mb-3">
                        <ProductDetails product={product} ratings={true} />
                    </div>
                    <div className="text-base xl:text-lg mt-3">
                        {product.description}
                    </div>
                </div>
                {/* Right */}
                <div className="col-span-2 p-4 rounded  bg-white">
                    <div className="text-xl xl:text-2xl text-red-700 text-right text-semibold">{IN_CURRENCY.format(product.price)}</div>
                    <div className="text-base xl:text-lg text-gray-400 text-right text-semibold">RRP: <span className='line-through'>{IN_CURRENCY.format(product.oldPrice)}</span></div>
                    <div className="text-sm xl:text-base text-blue-500 text-semibold mt-3">FREE Returns</div>
                    <div className="text-sm xl:text-base text-blue-500 text-semibold mt-1">FREE Delivary</div>
                    <div className="text-base xl:text-lgtext-green-700 text-semibold mt-1">In Stock</div>
                    <div className="text-base xl:text-lg mt-1">Quantity:
                    <select onChange={(e) => setQuantity(e.target.value)} className='p-2 bg-white border rounded-md focus:border-indigo-600'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    </div>
                    <Link to='/checkout'>
                    <button onClick={ () => dispatch(addToCart(addQuantityToProduct)) } className='bg-yellow-400 w-full p-3 text-xs xl:text-sm rounded hover:bg-yellow-500 mt-3'>Add to Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductPage