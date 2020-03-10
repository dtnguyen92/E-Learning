import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourse } from '../../Redux/Action/course';
import './coursescss.scss';
import CourseCarousel from './CourseCarousel';

class HomeScreens extends Component {
    render() {
        return (
            <>
                <div className='carousel'>
                    <CourseCarousel />
                </div>
            </>
        );
    }
    componentDidMount() {
        this.props.dispatch(fetchCourse());

    }
}

const mapStateToProps = state => {
    return {
        courseList: state.course.courses
    }
}
export default connect(mapStateToProps)(HomeScreens);