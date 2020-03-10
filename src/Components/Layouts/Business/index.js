import React, { Component } from 'react';
import '../../Layouts/Business/business.scss';
class Business extends Component {
    render() {
        return (
            <div className='relative flex bg-teal-500 my-32 h-64'>
                <div className='container w-3/5 ml-16 pr-32'>
                    <div className='font-bold text-4xl text-left capitalize mt-16 pr-32'>E-Learning for Business</div>
                    <span className='text-lg text-left mt-16'>Give your team unlimited access to over 4,000 of the best courses in E-Learning.</span>
                </div>
                <div className='absoulute myBusiness'>
                    <img src='../education-background-with-funny-icons_1361-1263.jpg' alt='E-Learning for Business' className='border-2 border-teal-500' />
                </div>
            </div>
        );
    }
}

export default Business;