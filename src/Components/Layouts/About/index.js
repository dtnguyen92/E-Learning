import React, { Component } from 'react';
import '../../Layouts/About/about.scss';
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }
    }
    _handleOnClick = () => {
        this.setState({
            display: true
        })
        document.getElementById('myPlay').style.display = 'none';
    }
    render() {
        return (
            <div className='flex container my-8 justify-between' id='about'>
                <div className='relative'>
                    {this.state.display ? <iframe className='z-4' width="560" height="315" src="https://www.youtube.com/embed/QFIhEmOd6No?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='About E-Learning'></iframe> :
                        <img src='../adorable-young-girl-woman-library_23-2148464414.jpg' alt='About E-Learning' />}
                </div>
                <div className='absolute'>
                    <button id='myPlay' onClick={this._handleOnClick}><i className="PlayVideo absolute fa fa-play-circle text-white text-6xl" aria-hidden="true"></i></button>
                </div>
                <div className='container w-3/5 ml-16 pr-32'>
                    <div className='font-bold text-4xl text-left capitalize mt-16 pr-32'>Transform Your Life Through Learning</div>
                    <span className='text-lg text-left mt-16'>Dang Trung Nguyen began his career in software development by taking courses on E-Learning Academy. And you, what are you going to achieve?</span>
                </div>

            </div>
        );
    }
}

export default About;