import * as actionTypes from '../actions';

const initialState = {
      todolist: [],
      itemsLoaded: false,
      taskID: 0
};

const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return {
          ...state,
          todolist: state.todolist.concat({id: state.taskID,
                                           title: action.taskTitle,
                                           text: action.taskContent,
                                           date: action.taskDate}),
          taskID: state.taskID + 1,
          itemsLoaded: true
      }
    case actionTypes.REMOVE_TASK:
      const newTodoList = [...state.todolist];
      newTodoList.splice(action.taskIndex, 1);
      return {
          ...state,
          todolist: newTodoList,
          itemsLoaded: !(action.listSize === 0)
      }
    default:
      return state;
  }
};

export default reducer;
