import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Add from '../../../src/components/pages/add';

const mockStore = configureStore();

const initialState = {
    calculator: {
        values: [],
        result: null
    }
};

const store = mockStore(initialState);

describe('<Add />', () => {
    test('renders <Add /> without breaking', () => {
        const wrapper = shallow(<Add store={store} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
  