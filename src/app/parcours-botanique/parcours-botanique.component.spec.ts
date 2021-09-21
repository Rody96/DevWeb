import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursBotaniqueComponent } from './parcours-botanique.component';

describe('ParcoursBotaniqueComponent', () => {
  let component: ParcoursBotaniqueComponent;
  let fixture: ComponentFixture<ParcoursBotaniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcoursBotaniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursBotaniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
