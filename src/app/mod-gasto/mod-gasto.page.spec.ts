import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModGastoPage } from './mod-gasto.page';

describe('ModGastoPage', () => {
  let component: ModGastoPage;
  let fixture: ComponentFixture<ModGastoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModGastoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
