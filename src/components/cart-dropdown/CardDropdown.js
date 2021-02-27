import React from 'react';

import CustomButtom from '../custom-button/CustomButton';

import './cart-dropdown.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
);

export default CartDropdown;
