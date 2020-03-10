import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { userServices } from '../../Servieces/index';
import '../../Screens/SignupScreen/signup.scss';


const SignUpSchema = yup.object().shape({
    taiKhoan: yup.string().required('* Vui lòng không để trống'),
    matKhau: yup.string().required('* Vui lòng không để trống'),
    hoTen: yup.string().required('* Vui lòng không để trống'),
    email: yup.string().required('* Vui lòng không để trống').email('* Email không hợp lệ'),
    soDT: yup.string().required('* Vui lòng không để trống').matches(/^[0-9]+$/),
})
export default class SignupScreen extends Component {
    _handlerSubmit = values => {
        userServices.signUp(values)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        console.log(values)
    }
    render() {
        return (
            <div className='signUp w-1/3 text-center mx-auto bg-teal-500 shadow-md rounded px-8 pb-8 mb-4'>
                <span className='font-bold text-4xl text-white mb-4 display-4 text-center'>Sign Up</span>
                <Formik
                    initialValues={
                        {
                            taiKhoan: '',
                            matKhau: '',
                            hoTen: '',
                            soDT: '',
                            maNhom: 'GP01',
                            email: '',
                        }
                    }
                    validationSchema={SignUpSchema}
                    onSubmit={this._handlerSubmit}
                    render={(formikProps) => (
                        <Form>
                            <div className='form-group'>
                                <label className='font-bold'>Tài khoản: </label>
                                <Field className='form-control text-sm' type='text' name='taiKhoan' placeholder="Tài khoản" onChange={formikProps.handleChange} />
                                <ErrorMessage name='taiKhoan' />
                            </div>
                            <div className='form-group'>
                                <label className='font-bold'>Mật khẩu: </label>
                                <Field className='form-control text-sm' type='password' name='matKhau' onChange={formikProps.handleChange} placeholder="Mật khẩu" />
                                <ErrorMessage name='matKhau'  />
                            </div>
                            <div className='form-group'>
                                <label className='font-bold'>Họ tên: </label>
                                <Field className='form-control text-sm' type='text' name='hoTen' onChange={formikProps.handleChange} placeholder="Họ tên" />
                                <ErrorMessage name='hoTen' />
                            </div>
                            <div className='form-group'>
                                <label className='font-bold'>Email: </label>
                                <Field className='form-control text-sm' type='email' name='email' onChange={formikProps.handleChange} placeholder="Email" />
                                <ErrorMessage name='email' />
                            </div>
                            <div className='form-group'>
                                <label className='font-bold'>Số điện thoại: </label>
                                <Field className='form-control text-sm' type='text' name='soDT' onChange={formikProps.handleChange} placeholder="Số điện thoại" />
                                <ErrorMessage name='soDT' />
                            </div>
                            <div className='form-group'>
                                <label className='font-bold'>Mã nhóm:</label>
                                <Field className='form-control text-sm' name='maNhom' component='select' onChange={formikProps.handleChange}>
                                    <option>GP01</option>
                                    <option>GP02</option>
                                    <option>GP03</option>
                                    <option>GP04</option>
                                    <option>GP05</option>
                                    <option>GP06</option>
                                    <option>GP07</option>
                                    <option>GP08</option>
                                    <option>GP09</option>
                                    <option>GP10</option>
                                </Field>
                            </div>
                            <div className='text-center'>
                                <button className='btn bg-red-500' type='submit'>Submit</button>
                            </div>
                        </Form>
                    )} />
            </div>
        )
    }
}
