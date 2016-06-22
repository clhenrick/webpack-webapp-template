import { EXAMPLE_ACTION } from '../actions';

export default (state={}, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return {
        ...state,
        example: action.example
      };
  }

  return state;
};
