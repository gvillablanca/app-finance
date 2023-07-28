import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModNotasPage } from './mod-notas.page';

describe('ModNotasPage', () => {
  let component: ModNotasPage;
  let fixture: ComponentFixture<ModNotasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModNotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
