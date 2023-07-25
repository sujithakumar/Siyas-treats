import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MENU_JSON_URL } from 'src/app/Helpers/urls';
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
  subCatItems: any = [];

  constructor(private jsonReader: JsonFileReaderService, private menuService: MenuService) {

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
    let x :any;
    this.categories = this.menuService.getCategories(inp);
    this.categories.forEach((_element: any) => {
      this.subcat = this.getSubCategories(_element)[0].subCat;
      this.getSubCatItems();
    });

  }
  
  getSubCategories(inp: any) {
    return this.menuService.getSubCategories(inp, this.rawResponse);
  }

  getSubCatItems(){
    this.subcat.forEach((element: any) => {
      element.items.forEach((el: any) => {
        this.subCatItems.push(el)
      });
    });
  }

  getFilters(filters : string[]){
    console.log(filters);
  }


}
