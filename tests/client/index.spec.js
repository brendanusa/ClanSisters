import React from 'react';
import Home from '../../client/src/pageComponents/HomePage.jsx';


describe('Home item', () => {
  const wrapper = shallow(<Home />);
  it('should break', () => {
    expect(wrapper.type()).to.eql('li');
  });
});