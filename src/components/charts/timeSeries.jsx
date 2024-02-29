import React from 'react'
import { Link } from 'react-router-dom';
import ComponentWithNavbar from '../hocs/componentWithNavbar/componentWithNavbar';
import Inital from '../../partials/timeSeries/inital';

const TimeSeries = () => {
    const WrappingComp = ComponentWithNavbar(Inital);

    return (<WrappingComp />)
}

export default TimeSeries;