import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursMoulinsartComponent } from './parcours-moulinsart.component';

describe('ParcoursMoulinsartComponent', () => {
  let component: ParcoursMoulinsartComponent;
  let fixture: ComponentFixture<ParcoursMoulinsartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcoursMoulinsartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursMoulinsartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
