import { Injectable } from '@angular/core';
import { getCategoriesAsArray, getFilters, getSubCategories, mapCategoryNames } from '../Helpers/menu-helper';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

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
}
