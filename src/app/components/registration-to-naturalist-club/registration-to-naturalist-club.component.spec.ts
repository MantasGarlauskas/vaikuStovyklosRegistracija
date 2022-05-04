import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationToNaturalistClubComponent } from './registration-to-naturalist-club.component';

describe('RegistrationToNaturalistClubComponent', () => {
  let component: RegistrationToNaturalistClubComponent;
  let fixture: ComponentFixture<RegistrationToNaturalistClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationToNaturalistClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationToNaturalistClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
