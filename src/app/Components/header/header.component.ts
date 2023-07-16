import { Component } from '@angular/core';
import { BreakpointService } from 'src/app/Services/breakpoint.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isSmallDevice = false; // mobile/tablet
  
  constructor(bs: BreakpointService){
    this.isSmallDevice = bs.getIsSmallDevice();;
  }
}
