import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetroalimentacionPage } from './retroalimentacion.page';

describe('RetroalimentacionPage', () => {
  let component: RetroalimentacionPage;
  let fixture: ComponentFixture<RetroalimentacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroalimentacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
