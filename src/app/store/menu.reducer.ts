import { ActionsUnion, ActionTypes } from './menu.actions';
import { Menu } from '../Models/menu.model';
import { Action } from '@ngrx/store';

export const initialState = {
    items: [],
    cart: []
};

export function MenuReducer(state:Menu[],action: ActionsUnion) {
    switch (action.type) {
      case ActionTypes.LoadSuccess:
        return {
          ...state,
          items: [...action.payload]
        };
  
      case ActionTypes.Add:
        return {
          ...state,
          cart: [...state, action.payload]
        };
  
    //   case ActionTypes.Remove:
    //     return {
    //       ...state,
    //       cart: [...state.cart.filter(item => item.name !== action.payload.name)]
    //     };
  
      default:
        return state;
    }
  }