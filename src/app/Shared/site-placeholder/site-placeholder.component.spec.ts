import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePlaceholderComponent } from './site-placeholder.component';

describe('SitePlaceholderComponent', () => {
  let component: SitePlaceholderComponent;
  let fixture: ComponentFixture<SitePlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitePlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
