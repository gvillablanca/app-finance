import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCuentaPage } from './list-cuenta.page';

describe('ListCuentaPage', () => {
  let component: ListCuentaPage;
  let fixture: ComponentFixture<ListCuentaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
