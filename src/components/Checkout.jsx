import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { ProductDetails } from './';
import { IN_CURRENCY } from '../utils/Constants';
import { removeFromCart, incrementInCart, decrementInCart } from '../redux/cartSlice';

const Checkout = () => {

  const products = useSelector((state) => state.cart.products);
  const itemNumber = useSelector((state) => state.cart.productsNumber);
  const subtotal = useSelector((state) => state.cart.products.reduce((subtotal, product) => subtotal + (product.price * product.quantity), 0));

  const dispatch = useDispatch();

  return (
    <div className='h-screen bg-amazonClone-background bg-[#EAEDED]'>
      <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
        <div className="grid grid-cols-8 gap-10">
          {/* products */}
          <div className="col-span-6 bg-white">
            <div className="text-2xl xl:text-3xl m-4">
              Shopping Cart
            </div>
            {
              products.map(product => {
                return(
                  <div key={product.id}>
                    <div className="grid grid-cols-12 divide-y divide-grey-400 mr-4">
                      <div className="col-span-10 grid grid-cols-8 divide-y divide-grey-400">
                        <div className="col-span-2">
                          <Link to={`/product/${product.id}`}>
                            <img src={product.image_small} className="p-4 m-auto" />
                          </Link>
                        </div>
                        <div className="col-span-6">
                          <div className="font-medium text-black mt-2">
                          <Link to={`/product/${product.id}`}>
                            <ProductDetails product={product} ratings={false}/>
                          </Link>
                          </div>
                          <div>
                            <button className='text-sm xl:text-base font-semibold rounded text-blue-500 mt-2 mb-2' onClick={() => dispatch(removeFromCart(product.id))}>Delete</button>
                          </div>
                          <div className='grid grid-cols-3 w-20 text-center'>
                            <div className='text-xl xl:text-2xl bg-gray-400 rounded' onClick={() => dispatch(decrementInCart(product.id))}>-</div>
                            <div  className='text-lg xl:text-xl bg-gray-200'>{ product.quantity }</div>
                            <div className='text-xl xl:text-2xl bg-gray-400 rounded' onClick={() => dispatch(incrementInCart(product.id))}>+</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-lg xl:text-xl mt-2 mr-4 font-semibold">
                          {IN_CURRENCY.format(product.price)}
                        </div>
                      </div>
                    </div>
                  </div> 
                )
              })
            }
            <div className='text-lg xl:text-xl text-right mb-4 mr-4 font-semibold'>Subtotal ({itemNumber} items): <span>{IN_CURRENCY.format(subtotal)}</span></div>
          </div>
          {/* Checkout */}
          <div className="col-span-2 bg-white rounded h-[250px] p-2">
            <div className='text-xs xl:text-small text-green-800 mb-2'>Your order qualifies for <span className='font-bold'>FREE DELIVERY</span>. Delivery details.</div>
            <div className='text-base xl:text-large mb-4 font-semibold'>Subtotal ({itemNumber} items): <span>{IN_CURRENCY.format(subtotal)}</span></div>
            <button className='btn'>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout