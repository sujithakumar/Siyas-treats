import { Injectable } from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {BehaviorSubject} from 'rxjs';

export enum Breakpoints {
  'XS' = 'xs',
  'SM' = 'sm',
  'MD' = 'md',
  'LG' = 'lg',
  'XL' = 'xl'
}

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  constructor(private breakpointObserver: BreakpointObserver) {
    this.initObservers();
  }
 
  //Gets the screen's width
  get screenWidth() {
    return window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
  }

   //Gets the screen's height
  get screenHeight() {
    return window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
  }

  xsBreakpoint = ['(max-width:575.98px)'];
  smBreakpoint = ['(min-width:576px) and (max-width:767.98px)'];
  mdBreakpoint = ['(min-width:768px) and (max-width:991.98px)'];
  lgBreakpoint = ['(min-width:992px) and (max-width:1199.98px)'];
  xlBreakpoint = '(min-width:1200px)';

  public screenSizeObserver = new BehaviorSubject<Breakpoints[]>([Breakpoints.XS]);

  private initObservers() {
    this.breakpointObserver.observe(this.xsBreakpoint).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.screenSizeObserver.next([Breakpoints.XS]);
      }
    });
    this.breakpointObserver.observe(this.smBreakpoint).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.screenSizeObserver.next([Breakpoints.SM]);
      }
    });
    this.breakpointObserver.observe(this.mdBreakpoint).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.screenSizeObserver.next([Breakpoints.MD]);
      }
    });
    this.breakpointObserver.observe(this.lgBreakpoint).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.screenSizeObserver.next([Breakpoints.LG]);
      }
    });
    this.breakpointObserver.observe(this.xlBreakpoint).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.screenSizeObserver.next([Breakpoints.XL]);
      }
    });
  }

  getIsSmallDevice(){
    let detectedDevice;
    let state = false;
    this.screenSizeObserver.subscribe(value => {
      detectedDevice = value;
      if(detectedDevice.includes(Breakpoints.XS) || detectedDevice.includes(Breakpoints.SM) || detectedDevice.includes(Breakpoints.MD)){
        state = true;
      }else{
        state =  false;
      }
    }); 
    return state;  
  }

  getIsMobile(){
    let detectedDevice ;
    let state = false;
    this.screenSizeObserver.subscribe(value => {
      detectedDevice = value;
      if(detectedDevice.includes(Breakpoints.XS) || detectedDevice.includes(Breakpoints.SM)){
        state = true;
      }else{
        state =  false;
      }
    }); 
    return state; 
  }

  getIsTablet(){
    let detectedDevice ;
    let state = false;
    this.screenSizeObserver.subscribe(value => {
      detectedDevice = value;
      if(detectedDevice.includes(Breakpoints.MD)){
        state = true;
      }else{
        state =  false;
      }
    }); 
    return state; 
  }

  getIsDesktop(){
    let detectedDevice ;
    let state = false;
    this.screenSizeObserver.subscribe(value => {
      detectedDevice = value;
      if(detectedDevice.includes(Breakpoints.LG) || detectedDevice.includes(Breakpoints.XL)){
        state = true;
      }else{
        state =  false;
      }
    }); 
    return state; 
  }
}
