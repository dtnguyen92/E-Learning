import React, { Component } from 'react';
import './coursescss.scss';
class ButtonLeftCarousel extends Component {
    render() {
        return (
            <>
            <button id='goleft' className="bg-red-600 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={this.props.prevProperty}><i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
    </button>        
            </>
        );
    }
}

export default ButtonLeftCarousel;