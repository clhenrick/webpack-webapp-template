import { combineReducers } from 'redux';
import {createResponsiveStateReducer} from 'redux-responsive';

import { breakpoints } from '../assets/data/variables.json';

// custom breakpoints for redux-responsive store
const browser = createResponsiveStateReducer({
  extraSmall: breakpoints.width.xsmall,
  small: breakpoints.width.small,
  medium: breakpoints.width.medium,
  large: breakpoints.width.large
});

const rootReducer = combineReducers({
  browser
});

export default rootReducer;
