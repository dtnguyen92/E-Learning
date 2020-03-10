import React, { Component } from 'react';
import Search from '../Search';
import Cart from '../Cart';

class ComponentPayment extends Component {
    render() {
        return (
            <div className="Cart justify-end absolute items-center flex-shrink-0 text-red-600 mr-6 bg-white pr-32">
                    <Search />
                    <Cart />
                </div>
        );
    }
}

export default ComponentPayment;