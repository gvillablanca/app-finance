import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModProdPage } from './mod-prod.page';

describe('ModProdPage', () => {
  let component: ModProdPage;
  let fixture: ComponentFixture<ModProdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModProdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
