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
  all = "ALL";
  none = "NONE";
  is_None_ChipDisable: boolean = false;
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
  }


  getFilters(inp: any) {
    this.chips = this.menuService.getfilters(inp);
  }

  selectedChip(selectedItem: string) {

    // //if "ALL" chip selected
    // if (selectedItem.toUpperCase() == this.all) {
    //   this.chips = this.saveChips;
    //   return;
    // }

    //if "NONE" chip selected
    if (selectedItem.toUpperCase() == this.none) {
      this.chips = [];
      return;
    }

    //find if the item is already in the array
    const index = this.selectedChips.indexOf(selectedItem);
    if (index >= 0) {
      //item present in array --> remove
      this.selectedChips.splice(index, 1);
    } else {
      //item not present in array --> add
      this.selectedChips.push(selectedItem);
    }
    this.is_None_ChipDisable = false;
    if (this.selectedChips.length > 0) {
      this.is_None_ChipDisable = true;
      this.chips = [];
      this.chips = [...this.selectedChips];
    }

    this.emitSelectedChips()
  }

  emitSelectedChips() {
    this.selectedFiltersToEmit.emit(this.selectedChips);
  }


}
