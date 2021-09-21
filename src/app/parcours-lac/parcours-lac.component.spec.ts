import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursLacComponent } from './parcours-lac.component';

describe('ParcoursLacComponent', () => {
  let component: ParcoursLacComponent;
  let fixture: ComponentFixture<ParcoursLacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcoursLacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursLacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
