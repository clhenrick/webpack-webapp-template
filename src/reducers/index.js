import { combineReducers } from 'redux';
import {createResponsiveStateReducer} from 'redux-responsive';

import { breakpoints } from '../styles/variables.json';

import exampleReducer from './example_reducer';

// custom breakpoints for redux-responsive store
const browser = createResponsiveStateReducer({
  extraSmall: breakpoints.width.xsmall,
  small: breakpoints.width.small,
  medium: breakpoints.width.medium,
  large: breakpoints.width.large
});

const rootReducer = combineReducers({
  exampleReducer,
  browser
});

export default rootReducer;
