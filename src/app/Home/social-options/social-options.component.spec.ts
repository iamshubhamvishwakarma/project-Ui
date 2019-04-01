import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialOptionsComponent } from './social-options.component';

describe('SocialOptionsComponent', () => {
  let component: SocialOptionsComponent;
  let fixture: ComponentFixture<SocialOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
