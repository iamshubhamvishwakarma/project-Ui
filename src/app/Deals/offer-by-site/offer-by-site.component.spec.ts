import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferBySiteComponent } from './offer-by-site.component';

describe('OfferBySiteComponent', () => {
  let component: OfferBySiteComponent;
  let fixture: ComponentFixture<OfferBySiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferBySiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferBySiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
