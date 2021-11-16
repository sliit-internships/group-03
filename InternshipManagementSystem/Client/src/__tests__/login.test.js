import React from 'react';
import {shallow} from 'enzyme'
import LoginScreen from "../components/loginscreens/LoginScreen";

describe('LoginScreen Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<LoginScreen/>).find('form.login').exists()).toBe(true)
    })
})
it('renders a email input', () => {
    expect(shallow(<LoginScreen />).find('#email').length).toEqual(1)
})

it('renders a password input', () => {
    expect(shallow(<LoginScreen />).find('#password').length).toEqual(1)
})

describe('Email input', () => {

    it('should respond to change event and change the state of the Login Component', () => {

        const wrapper = shallow(<LoginScreen />);
        wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});

        expect(wrapper.state('email')).toEqual('blah@gmail.com');
    })
})

describe('Password input', () => {

    it('should respond to change event and change the state of the Login Component', () => {

        const wrapper = shallow(<LoginScreen/>);
        wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}});

        expect(wrapper.state('password')).toEqual('cats');
    })
})

