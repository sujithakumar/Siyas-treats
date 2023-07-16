import { Component } from '@angular/core';
import { BreakpointService } from 'src/app/Services/breakpoint.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isSmallDevice = false; // mobile/tablet
  
  constructor(bs: BreakpointService){
    this.isSmallDevice = bs.getIsSmallDevice();;
  }
}
