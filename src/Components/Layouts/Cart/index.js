import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import '../Cart/CartItem.scss';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none'
        }
        this._handleOnClick = this._handleOnClick.bind(this);
        this._handleOnClose = this._handleOnClose.bind(this);
    }
    _handleOnClick() {
        this.setState({
            display: 'block'
        })
    }
    _handleOnClose() {
        this.setState({
            display: 'none'
        })
    }
    render() {
        return (
            <Fragment>
                <button onClick={this._handleOnClick} className="relative bg-red-500 ml-4 block border border-blue-500 rounded py-1 px-3 hover:bg-gray-800 text-white hover:no-underline" href="#"><i className="fa fa-shopping-cart" aria-hidden="true"> Giỏ hàng: <span className='text-white'>({this.props.cart.length})</span></i></button>
                <div style={{ display: `${this.state.display}` }}>
                    <div className='CartItem bg-teal-500 rounded-lg'>
                        {
                            this.props.cart.map((item, index) => {
                                return (
                                    <div className="max-w-sm h-24 w-full lg:max-w-2/4 lg:flex p-2 border border-red-500 p-2" key={index}>
                                        <div className="w-1/12 h-8 lg:h-auto lg:w-20 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden " style={{ backgroundImage: `url(${item.hinhAnh})`, backgroundPosition: 'center' }} title={item.tenKhoaHoc}>
                                        </div>
                                        <div className="w-full border-r border-b border-l bg-white rounded-b lg:rounded-r px-4 flex flex-col justify-between leading-normal">
                                            <div className="mb-8">
                                                <div className="CartItem__detail text-gray-900 font-bold text-sm mb-1 uppercase">{item.tenKhoaHoc}</div>
                                                <button className="absolute text-red-500 text-2xl CartDelete" onClick={() => this.props.DEL_SP(item)}><i className="fa fa-times-circle-o" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {
                            this.props.cart.length === 0 ?
                                <div className="bg-red-600 text-center pt-4 lg:px-4 rounded-lg" >
                                    <div className="bg-red-700 text-center py-4 lg:px-4 rounded-lg">
                                        <div className="p-2 bg-red-500 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                                            <span className="flex rounded-full bg-red-400 uppercase px-2 py-1 text-xs font-bold mr-3"><i className="fa fa-bell ld ld-jingle" aria-hidden="true"></i></span>
                                            <span className="font-semibold mr-2 text-left flex-auto">Bạn chưa có khóa học nào</span>
                                            <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
                                        </div>
                                    </div>
                                    <button className='p-1 text-center text-lg text-white rounded-full' style={{ transform: 'rotate(90deg)' }} onClick={this._handleOnClose}><i className="fa fa-chevron-left ld ld-wander-h" aria-hidden="true"></i></button>
                                </div>
                                :
                                <button className='p-1 my-2 ml-40 text-center text-black text-lg rounded-full' style={{ transform: 'rotate(90deg)' }} onClick={this._handleOnClose}><i className="fa fa-chevron-left ld ld-wander-h" aria-hidden="true"></i></button>
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        DEL_SP: (sanpham) => {
            const action = {
                type: "DELETE_CART",
                spCart: sanpham
            }
            console.log(action);
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);