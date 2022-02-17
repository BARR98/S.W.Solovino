import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAdopcionesComponent } from './public-adopciones.component';

describe('PublicAdopcionesComponent', () => {
  let component: PublicAdopcionesComponent;
  let fixture: ComponentFixture<PublicAdopcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicAdopcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAdopcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
