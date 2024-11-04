import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProximasClasesPage } from './proximas-clases.page';

describe('ProximasClasesPage', () => {
  let component: ProximasClasesPage;
  let fixture: ComponentFixture<ProximasClasesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximasClasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
