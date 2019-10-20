import React from 'react';
import { render } from 'enzyme';
import LoginContainer from '../';
import configureStore from '../../../stores';
const store = configureStore();
it('Render Login Container', () => {
	const wrapper = render(<LoginContainer store={store} />);
	expect(wrapper).toMatchSnapshot();
});
