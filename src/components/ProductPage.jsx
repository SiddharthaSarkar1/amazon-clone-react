import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { callAPI } from '../utils/CallApi';

const ProductPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const getProduct = () => {
        callAPI('data/products.json')
        .then((productResults) => {
            setProduct(productResults[id]);
        })
    }

    useEffect(() => {
        getProduct();
    }, [])
    

  return ( product &&
    <div>
        ProductPage {id}, {product.title} 
    </div>
  )
}

export default ProductPage