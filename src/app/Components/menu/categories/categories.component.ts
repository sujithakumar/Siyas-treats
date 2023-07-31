import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JsonFileReaderService } from 'src/app/Services/json-file-reader.service';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  private _categories: any;
  get categories() { return this._categories };
  @Input() set categories(val: string[]) {
    if (val) {
      this.mapCategoryNames(val);
    }
  };

  @Output() emitFilterCategory = new EventEmitter<string>();

  constructor(private jsonReader: JsonFileReaderService, private menuService: MenuService) { }

  mapCategoryNames(val :string[]) {
    this._categories = this.menuService.mapCategoryNames(val);
  }

  filterCategory(cat:string){
    let temp: any;
    if(cat.toLowerCase() == 'all'){
      temp = "all";
    }else{
      temp = this.menuService.getKeyByValue(cat);
    }
    this.styleSelectedMenu(cat);
    this.emitFilterCategory.emit(temp);
  }

  styleSelectedMenu(cat:string){

  }

}
