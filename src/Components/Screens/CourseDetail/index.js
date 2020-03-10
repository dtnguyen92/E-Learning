import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCourseDetail } from '../../Redux/Action/course';


class CourseDetailScreen extends Component {
        render() {
            const { isLoading } = this.props;
            console.log(isLoading);
            return (
                <>
                    {
                        isLoading === true ? <div className='loading'>
                            <img src='../rocket-1.1s-128px.png' className='ld ld-tremble rocket' alt='rocket' />
                            <img src='../rocket-1.1s-128px.png' className='ld ld-tremble rocket2' alt='rocket' />
                            <img src='../rocket-1.1s-128px.png' className='ld ld-tremble rocket3' alt='rocket' />
                        </div> :
                            <div className='course col-3'>
                                <img src={this.props.courseDetail.hinhAnh} style={{ width: "100%", height: 200 }} alt={this.props.courseDetail.tenKhoaHoc} />
                                <p className='text-sm'>{this.props.courseDetail.tenKhoaHoc}</p>
                            </div>
                    }
                </>
            )
        }
        componentDidMount() {
            this.props.dispatch(fetchCourseDetail(this.props.match.params.id))
        }
    }
const mapStateToProps = state => ({
    courseDetail: state.course.courseDetail,
    isLoading: state.course.isLoading
})
export default connect(mapStateToProps)(CourseDetailScreen);