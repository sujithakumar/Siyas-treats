import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {

  chips: any[] = [];
  selectedChips: any[] = [];
  isAllSelected = false;
 
  @Output() selectedFiltersToEmit = new EventEmitter<string[]>();

  private _subCatItems: any;
  get subCatItems() { return this._subCatItems };
  @Input() set subCatItems(val: any) {
    if (val) {
      this._subCatItems = val;
      this.getFilters(this._subCatItems);
    }
  };

  constructor(private menuService: MenuService) {
  }


  getFilters(inp: any) {
    this.chips = this.menuService.getfilters(inp);
  }

  selectedChip(selectedItem: string) {
    //find if the item is already in the array
    const index = this.selectedChips.indexOf(selectedItem);
    if (index >= 0) {
      //item present in array --> remove
      this.selectedChips.splice(index, 1);
    } else {
      //item not present in array --> add
      this.selectedChips.push(selectedItem);
    }
    
    this.emitSelectedChips()
  }

  emitSelectedChips(){
    this.selectedFiltersToEmit.emit(this.selectedChips);
  }

  
}
