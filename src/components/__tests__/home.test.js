import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../home';

describe('render profile View Container', () => {
    const wrapper = shallow(<HomePage />);
    it('renders profile component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
