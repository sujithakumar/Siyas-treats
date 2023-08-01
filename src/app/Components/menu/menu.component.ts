import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
import { MatCheckboxChange } from '@angular/material/checkbox';
import * as e from 'express';
import { filter } from 'rxjs';
import { MENU_JSON_URL } from 'src/app/Helpers/urls';
import { Items, subCatItems } from 'src/app/Models/menu.model';
import { JsonFileReaderService } from 'src/app/Services/json-file-reader.service';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  fileURL = MENU_JSON_URL;
  rawResponse: any = {};
  categories: any = []
  subcat: any = [];
  subCatItems: subCatItems[] = [];
  isFilter: boolean = false;
  private saveSubCatItems: subCatItems[] = [];
  private selectedMenu:string ='all';
  filters : string[] =[];

  constructor(private jsonReader: JsonFileReaderService, private menuService: MenuService) {
    this.menuService.getSelectedMenuItem().subscribe(x=>{ 
      this.selectedMenu = x;
    })
  }

  ngOnInit() {
    this.readJson();
  }

  readJson() {
    this.jsonReader.getJSON(this.fileURL).subscribe(value => {
      this.rawResponse = value.items;
      this.getCategories(value.items);
    });
  }

  getCategories(inp: any) {
    let y: any[] = [];
    let x: any;
    this.categories = this.menuService.getCategories(inp);
    if (this.categories.length > 0) {
      this.categories.forEach((_element: any) => {
        this.getSubCategoriesList(_element);
      });
    }
  }

  getSubCategoriesList(inp: any) {
    this.subcat = this.getSubCategories(inp)[0].subCat;
    this.getSubCatItems();
  }

  getSubCategories(inp: any) {
    return this.menuService.getSubCategories(inp, this.rawResponse);
  }

  getSubCatItems() {
    this.subcat.forEach((element: any) => {
      element.items.forEach((el: any) => {
        this.subCatItems.push(el)
      });
    });
    if (!this.isFilter) {
      this.saveSubCatItems = this.subCatItems;
    }

  }

  getFilters(filters: string[]) {
    let temp: subCatItems[];
    this.isFilter = true;

    if (filters.length == 0) {
      if(this.selectedMenu.toLowerCase() == 'all'){
        this.subCatItems = this.saveSubCatItems;
        this.isFilter = false;
        this.filters =[];
        return;
      }else{
        filters.push(this.selectedMenu);
      }
    }

    this.subCatItems = [];
    filters = [...new Set([...filters ,...this.filters])];

    if (filters.length == 1) {
      if(filters[0].toLowerCase() == 'all'){
        this.subCatItems = this.saveSubCatItems;
        this.isFilter = false;
        this.filters =[];
        return;
      }else{
        this.subCatItems = this.saveSubCatItems.filter((ele: subCatItems) => ele.identifier.includes(filters[0]));
        return;
      }
    }

    if (filters.length > 1) {
      this.subCatItems = this.saveSubCatItems.filter(element => {
        return filters.every(i => element.identifier.includes(i));
      });
      return;
    };
  }

  fiterCategory(categoryName: string) {
    this.isFilter = true;
    this.menuService.setSelectedMenuItem(categoryName);
    this.subCatItems = this.saveSubCatItems;
    this.filters = [];
    this.filters.push(categoryName);
    this.getFilters(this.filters);
  }

}
