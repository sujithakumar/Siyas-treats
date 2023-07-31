import { Injectable } from '@angular/core';
import { getCategoriesAsArray, getFilters, getMenuKeyByValue, getSubCategories, mapCategoryNames } from '../Helpers/menu-helper';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  selectedMenuItem = new BehaviorSubject<string>('ALL');

  constructor() { }

  getCategories(inp:any){
    return getCategoriesAsArray(inp);
  }

  mapCategoryNames(inp:string[]){
    return mapCategoryNames(inp);
  }

  getSubCategories(inp:any,data:any){
    return getSubCategories(inp,data);
  }

  getfilters(inp:any[]){
    return getFilters(inp);
  }

  getKeyByValue(value:string|number){
    return getMenuKeyByValue(value)
  }

  setSelectedMenuItem(inp:string){
    this.selectedMenuItem.next(inp);
  }

  getSelectedMenuItem(){
    return this.selectedMenuItem.asObservable();
  }
}
