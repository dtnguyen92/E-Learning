import React, { Component } from 'react';
import HomeScreens from '../HomeScreens';
import Category from '../Category';
import About from '../../Layouts/About';
import Business from '../../Layouts/Business';

class LayoutHomeScreens extends Component {
    render() {
        return (
            <>
                <HomeScreens />
                <Category />
                <Business />
                <About />
            </>
        );
    }
}

export default LayoutHomeScreens;