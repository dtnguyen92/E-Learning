import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCategory } from '../../Redux/Action/course';
import CategoryDetail from './CategoryDetail';

class CategoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'BackEnd'
        }
        this.handleCategory = this.handleCategory.bind(this);
    }
    handleCategory = (e) => {
        e.preventDefault();
        this.setState({
            category: e.target.value
        }, () => console.log(this.state)
        )
    }
    render() {
        return (
            <Fragment>
                <div className="flex items-center flex-shrink-0 text-red-600 mr-6 mt-32">
                    <span className="font-semibold text-2xl tracking-tight uppercase my-4 mx-4 border-b border-red-600">Danh mục Khóa học</span>
                </div>
                <ul className="flex container mx-auto justify-between">
                    {this.props.category.map((item, index) => {
                        return (
                            <li className="mr-3" key={index}>
                                <button className=" bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mt-2 hover:no-underline text-center mb-4" onClick={this.handleCategory} value={item.maDanhMuc}>{item.tenDanhMuc}</button>
                            </li>
                        )
                    })}
                </ul>
                <CategoryDetail category={this.state.category} />
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.dispatch(fetchCategory());
    }
}
const mapStateToProps = state => {
    return {
        category: state.course.category
    }
}
export default connect(mapStateToProps)(CategoryScreen);