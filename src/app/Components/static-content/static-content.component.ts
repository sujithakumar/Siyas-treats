import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BreakpointService } from 'src/app/Services/breakpoint.service';


@Component({
  selector: 'app-static-content',
  templateUrl: './static-content.component.html',
  styleUrls: ['./static-content.component.scss']
})
export class StaticContentComponent {

  sectionToShow = 'error';
  height = "500px";
  width = "500px";

  constructor(private route: ActivatedRoute, private title: Title, private bs: BreakpointService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.sectionToShow = params['showContent'];
        this.setTitle();
        this.getHeightAndWidth();
      }
    )
  }

  setTitle() {
    switch (this.sectionToShow) {
      case 'about':
        this.title.setTitle("About Us | Siya's Treats");
        break;
      case 'contact':
        this.title.setTitle("Contact Us | Siya's Treats");
        break;
      case 'privacy':
        this.title.setTitle("Privacy Policy | Siya's Treats");
        break;
      case 'terms':
        this.title.setTitle("Terms of Service | Siya's Treats");
        break;
      default:
        this.title.setTitle("404-Page Not Found | Siya's Treats");
        break;
    }

  }

  getHeightAndWidth() {
    let ht=0;
    let wd = 0;
    let smallDevice = this.bs.getIsSmallDevice();
    ht= this.bs.screenHeight;
    wd = this.bs.screenWidth;
    if(smallDevice){
      ht= ht - 100;
      wd = wd -40;
    }else{
      ht= ht;
      wd = wd - 100;
    }
    this.height = ht.toString() + 'px';
    this.width = wd.toString() + 'px';
  }
}
