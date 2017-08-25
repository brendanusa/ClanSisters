import React from 'react';
import Home from '../../client/src/pageComponents/HomePage.jsx'
import User from '../../client/src/pageComponents/UserPage.jsx'
import Clan from '../../client/src/pageComponents/ClanPage.jsx'
import Forum from '../../client/src/pageComponents/ForumPage.jsx'
import App from '../../client/src/index.jsx';
import Login from '../../client/src/login/index.jsx';
import NavBar from '../../client/src/components/Nav.jsx';
import { shallow } from 'enzyme';

/*
Notes on enzyme testing. If you want to test a component within 
another component, you need to import both of them. 



*/


describe('Index Page', () => {
  const wrapper = shallow(<App />);

  it('should contain the Home page', () => {
    expect(wrapper.contains(<Home />)).to.equal(true);
  });

  it('Should contain the Login page', () => {
    expect(wrapper.contains(<Login />)).to.equal(true);
  });

  it('Should contain the NavBar', () => {
    expect(wrapper.contains(<NavBar />)).to.equal(true);
  });

  it('Should contain the user page', () => {
    expect(wrapper.contains(<User />)).to.equal(true);
  });

  it('Should contain a Clan page', () => {
    expect(wrapper.contains(<Clan />)).to.equal(true);
  });

  it('Should contain the Forum page', () => {
    expect(wrapper.contains(<Forum />)).to.equal(true);
  });
  
});
