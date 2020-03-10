import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategoryDetail } from '../../Redux/Action/course';
import '../Category/category.scss';
import CategoryCart from './CategoryCart';

class CategoryDetail extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCategoryDetail(this.props.category))
    }
    componentDidUpdate(prevState) {
        if (this.props.category !== prevState.category) {
            this.props.dispatch(fetchCategoryDetail(this.props.category))
        }
    }
    render() {
        return (
            <div className='flex container mx-auto'>
                {this.props.categoryDetail.map((item, index) => {
                    return (
                        <div className="Category col-3 max-w-sm rounded overflow-hidden shadow-lg  mr-1 hover:bg-gray-400" key={index}>
                            <img className="relative w-full h-48" src={item.hinhAnh} alt={item.tenKhoaHoc} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-2xl mb-1 categoryDetail">{item.tenKhoaHoc}</div>
                            </div>
                            <div className="px-1 py-1">
                                <div className="font-bold text-xs mb-1 categoryDetail">{item.moTa}</div>
                            </div>
                            <div className='px-1 pt-1 border-t border-gray-900'>
                                <div className="font-bold text-xs mb-1 categoryDetail">Lượt xem: {item.luotXem}</div>
                            </div>
                            <div className='px-1'>
                                <div className="font-bold text-xs mb-1 categoryDetail">Số lượng học viên: {item.soLuongHocVien}</div>
                            </div>
                            <CategoryCart item={item}/>
                        </div>
                    )
                })}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    categoryDetail: state.course.categoryDetail
})

export default connect(mapStateToProps)(CategoryDetail);