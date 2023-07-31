import { Action } from '@ngrx/store';
import { Menu } from '../Models/menu.model';

export enum ActionTypes {
    Add = '[Menu] Add to cart',
    Remove = '[Menu] Remove from cart',
    LoadItems = '[Menus] Load items from server',
    LoadSuccess = '[Menus] Load success'
}

export class AddToCart implements Action {
    readonly type = ActionTypes.Add;

    constructor(public payload: Menu[]) { }
}

export class GetItems implements Action {
    readonly type = ActionTypes.LoadItems;
}

export class RemoveFromCart implements Action {
    readonly type = ActionTypes.Remove;

    constructor(public payload: Menu[]) { }
}

export class LoadItems implements Action {
    readonly type = ActionTypes.LoadSuccess;

    constructor(public payload: Menu[]) { }
}

export type ActionsUnion = AddToCart | RemoveFromCart | LoadItems | GetItems; 