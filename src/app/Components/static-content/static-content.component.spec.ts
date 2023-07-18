import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticContentComponent } from './static-content.component';

describe('StaticContentComponent', () => {
  let component: StaticContentComponent;
  let fixture: ComponentFixture<StaticContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticContentComponent]
    });
    fixture = TestBed.createComponent(StaticContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
