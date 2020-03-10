import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './coursescss.scss';
import ButtonCarousel from './buttonright';
import ButtonLeftCarousel from './buttonleft';
import { NavLink } from 'react-router-dom';
import ComponentPayment from '../../Layouts/ComponentPayMent';

class CourseCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            cart: 0
        }
    }
    nextProperty = () => {
        this.state.x === -100 * (this.props.courseList.length - 1) ? this.setState({
            x: 0
        }) : this.setState({
            x: this.state.x - 100
        })
        console.log(this.state.x);

    }
    prevProperty = () => {
        this.state.x === 0 ? this.setState({
            x: (-100) * (this.props.courseList.length - 1)
        }) : this.setState({
            x: this.state.x + 100
        })
    }
    render() {
        const x = this.state.x;
        return (
            <Fragment>
                <ComponentPayment />
                <ButtonLeftCarousel prevProperty={this.prevProperty} />
                <ButtonCarousel nextProperty={this.nextProperty} />
                <div className={`cards-slide`}>
                    <div className='cards-slide-wrapper'>
                        {this.props.courseList.map((item, index) => {
                            return (
                                <div className="col-4 container max-w-sm rounded overflow-hidden shadow-lg courseItem mx-1 hover:bg-gray-400" key={index} style={{ transform: `translateX(${x}%)` }}>
                                    <img className="w-full h-56 rounded-sm" src={item.hinhAnh} alt="Sunset in the mountains" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xs mb-1 tenKhoaHoc">{item.tenKhoaHoc}</div>
                                    </div>
                                    <div className="px-1 py-1">
                                        <div className='justify-between'>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-1">#{item.ngayTao}</span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-1">#Lượt xem:{item.luotXem}</span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">#Số lượng:{item.soLuongHocVien}</span>
                                        </div>
                                        <div className='flex justify-center'>
                                            <NavLink className="inline-block bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mt-2 hover:no-underline text-center" to={`/detail/${item.maKhoaHoc}`}><i className="fa fa-search-plus" aria-hidden="true"></i></NavLink>
                                            <button className="inline-block bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mt-2 hover:no-underline text-center ml-4" onClick={() => this.props.ADDCART(item)} ><i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Fragment>
        );
    }
    
}
const mapStateToProps = state => {
    return {
        courseList: state.course.courses
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

export default connect(mapStateToProps, mapDispatchToProps)(CourseCarousel);