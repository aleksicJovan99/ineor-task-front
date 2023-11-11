import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorListingComponent } from './director-listing.component';

describe('DirectorListingComponent', () => {
  let component: DirectorListingComponent;
  let fixture: ComponentFixture<DirectorListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
