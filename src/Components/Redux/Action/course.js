//async action
import { createrAction } from '.';
import { FETCH_COURSE, FETCH_COURSE_DETAIL, FETCH_CATEGORY, FETCH_CATEGORY_DETAIL, FETCH_COURSE_SEARCH } from './type';
import { courseServices } from '../../Servieces';

export const fetchCourse = () => {
    return (dispatch) => {
        courseServices.fetchCourse()
            .then((res) => {
                dispatch(createrAction(FETCH_COURSE, res.data))
            }).catch((err) => {
                console.log(err);
            })
    }
}
export const fetchCourseDetail = (id) => {
    return (dispatch) => {
        courseServices.fetchCourseDetail(id)
            .then(res => {
                dispatch(
                    createrAction(FETCH_COURSE_DETAIL, res.data)
                )
            }).catch(err => {
                console.log(err)
            })
    }
}
export const fetchCategory = () => {
    return (dispatch) => {
        courseServices.fetchCategory()
            .then(res => {
                dispatch(
                    createrAction(FETCH_CATEGORY, res.data)
                )
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const fetchCategoryDetail = (name) => {
    return (dispatch) => {
        courseServices.fetchCategoryDetail(name)
            .then(res => {
                dispatch(
                    createrAction(FETCH_CATEGORY_DETAIL, res.data)
                )
            })
            .catch(err => {
                console.log(err);

            })
    }
}
export const fetchCourseSearch = (keyword) => {
    return (dispatch) => {
        courseServices.fetchCourseSearch(keyword)
            .then(res => {
                dispatch(
                    createrAction(FETCH_COURSE_SEARCH, res.data)
                )
            })
            .catch(err => {
                console.log(err);
            })
    }
}