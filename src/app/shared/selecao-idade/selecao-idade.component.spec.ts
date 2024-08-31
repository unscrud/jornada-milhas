import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoIdadeComponent } from './selecao-idade.component';

describe('SelecaoIdadeComponent', () => {
  let component: SelecaoIdadeComponent;
  let fixture: ComponentFixture<SelecaoIdadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelecaoIdadeComponent]
    });
    fixture = TestBed.createComponent(SelecaoIdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
