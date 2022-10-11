import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css'

const Cart = ({cart}) => {
    const {name, logo, total} = cart
    return (
        <div className='cart'>
            <img src={logo} alt="" />
            <div className='carts'>
            <h3> {name}</h3>
            <p>Qustion: {total}</p>
            <Link>
            <button>Start Quiz</button>
            </Link>
            </div>
        </div>
    );
};

export default Cart;