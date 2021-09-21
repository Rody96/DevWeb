import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursCyclotronComponent } from './parcours-cyclotron.component';

describe('ParcoursCyclotronComponent', () => {
  let component: ParcoursCyclotronComponent;
  let fixture: ComponentFixture<ParcoursCyclotronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcoursCyclotronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursCyclotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
