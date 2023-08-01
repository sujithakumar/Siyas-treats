import { Component } from '@angular/core';
import { BreakpointService } from 'src/app/Services/breakpoint.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isSmallDevice = false; // mobile/tablet
  isChecked = false;

  constructor(bs: BreakpointService,private router: Router) {
    this.isSmallDevice = bs.getIsSmallDevice();;
  }

  navigate(inp: string) {
    this.router.navigate( ['static'], { queryParams: { showContent: inp}});
  }

  toggleMode(toggleMode:boolean){
    if(toggleMode){
      document.body.classList.add("dark-mode");
    }else{
      document.body.classList.remove("dark-mode");
    }
  }
}
