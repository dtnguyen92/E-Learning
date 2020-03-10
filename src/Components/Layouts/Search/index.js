import React, { Component, Fragment } from 'react';
import '../Search/courseSearch.scss';
import { courseServices } from '../../Servieces';
import { connect } from 'react-redux';
import { createrAction } from '../../Redux/Action';
import { FETCH_COURSE_SEARCH } from '../../Redux/Action/type';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            opacity: 'none'
        }
    }
    _handleOnChange = e => {
        if (e.target.value === "") {
            this.setState({
                value: "",
                opacity: 'none'
            })
            localStorage.removeItem('courseSeach')
        } else {
            this.setState({
                value: e.target.value,
                opacity: 'inline-block'
            })
        }
    }
    _handleOnSubmit = e => {
        e.preventDefault();
    }
    _handleValue = e => {
        courseServices.fetchCourseSearch(e.target.value)
            .then(res => {
                localStorage.setItem('courseSeach', JSON.stringify(res.data))
                const courseSearch = localStorage.getItem('courseSeach');
                this.props.dispatch(createrAction(FETCH_COURSE_SEARCH, JSON.parse(courseSearch)))
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        const display = this.state.opacity;
        return (
            <Fragment>
                <form className="w-full max-w-lg relative" onSubmit={this._handleOnSubmit}>
                    <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-sm text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Bạn tìm gì cho hôm nay ?" aria-label="Full name" name='keyword' onChange={this._handleOnChange} value={this.state.value} onKeyUp={this._handleValue} autoComplete='off' />
                        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                            Tìm kiếm </button>
                    </div>
                </form>
                <div className='courseSearch absolute bg-teal-500' style={{ display: `${display}` }}>
                <div className='p-2 text-gray-900 font-bold text-sm uppercase'>
                RESULT FOR KEYWORD: {this.state.value}
                </div>
                    {
                        this.props.courseSearch.map((item, index) => {
                            return (
                                <div className="max-w-sm h-24 w-full lg:max-w-full lg:flex p-2 border border-red-500" key={index}>
                                    <div className="w-1/4 h-8 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden " style={{ backgroundImage: `url(${item.hinhAnh})`,backgroundPosition: 'center' }} title={item.tenKhoaHoc}>
                                    </div>
                                    <div className="w-full border-r border-b border-l bg-white rounded-b lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                        <div className="mb-8">
                                            <div className="text-gray-900 font-bold text-sm mb-2 uppercase">{item.tenKhoaHoc}</div>
                                            <p className="text-gray-700 text-xs courseDetail">{item.moTa}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    courseSearch: state.course.courseSearch
})


export default connect(mapStateToProps)(Search);