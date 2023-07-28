import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerProdPage } from './ver-prod.page';

describe('VerProdPage', () => {
  let component: VerProdPage;
  let fixture: ComponentFixture<VerProdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerProdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
