import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem';

import CustomButtom from '../custom-button/CustomButton';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
