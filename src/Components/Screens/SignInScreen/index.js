import React, { Component } from 'react';
import { Form, Field, Formik } from 'formik'
import {connect} from 'react-redux';
import { fetchLogin} from '../../Redux/Action/user';

class SignInScreen extends Component {
    render() {
        return (
            <div className="w-full max-w-xs mx-auto mt-32">
                <Formik
                    initialValues={{
                        taiKhoan: '',
                        matKhau: ''
                    }}
                    onSubmit={(values) => (
                        this.props.dispatch(fetchLogin(values)),
                        this.props.history.push('/')
                    )}
                    render={({handleChange}) => (
                        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Username</label>
                                <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name='taiKhoan' onChange={handleChange} />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password </label>
                                <Field className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" name='matKhau' onChange={handleChange} />
                                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Sign In </button>
                                <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                                    Forgot Password? </p>
                            </div>
                        </Form>
                    )}
                />
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        credentials: state.user.user
    }
}
export default connect (mapStateToProps) (SignInScreen);