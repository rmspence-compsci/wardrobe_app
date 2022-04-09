import React from 'react';
import renderer from 'react-test-renderer';
import {Platform} from 'react-native';
import * as getOS from '../helpers/getOS';

import App from '../App';
import Recommended from '../screens/recommended';
import AddClothes from '../screens/addClothes';
import Calendar from '../screens/calendar';
import SavedOutfits from '../screens/savedOutfits';
import Weather from '../screens/weather';




describe('Snapshots', () => {
  beforeEach(() => {
    getOS.getOS = jest.fn().mockImplementationOnce(() => 'android');
  });
  it('App snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Recommended snapshot', () => {
    const tree = renderer.create(<Recommended />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('AddClothes snapshot', () => {
    const tree = renderer.create(<AddClothes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Calendar snapshot', () => {
    const tree = renderer.create(<Calendar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('SavedOutfits snapshot', () => {
    const tree = renderer.create(<SavedOutfits />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Weather snapshot', () => {
    const tree = renderer.create(<Weather />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});