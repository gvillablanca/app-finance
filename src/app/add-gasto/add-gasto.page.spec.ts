import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGastoPage } from './add-gasto.page';

describe('AddGastoPage', () => {
  let component: AddGastoPage;
  let fixture: ComponentFixture<AddGastoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddGastoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
