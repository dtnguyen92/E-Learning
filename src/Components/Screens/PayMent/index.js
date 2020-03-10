import React, { Component } from 'react';
import { connect } from 'react-redux';

class PayMent extends Component {
    render() {
        console.log(this.props.cart);
        return (
            <div>
                <div>
                    {
                        this.props.cart.map((item, index) => {
                            return (
                                <div>
                                    <div className="col-4 container max-w-sm rounded overflow-hidden shadow-lg courseItem mx-1 hover:bg-gray-400" key={index}>
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
                                                <button className="inline-block bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mt-2 hover:no-underline text-center" to={`/detail/${item.maKhoaHoc}`}><i className="fa fa-search-plus" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2>{item.tenKhoaHoc}</h2>
                                        <ul>
                                            <li><i class="fa fa-check" aria-hidden="true" > Bảo hành:Bảo hành theo phiếu bảo hành trong sản phẩm (nếu có)</i></li>
                                            <li><i class="fa fa-check" aria-hidden="true"> Thanh toán: Thanh toán bằng thẻ hoặc thanh toán khi nhận hàng.</i></li>
                                            <li><i class="fa fa-check" aria-hidden="true"> Chính hãng: Đảm bảo hàng tất cả sản phẩm bán trên website có xất xứ rõ ràng.</i></li>
                                        </ul>
                                    </div>
                                </div>
                            );
                        })

                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart.cart
    }
}
export default connect(mapStateToProps)(PayMent);