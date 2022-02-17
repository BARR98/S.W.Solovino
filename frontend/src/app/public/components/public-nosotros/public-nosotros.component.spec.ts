import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicNosotrosComponent } from './public-nosotros.component';

describe('PublicNosotrosComponent', () => {
  let component: PublicNosotrosComponent;
  let fixture: ComponentFixture<PublicNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicNosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
