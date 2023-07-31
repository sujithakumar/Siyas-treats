import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  showAdd = true;
  showRemove = false;
  private _subCat: any;
  get subCat() { return this._subCat };
  @Input() set subCat(val: any) {
    if (val) {
      this._subCat = val;
      this.setAddRemoveIcon(val.quantity);
    }
  };

 setAddRemoveIcon(qty: number) {

    if (qty === 0) {
      this.showAdd = true;
      this.showRemove = false;
      return;
    }

    if (qty == 5) {
      this.showAdd = false;
      this.showRemove = true;
      return;
    }

    if (qty > 0 && qty < 5) {
      this.showAdd = true;
      this.showRemove = true;
      return;
    }

  }

  addToCart(item: any) {
    if(item.quantity >= 5 ){
      return;
    }
    item.quantity = item.quantity + 1;
    this.subCat = item;
    this.setAddRemoveIcon(item.quantity);
  }

  removeFromCart(item: any) {
    if(item.quantity <= 0 ){
      return;
    }
    item.quantity = item.quantity - 1;
    this.subCat = item;
    this.setAddRemoveIcon(item.quantity)
  }

}
