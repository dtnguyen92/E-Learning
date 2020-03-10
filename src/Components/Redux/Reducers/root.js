import { combineReducers } from 'redux';
import CourseReducer from './course';
import UserReducer from './user';
import CartReduce from './cart';

const RootReducer = combineReducers({
    course: CourseReducer,
    user: UserReducer,
    cart: CartReduce
});
export default RootReducer;