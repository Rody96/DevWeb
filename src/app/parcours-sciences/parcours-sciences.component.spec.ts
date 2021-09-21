import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursSciencesComponent } from './parcours-sciences.component';

describe('ParcoursSciencesComponent', () => {
  let component: ParcoursSciencesComponent;
  let fixture: ComponentFixture<ParcoursSciencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcoursSciencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursSciencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
