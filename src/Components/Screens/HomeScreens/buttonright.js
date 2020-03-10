import React, { Component } from 'react';
import './coursescss.scss';
class ButtonRightCarousel extends Component {
    render() {
        return (
            <>
            <button id='goright' className="bg-red-600 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={this.props.nextProperty}><i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
            </button> 
            </>
        );
    }
}

export default ButtonRightCarousel;