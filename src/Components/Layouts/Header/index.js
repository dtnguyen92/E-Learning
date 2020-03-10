import React, { Component, Fragment } from 'react'
import logo from '../../../img/logo_transparent.png';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

class Header extends Component {
    _handleClick() {
        localStorage.clear();
        window.location.replace('/')
    }
    render() {
        return (
            <div className='fixed z-50 mx-auto w-full top-0'>
                <div className='flex justify-between items-center bg-gray-600'>
                    <ul className="flex mx-32">
                        <li className="mr-3 flex items-center">
                            <img src={logo} width={70} alt='E-learning' />
                            <h4 className="font-semibold text-3xl tracking-tight mx-4 text-white">E-Learning Academy</h4>
                        </li>
                    </ul>
                    <ul className="flex mr-32">
                        <li className="mr-2">
                            <NavLink to='/' activeClassName='bg-teal-500' exact className="inline-block border border-teal-500 rounded py-1 px-3 hover:bg-gray-800 text-white hover:no-underline" href="#">Home</NavLink>
                        </li>
                        <li className="mr-2">
                            <NavLink to='/about' activeClassName='bg-teal-500' className="inline-block border border-white rounded hover:border-gray-200 text-white hover:bg-gray-800 hover:text-black py-1 px-3 hover:no-underline" href="#about">About</NavLink>
                        </li>
                        <li className="mr-2">
                            <NavLink to='/courses' activeClassName='bg-teal-500' className="inline-block border border-white rounded hover:border-gray-200 text-white hover:bg-gray-800 py-1 px-3 hover:no-underline" href="#">Courses</NavLink>
                        </li>
                        {
                            this.props.credentials ?
                                <Fragment><li className="mr-2">
                                    <span className="inline-block border border-white rounded hover:border-gray-200 text-white hover:bg-gray-800 py-1 px-3 hover:no-underline" href="#">Hi,{this.props.credentials.hoTen}</span>
                                </li>
                                    <li className="mr-2">
                                        <button className="inline-block border border-white rounded hover:border-gray-200 text-white hover:bg-gray-800 py-1 px-3 hover:no-underline" onClick={this._handleClick}>Logout</button>
                                    </li>
                                </Fragment> :
                                <Fragment>
                                    <li>
                                        <NavLink to='/signup' activeClassName='bg-red-600' className="inline-block border border-white rounded hover:border-gray-200 text-white hover:bg-gray-800 py-1 px-3 hover:no-underline" href="#">Sign Up</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/signin' activeClassName='bg-red-600' className="inline-block border border-white rounded hover:border-red-600 text-white hover:bg-gray-800 py-1 px-3 hover:no-underline" href="#">Sign In</NavLink>
                                    </li>
                                </Fragment>
                        }
                        <li className="mr-2">
                            <button className="inline-block border border-teal-500 rounded py-1 px-3 hover:bg-gray-800 text-white hover:no-underline" href="#"><i className="fa fa-bell ld ld-jingle" aria-hidden="true"></i></button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        credentials: state.user.user,
    }
}


export default connect(mapStateToProps)(Header);