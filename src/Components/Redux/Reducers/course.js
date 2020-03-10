let initState = {
    courses: [],
    courseDetail: {},
    category: [],
    categoryDetail: [],
    courseSearch: [],
    isLoading: true,
}
const CourseReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_COURSE':
            state.courses = action.payload;
            return { ...state };
        case "FETCH_COURSE_SEARCH":
            state.courseSearch = action.payload;
            return { ...state };
        case "FETCH_COURSE_DETAIL":
            state.courseDetail = action.payload;
            return { ...state, isLoading: false };
        case "FETCH_CATEGORY":
            state.category = action.payload;
            return { ...state };
        case "FETCH_CATEGORY_DETAIL":
            state.categoryDetail = action.payload;
            return { ...state }
        default:
            return state;
    }
}
export default CourseReducer;