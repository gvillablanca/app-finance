import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNotasPage } from './add-notas.page';

describe('AddNotasPage', () => {
  let component: AddNotasPage;
  let fixture: ComponentFixture<AddNotasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddNotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
