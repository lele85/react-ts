import { shallow } from 'enzyme';
import React from 'react';
import { bindActionCreators } from 'redux';

import { counterDec, counterInc } from '../actions/CounterActions';
import { Counter } from './Counter';

it("renders correctly", () => {
    const {increment,decrement} = bindActionCreators({
        increment: counterInc,
        decrement: counterDec
    }, () => {});

    const result = shallow(
        <Counter
            counter={0}
            increment={increment}
            decrement={decrement}
        />
    );
    expect(result).toMatchSnapshot();
});