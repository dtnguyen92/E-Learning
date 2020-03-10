import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

class CategoryCart extends Component {
    render() {
        console.log(this.props.item);
        const {item} = this.props;
        console.log(item);
        
        return (
            <div className='absolute AddCart py-1 mb-2 flex justify-center'>
                <NavLink className="inline-block bg-red-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mt-2 hover:no-underline text-center" to={`/detail/${this.props.item.maKhoaHoc}`}><i className="fa fa-search-plus" aria-hidden="true"></i></NavLink>
                <button className="inline-block bg-red-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mt-2 hover:no-underline text-center ml-4" onClick={() => this.props.ADDCART(this.props.item)} ><i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ADDCART: (sanpham) => {
            const action = {
                type: "ADD_CART",
                spCart: sanpham
            }
            console.log(action)
            dispatch(action)
        }
    }
}
export default connect (null,mapDispatchToProps) (CategoryCart);