import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Result from '../../../src/components/pages/result';

const mockStore = configureStore();

const initialState = {
    calculator: {
        values: [1, 2, 3],
        result: 6
    }
};

const store = mockStore(initialState);

describe('<Result />', () => {
    test('renders <Result /> without breaking', () => {
        const wrapper = shallow(<Result store={store} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
  