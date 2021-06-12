import { TODO_LIST_DATA, TODO_EDIT } from './actionType'


const initialState = {

    todoList:'',
    todoEditData:""
        
    
  }
  
  // Use the initialState as a default value
  export default function appReducer(state = initialState, action) {
    
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type)
    
    {
        
        case TODO_LIST_DATA:
            return {
                ...state,
                todoList: action.payload
            };

            case TODO_EDIT:
              return {
                  ...state,
                  todoEditData: action.payload
              };
      // Do something here based on the different types of actions
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }