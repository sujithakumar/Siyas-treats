import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {

  chips: string[] = [];
  selectedChips: any[] = [];
  clearAll = "CLEAR ALL";
  saveChips: string[] = [];

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
    this.menuService.getSelectedMenuItem().subscribe(x => {
      this.selectedChips = [];
    })
  }


  getFilters(inp: any) {
    this.chips = this.menuService.getfilters(inp);
    this.saveChips = this.chips;
  }

  selectedChip(selectedItem: string) {

    let index: number = 0;
    //if "Clear All" chip selected
    if (selectedItem.toUpperCase() == this.clearAll) {
      this.selectedChips = [];
    } else {
      //find if the item is already in the array
      index = this.selectedChips.indexOf(selectedItem);
      if (index >= 0) {
        //item present in array --> remove
        this.selectedChips.splice(index, 1);
      } else {
        //item not present in array --> add
        this.selectedChips.push(selectedItem);
      }

    }

    if (this.selectedChips.length > 0) {
      this.chips = [];
      this.chips = [...this.selectedChips];
    }

    this.emitSelectedChips()
  }

  emitSelectedChips() {
    this.selectedFiltersToEmit.emit(this.selectedChips);
  }


}
