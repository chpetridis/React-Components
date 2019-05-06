import * as actionTypes from '../actions';

const initialState = {
  inputTaskTitle: '',
  inputTask: '',
  inputTaskDate: ''
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.INPUT:

      switch (action.eventName) {
        case 'inputTitle':
          return {
            ...state,
            inputTaskTitle: action.eventValue
          }
        case 'taskContent':
          return {
            ...state,
            inputTask: action.eventValue
          }
        case 'inputDate':
          return {
            ...state,
            inputTaskDate: action.eventValue
          }
        default:
          return state;
      }

    case actionTypes.DISCARD_INPUTS:
      return {
        ...state,
        inputTaskTitle: '',
        inputTask: '',
        inputTaskDate: ''
      }
    default:
      return state;
  }
};

export default reducer;
