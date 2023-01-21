import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '@/context/StateContext';
import { runFireworks } from '@/lib/utils';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0)
        runFireworks();
    }, []);

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>
                Thank You For Your Order!
            </h2>
            <p className='email-msg'>
                We're working on it.. check your email for your recipt. 
            </p>
            <p className='description'>
                If you have any questions, please email 
                <a className='email' href='mailto:ysk@dev.com'>
                   ysk@dev.com 
                </a>
            </p>
            <Link href='/'>
                <button type='button' width='300px' className='btn'>
                    <span>Continue Shopping</span><i></i>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success
