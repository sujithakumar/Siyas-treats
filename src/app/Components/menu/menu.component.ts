import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  interestFormGroup: FormGroup | undefined;
  interests: any;
  selected: any;

  constructor(
    public menuService: MenuService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
  
}
}
