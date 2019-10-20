import React from 'react';
import { render } from 'enzyme';
import Main from '../main';
it('Render Main', () => {
	const wrapper = render(<Main />);
	expect(wrapper).toMatchSnapshot();
});
