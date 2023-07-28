import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProdPage } from './add-prod.page';

describe('AddProdPage', () => {
  let component: AddProdPage;
  let fixture: ComponentFixture<AddProdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddProdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
